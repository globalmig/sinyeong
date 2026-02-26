"use client";
import { CATEGORY } from "@/data/category";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpenSub, setIsOpenSub] = useState<string | null>(null);
    const [isScroll, setIsScroll] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-40 duration-500 border-b
                ${isScroll ? "bg-white border-b-[#ccc]" : "bg-transparent border-b-white/50"}`}>
                
                <div className="flex justify-between items-center py-3.25 px-[5%] w-full max-w-300 m-auto pc:py-0 pc:px-0 pc:border-b-0">
                    <h2>
                        <Link href="/" className={`text-[1.2rem] pc:text-[1.5rem] font-bold ${isScroll ? "text-black" : "text-white"}`}>
                            신영이앤디
                        </Link>
                    </h2>

                    <nav className={`fixed top-0 w-[80%] h-dvh bg-white py-5 z-50 duration-500
                        pc:static pc:w-auto pc:h-auto pc:bg-transparent pc:p-0
                        ${isOpen ? "right-0" : "-right-full"}`}>
                        
                        <div className="px-2.5 flex justify-end mb-5 pc:hidden">
                            <div className="cursor-pointer" onClick={() => setIsOpen(false)}>
                                <Image className="w-5 h-auto" src="/icons/nav-close.png" alt="메뉴 닫기" width={30} height={30} />
                            </div>
                        </div>

                        <ul className="pc:flex pc:justify-end">
                            {Object.entries(CATEGORY).map(([key, c]) => {
                                const isTarget = isOpenSub === key;
                                const isGallery = key === "gallery";
                                return (
                                    <li key={key}
                                        className="pc:relative"
                                        onMouseEnter={() => !isGallery && setIsOpenSub(key)}
                                        onMouseLeave={() => setIsOpenSub(null)}>
                                        {/* 메인 카테고리 */}
                                        <div className={`cursor-pointer py-3.75 px-2.5 pc:py-6 pc:px-6.25 transition-colors
                                            ${isTarget ? "bg-blue-dark text-white font-bold" : "text-black"} 
                                            ${!isTarget && (isScroll ? "pc:text-black" : "pc:text-white")}`}>
                                            
                                            {c.categories && !isGallery ? (
                                                <p>{c.title}</p>
                                            ) : (
                                                <Link href={`/${key}`} onClick={() => setIsOpen(false)} className="block pc:text-[17.6px] pc:text-white pc:hover:font-bold">
                                                    {c.title}
                                                </Link>
                                            )}
                                        </div>
                                        {/* 서브 카테고리 */}
                                        {c.categories && !isGallery && (
                                            <ul className={`transition-all duration-500 ease-in-out pc:absolute pc:top-full pc:left-0 pc:w-62.5 pc:bg-blue-dark
                                                ${isTarget ? "max-h-60 opacity-100 translate-y-0 visible" : "max-h-0 opacity-0 -translate-y-2 invisible"}`}>
                                                {c.categories.map((sub) => (
                                                    <li key={sub.url} 
                                                        className="hover:bg-blue-light transition-colors border-b border-white/50 last:border-0"
                                                        onClick={() => setIsOpen(false)}>
                                                        <Link href={`/${key}/${sub.url}`} 
                                                              className="block py-3.75 px-4 text-black pc:text-white">
                                                            {sub.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <div className={`pc:hidden cursor-pointer my-auto mx-0 ${isScroll ? "invert" : ""}`} onClick={() => setIsOpen(true)}>
                        <Image src="/icons/nav.png" alt="메뉴열기" width={35} height={23} />
                    </div>
                </div>
            </header>

            <div className={`fixed inset-0 bg-black/50 z-30 pc:hidden transition-opacity duration-300 
                ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                 onClick={() => setIsOpen(false)}>
            </div>
        </>
    );
}