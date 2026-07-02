import Link from "next/link";

interface NavItem {
    href: string;
    title: string;
}

interface GalleryNavigatorProps {
    prevItem?: NavItem | null;
    nextItem?: NavItem | null;
    prevLabel?: string;
    nextLabel?: string;
}

export default function GalleryNavigator({
    prevItem,
    nextItem,
    prevLabel = "이전 글",
    nextLabel = "다음 글",
}: GalleryNavigatorProps) {
    return (
        <div className="mt-6 border-t border-[#ddd]">
            {/* 이전 */}
            <div className="border-b border-[#ddd]">
                {prevItem ? (
                    <Link
                        href={prevItem.href}
                        className="flex items-center gap-6 px-2 py-4 hover:bg-blue-light transition-colors"
                    >
                        <span className="w-20 shrink-0 text-sm font-bold text-blue-dark">{prevLabel}</span>
                        <span className="text-sm text-black truncate">{prevItem.title}</span>
                    </Link>
                ) : (
                    <div className="flex items-center gap-6 px-2 py-4">
                        <span className="w-20 shrink-0 text-sm font-bold text-blue-dark">{prevLabel}</span>
                        <span className="text-sm text-gray-400">이전 글이 없습니다.</span>
                    </div>
                )}
            </div>
            {/* 다음 */}
            <div className="border-b border-[#ddd]">
                {nextItem ? (
                    <Link
                        href={nextItem.href}
                        className="flex items-center gap-6 px-2 py-4 hover:bg-blue-light transition-colors"
                    >
                        <span className="w-20 shrink-0 text-sm font-bold text-blue-dark">{nextLabel}</span>
                        <span className="text-sm text-black truncate">{nextItem.title}</span>
                    </Link>
                ) : (
                    <div className="flex items-center gap-6 px-2 py-4">
                        <span className="w-20 shrink-0 text-sm font-bold text-blue-dark">{nextLabel}</span>
                        <span className="text-sm text-gray-400">다음 글이 없습니다.</span>
                    </div>
                )}
            </div>
        </div>
    );
}
