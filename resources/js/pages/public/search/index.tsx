import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';

export default function Search({ query, results }: any) {
    return (
        <AppLayout>
            <Head>
                <meta name="robots" content="noindex, follow" />
            </Head>
            <div className="space-y-8">
                <h1 className="text-xl font-semibold">
                    Search results for "{query}"
                </h1>

                {results.subjects?.length > 0 && (
                    <section>
                        <h2 className="mb-2 font-medium">Subjects</h2>
                        <ul>
                            {results.subjects.map((s: any) => (
                                <li key={s.id}>
                                    <Link href={`/subjects/${s.slug}`}>
                                        {s.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {results.papers?.length > 0 && (
                    <section>
                        <h2 className="mb-2 font-medium">Papers</h2>
                        <ul>
                            {results.papers.map((p: any) => (
                                <li key={p.id}>
                                    <Link href={`/papers/${p.slug}`}>
                                        {p.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {results.mcqs?.length > 0 && (
                    <section>
                        <h2 className="mb-2 font-medium">MCQs</h2>
                        <ul>
                            {results.mcqs.map((m: any) => (
                                <li key={m.id}>
                                    <Link href={`/mcqs/${m.slug}`}>
                                        {m.question}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>
        </AppLayout>
    );
}
