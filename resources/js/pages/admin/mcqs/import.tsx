import { useState } from 'react'
import AdminLayout from '../components/admin-layout'
import { Button } from '@/components/ui/button'
import { Loader2, Upload } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useForm } from '@inertiajs/react'
import { InputGroup, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
import mcqs_import from '@/routes/admin/mcqs_import'

interface Option {
    option_text: string
    is_correct: boolean
    sort_order: number
}

interface McqPreview {
    question: string
    options: Option[]
    subject_slug: string
}

export default function McqsImport() {

    const { data, setData, post, processing, errors } = useForm<{ file: File | null }>()
    const [preview, setPreview] = useState<McqPreview[] | null>(null)
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
                    throw new Error('JSON must be an array of MCQs.')
                }

                parsed.forEach((item, index) => {
                    if (!item.question || !item.options) {
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

        post(mcqs_import.store().url)
    }

    return (
        <AdminLayout title="MCQs Import">
            <div className="max-w-3xl mx-auto py-10 space-y-6">
                <Card className="rounded-2xl shadow">
                    <CardContent className="p-6 space-y-6">
                        <h1 className="text-xl font-semibold">
                            Import MCQs (Preview First)
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
                                    Total MCQs: {preview.length}
                                </div>

                                <div className="max-h-72 overflow-y-auto border rounded-lg p-4 space-y-4">
                                    {preview.slice(0, 5).map((mcq, index) => (
                                        <div key={index} className="border-b pb-3">
                                            <p className="font-medium">
                                                {mcq.question}
                                            </p>
                                            <ul className="ml-4 list-disc text-sm text-gray-600">
                                                {mcq.options.map((opt, i) => (
                                                    <li key={i}>
                                                        {opt.option_text}{' '}
                                                        {opt.is_correct && (
                                                            <span className="text-green-600">
                                                                (Correct)
                                                            </span>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                {preview.length > 5 && (
                                    <p className="text-xs text-gray-500">
                                        Showing first 5 MCQs only
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