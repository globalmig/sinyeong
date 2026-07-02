"use client";
import HomeSection from "@/components/section/HomeSection";
import MainSlide from "@/components/MainSlide";
import Image from "next/image";
import { useRef} from "react";

interface SlideHandle {
  next: () => void;
  prev: () => void;
}

export default function HomePage() {

  const slideRef = useRef<SlideHandle>(null);

  return (
    <>

      <main className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-2 text-white text-center w-[90%]">
          <h2 className="text-[2rem] mb-3.75 pc:text-[3.5rem]">품질·정직·책임·상생</h2>
          <p className="text-[1.2rem] pc:text-[1.3rem]">신뢰와 품질로 완성하는 현장을 신영이앤디와 함께 합니다.</p>
        </div>
        <MainSlide ref={slideRef} />
        <div className="hidden pc:flex pc:w-300 pc:absolute pc:top-1/2 pc:left-1/2 pc:-translate-y-1/2 pc:-translate-x-1/2 pc:justify-between pc:z-2">
          <button onClick={() => slideRef.current?.prev()}>
            <Image src="/icons/prev.png" alt="이전" width={35} height={85}/>
          </button>
          <button onClick={() => slideRef.current?.next()}>
            <Image src="/icons/next.png" alt="다음" width={35} height={85}/>
          </button>
        </div>
      </main>

      <article>
        <div>
          <div>
            <h2>기업 개요</h2>
            <p>신영이앤디는 방수 도료, 건축 내외장재, 도로 포장, 교통안전 분야의 자재 공급 및 시공 솔루션을 제공하는 전문 기업입니다.</p>
          </div>
          <div className="flex-between-wrap">
            <HomeSection
              category="회사소개"
              categoryEng="ABOUT US"
              link="/about/introduce"
            />
            <HomeSection
              category="사업분야"
              categoryEng="BUSINESS"
              link="/about/business"
            />
            <HomeSection
              category="포트폴리오"
              categoryEng="PORTFOLIO"
              link="/gallery"
            />
          </div>
        </div>
      </article>
      
    </>
  );
}
