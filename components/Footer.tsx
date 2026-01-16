import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="contact">
                <div>
                    <h2>CONTACT US</h2>
                    <p>안전하고 완성도 높은 시공을 제공합니다.</p>
                    <div className="display-flex">
                        <Image src="/icons/tel.png" alt="대표전화 아이콘" width={100} height={100} />
                        <h3><Link href="tel:010-8688-2486">010-8688-2486</Link></h3>
                    </div>
                </div>
            </div>
            <footer>
                <div>
                    <h5>주식회사 신영이앤디</h5>
                    <ul>
                        <li><span>대표자</span> : 김서영</li>
                        <li><span>대표전화</span> : 010-8688-2486</li>
                        <li><span>사업자번호</span> : 162-88-03303</li>
                        <li><span>주소</span> : 전라남도 나주시 교육길 13, D동 3-505호 (빛가람동, 스마트파크지식산업센터)</li>
                    </ul>
                    <p>Copyright ⓒ 2026 주식회사 신영이앤디 All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}