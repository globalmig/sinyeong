"use client";
import { PORTFOLIO } from "@/data/portfolio";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation"

export default function GalleryDetail() {

    const params = useParams();
    const { id } = params;
    const detailId = Number(id);
    const router = useRouter();

    const detail = PORTFOLIO.find(p => p.id === detailId);
    const detailIndex = PORTFOLIO.findIndex(p => p.id === detailId)

    const prev = PORTFOLIO[detailIndex - 1];
    const next = PORTFOLIO[detailIndex + 1];

    const goDetail = (i : number) => {
        const target = PORTFOLIO[i];
        router.push(`/gallery/${target.id}`);
    }

    if (!detail) {
        return <div className="loading">갤러리를 불러오는 중입니다...</div>
    }

    return (
        <>
            <div>
                <h2>{detail.name}</h2>
            </div>
            <div>
                {detail.img.map((d, index) =>
                    <div key={index}>
                        <Image src={d} alt={detail.name} width={1200} height={609} />
                    </div>
                )}
            </div>
            <div>
                <div>
                    {prev &&
                        <p onClick={() => goDetail(detailIndex - 1)}><span>이전글</span> {prev.name}</p>
                    }
                    {next &&
                        <p onClick={() => goDetail(detailIndex + 1)}><span>다음글</span> {next.name} </p>
                    }
                </div>
                <button onClick={() => router.push("/gallery")}>
                    목록
                </button>
            </div>
        </>
    )
}