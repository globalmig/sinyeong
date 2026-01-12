import Image from "next/image";

export default function Header() {
    return (
        <header>
            <div>
                <h2>신영E&D</h2>
                <nav>

                </nav>
                <div>
                    <Image src="/icons/nav.png" alt="메뉴열기" width={30} height={30}/>
                </div>
            </div>
        </header>
    )
}