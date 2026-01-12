import Image from "next/image";

export default function BusinessPage() {
    return (
        <article className="business">
            <div>

                <div>
                    <h2>사업분야 소개</h2>
                </div>

                <div className="display-flex-flow">
                    <section>
                        <div>
                            <Image src="/images/사업분야_방수도료공사.jpg" alt="방수 도료 공사" width={276} height={223} />
                        </div>
                        <h3>방수 도료 공사</h3>
                        <p>구조물의 수명 연장을 위해 누수·열화·환경 영향을 차단하는 고기능 방수 및 도막 시공을 제공합니다.</p>
                    </section>
                    <section>
                        <div>
                            <Image src="/images/사업분야_건축내외장재.jpg" alt="건축 내외장재" width={276} height={223} />
                        </div>
                        <h3>건축 내외장재</h3>
                        <p>기능성과 디자인을 고려한 금속 내·외장 시스템으로 공간의 완성도를 높입니다.</p>
                    </section>
                    <section>
                        <div>
                            <Image src="/images/사업분야_도로포장.jpg" alt="도로 포장" width={276} height={223} />
                        </div>
                        <h3>도로 포장</h3>
                        <p>내구성과 주행 안전성을 강화하는 전문 도로 포장 공법으로 안정적인 도로 환경을 조성합니다.</p>
                    </section>
                    <section>
                        <div>
                            <Image src="/images/사업분야_교통안전.jpg" alt="교통 안전" width={276} height={223} />
                        </div>
                        <h3>교통 안전</h3>
                        <p>시인성과 안전성을 높이는 교통 안전 시설물 및 안내 시스템으로 사고 예방에 기여합니다.</p>
                    </section>
                </div>

            </div>
        </article>
    )
}