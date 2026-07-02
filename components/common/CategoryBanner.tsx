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
    const subCategoryName = subCategory ? category.categories?.find(c => c.url === subCategory)?.name : undefined;
    const categoryTitle = subCategoryName ?? category.title;

    return (
        <main className="relative">
            <div>
                <div className="bg-fixed">
                    <Image className="bg-fixed w-full h-62.5 pc:h-112.5 object-cover" src={category.banner} alt={category.title} width={2560} height={600}/>
                </div>
                <div className="absolute top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 text-white text-center w-[90%]">
                    <h2 className="pc:text-[2.5rem]">{categoryTitle}</h2>
                    <div className="mt-5 flex items-center justify-center gap-2 pc:gap-4 text-sm">
                        <p className="pc:text-[1.2rem]">홈</p>
                        <div>{'>'}</div>
                        <p className="pc:text-[1.2rem]">{category.title}</p>
                        {subCategoryName && (
                            <>
                                <div>{'>'}</div>
                                <p className="pc:text-[1.2rem]">{subCategoryName}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}