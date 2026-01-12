import { TECHNOLOGY } from "@/data/service";
import Image from "next/image";

export default function TechnologyPage() {
    return (
        <article className="technology">
            <div>

                <div>
                    <h2>신영E&D는 <span>자체 생산 체계와 특허 기술</span>을 보유하고 있습니다.</h2>
                    <p>폴리우레아 수지 도막 방수재를 직접 생산하는 조달청 나라장터에 등록된 기업으로, 교면 방수, 차열페인트, 차열복합방수, 조적벽체 투명 방수 기술과 특허를 보유하고 있습니다.</p>
                </div>

                <div className="display-flex-flow">
                    {TECHNOLOGY.map(t =>
                        <section key={t.id} className="display-flex-flow">
                            <div>
                                <Image src={`/images//service/보유기술_${t.uniqueNumber}.jpg`} alt={t.name} width={500} height={333} />
                            </div>
                            <div>
                                <h3>{t.name}</h3>
                                <ul>
                                    <li>
                                        <p>모델명</p>
                                        <p>{t.model}</p>
                                    </li>
                                    <li>
                                        <p>식별번호</p>
                                        <p>{t.uniqueNumber}</p>
                                    </li>
                                    <li>
                                        <p>포장두께</p>
                                        <p>{t.weight}mm</p>
                                    </li>
                                    <li>
                                        <p>용도</p>
                                        <p>{t.using}</p>
                                    </li>
                                    <li>
                                        <p>도장방법</p>
                                        <p>{t.method}</p>
                                    </li>
                                    <li>
                                        <p>재질</p>
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