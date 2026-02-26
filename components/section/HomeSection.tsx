'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HomeSectionProps {
    category: string;
    categoryEng: string;
    link: string;
}

export default function HomeSection({category, categoryEng, link} : HomeSectionProps) {
    const [isHover, setIsHover] = useState<string | null>(null);

    return (
        <section 
            className="w-full mb-5 relative text-white text-center md:w-[32%] md:mb-0"
            onMouseEnter={() => setIsHover(category)}
            onMouseLeave={()=> setIsHover(null)}>
              <div>
                <Image className="w-full h-auto" src={`/images/${category}.jpg`} alt={category} width={373} height={373} />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-5">
                <h2 className="pc:text-[2rem]">{category}</h2>
                <p className="mt-2.5">{categoryEng}</p>
                <div className={isHover === category ? "block mt-7.5" : "hidden"}>
                  <Link href={link}>
                  <Image className="w-7.5 h-auto my-0 mx-auto md:w-12.5" src="/icons/기업개요_자세히보기.png" alt="자세히보기" width={51} height={51} />
                  </Link>
                </div>
              </div>
              <div className={`absolute top-0 left-0 bg-[#1D64BF] w-full h-full duration-500 ${isHover === category ? "opacity-70" : "opacity-0"}`}></div>
            </section>
    )
}