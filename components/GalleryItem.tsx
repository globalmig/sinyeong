"use client";
import Image from "next/image";
import { useState } from "react";

interface GalleryItemProps {
    data: {
        id: number;
        name: string;
        img: string;
    };
}

export default function GalleryItem({ data }: GalleryItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="w-[48%] mb-7 last:mb-0 md:w-95">
                <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
                    <Image className="w-full h-auto" src={data.img} alt={data.name} width={1000} height={600} />
                </div>
                <div className="bg-[#212a3d] p-2 pc:p-4">
                    <h4 className="text-white font-medium pc:text-[1.2rem]">
                    {data.name}
                </h4>
                </div>

                {isOpen && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5"
                        onClick={() => setIsOpen(false)}
                    >
                        <button
                            type="button"
                            className="absolute top-5 right-5 text-white text-3xl leading-none cursor-pointer"
                            onClick={() => setIsOpen(false)}
                            aria-label="닫기"
                        >
                            &times;
                        </button>
                        <Image
                            className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
                            src={data.img}
                            alt={data.name}
                            width={1600}
                            height={1000}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}
        </section>
    );
}
