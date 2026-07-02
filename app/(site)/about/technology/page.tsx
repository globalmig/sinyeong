import { TECHNOLOGY } from "@/data/service";
import Image from "next/image";

export default function TechnologyPage() {
    return (
        <article>
            <div>

                <div>
                    <h2>신영이앤디는 <span>자체 생산 체계와 특허 기술</span>을 보유하고 있습니다.</h2>
                    <p>폴리우레아 수지 도막 방수재를 직접 생산하는 조달청 나라장터에 등록된 기업으로, 교면 방수, 차열페인트, 차열복합방수, 조적벽체 투명 방수 기술과 특허를 보유하고 있습니다.</p>
                </div>

                <div className="flex-between-wrap">
                    {TECHNOLOGY.map((t) =>
                        <section key={t.id} className="flex-between-wrap mb-10 md:mb-15 md:w-full pc:mb-20">
                            <div className="md:w-[40%]">
                                <Image className="w-full h-auto" src={`/images/service/보유기술_${t.uniqueNumber}.jpg`} alt={t.name} width={500} height={333} />
                            </div>
                            <div className="mt-6.25 md:mt-0 md:w-[55%]">
                                <h4 className="md:text-[1.2rem]">{t.name}</h4>
                                <ul className="mt-3.75 md:mt-5">
                                    <li className="flex my-3.75 gap-2.5 text-[#555] md:my-2.5">
                                        <p className="font-bold text-[#81A4D3] w-[30%]">모델명</p>
                                        <p>{t.model}</p>
                                    </li>
                                    <li className="flex my-3.75 gap-2.5 text-[#555] md:my-2.5">
                                        <p className="font-bold text-[#81A4D3] w-[30%]">식별번호</p>
                                        <p>{t.uniqueNumber}</p>
                                    </li>
                                    <li className="flex my-3.75 gap-2.5 text-[#555] md:my-2.5">
                                        <p className="font-bold text-[#81A4D3] w-[30%]">포장두께</p>
                                        <p>{t.weight}mm</p>
                                    </li>
                                    <li className="flex my-3.75 gap-2.5 text-[#555] md:my-2.5">
                                        <p className="font-bold text-[#81A4D3] w-[30%]">용도</p>
                                        <p>{t.using}</p>
                                    </li>
                                    <li className="flex my-3.75 gap-2.5 text-[#555] md:my-2.5">
                                        <p className="font-bold text-[#81A4D3] w-[30%]">도장방법</p>
                                        <p>{t.method}</p>
                                    </li>
                                    <li className="flex my-3.75 gap-2.5 text-[#555] md:my-2.5">
                                        <p className="font-bold text-[#81A4D3] w-[30%]">재질</p>
                                        <p>{t.texture}</p>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    )}
                </div>

            </div>
        </article>
    )
}