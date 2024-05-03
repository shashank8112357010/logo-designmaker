"use client"
import Image from "next/image"
import Carousal from "../cardCarousal/Carousal"
import { useEffect, useState } from "react";
import { searchData } from "@/data/Data";
import Link from "next/link";

export default function HeroBanner() {
    const [currentInput, setCurrentInput] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [search, setSearch] = useState("")
    const [showLists, setShowLists] = useState(false)

    const navbarTexts = [
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
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowLists(true)
            } else {
                setShowLists(false)
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => { window.removeEventListener("scroll", handleScroll) }

    }, [])

    const handleInput = (e) => {
        setCurrentInput(e.target.value.length > 0);
        setSearch(e.target.value);
    }

    const handleItemSelect = (item) => {
        setSearch(item.name);
        setCurrentInput(true);
    }


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % navbarTexts.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [navbarTexts.length]);


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
                                {navbarTexts.map((text, index) => (
                                    <div key={index}
                                        className={`marquee-text ${index === currentIndex ? 'active' : ''}`}>
                                        {text}
                                    </div>
                                ))}
                            </div>
                        </h1>
                        <div className="text-white flex flex-col justify-center items-center">
                            <p className="mb-2 sm:mb-8 text-center text-mobHeaderBody sm:text-tabHeaderBody lg:text-lapHeaderBody font-medium leading-[19px] sm:leading-[22px] lg:leading-[25px] tracking-[-0.2px] max-w-[330px] sm:max-w-5xl">Ditch the robots, craft a logo you&apos;ll love with a human designer by your side.</p>
                            <div className="flex flex-row relative rounded-t-xl">
                                {
                                    currentInput && (
                                        <ul className={`scrollBar bg-white absolute z-50 ${showLists ? "md:top-[46px] lg:top-[57.5px] rounded-b-xl" : "bottom-[30px] sm:bottom-[45px] lg:bottom-[56px] rounded-t-xl"} left-0 right-0 ${search.length >= 2 ? 'h-auto' : 'h-[130px] sm:h-[160px] md:h-[210px] lg:h-[240px]'}  overflow-y-scroll "`}>
                                            <div className="flex flex-col">
                                                {searchData
                                                    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
                                                    .map((item, index) => {
                                                        const regex = new RegExp(`(${search})`, 'ig');
                                                        const suggestionName = item.name.replace(regex, `<span class="text-black">$1</span>`);
                                                        return (
                                                            <Link href={item.url ? item.url : "#"}
                                                                onClick={() => handleItemSelect(item)}
                                                                key={index}
                                                                className="w-full h-12 px-4 z-40 py-2 text-[13px] md:text-[14px] lg:text-[16px] border-b border-black !bg-white text-gray-400">
                                                                <div dangerouslySetInnerHTML={{ __html: suggestionName }} />
                                                            </Link>
                                                        )
                                                    })}
                                                {search.length >= 2 && searchData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).length === 0 && (
                                                    <li className="w-full h-12 px-4 py-2 border-b border-black !bg-white text-gray-400 block mx-auto text-center">No data found</li>
                                                )}
                                            </div>
                                        </ul>
                                    )
                                }
                                <input className={`${!currentInput ? "rounded-[20px]" : `${showLists ? "rounded-t-xl rounded-b-0" : "rounded-b-[20px]"}`} inputPlaceholder w-[208px] sm:w-[340px] lg:w-[484px] h-[30px] sm:h-[46px] lg:h-[57px] border-[1px] text-gray-500 pl-4 sm:pl-6 lg:pl-10 outline-none `}
                                    placeholder="Search To Services"
                                    value={search}
                                    onChange={handleInput}
                                />

                                <div className="absolute w-8 z-50 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-primaryGreen rounded-full right-[-4px] top-[-2px] lg:top-[-4px] flex justify-center items-center cursor-pointer">
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
            </div >
        </section >
    )
}

