"use client";
import MainSlide from "@/components/MainSlide";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

interface SlideHandle {
  next: () => void;
  prev: () => void;
}

export default function HomePage() {

  const slideRef = useRef<SlideHandle>(null);

  const [isHover, setIsHover] = useState<string | null>(null);

  return (
    <>

      <main className="main-banner">
        <div>
          <h1>품질·정직·책임·상생</h1>
          <p>신뢰와 품질로 완성하는 현장을 신영E&D와 함께 합니다.</p>
        </div>
        <MainSlide ref={slideRef} />
        <div className="pc-flex">
          <button onClick={() => slideRef.current?.prev()}>
            <Image src="/icons/prev.png" alt="이전" width={35} height={85}/>
          </button>
          <button onClick={() => slideRef.current?.next()}>
            <Image src="/icons/next.png" alt="다음" width={35} height={85}/>
          </button>
        </div>
      </main>

      <article className="home">
        <div>
          <div>
            <h2>기업 개요</h2>
            <p>신영E&D는 방수 도료, 건축 내외장재, 도로 포장, 교통안전 분야의 자재 공급 및 시공 솔루션을 제공하는 전문 기업입니다.</p>
          </div>
          <div className="display-flex-flow">
            <section>
              <div>
                <Image src="/images/회사소개.jpg" alt="회사소개" width={373} height={373} />
              </div>
              <div>
                <h2>회사소개</h2>
                <p>ABOUT US</p>
                {/* hover: display-block */}
                <div>
                  <Link href="/about/introduce">
                  <Image src="/icons/기업개요_자세히보기.jpg" alt="자세히보기" width={51} height={51} />
                  </Link>
                </div>
              </div>
              {/* hover: 파란배경 */}
              <div></div>
            </section>
            <section>
              <div>
                <Image src="/images/사업분야.jpg" alt="사업분야" width={373} height={373} />
              </div>
              <div>
                <h2>사업분야</h2>
                <p>BUSINESS</p>
                {/* hover: display-block */}
                <div>
                  <Link href="/about/business">
                  <Image src="/icons/기업개요_자세히보기.jpg" alt="자세히보기" width={51} height={51} />
                  </Link>
                </div>
              </div>
              {/* hover: 파란배경 */}
              <div></div>
            </section>
            <section>
              <div>
                <Image src="/images/포트폴리오.jpg" alt="포트폴리오" width={373} height={373} />
              </div>
              <div>
                <h2>포트폴리오</h2>
                <p>PORTFOLIO</p>
                {/* hover: display-block */}
                <div>
                  <Link href="/gallery">
                  <Image src="/icons/기업개요_자세히보기.jpg" alt="자세히보기" width={51} height={51} />
                  </Link>
                </div>
              </div>
              {/* hover: 파란배경 */}
              <div></div>
            </section>
          </div>
        </div>
      </article>
      
    </>
  );
}
