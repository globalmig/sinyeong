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
            <div className="mb-17.5 w-full max-w-200 mt-0 mx-auto pc:mb-25">
                {detail.img.map((d, index) =>
                    <div key={index} className="my-5 pc:my-10">
                        <Image className="w-full h-auto" src={d} alt={detail.name} width={1200} height={609} />
                    </div>
                )}
            </div>
            <div>
                <div className="border-t border-t-[#ccc]">
                    {prev &&
                        <p
                        className="py-2.5 cursor-pointer text-[#555] border-b border-b-[#ccc] pc:py-5"
                        onClick={() => goDetail(detailIndex - 1)}>
                            <span className="font-bold text-blue-dark mr-5">이전글</span>
                             {prev.name}
                            </p>
                    }
                    {next &&
                        <p
                        className="py-2.5 cursor-pointer text-[#555] border-b border-b-[#ccc] pc:py-5"
                        onClick={() => goDetail(detailIndex + 1)}>
                            <span className="font-bold text-blue-dark mr-5">다음글</span>
                             {next.name}
                            </p>
                    }
                </div>
                <button
                className="mt-10 bg-blue-dark text-white py-1.25 px-2.5 pc:py-2.5 pc:px-7.5"
                onClick={() => router.push("/gallery")}>
                    목록
                </button>
            </div>
        </>
    )
}