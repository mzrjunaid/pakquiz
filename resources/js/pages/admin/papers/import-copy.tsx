import { useState } from 'react'
import AdminLayout from '../components/admin-layout'
import { Button } from '@/components/ui/button'
import { Loader2, Upload } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useForm } from '@inertiajs/react'
import { Textarea } from '@/components/ui/textarea'
import papers_import from '@/routes/admin/papers_import'
import { PaperPreview, PaperPreviewCard } from './import'


export default function McqsImportCopy() {

    const { data, setData, post, processing, errors } = useForm<{
        json: string
    }>()
    const [preview, setPreview] = useState<PaperPreview[] | null>(null)
    const [error, setError] = useState<string | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const selected = e.target.value;
        if (!selected) return;

        setData({ json: selected })
        setError(null)

        try {
            const parsed = JSON.parse(selected)

            if (!Array.isArray(parsed)) {
                throw new Error('JSON must be an array of Papers.')
            }

            parsed.forEach((item, index) => {
                if (!item.name || !item.department || !item.testing_service || !item.subject || !item.paper_year || !item.schedule_at) {
                    throw new Error(`Invalid structure at item ${index + 1}`)
                }
            })

            setPreview(parsed)
        } catch (err: any) {
            setPreview(null)
            setError(err.message)
        }
    }


    const submit = (e: React.FormEvent) => {
        e.preventDefault()

        data.json = data.json as string

        post(papers_import.store().url)
    }

    return (
        <AdminLayout title="Papers Import">
            <div className="w-full mx-auto py-10 space-y-6">
                <Card className="rounded-2xl shadow">
                    <CardContent className="p-3 md:p-6 space-y-6">
                        <h1 className="text-xl font-semibold">
                            Import Papers (Preview First)
                        </h1>
                        {/* Upload Input */}
                        <Textarea
                            rows={15}
                            className='font-mono text-xs min-h-96 w-full'
                            placeholder="Paste JSON here..."
                            value={data.json}
                            onChange={handleFileChange}
                        />

                        {/* Client JSON Error */}
                        {error && (
                            <p className="text-sm text-red-500">{error}</p>
                        )}

                        <Button
                            type="button"
                            onClick={submit}
                            disabled={!preview || processing}
                            variant="outline"
                        >
                            {processing ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                <Upload className="mr-2 h-4 w-4" />
                            )}
                            {processing
                                ? 'Importing...'
                                : 'Confirm Import'}
                        </Button>

                        {/* Server Validation Error */}
                        {errors.json && (
                            <p className="text-sm text-red-500">
                                {errors.json}
                            </p>
                        )}

                        {/* Preview Section */}
                        {preview && (
                            <div className="space-y-4">
                                <div className="text-sm text-gray-600">
                                    Total Papers: {preview.length}
                                </div>

                                <div className="overflow-y-auto border rounded-lg p-4 space-y-4">
                                    {preview.slice(0, 5).map((paper, index) => (
                                        <PaperPreviewCard key={index} paper={paper} index={index} />
                                    ))}
                                </div>

                                {preview.length > 5 && (
                                    <p className="text-xs text-gray-500">
                                        Showing first 5 Papers only
                                    </p>
                                )}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    )
}