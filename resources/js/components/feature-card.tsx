export default function FeatureCard({
    title,
    description,
    children,
}: {
    title: string;
    description?: string;
    children?: React.ReactNode;
}) {
    return (
        <div className="rounded-lg bg-card p-6 shadow-md">
            <h2 className="mb-2 text-lg font-semibold">{title}</h2>
            {description && <p className="mb-3 text-muted text-sm">{description}</p>}
            <div>{children}</div>
        </div>
    );
}
