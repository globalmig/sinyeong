import Image from "next/image";

const BUSINESS_INFO = [
    {
        name: "방수 도료 공사",
        content: "구조물의 수명 연장을 위해 누수·열화·환경 영향을 차단하는 고기능 방수 및 도막 시공을 제공합니다.",
        img: "/images/사업분야_방수도료공사.jpg"
    },
    {
        name: "건축 내외장재",
        content: "기능성과 디자인을 고려한 금속 내·외장 시스템으로 공간의 완성도를 높입니다.",
        img: "/images/사업분야_건축내외장재.jpg"
    },
    {
        name: "도로 포장",
        content: "내구성과 주행 안전성을 강화하는 전문 도로 포장 공법으로 안정적인 도로 환경을 조성합니다.",
        img: "/images/사업분야_도로포장.jpg"
    },
    {
        name: "교통 안전",
        content: "시인성과 안전성을 높이는 교통 안전 시설물 및 안내 시스템으로 사고 예방에 기여합니다.",
        img: "/images/사업분야_교통안전.jpg"
    },
]

export default function BusinessPage() {
    return (
        <article>
            <div>

                <div>
                    <h2>사업분야 소개</h2>
                </div>

                <div className="flex-between-wrap">
                    {BUSINESS_INFO.map((info, idx) => (
                        <section key={idx} className="w-full text-center mb-5 md:w-[48%] md:mb-7.5 pc:max-w-69 pc:mb-0">
                            <div>
                                <Image className="w-full h-auto" src={info.img} alt={info.name} width={276} height={223} />
                            </div>
                            <h3 className="mt-2.5 text-white p-2.5 bg-blue-dark pc:p-3.75">{info.name}</h3>
                            <p className="py-5 bg-blue-light md:h-32.5 pc:py-5 pc:px-2.5 pc:text-[1rem]">{info.content}</p>
                        </section>
                    ))}
                </div>

            </div>
        </article>
    )
}