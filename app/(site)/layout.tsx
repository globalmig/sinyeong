import CategoryBanner from "@/components/common/CategoryBanner";

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <CategoryBanner />
            {children}
        </>
    );
}
