<?php

namespace App\Http\Controllers;

use Cloudstudio\Ollama\Facades\Ollama;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Illuminate\Support\Facades\Http;

class ChatController extends Controller
{
    public function stream(Request $request): StreamedResponse
    {
        $messages = json_decode($request->query('messages', '[]'), true);

        return response()->stream(function () use ($messages) {

            try {

                while (ob_get_level() > 0)
                    ob_end_flush();

                // 🔥 Build prompt from messages
                $prompt = collect($messages)
                    ->map(fn($m) => ucfirst($m['role']) . ": " . $m['content'])
                    ->implode("\n");

                $prompt .= "\nAssistant:";

                $response = Http::withOptions([
                    'stream' => true,
                ])->post('http://localhost:11434/api/generate', [
                    'model' => 'qwen2.5-coder',
                    'prompt' => $prompt,
                ]);

                $body = $response->getBody();

                while (!$body->eof()) {

                    $chunk = $body->read(1024);
                    $lines = explode("\n", $chunk);

                    foreach ($lines as $line) {

                        $line = trim($line);
                        if (!$line)
                            continue;

                        $data = json_decode($line, true);
                        if (!$data)
                            continue;

                        // ✅ REAL TOKENS (not characters)
                        $token = $data['response'] ?? '';

                        if ($token !== '') {
                            echo "data: " . json_encode(['token' => $token]) . "\n\n";
                            flush();
                        }

                        if (!empty($data['done'])) {
                            echo "data: [DONE]\n\n";
                            flush();
                            return;
                        }
                    }
                }

            }
            catch (\Throwable $e) {

                echo "data: " . json_encode([
                'token' => '',
                'error' => $e->getMessage()
                ]) . "\n\n";

                flush();
            }

        }, 200, [
            'Content-Type' => 'text/event-stream',
            'Cache-Control' => 'no-cache, no-transform',
            'Connection' => 'keep-alive',
            'X-Accel-Buffering' => 'no',
            'Content-Encoding' => 'none',
        ]);
    }

// public function stream(Request $request): StreamedResponse
// {
//     $messages = json_decode($request->query('messages', '[]'), true);

//     return response()->stream(function () use ($messages) {

//         try {

//             while (ob_get_level() > 0)
//                 ob_end_flush();

//             // 🔥 Build prompt from messages
//             $prompt = collect($messages)
//                 ->map(fn($m) => ucfirst($m['role']) . ": " . $m['content'])
//                 ->implode("\n");

//             $prompt .= "\nAssistant:";

//             $response = Http::withOptions([
//                 'stream' => true,
//             ])->post('http://localhost:11434/api/generate', [
//                 'model' => 'qwen2.5-coder',
//                 'prompt' => $prompt,
//             ]);

//             $body = $response->getBody();

//             while (!$body->eof()) {

//                 $chunk = $body->read(1024);
//                 $lines = explode("\n", $chunk);

//                 foreach ($lines as $line) {

//                     $line = trim($line);
//                     if (!$line)
//                         continue;

//                     $data = json_decode($line, true);
//                     if (!$data)
//                         continue;

//                     // ✅ Extract token (IMPORTANT)
//                     $token = $data['response'] ?? '';

//                     if ($token !== '') {
//                         echo "data: " . json_encode(['token' => $token]) . "\n\n";
//                         flush();
//                     }

//                     // ✅ Done signal
//                     if (!empty($data['done'])) {
//                         echo "data: [DONE]\n\n";
//                         flush();
//                         return;
//                     }
//                 }
//             }

//         }
//         catch (\Throwable $e) {

//             echo "data: " . json_encode([
//             'token' => '',
//             'error' => $e->getMessage()
//             ]) . "\n\n";

//             flush();
//         }

//     }, 200, [
//         'Content-Type' => 'text/event-stream',
//         'Cache-Control' => 'no-cache, no-transform',
//         'Connection' => 'keep-alive',
//         'X-Accel-Buffering' => 'no',
//         'Content-Encoding' => 'none',
//     ]);
// }


// public function stream(Request $request): StreamedResponse
// {
//     $messages = json_decode($request->query('messages', '[]'), true);

//     return response()->stream(function () use ($messages) {

//         try {

//             // Clear all buffers
//             while (ob_get_level() > 0) {
//                 ob_end_flush();
//             }

//             $text = "This is a streamed response from server.";
//             $text = (string)$text;

//             foreach (str_split($text) as $char) {
//                 echo "data: " . json_encode(['token' => $char]) . "\n\n";
//                 flush();
//                 usleep(30000);
//             }

//             echo "data: [DONE]\n\n";
//             flush();

//         }
//         catch (\Throwable $e) {

//             echo "data: " . json_encode([
//             'token' => '',
//             'error' => $e->getMessage()
//             ]) . "\n\n";

//             flush();
//         }

//     }, 200, [
//         'Content-Type' => 'text/event-stream',
//         'Cache-Control' => 'no-cache, no-transform',
//         'Connection' => 'keep-alive',
//         'X-Accel-Buffering' => 'no',
//         'Content-Encoding' => 'none',
//     ]);
// }


// public function stream(Request $request): StreamedResponse
// {
//     $messages = json_decode($request->query('messages', '[]'), true);

//     if (empty($messages)) {
//         abort(400, 'No messages provided');
//     }

//     $chatMessages = array_merge(
//     [['role' => 'system', 'content' => 'You are a helpful assistant.']],
//         $messages
//     );

//     return response()->stream(function () use ($chatMessages) {
//         if (ob_get_level())
//             ob_end_clean();
//         ini_set('output_buffering', 'off');
//         ini_set('zlib.output_compression', false);

//         try {
//             $response = Ollama::model(config('ollama.default_model'))
//                 ->options(['temperature' => 0.7])
//                 ->stream(true)
//                 ->chat($chatMessages);

//             Ollama::processStream(
//                 $response->getBody(),
//                 function ($data) {
//                 // ✅ Safe access — works for both 'message' and 'response' keys
//                 $token = $data['message']['content']
//                     ?? $data['response']
//                     ?? '';

//                 echo "data: " . json_encode(['token' => $token]) . "\n\n";
//                 if (ob_get_level() > 0)
//                     ob_flush();
//                 flush();
//             }
//             );

//         }
//         catch (\Exception $e) {
//             // Send error to frontend so you can see it in the stream
//             echo "data: " . json_encode(['error' => $e->getMessage()]) . "\n\n";
//             if (ob_get_level() > 0)
//                 ob_flush();
//             flush();
//         }

//         echo "data: [DONE]\n\n";
//         if (ob_get_level() > 0)
//             ob_flush();
//         flush();

//     }, 200, [
//         'Content-Type' => 'text/event-stream',
//         'Cache-Control' => 'no-cache',
//         'X-Accel-Buffering' => 'no',
//         'Connection' => 'keep-alive',
//     ]);
// }
}