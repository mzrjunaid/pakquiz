import { JsonIndexableThing, SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

interface Props {
    schema?: Record<string, unknown> | JsonIndexableThing;
}
export default function AppCenterHead({ schema }: Props) {
    const { base_url, seo } = usePage<SharedData>().props; // Ensure we have access to the page props, including SEO datas

    const ogImageUrl = seo.og_image
        ? `${base_url}${seo.og_image}`
        : `${base_url}/assets/images/og-main.png`;
    return (
        <Head title={seo.title}>
            <meta name="description" content={seo.description} />
            {seo.keywords && (
                <meta
                    name="keywords"
                    content={seo.keywords
                        .map((keyword) => keyword.keyword)
                        .join(', ')}
                />
            )}
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={seo.canonical} />
            {seo.prev && <link rel="prev" href={seo.prev} />}
            {seo.next && <link rel="next" href={seo.next} />}

            <meta property="og:title" content={seo.og_title} />
            <meta property="og:description" content={seo.og_description} />
            <meta property="og:image" content={ogImageUrl} />
            <meta property="og:url" content={seo.canonical} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.og_title} />
            <meta name="twitter:description" content={seo.og_description} />
            <meta name="twitter:image" content={ogImageUrl} />

            {schema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            )}
        </Head>
    );
}
