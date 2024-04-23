"use client"
import ButtonAtom from "@/app/atom/ButtonAtom";
import DesignHeaderAtom from "@/app/atom/DesignHeaderAtom";
import SliderAtom from "@/app/atom/SliderAtom";
import StoryAtom from "@/app/atom/StoryAtom";
import ServicesBanner from "@/app/components/services/ServicesBanner";
import Image from "next/image";
import { useState } from "react";
import ServiceDesign from "@/app/components/services/ServiceDesign";
import ServicesCTA from "@/app/components/services/ServicesCTA";
import FaqAtom from "@/app/atom/FaqAtom";
import { faqs } from "@/data/website-and-app-design";
import { servicesDesignData1, servicesDesignData2 } from "@/data/clothing-and-merchandise";
import ServiceIntro from "@/app/components/services/ServiceIntro";

export default function ClothingMerchandise() {
    const [content, setContent] = useState(1)

    const slideData = [
        {
            para: "Logo Design Maker's expertise in t-shirt design was instrumental in launching our new clothing line. Their ability to understand our target audience and translate our vision into eye-catching designs was invaluable. We've seen a fantastic response to our new t-shirts, and they're quickly becoming a popular choice among our customers.",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker's expertise in t-shirt design was instrumental in launching our new clothing line. Their ability to understand our target audience and translate our vision into eye-catching designs was invaluable. We've seen a fantastic response to our new t-shirts, and they're quickly becoming a popular choice among our customers.",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker's expertise in t-shirt design was instrumental in launching our new clothing line. Their ability to understand our target audience and translate our vision into eye-catching designs was invaluable. We've seen a fantastic response to our new t-shirts, and they're quickly becoming a popular choice among our customers.",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
    ];


    return (
        <section className="bg-primaryBlack overflow-hidden pt-20 max-w-[1920px] mx-auto">

            <ServicesBanner heading="Wear Your Brand, Spread the Word: The Power of  " subHeading="Clothing & Merchandise Design" para="Today, clothing and merchandise go beyond function, serving as tools for self-expression, brand promotion, and community. At Logo Design Maker, we recognize their unique potential. Our expert designers craft visually stunning designs that communicate your brand message or personal style effectively." />

            <ServiceIntro imgSrc="/services/Building Web and App Development.png" heading1="From Concept to Creation: Crafting  " heading2="Wearable Stories " para1="Whether you're launching a new clothing line, creating promotional merchandise for your business, or designing personalized gifts, we're here to help you translate your vision into reality. Our designers will work closely with you to understand your target audience, brand identity, and desired aesthetic." para2="Through a collaborative process, we'll develop captivating designs that resonate with your audience, spark conversations, and leave a lasting impression." withButton={true} flexDirection="flex-row" />

            <ServiceDesign imgSrc="/services/investInBrandDesign.png" subHeading1="Beyond Function: " subHeading2="Apparel & Merchandise as Walking Billboards" heading1="From Brand Awareness to Fan Engagement: The Strategic Advantages of  " heading2="Custom Clothing & Merchandise" para="Investing in professional clothing and merchandise design goes beyond creating cool t-shirts or mugs. It's a strategic investment that delivers a range of benefits:" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData1} />

            <div>
                <div className="pt-20">
                    <DesignHeaderAtom heading="A Symphony of" subHeading=" Design Solutions for Your Apparel & Merchandise" para="We offer a comprehensive range of clothing and merchandise design services to cater to your specific needs. Here's a glimpse into how we can help you breathe life into your wearable creations:" />
                </div>
                <div className="tellStoryContent sm:px-10 lg:px-20 w-full pb-20">
                    <StoryAtom setContent={setContent} content={content} />
                    <div className="w-full flex flex-col-reverse gap-12 md:gap-0 md:flex-row justify-evenly items-center">
                        <div className="w-3/3">
                            <div className="flex flex-col items-center md:items-start text-center md:text-start gap-2 mb-6">
                                <div className="max-w-[280px] sm:max-w-[380px] lg:max-w-[600px] lg:text-[38px] sm:text-[25px] text-[18px] font-bold leading-[21px] sm:leading-[29px] lg:leading-[44px] tracking-[-1px] text-white gap-4 md:gap-0">
                                    Sticker Design
                                </div>
                                <p className="max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] mx-auto lg:text-[16px] sm:text-[12px] text-[12px] lg:leading-[28px]  sm:leading-[18px] leading-[18px] text-primaryGray px-4 sm:px-0 lg:px-0">
                                    Small but mighty, stickers are a versatile way to express your brand or personality. Our designers will create eye-catching sticker designs that are perfect for product packaging, promotional giveaways, or simply adding a touch of personality to laptops, water bottles, and other everyday items. From playful illustrations to bold typography, we&apos;ll ensure your stickers leave a lasting impression wherever they&apos;re placed.
                                </p>
                            </div>
                            <div className="w-full mx-auto text-center md:text-start">
                                <ButtonAtom title="Get Started Now" />
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <Image src="/services/ServicesSliderImg.png" alt="services slider" width={300} height={400} />
                        </div>
                        <div className="block md:hidden">
                            <Image src="/services/ServiceSliderImgMob.png" alt="services slider" width={300} height={400} />
                        </div>
                    </div>
                </div>
            </div>

            <SliderAtom slideData={slideData} />

            <ServiceDesign imgSrc="/services/smart-equity-financing-agreement-for-startup.png" heading1="Ready to unleash the power of " heading2="clothing and merchandise design?" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData2} />

            <div className=" mt-8 sm:mt-32 md:mt-44">
                <ServicesCTA imgSrc="/services/smart-analytical-data-on-an-open-laptop.png" heading="Fuel Your Brand's Growth or Express Yourself in Style: Take Action Today!" para="Investing in professional clothing and merchandise design is an investment in building brand awareness, fostering community spirit, or simply expressing your unique style. At Logo Design Maker, we offer a variety of design packages to suit your specific needs and budget. Let our experienced designers help you create visually captivating designs for your clothing and merchandise that not only look great but also effectively communicate your message and leave a lasting impression." />
            </div>

            <FaqAtom faqs={faqs} />

        </section>
    )
}