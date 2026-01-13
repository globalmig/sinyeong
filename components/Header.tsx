"use client";
import { CATEGORY } from "@/data/category";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {

    // nav mo open
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // nav hover = sub open / mo: drop-down, pc: display
    const [isHover, setIsHover] = useState<string | null>(null);

    // scroll background
    const [isScroll, setIsScroll] = useState<boolean>(false);

    return (
        <>
        <header>
            <div className="display-flex">
                <h2>
                    <Link href="/">신영E&D</Link>
                </h2>
                <nav>
                    <div className="mo">
                        <div>
                            <Image src="/icons/nav-close.png" alt="메뉴 닫기" width={30} height={30} />
                        </div>
                    </div>
                    <ul>
                        {Object.entries(CATEGORY).map(([key, c]) => {
                            return (
                                <li key={key}>
                                    <Link href={
                                        c.categories ?
                                            `/${key}/${c.categories?.[0].url}`
                                            : `/${key}`
                                    }>{c.title}</Link>
                                    {c.categories && (
                                        <ul>
                                            {c.categories.map((sub) => (
                                                <li key={sub.url}>
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
                <div className="mo">
                    <Image src="/icons/nav.png" alt="메뉴열기" width={30} height={30} />
                </div>
            </div>
        </header>
        <div className="black-bg"></div>
        </>
    )
}