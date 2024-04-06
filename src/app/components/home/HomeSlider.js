"use client"

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from 'next/image';

const slideImages = [
    {
        para: "I was initially hesitant to outsource my logo design, but Logo Design Maker made the process incredibly smooth and enjoyable. The designer really captured the essence of my brand, and the final logo is exactly what I envisioned. Highly recommend!",
        img: "/home/TestimonialAvtar.png",
        name: "Sarah Jones",
        designation: "Developer",
        founder: "Founder of Green Meadows Bakery"
    },
    {
        para: "I was initially hesitant to outsource my logo design, but Logo Design Maker made the process incredibly smooth and enjoyable. The designer really captured the essence of my brand, and the final logo is exactly what I envisioned. Highly recommend!",
        img: "/home/TestimonialAvtar.png",
        name: "Sarah Jones",
        designation: "Developer",
        founder: "Founder of Green Meadows Bakery"
    },
    {
        para: "I was initially hesitant to outsource my logo design, but Logo Design Maker made the process incredibly smooth and enjoyable. The designer really captured the essence of my brand, and the final logo is exactly what I envisioned. Highly recommend!",
        img: "/home/TestimonialAvtar.png",
        name: "Sarah Jones",
        designation: "Developer",
        founder: "Founder of Green Meadows Bakery"
    },
];

export default function HomeSlider() {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: true,
        lazyLoad: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,
    };

    return (
        <section className=" bg-primaryBlack mx-auto max-w-[1920px] px-4 sm:px-20 py-8 md:py-20">
            <div className="flex justify-center items-center flex-col text-white mb-10 ">
                <span className="font-springRainSolid text-[18px] sm:text-[35px] ">
                    See What
                </span>
                <h5 className="text-mobHeading1 sm:text-tabHeading1 lg:text-lapHeading1 font-bold leading-[21px] sm:leading-[29px] lg:leading-[44px] tracking-[-1px] sm:tracking-[-1px] text-center max-w-[150px] sm:max-w-[180px] lg:max-w-[300px]">
                    Our User have to Say about Us
                </h5>
            </div>

            <div className="mb-10 homeSlider relative">
                {/* //right arrow  */}
                <div className="block z-20 cursor-pointer -right-4 md:-right-2 top-[38%] md:top-[36%] lg:top-[40%] absolute"
                    onClick={next}>
                    <Image src="/home/RightArrow.svg" className="h-9 md:h-12 w-9 md:w-12" alt="RightArrow" height={20} width={20} />
                </div>
                <div className="block z-20 cursor-pointer -left-4 md:-left-2 top-[38%] md:top-[36%] lg:top-[40%] absolute"
                    onClick={previous}>
                    <Image src="/home/LeftArrow.svg" className="h-9 md:h-12 w-9 md:w-12" alt="LeftArrow" height={20} width={20} />
                </div>
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}>
                    {slideImages.map((item, index) => {
                        return (
                            <div key={index} className="max-w-[550px] sm:max-w-[700px] lg:max-w-[816px] h-[367px] w-full bg-darkBlue sm:bg-none my-10">
                                <div className="bg-[#182736] flex justify-center gap-[11px] items-center  w-full px-10 py-6 rounded-[17px]">
                                    <div className="text-white flex flex-col gap-[25.99px] ">
                                        <div className="">
                                            <Image src="/home/Star.png" alt="star" className="mb-2" height={120} width={120} />
                                            <p className="italic text-white text-[16px] sm:text-[18px] lg:text-[24px] font-normal leading-[25px] sm:leading-[28px] lg:leading-[38px]">
                                                &quot;{item.para}!&quot;
                                            </p>
                                            <span className=" border-y-2 border-white w-full"></span>
                                        </div>
                                        <div className="flex gap-[11.88px] items-center">

                                            <Image src={item.img} alt={item.founder} width={100} height={100} />
                                            <div className="flex flex-col ">
                                                <p className="text-[16px]">
                                                    {item.name}
                                                </p>
                                                <p className="text-[11px] text-[#625FFB]">
                                                    {item.founder}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </Slider>
            </div>
        </section>
    );
};

