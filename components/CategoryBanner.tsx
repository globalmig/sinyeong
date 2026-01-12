"use client";

import { CATEGORY } from "@/data/category";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CategoryBanner() {

    const pathname = usePathname(); // ex: /about
    const pathnameSplit = pathname.split('/').filter(Boolean);

    const mainCategory = pathnameSplit[0];
    const category = CATEGORY[mainCategory];

    return (
        <main className="sub-banner">
            <div>
                <div>
                    <Image src={category.banner} alt={category.title} width={2560} height={600}/>
                </div>
                <h1>{category.title}</h1>
            </div>
        </main>
    )
}