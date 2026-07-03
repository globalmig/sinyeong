'use client';
import Image from "next/image";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { forwardRef, useImperativeHandle, useRef } from "react";

interface SlideHandle {
    next: () => void;
    prev: () => void;
}

const MainSlide = forwardRef<SlideHandle>((_, ref) => {
    const sliderRef = useRef<Slider>(null);

    useImperativeHandle(ref, () => ({
        next: () => sliderRef.current?.slickNext(),
        prev: () => sliderRef.current?.slickPrev(),

    }));

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <Slider ref={sliderRef} {...settings} className="main-slider block relative">
            <div>
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-2 text-white text-center w-[90%]">
                    <h2 className="text-[1.5rem] mb-3.75 pc:text-[3.5rem]">품질·정직·책임·상생</h2>
                    <p className="text-[0.9rem] pc:text-[1.3rem]">신뢰와 품질로 완성하는 현장을 신영이앤디와 함께 합니다.</p>
                </div>
                <Image className="w-full h-175 pc:h-220 object-cover" src="/images/banner1.png" alt="방수 도료 공사 전문 신영이앤디" width={2560} height={800} priority quality={100} />
            </div>
            <div>
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-2 text-white text-center w-[90%]">
                    <h2 className="text-[1.5rem] mb-3.75 pc:text-[3.5rem]">도시의 내일을 함께 합니다.</h2>
                    <p className="text-[0.9rem] pc:text-[1.3rem]">고속도로 교면 방수부터 복합 건축물 도막 공사까지.<br/>차별화된 공법으로 빈틈없는 시공을 약속합니다.</p>
                </div>
                <Image className="w-full h-175 pc:h-220 object-cover" src="/images/banner2.png" alt="방수 도료 공사 전문 신영이앤디" width={2560} height={800} priority quality={100} />
            </div>
            <div>
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-2 text-white text-center w-[90%]">
                    <h2 className="text-[1.5rem] mb-3.75 pc:text-[3.5rem]">안전의 기초, 완벽한 방수 솔루션</h2>
                    <p className="text-[0.9rem] pc:text-[1.3rem]">신영이앤디에서 축적해온 정밀한 도막 방수 기술로 당신의 자산을 안전하게 보호합니다.</p>
                </div>
                <Image className="w-full h-175 pc:h-220 object-cover" src="/images/banner3.png" alt="방수 도료 공사 전문 신영이앤디" width={2560} height={800} priority quality={100} />
            </div>
            <div>
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-2 text-white text-center w-[90%]">
                    <h2 className="text-[1.5rem] mb-3.75 pc:text-[3.5rem]">물샐 틈 없는 견고함</h2>
                    <p className="text-[0.9rem] pc:text-[1.3rem]">꼼꼼한 사전 진단부터 사후 관리까지, 전문성을 증명하는 현장을 확인해보세요.</p>
                </div>
                <Image className="w-full h-175 pc:h-220 object-cover" src="/images/banner4.png" alt="방수 도료 공사 전문 신영이앤디" width={2560} height={800} priority quality={100} />
            </div>
        </Slider>
    )
})

MainSlide.displayName = 'MainSlide';
export default MainSlide;