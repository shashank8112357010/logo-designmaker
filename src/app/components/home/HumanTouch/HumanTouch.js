
import Image from "next/image";
import HumanTouchCard from "./HumanTouchCard";

export default function HumanTouch() {

    return (
        <section className=" max-w-[1920px] mx-auto relative bg-primaryBlack text-white pt-0 md:pt-16 pb-16 overflow-hidden">
            <div className="absolute sm:-top-40 lg:-top-60 sm:left-20 lg:left-60 ">
                <Image src="/home/HumanGradient.png" width={1000} height={500} alt="linear-gradient-bottom" />
            </div>
            <div className="text-center flex flex-col items-center gap-2 mb-6 relative overflow-hidden">

                <div className="max-w-[280px] sm:max-w-[380px] lg:max-w-[700px] lg:text-[38px] sm:text-[25px] text-[18px] font-bold leading-[21px] sm:leading-[29px] lg:leading-[44px] tracking-[-1px] text-white">
                    We Design with a Human Touch
                </div>
                <p className="max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] mx-auto lg:text-[16px] sm:text-[12px] text-[12px] lg:leading-[28px] sm:leading-[18px] leading-[18px] text-primaryGray px-4 sm:px-0 lg:px-0">
                    Our designers prioritize human connection, delving into your brand&apos;s essence for a resonant logo that propels success.
                </p>
            </div>

            <ul className="flex justify-center cursor-pointer gap-5 whitespace-nowrap px-4 min-h-10 leading-[18px] overflow-hidden sm:leading-[24px] text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2 font-normal text-center ">
                <li className="hover:text-primaryGreen hover:border-b-4 hover:border-primaryGreen pb-2 px-2 z-50">Business & Advertising</li>
                <li className="hover:text-primaryGreen hover:border-b-4 hover:border-primaryGreen pb-2 px-2 z-50">Packaging & Label Design</li>
                <li className="hover:text-primaryGreen hover:border-b-4 hover:border-primaryGreen pb-2 px-2  z-50">Website & App Design</li>
                <li className="hover:text-primaryGreen hover:border-b-4 hover:border-primaryGreen pb-2 px-2 z-50">Social Media Design</li>
                <li className="hover:text-primaryGreen hover:border-b-4 hover:border-primaryGreen pb-2 px-2 z-50">Illustration & Art</li>
                <li className="hover:text-primaryGreen hover:border-b-4 hover:border-primaryGreen pb-2 px-2 z-50">Book & Magazine Design</li>
            </ul>

            <HumanTouchCard />

        </section>
    )

}