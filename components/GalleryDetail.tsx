"use client";
import { PORTFOLIO } from "@/data/portfolio";
import Image from "next/image";
import { usePathname } from "next/navigation"

export default function GalleryDetail() {

    const pathname = usePathname()
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const detailId = Number(pathnameSplit[1])

    const detail = PORTFOLIO.find(p => p.id === detailId)

    if (!detail) {
        return <div className="loading">갤러리를 불러오는 중입니다...</div>
    }

    /*
    const pathname = usePathname();
    const wastePathname = pathname.startsWith("/portfolio/waste");
    const restorationPathname = pathname.startsWith("/portfolio/restoration");
    const params = useParams();
    const { category, id } = params;
    const detailId = Number(id);

    const validCategories = CATEGORY_MAP.portfolio.categories?.map(c => c.url) ?? [];
    const categoryValue = Array.isArray(category) ? category[0] : category || "";

    const filterList = validCategories.includes(categoryValue)
        ? PortfolioData.filter(p => p.url === categoryValue)
        : [];

    const detailIndex = filterList.findIndex(p => p.id === detailId);
    const detail = filterList[detailIndex];

    const prev = filterList[detailIndex - 1];
    const next = filterList[detailIndex + 1];

    const goDetail = (targetIndex: number) => {
        const target = filterList[targetIndex];
        router.push(`/portfolio/${category}/${target.id}`);
    };
    */

    return (
        <>
            <div>
                <h2>{detail.name}</h2>
            </div>
            <div>
                {detail.img.map(d =>
                    <div key={detail.id}>
                        <Image src={d} alt={detail.name} width={1200} height={609} />
                    </div>
                )}
            </div>
            {/* <div>
                <div>
                    {prev &&
                        <p onClick={() => goDetail(detailIndex - 1)}><span>이전 사례</span> {prev.name}</p>
                    }
                    {next &&
                        <p onClick={() => goDetail(detailIndex + 1)}><span>다음 사례</span> {next.name} </p>
                    }
                </div>
                <button onClick={() => router.push(`/portfolio/${categoryValue}`)}>
                    목록
                </button>
            </div> */}
        </>
    )
}