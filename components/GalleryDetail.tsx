"use client";
import { PORTFOLIO } from "@/data/portfolio";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation"
import GalleryNavigator from "./GalleryNavigator";
import { useEffect } from "react";

export default function GalleryDetail() {

    const router = useRouter();
    const params = useParams();
    const { id } = params;
    const detailId = Number(id);
    const detail = PORTFOLIO.find(p => p.id === detailId);
    const detailIndex = PORTFOLIO.findIndex(p => p.id === detailId)

    const prev = PORTFOLIO[detailIndex - 1];
    const next = PORTFOLIO[detailIndex + 1];

    const prevItem = prev ? { href: `/gallery/${prev.id}`, title: prev.name } : null;
    const nextItem = next ? { href: `/gallery/${next.id}`, title: next.name } : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [prev]);

    if (!detail) return <div className="loading">갤러리를 불러오는 중입니다...</div>

    return (
        <>
            <div>
                <h2>{detail.name}</h2>
            </div>
            <div className="mb-17.5 w-full max-w-200 mt-0 mx-auto pc:mb-25">
                {/* {detail.img.map((d, index) =>
                    <div key={index} className="my-5 pc:my-10">
                        <Image className="w-full h-auto" src={d} alt={detail.name} width={1200} height={609} />
                    </div>
                )} */}
            </div>
            <div>
                <GalleryNavigator prevItem={prevItem} nextItem={nextItem} />
                <button
                    className="mt-10 bg-blue-dark text-white py-1.25 px-2.5 pc:py-2.5 pc:px-7.5"
                    onClick={() => router.push("/gallery")}>
                    목록
                </button>
            </div>
        </>
    )
}