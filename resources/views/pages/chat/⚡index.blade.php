<?php

use Cloudstudio\Ollama\Facades\Ollama;
use Livewire\Component;

new class extends Component
{
    public array $messages = [];
    public string $input = '';
    public bool $isStreaming = false;

    public function sendMessage(): void
    {
        if ($this->isStreaming) return;

        $input = trim($this->input);

        if ($input === '') return;

        $this->validate(['input' => 'required|string|max:2000']);

        // Optional system message (only once)
        if (empty($this->messages)) {
            $this->messages[] = [
                'role' => 'system',
                'content' => 'You are an expert Laravel and React developer. Give concise, production-ready answers.'
            ];
        }

        $this->messages[] = ['role' => 'user', 'content' => $input];
        $this->messages[] = ['role' => 'assistant', 'content' => ''];

        // Limit history (important)
        $this->messages = array_slice($this->messages, -20);

        $this->input = '';
        $this->isStreaming = true;

        $this->dispatch('start-stream', messages: $this->messages);
    }

    public function syncMessage(string $content): void
    {
        if (empty($this->messages)) return;

        $lastIndex = count($this->messages) - 1;

        if ($this->messages[$lastIndex]['role'] === 'assistant') {
            $this->messages[$lastIndex]['content'] = $content;
        }

        $this->isStreaming = false;
    }

    public function with(): array
    {
        return [
            'messages'    => $this->messages,
            'input'       => $this->input,
            'isStreaming' => $this->isStreaming,
        ];
    }
};
?>

<div
    x-data="{
        accumulated: '',
        el: null,
        buffer: '',
        controller: null,

        async startStream(messages) {
            const filteredMessages = messages
                .filter(m => !(m.role === 'assistant' && m.content === ''))
                .slice(-10); // limit context

            const params = new URLSearchParams({
                messages: JSON.stringify(filteredMessages),
            });

            const lastIndex = messages.length - 1;

            await $nextTick();
            this.el = document.getElementById('message-' + lastIndex);

            this.accumulated = '';
            this.buffer = '';

            try {
                // ✅ Abort controller
                this.controller = new AbortController();

                const response = await fetch('/chat/stream?' + params, {
                    signal: this.controller.signal,
                    headers: { Accept: 'text/event-stream' },
                });

                if (!response.ok) {
                    throw new Error('HTTP error: ' + response.status);
                }

                const reader = response.body.getReader();
                const decoder = new TextDecoder();

                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    // ✅ Handle partial chunks safely
                    this.buffer += decoder.decode(value, { stream: true });

                    const lines = this.buffer.split('\n');
                    this.buffer = lines.pop(); // keep incomplete part

                    for (const line of lines) {
                        if (!line.startsWith('data:')) continue;

                        const raw = line.replace('data: ', '').trim();

                        // ✅ Proper DONE handling
                        if (raw === '[DONE]') {
                            reader.cancel();
                            break;
                        }

                        try {
                            const data = JSON.parse(raw);

                            if (data.error) {
                                console.error('Stream error:', data.error);
                                continue;
                            }

                            const token = data.token || '';

                            // ✅ Efficient append (no full repaint)
                            if (this.el) {
                                this.el.textContent += token;
                            }

                            this.accumulated += token;

                            // ✅ Auto scroll during streaming
                            document.getElementById('message-container')
                                ?.scrollTo({ top: 999999 });

                        } catch (e) {
                            // ignore partial JSON
                        }
                    }
                }

                // ✅ Sync final message to Livewire
                await $wire.syncMessage(this.accumulated);

            } catch (err) {
                console.error('Stream error:', err);
                await $wire.syncMessage(this.accumulated || '');
            }
        },

        // Optional: stop streaming (you can add button later)
        stop() {
            this.controller?.abort();
        }
    }"
    x-on:start-stream.window="startStream($event.detail.messages)"
>
    <h1 class="text-2xl font-bold mb-4">Ollama Chat</h1>

    {{-- Messages --}}
    <div class="flex-1 overflow-y-auto space-y-4 mb-4" id="message-container">
        @foreach ($messages as $i => $message)
            <div class="flex {{ $message['role'] === 'user' ? 'justify-end' : 'justify-start' }}">
                <div
                    class="max-w-[80%] px-4 py-2 rounded-2xl text-sm whitespace-pre-wrap
                        {{ $message['role'] === 'user' ? 'bg-blue-600 text-black' : 'bg-gray-100 text-gray-800' }}"
                    id="message-{{ $i }}"
                    @if($isStreaming && $i === count($messages) - 1 && $message['role'] === 'assistant')
                        wire:ignore
                    @endif
                >
                    {{ $message['content'] }}

                    @if ($isStreaming && $i === count($messages) - 1 && $message['role'] === 'assistant')
                        <span class="text-black animate-pulse">▋</span>
                    @endif
                </div>
            </div>
        @endforeach
    </div>

    {{-- Input --}}
    <div class="flex gap-2">
        <textarea
            wire:model="input"
            wire:keydown.enter.prevent="sendMessage"
            rows="2"
            placeholder="Type a message... (Enter to send)"
            class="flex-1 border rounded-xl px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            @if($isStreaming) disabled @endif
        ></textarea>

        <button
            wire:click="sendMessage"
            @if($isStreaming) disabled @endif
            class="px-4 py-2 bg-blue-600 text-white rounded-xl disabled:opacity-50 hover:bg-blue-700 transition"
        >
            {{ $isStreaming ? 'Thinking...' : 'Send' }}
        </button>
    </div>
</div>