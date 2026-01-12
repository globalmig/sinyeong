"use client";

import { CATEGORY } from "@/data/category";
import { SERVICE } from "@/data/service";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function ServiceLayout() {
    const pathname = usePathname()
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const mainCategory = pathnameSplit[0];
    const subCategory = pathnameSplit[1]; // polyurea

    const category = CATEGORY[mainCategory]; // proofing
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
            <div className="intro">
                <div className="display-flex-flow">
                    {service.img.map(i =>
                        <div key={i}>
                            <Image src={i} alt={service.name} width={1000} height={609} />
                        </div>
                    )}
                </div>
                <div className="display-flex-flow">
                    <div>
                        <h3>{service.name}</h3>
                    </div>
                    <div>
                        <p>{service.contents}</p>
                    </div>
                </div>
            </div>
            {service.process &&
                <div className="process">
                    <section>
                        <div>
                            <h3>시공방법</h3>
                        </div>
                    </section>
                    <div>
                        {service.process.map((p, index) =>
                            <section key={p.kr}>
                                <div>
                                    <h3>0{index}</h3>
                                    <h4>{p.kr}</h4>
                                    <p>{p.en}</p>
                                </div>
                            </section>
                        )}
                        {/* 점선 */}
                        <div></div>
                    </div>
                </div>
            }
            <div className="apply">
                <section>
                        <div>
                            <h3>적용분야</h3>
                        </div>
                    </section>
                    <ul>
                        {service.apply.map((a, index)=>
                        <li key={index}>
                            {a}
                        </li>
                        )}
                    </ul>
            </div>
        </>
    )
}