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
                <Image className="w-full h-175 pc:h-220 object-cover" src="/images/banner1.jpg" alt="방수 도료 공사 전문 신영이앤디" width={2560} height={800} priority quality={100} />
            </div>
            <div>
                <Image className="w-full h-175 pc:h-220 object-cover" src="/images/banner2.jpg" alt="방수 도료 공사 전문 신영이앤디" width={2560} height={800} priority quality={100} />
            </div>
            <div>
                <Image className="w-full h-175 pc:h-220 object-cover" src="/images/banner3.jpg" alt="방수 도료 공사 전문 신영이앤디" width={2560} height={800} priority quality={100} />
            </div>
        </Slider>
    )
})

MainSlide.displayName = 'MainSlide';
export default MainSlide;