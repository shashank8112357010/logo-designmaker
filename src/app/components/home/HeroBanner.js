"use client"
import Image from "next/image"
import Carousal from "../cardCarousal/Carousal"
import { useEffect, useState } from "react";

export default function HeroBanner() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = [
        'Brand Personality',
        'Website & App Design',
        'Brand & Identity Design',
        'Packaging & Labeling',
        'Clothing & Merchandise Design',
        'Illustration & Art',
        'Business & Marketing Materials',
        'Social Media Design',
        'Book & Magazine Design'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [texts.length]);


    return (
        <section className="w-full max-w-[1920px] mx-auto bg-primaryBlack overflow-hidden">
            <div className="flex flex-row gap-4 items-center justify-center overflow-hidden xl:gap-10 h-[380px] xs:h-[383px] sm:h-[403px] md:h-[700px] relative">
                <Carousal carousalDelay="carousal" />
                <Carousal carousalDelay="carousal2" />
                <Carousal carousalDelay="carousal" />
                <Carousal carousalDelay="carousal2" />
                <Carousal carousalDelay="carousal" />

                <div className="absolute top-0">
                    <Image src="/home/bannerTop.png" width={1107} height={291} alt="linear-gradient-top" />
                </div>
                <div className="absolute bottom-0">
                    <Image src="/home/bannerBottom.png" width={1107} height={291} alt="linear-gradient-bottom" />
                </div>

                <main className="top-[30%] md:top-[30%] z-30 sm:w-[984px] max-w-[984px] min-h-[341px] absolute sm:px-0 sm:mt-5">
                    <div className="flex justify-center items-center flex-col gap-6 sm:gap-6 w-full">
                        <h1 className="w-full text-mobHeaderText text-center sm:text-tabHeaderText lg:text-lapHeaderText font-bold leading-[28px] sm:leading-[35px] lg:leading-[58.85px] text-white capitalize tracking-[-1px] lg:-tracking-[3px] max-w-[300px] sm:max-w-5xl">Design your dream logo: Unleash your <br />
                            <div className="marquee-container flex justify-center items-center font-[100px] font-springRainSolid text-primaryGreen tracking-wide transition-all">
                                {texts.map((text, index) => (
                                    <div key={index}
                                        className={`marquee-text ${index === currentIndex ? 'active' : ''}`}>
                                        {text}
                                    </div>
                                ))}
                            </div>
                        </h1>
                        <div className="text-white flex flex-col justify-center items-center">
                            <p className="mb-2 sm:mb-8 text-center text-mobHeaderBody sm:text-tabHeaderBody lg:text-lapHeaderBody font-medium leading-[19px] sm:leading-[22px] lg:leading-[25px] tracking-[-0.2px] max-w-[330px] sm:max-w-5xl">Ditch the robots, craft a logo you&apos;ll love with a human designer by your side.</p>
                            <div className="flex flex-row relative">
                                <input className="inputPlaceholder w-[208px] sm:w-[340px] lg:w-[484px] h-[30px] sm:h-[46px] lg:h-[57px] border-[1px] text-gray-500 pl-4 sm:pl-6 lg:pl-10 outline-none rounded-[20px]" placeholder="Search To Services"
                                />
                                <div className="absolute w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-primaryGreen rounded-full right-[-4px] top-[-2px] lg:top-[-4px] flex justify-center items-center cursor-pointer">
                                    <Image src="/home/logoSearch.png" width={12} height={12} className="block md:hidden" alt="logoSearch" />
                                    <Image src="/home/logoSearch.png" width={20} height={20} className="hidden md:block" alt="logoSearch" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul className="text-white text-[8px] sm:text-[10px] lg:text-[12px] flex gap-[3px] sm:gap-2 mt-2 sm:mt-0">
                                <li>Trending search</li>
                                <li><a className="px-2 sm:px-4 py-1 sm:py-2 font-semibold customBorder border-primaryGreen rounded-[20px] hover:text-primaryBlack hover:bg-primaryGreen cursor-pointer transition-all duration-300 ease-in-out">Logo</a></li>
                                <li><a className="px-2 sm:px-4 py-1 sm:py-2 font-semibold customBorder border-primaryGreen rounded-[20px] hover:text-primaryBlack hover:bg-primaryGreen cursor-pointer transition-all duration-300 ease-in-out">Branding</a></li>
                                <li><a className="px-2 sm:px-6 py-1 sm:py-2 font-semibold customBorder border-primaryGreen rounded-[20px] hover:text-primaryBlack hover:bg-primaryGreen cursor-pointer transition-all duration-300 ease-in-out">Poster</a></li>
                                <li><a className="px-2 sm:px-4 py-1 sm:py-2 font-semibold customBorder border-primaryGreen rounded-[20px] hover:text-primaryBlack hover:bg-primaryGreen cursor-pointer transition-all duration-300 ease-in-out">App Design</a></li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}

