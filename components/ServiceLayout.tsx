"use client";
import { SERVICE } from "@/data/service";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function ServiceLayout() {
    const pathname = usePathname()
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const subCategory = pathnameSplit[1]; // polyurea

    const service = SERVICE.find(s => s.subCategory === subCategory);

    if (!service) {
        return <div className="loading">정보를 불러오는 중입니다...</div>
    }

    return (
        <>
            <div>
                <h2>{service.name}</h2>
                <p>{service.eng_name}</p>
            </div>
            <div>
                <div className="flex-between-wrap">
                    {service.img.map(i =>
                        <div key={i} className="my-2.5 pc:w-[384px]">
                            <Image className="w-full h-auto" src={i} alt={service.name} width={1000} height={609} />
                        </div>
                    )}
                </div>
                <div className="mt-7.5 text-center pc:mt-5 pc:flex">
                    <div className="bg-blue-dark py-3.75 flex items-center justify-center pc:py-7.5 pc:px-2.5 pc:w-[40%]">
                        <h3 className="text-white">{service.name}</h3>
                    </div>
                    <div className="bg-blue-light py-3.75 px-2.5 md:py-10 md:px-5">
                        <p
                            className="[&_span]:text-blue-dark [&_span]:font-bold"
                            dangerouslySetInnerHTML={{
                                __html: service.contents,
                            }}
                        />
                    </div>
                </div>
            </div>
            {service.process &&
                <div className="mt-20">
                    <div className="text-line">
                        <h3>시공방법</h3>
                    </div>
                    <div className="relative md:flex md:justify-center flex-wrap">
                        {service.process.map((p, index) =>
                            <section key={p.kr}
                                className="relative rounded-[100%] bg-white border border-[#377AD0]
                                        w-45.5 h-45.5 my-10 mx-auto md:w-57.5 md:h-57.5 md:m-5 pc:w-55 pc:h-55 pc:my-0 pc:mx-10">
                                <div className="absolute w-full top-[48%] left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
                                    <h3 className="text-blue-dark">0{index + 1}</h3>
                                    <h4 className="mt-0.5 mb-1.25 md:text-[1.2rem]">{p.kr}</h4>
                                    <p className="text-[#aaa] pc:text-[0.9rem]">{p.en}</p>
                                </div>
                            </section>
                        )}
                        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-1 pc:block">
                            <Image className="md:hidden" src="/images/dotsmo.png" alt="dots" width={8} height={472} />
                            <Image className="hidden pc:block" src="/images/dotsp.png" alt="dots" width={734} height={8} />
                        </div>
                    </div>
                </div>
            }
            <div className="mt-20">
                <div className="text-line">
                    <h3>적용분야</h3>
                </div>
                <ul>
                    {service.apply.map((a, index) =>
                        <li key={index}
                            className="py-5 border-b border-b-[#ccc] [&_span]:font-bold pc:py-7.5"
                            dangerouslySetInnerHTML={{
                                __html: a,
                            }}
                        />
                    )}
                </ul>
            </div>
        </>
    )
}