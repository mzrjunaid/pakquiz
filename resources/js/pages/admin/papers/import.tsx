import { useState } from 'react'
import AdminLayout from '../components/admin-layout'
import { Button } from '@/components/ui/button'
import { Loader2, Upload } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useForm } from '@inertiajs/react'
import { InputGroup, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
import papers_import from '@/routes/admin/papers_import'

export interface PaperPreview {
    name: string,
    slug: string,
    description: string,
    paper_year: number,
    schedule_at: string,
    department: {
        name: string,
        slug: string
    },
    testing_service: {
        name: string,
        slug: string
    },
    subject: {
        name: string,
        slug: string
    }
}

export default function PaperImport() {
    const { data, setData, post, processing, errors } = useForm<{ file: File | null }>()
    const [preview, setPreview] = useState<PaperPreview[] | null>(null)
    const [error, setError] = useState<string | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.files?.[0]
        if (!selected) return

        setData({ file: selected })
        setError(null)

        const reader = new FileReader()

        reader.onload = (event) => {
            try {
                const parsed = JSON.parse(event.target?.result as string)

                if (!Array.isArray(parsed)) {
                    throw new Error('JSON must be an array of Papers.')
                }

                parsed.forEach((item, index) => {
                    if (!item.name || !item.description || !item.department || !item.testing_service || !item.subject || !item.paper_year || !item.schedule_at) {
                        throw new Error(`Invalid structure at item ${index + 1}`)
                    }
                })

                setPreview(parsed)
            } catch (err: any) {
                setPreview(null)
                setError(err.message)
            }
        }

        reader.readAsText(selected)
    }



    const submit = (e: React.FormEvent) => {
        e.preventDefault()

        data.file = data.file as File

        post(papers_import.store().url)
    }

    return (
        <AdminLayout title="Papers Import">
            <div className="max-w-3xl mx-auto py-10 space-y-6">
                <Card className="rounded-2xl shadow">
                    <CardContent className="p-6 space-y-6">
                        <h1 className="text-xl font-semibold">
                            Import Papers (Preview First)
                        </h1>
                        {/* Upload Input */}
                        <InputGroup className="w-full pe-2">
                            <InputGroupInput
                                type="file"
                                accept="application/json"
                                onChange={handleFileChange}
                            />
                            <InputGroupButton asChild>
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
                            </InputGroupButton>
                        </InputGroup>

                        {/* Client JSON Error */}
                        {error && (
                            <p className="text-sm text-red-500">{error}</p>
                        )}

                        {/* Server Validation Error */}
                        {errors.file && (
                            <p className="text-sm text-red-500">
                                {errors.file}
                            </p>
                        )}

                        {/* Preview Section */}
                        {preview && (
                            <div className="space-y-4">
                                <div className="text-sm text-gray-600">
                                    Total Papers: {preview.length}
                                </div>

                                <div className="max-h-72 overflow-y-auto border rounded-lg p-4 space-y-4">
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

export function PaperPreviewCard({ paper, index }: { paper: PaperPreview, index: number }) {
    return (
        <div key={index} className="border-b pb-3">
            <p className="font-medium">
                {paper.name}
            </p>
            <p className='whitespace-pre-line'>{paper.description}</p>
            <p>{paper.department.name}</p>
            <p>{paper.testing_service.name}</p>
            <p>{paper.subject.name}</p>
            <p>{paper.paper_year}</p>
            <p>{paper.schedule_at}</p>
        </div>
    )
}