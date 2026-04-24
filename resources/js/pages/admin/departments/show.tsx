import AdminLayout from '../components/admin-layout';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Eye, Edit, ArrowLeft, Clock, User, CheckCircle2, XCircle } from 'lucide-react';
import admin from '@/routes/admin';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface DepartmentsShowProps {
    department: {
        id: number;
        name: string;
        slug: string;
        description: string;
        created_at: string;
        updated_at: string;
        created_by: {
            id: number;
            name: string;
        };
        updated_by: {
            id: number;
            name: string;
        };
        seo: {
            id: number;
            title: string;
            description: string;
            keywords: string;
            og_title: string;
            og_description: string;
            og_image: string;
        };
        papers_count: number;
    };
}

export default function DepartmentsShow({ department }: DepartmentsShowProps) {
    return (
        <AdminLayout title={`Department - ${department.name}`}>
            <div className="flex items-center justify-between mb-6">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight">Department Details</h1>
                    <p className="text-muted-foreground">
                        View details for <span className="font-semibold text-primary">{department.name}</span>
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" asChild>
                        <Link href={admin.departments.index().url}>
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to List
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href={admin.departments.edit(department.id).url}>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit Department
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="grid gap-6">
                {/* Department Info Card */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-2xl">{department.name}</CardTitle>
                                <CardDescription className="mt-1">
                                    Basic information about the department
                                </CardDescription>
                            </div>
                            {/* <Badge
                                variant="outline"
                                className={cn(
                                    'text-xs px-2 py-1',
                                    department.status === 'active' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'
                                )}
                            >
                                {department.status === 'active' ? (
                                    <>
                                        <CheckCircle2 className="w-3 h-3 mr-1" />
                                        Active
                                    </>
                                ) : (
                                    <>
                                        <XCircle className="w-3 h-3 mr-1" />
                                        Inactive
                                    </>
                                )}
                            </Badge> */}
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h4 className="text-sm font-semibold text-muted-foreground mb-2">Description</h4>
                            <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none w-full">
                                <Markdown remarkPlugins={[remarkGfm]}>
                                    {department.description || 'No description available'}
                                </Markdown>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* <div>
                                <h4 className="text-sm font-semibold text-muted-foreground mb-2">Status</h4>
                                <Badge
                                    variant="outline"
                                    className={cn(
                                        'text-sm px-3 py-1',
                                        department.status === 'active' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'
                                    )}
                                >
                                    {department.status.toUpperCase()}
                                </Badge>
                            </div> */}
                            <div>
                                <h4 className="text-sm font-semibold text-muted-foreground mb-2">Total Papers</h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Eye className="w-4 h-4" />
                                    </div>
                                    <span className="text-lg font-semibold">{department.papers_count}</span>
                                    <span className="text-sm text-muted-foreground">papers</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                            <div>
                                <h4 className="text-sm font-semibold text-muted-foreground mb-2">Created By</h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium">{department.created_by.name}</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-muted-foreground mb-2">Created At</h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium">
                                        {new Date(department.created_at).toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {department.updated_by && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                                <div>
                                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Updated By</h4>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                                            <User className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium">{department.updated_by.name}</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Updated At</h4>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                                            <Clock className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium">
                                            {new Date(department.updated_at).toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* SEO Card */}
                {department.seo && (
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">SEO Information</CardTitle>
                            <CardDescription>
                                Search engine optimization settings for this department
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">SEO Title</h4>
                                    <p className="text-base text-muted-foreground">{department.seo.title}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">SEO Description</h4>
                                    <p className="text-base text-muted-foreground">{department.seo.description}</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-muted-foreground mb-2">SEO Keywords</h4>
                                <div className="flex flex-wrap gap-2">
                                    {department.seo.keywords.split(',').map((keyword, index) => (
                                        <Badge key={index} variant="secondary" className="text-sm">
                                            {keyword.trim()}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">OG Title</h4>
                                    <p className="text-base text-muted-foreground">{department.seo.og_title}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">OG Description</h4>
                                    <p className="text-base text-muted-foreground">{department.seo.og_description}</p>
                                </div>
                            </div>

                            {department.seo.og_image && (
                                <div>
                                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">OG Image</h4>
                                    <div className="w-full max-w-md">
                                        <img
                                            src={department.seo.og_image}
                                            alt="OG Image"
                                            className="w-full h-auto rounded-lg border object-cover"
                                        />
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                )}
            </div>
        </AdminLayout>
    );
}
