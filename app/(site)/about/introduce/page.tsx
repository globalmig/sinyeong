import Image from "next/image";

export default function IntroducePage() {
    return (
        <article className="introduce">
            <div>

                <div>
                    <h2><span>신영E&D</span> 방문을 환영합니다.</h2>
                    <p>신영E&D는 방수 도료, 건축 내외장재, 도로 포장, 교통안전 분야의 자재 공급 및 시공 솔루션을 제공하는 전문 기업으로서, 고객님께 최고의 만족을 드리기 위해 최선을 다합니다.</p>
                </div>

                <div className="display-flex-flow">
                    <section>
                        <div>
                            <div>
                                <Image src="icons/신뢰와품질.png" alt="신뢰와 품질" width={47} height={62}/>
                            </div>
                            <h4>신뢰와 품질</h4>
                        </div>
                    </section>
                    <section>
                        <div>
                            <div>
                                <Image src="icons/안전최우선.png" alt="안전 최우선" width={76} height={76}/>
                            </div>
                            <h4>안전 최우선</h4>
                        </div>
                    </section>
                    <section>
                        <div>
                            <div>
                                <Image src="icons/성실과책임.png" alt="성실과 책임" width={59} height={60}/>
                            </div>
                            <h4>성실과 책임</h4>
                        </div>
                    </section>
                </div>

            </div>
        </article>
    )
}