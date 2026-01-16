"use client";
import { CATEGORY } from "@/data/category";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {

    // nav mo open
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // nav mo sub hover / pc sub hover
    const [isOpenSub, setIsOpenSub] = useState<string | null>(null);

    // scroll background
    const [isScroll, setIsScroll] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 20)
        };
        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll)
    },[])

    return (
        <>
            <header className={isScroll ? "header-scroll" : ""}>
                <div className="display-flex">
                    <h2>
                        <Link href="/">신영E&D</Link>
                    </h2>
                    <nav className={isOpen ? "nav-open" : ""}>
                        <div className="mo">
                            <div onClick={() => setIsOpen(false)}>
                                <Image src="/icons/nav-close.png" alt="메뉴 닫기" width={30} height={30} />
                            </div>
                        </div>
                        <ul>
                            {Object.entries(CATEGORY).map(([key, c]) => {
                                return (
                                    <li key={key} className={isOpenSub ? "sub-open" : ""}>
                                        {c.categories ?
                                        <p onMouseEnter={()=> setIsOpenSub(key)} className={isOpenSub === key ? "sub-open": ""}>{c.title}</p> :
                                        <p onClick={()=> setIsOpen(false)} onMouseLeave={()=> setIsOpenSub(null)} className={isOpenSub === key ? "sub-open": ""}><Link href={`/${key}`}>{c.title}</Link></p>
                                    }
                                        {c.categories && (
                                            <ul className={isOpenSub === key ? "sub-open" : ""} onMouseLeave={()=> setIsOpenSub(null)}>
                                                {c.categories.map((sub) => (
                                                    <li key={sub.url} onClick={() => setIsOpen(false)}>
                                                        <Link href={`/${key}/${sub.url}`}
                                                        >{sub.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    <div className="mo" onClick={() => setIsOpen(true)}>
                        <Image src="/icons/nav.png" alt="메뉴열기" width={35} height={23} />
                    </div>
                </div>
            </header>
            <div className="black-bg" style={{display: isOpen ? "block" : "none"}}></div>
        </>
    )
}