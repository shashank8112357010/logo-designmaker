"use client"
import Image from "next/image";
import ServiceIntro from "../components/services/ServiceIntro";
import DesignHeaderAtom from "../atom/DesignHeaderAtom";
import BoxAtom from "../atom/BoxAtom";
import { AboutFaqs, BoxAboutData } from "@/data/Data";
import { useState } from "react";
import FaqAbout from "../components/about/FaqAbout";
import ServicesCTA from "../components/services/ServicesCTA";

export default function AboutUs() {
    const [openIndex, setOpenIndex] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)

    const AboutImg = [
        { id: 0, img: "/about/AboutHumanAI.png" },
        { id: 1, img: "/services/CTAImg.png" },
        { id: 2, img: "/about/AboutHumanAI.png" },
    ]

    return (
        <section className="w-full max-w-[1920px] mx-auto bg-primaryBlack pb-32">
            <div className="flex flex-row gap-4 items-center justify-center xl:gap-10 h-[250px] xs:h-[283px] sm:h-[553px] relative">

                <div className="absolute left-0 top-20">
                    <Image src="/pricing/LeftGrPricing.png" width={856} height={815} alt="linear-gradient-top" />
                </div>
                <div className="absolute top-20 right-0 ">
                    <Image src="/pricing/RightGrPricing.png" width={856} height={815} alt="linear-gradient-bottom" />
                </div>

                <main className="top-[40%] md:top-[40%] z-30 min-h-[641px] absolute sm:px-0 sm:mt-5">
                    <div className="flex justify-center items-center flex-col gap-2 sm:gap-6 w-full">
                        <span className="font-[100px] text-center w-full font-springRainSolid text-white leading-[25px] lg:leading-[45px] text-[20px] lg:text-[35px]">
                            About Us
                        </span>
                        <h1 className="w-full text-mobHeaderTex text-centert sm:text-tabHeaderText lg:text-lapHeaderText font-bold leading-[28px] sm:leading-[35px] lg:leading-[58.85px] text-white capitalize text-center tracking-[-1px] lg:-tracking-[3px] max-w-[300px] sm:max-w-5xl">
                            Unveiling the Soul of Logo Design:
                            Your Brand&apos;s Creative Companion
                        </h1>
                        <p className="text-tabHeaderBody font-medium leading-[22px] tracking-[-1px] text-white text-center max-w-[350px] sm:max-w-[500px]">
                            Welcome to the heart of Logo Design Maker, where passionate designers and strategic thinking collide to craft memorable logos that elevate your brand.
                        </p>
                    </div>
                </main>

            </div>
            <ServiceIntro imgSrc="/services/Building Web and App Development.png" heading2="Our Story: " heading3="Fueled by Passion, Guided by Expertise " para1="Logo Design Maker wasn't born out of a boardroom meeting or a desire to replicate the status quo. It stemmed from a genuine passion for design and a frustration with the limitations of AI-generated logos. We saw businesses struggling to create unique brand identities that resonated with their target audience. " para2="Enter our team of experienced designers, each with a burning desire to bridge the gap and empower businesses with logos that tell their story. Today, we collaborate with businesses of all sizes, from budding start-ups to established enterprises, helping them achieve their branding goals through custom logo design services." withButton={true} flexDirection="flex-row" />

            <div className="pt-20 pb-10 bg-secondaryBlack">
                <DesignHeaderAtom
                    heading="Supercharge Your Brand with  Our Expertise!"
                    para="Collaborate with  logo design maker for easy and professional branding that fits your budget. With our Expertise, stand out in the market, and leave a lasting impression with instant brand recognition."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 items-center lg:grid-cols-3 gap-y-16 gap-x-8 mx-8 sm:mx-12 my-12 text-center">
                    {BoxAboutData.map((item) => <BoxAtom key={item.id} image={item.image} textPosition={item.textPosition} justifyContent={item.justifyContent} alignItems={item.alignItems} maxWidth={item.maxWidth} headingText={item.headingText} paraText={item.paraText} />)}
                </div>
            </div>


            {/* 4th section  */}
            <div>
                <main className="max-w-[1920px] mx-auto w-full items-center flex pt-10">

                    <div className={`flex flex-row-reverse text-white pt-10 pb-10 lg:pt-20 lg:pb-10 px-4 justify-center lg:justify-start sm:px-10 lg:px-20 gap-10 flex-wrap lg:flex-nowrap`}>

                        {/* first section */}
                        <div className="max-w-[900px] flex flex-col gap-4 items-center text-center lg:text-start">
                            <div className="w-full uppercase lg:text-[38px] sm:text-[25px] text-[18px] font-bold leading-[21px] sm:leading-[29px] lg:leading-[44px] tracking-[-1px] text-white ">
                                The Human Advantage:
                                <span className="text-primaryGreen">&nbsp; Why We Go Beyond AI</span>
                            </div>
                            <p className="font-normal text-mobBody sm:text-tabBody lg:text-lapBody tracking-[0.5px] leading-[18px] lg:leading-[28px] ">
                                In the age of automation, you might wonder why choose human designers over AI logo makers? The answer lies in the power of human connection and strategic thinking. Unlike AI, our designers don&apos;t just generate generic visuals. They take the time to understand your brand on a deeper level.
                            </p>

                        </div>
                    </div>
                </main>

                <main className="max-w-[1920px] mx-auto w-full justify-center items-center flex pb-10 ">
                    <div className={`flex text-white pb-20 lg:pb-20 px-4 items-center justify-center sm:px-10 lg:px-10 flex-wrap lg:flex-nowrap pt-10 `}>
                        {/* first section */}
                        {AboutImg.filter((item) => item.id === currentIndex)
                            .map((item) => {
                                return (
                                    <div key={item.id} className="md:min-w-[400px] flex justify-center items-center">
                                        <Image src={item.img} width={375} height={240} alt="AboutHumanAI" />
                                    </div>
                                )
                            })}


                        {/* second section */}
                        <section className="bg-primaryBlack mt-8 lg:mt-0 flex items-center text-white px-4 sm:px-10 lg:px-20">
                            <div className="flex flex-col max-w-[1023px] mx-auto gap-2">
                                {AboutFaqs.map((item, index) => {
                                    return (
                                        <FaqAbout
                                            key={item.id}
                                            index={index}
                                            data={item}
                                            openIndex={openIndex}
                                            setOpenIndex={setOpenIndex}
                                            setCurrentIndex={setCurrentIndex}
                                        />
                                    )
                                }
                                )}
                            </div>
                        </section>


                    </div>
                </main>
                <ServicesCTA imgSrc="/services/brand and identity design.png" heading="Ready to unlock the full potential of your brand?" para="Partner with Logo Design Maker and experience the difference a human touch can make. Contact us today to schedule a free consultation and discuss your custom logo design needs." />
            </div>

        </section>
    );
}
