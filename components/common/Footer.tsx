import Image from "next/image";
import Link from "next/link";

const COMPANY_INFO = [
    { label: "대표자", value: "김서영" },
    { label: "대표전화", value: "010-8688-2486" },
    { label: "사업자번호", value: "162-88-03303" },
    { label: "주소", value: "전라남도 나주시 교육길 13, D동 3-505호 (빛가람동, 스마트파크지식산업센터)" },
]

export default function Footer() {
    return (
        <>
            <div className="bg-[#222] text-white">
                <div className="py-7.5 text-center pc:py-17.5 pc:px-0">
                    <h2 className="pc:text-[2rem]">CONTACT US</h2>
                    <p className="pt-2.5 pb-5">안전하고 완성도 높은 시공을 제공합니다.</p>
                    <div className="flex-between justify-center gap-3">
                        <Image className="w-10 h-auto pc:w-15" src="/icons/tel.png" alt="대표전화 아이콘" width={100} height={100} />
                        <h3 className="my-auto mx-0 text-[1.5rem]">
                            <Link href="tel:010-8688-2486"
                                className="text-white pc:text-[2.3rem]/[2.3rem] line-height">
                                010-8688-2486
                            </Link>
                        </h3>
                    </div>
                </div>
            </div>
            <footer className="bg-[#727e8f] text-white relative">
                <div className="py-12.5 px-[5%] text-center w-full max-w-300 my-0 mx-auto pc:pt-7.5 pc:px-0 pb-12.5">
                    <h5 className="pc:text-[0.9rem]">주식회사 신영이앤디</h5>
                    <ul className="my-5 pc:mx-0 pc:flex pc:justify-center pc:gap-y-0 pc:gap-x-2.5">
                        {COMPANY_INFO.map((info, idx) => (
                            <li key={idx} className="my-1.25
                        pc:relative pc:text-[0.9rem] pc:pr-2.5
                        pc:after:absolute pc:after:content-[''] pc:after:top-1/2 pc:after:right-0 pc:after:-translate-y-1/2 pc:after:w-px pc:after:h-4 pc:after:bg-[#D3D8DF] pc:last:after:content-none">
                                <span>{info.label}</span> : {info.value}
                            </li>
                        ))}
                    </ul>
                    <p className="border-t border-t-[#D3D8DF] pt-5 text-[#D3D8DF] pc:text-[0.9rem]">Copyright ⓒ 2026 주식회사 신영이앤디 All rights reserved.</p>
                </div>
                <div className="fixed right-0 bottom-10">
                    <Link href="tel:tel:010-8688-2486">
                        <Image src="/icons/tel2.png" alt="전화 문의" width={80} height={80}/>
                    </Link>
                </div>
            </footer>
        </>
    )
}