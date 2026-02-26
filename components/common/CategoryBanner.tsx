"use client";

import { CATEGORY } from "@/data/category";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CategoryBanner() {

    const pathname = usePathname(); // ex: /about
    const pathnameSplit = pathname.split('/').filter(Boolean);

    const mainCategory = pathnameSplit[0];
    const subCategory = pathnameSplit[1];
    const category = CATEGORY[mainCategory];
    const categoryTitle = subCategory ? CATEGORY[mainCategory].categories?.find(c => c.url === subCategory)?.name : category.title;

    return (
        <main className="relative">
            <div>
                <div>
                    <Image className="w-full h-62.5 md:h-75 md:max-h-112.5 object-cover" src={category.banner} alt={category.title} width={2560} height={600}/>
                </div>
                <h1 className="absolute top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 text-white text-center w-[90%]">{categoryTitle}</h1>
            </div>
        </main>
    )
}