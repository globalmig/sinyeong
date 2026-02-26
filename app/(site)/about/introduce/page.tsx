import Image from "next/image";

const INTRODUCE_INFO = [
    { name: "신뢰와 품질", icon: "/icons/신뢰와품질.png" },
    { name: "안전 최우선", icon: "/icons/안전최우선.png" },
    { name: "성실과 책임", icon: "/icons/성실과책임.png" },
]

export default function IntroducePage() {
    return (
        <article className="bg-[url(/images/introduce-bg.jpg)] bg-center bg-no-repeat bg-cover">
            <div>

                <div>
                    <h2><span>신영이앤디</span> 방문을 환영합니다.</h2>
                    <p>신영이앤디는 방수 도료, 건축 내외장재, 도로 포장, 교통안전 분야의 자재 공급 및 시공 솔루션을 제공하는 전문 기업으로서, 고객님께 최고의 만족을 드리기 위해 최선을 다합니다.</p>
                </div>

                <div className="flex-between-wrap pc:justify-center pc:gap-15.25">
                    {INTRODUCE_INFO.map((info, idx) => (
                        <section key={idx}
                        className="relative w-42 h-42 my-2.5 mx-auto rounded-[100%]
                            md:w-50 md:h-50 pc:w-67.5 pc:h-67.5 pc:m-0
                        bg-blue-dark nth-[2]:bg-[#81A4D3] last-of-type:bg-[#A6BAD4]">
                            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                                <div>
                                    <Image className="w-auto h-8.5 my-0 mx-auto md:h-10 pc:h-12.5" src={info.icon} alt={info.name} width={47} height={62} />
                                </div>
                                <h4 className="mt-2.5 text-white pc:mt-3.75 pc:text-[1.2rem]">{info.name}</h4>
                            </div>
                        </section>
                    ))}
                </div>

            </div>
        </article>
    )
}