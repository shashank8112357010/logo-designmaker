"use client"
import Button from "@/app/atom/Button";
import DesignHeader from "@/app/atom/DesignHeader";
import Sliderr from "@/app/atom/Slider";
import Story from "@/app/atom/Story";
import ServicesBanner from "@/app/components/services/ServicesBanner";
import Image from "next/image";
import { useState } from "react";
import ServiceDesign from "@/app/components/services/ServiceDesign";
import ServicesCTA from "@/app/components/services/ServicesCTA";
import Faq from "@/app/atom/Faqq";
import { faqs } from "@/data/website-and-app-design";
import { servicesDesignData1, servicesDesignData2 } from "@/data/business-and-advertising-designs";

export default function BusinessAdvertisingDesigns() {
    const [content, setContent] = useState(1)

    const slideData = [
        {
            para: "Logo Design Maker's expertise in brochure design was instrumental in creating a high-quality marketing tool for our business. Their ability to understand our target audience and translate our vision into a visually appealing and informative brochure has resulted in a significant increase in customer inquiries. We're incredibly pleased with the results and highly recommend Logo Design Maker's design services.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker's expertise in brochure design was instrumental in creating a high-quality marketing tool for our business. Their ability to understand our target audience and translate our vision into a visually appealing and informative brochure has resulted in a significant increase in customer inquiries. We're incredibly pleased with the results and highly recommend Logo Design Maker's design services.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker's expertise in brochure design was instrumental in creating a high-quality marketing tool for our business. Their ability to understand our target audience and translate our vision into a visually appealing and informative brochure has resulted in a significant increase in customer inquiries. We're incredibly pleased with the results and highly recommend Logo Design Maker's design services.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
    ];


    return (
        <section className="bg-primaryBlack overflow-hidden pt-20 max-w-[1920px] mx-auto">

            <ServicesBanner heading="Design that Drives Results: The Power of  " subHeading="Business & Marketing Materials" para="In the competitive business world, standing out is crucial. At Logo Design Maker, we specialize in creating compelling visuals that captivate your audience. From presentations to ads to brochures, our experienced team ensures your brand message shines through." />

            <ServiceDesign imgSrc="/services/investInBrandDesign.png" subHeading1="Beyond Aesthetics: Design that Tells a " subHeading2="Strategic Story" heading1="From Presentations to Promotions: Design that Captures " heading2="Attention & Fuels Action" para="Investing in professional business and marketing materials design goes beyond creating visually appealing brochures or presentations. It's a strategic investment that delivers a range of benefits:" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData1} />

            <div>
                <div className="pt-20">
                    <DesignHeader heading="A Symphony of" subHeading=" Design Solutions for Your Apparel & Merchandise" para="We offer a comprehensive range of clothing and merchandise design services to cater to your specific needs. Here's a glimpse into how we can help you breathe life into your wearable creations:" />
                </div>
                <div className="tellStoryContent sm:px-10 lg:px-20 w-full pb-20">
                    <Story setContent={setContent} content={content} />
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
                                <Button title="Get Started Now" />
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

            <Sliderr slideData={slideData} />

            <ServiceDesign imgSrc="/services/smart-equity-financing-agreement-for-startup.png" heading1="Ready to unleash the power of " heading2="clothing and merchandise design?" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData2} />

            <div className=" mt-8 sm:mt-32 md:mt-44">
                <ServicesCTA imgSrc="/services/smart-analytical-data-on-an-open-laptop.png" heading="Fuel Your Business Growth with Design that Drives Results: Take Action Today!" para="Investing in professional business and marketing materials design is an investment in your brand's success. At Logo Design Maker, we offer a comprehensive suite of design services to cater to your specific needs and marketing goals. Our experienced designers can create visually compelling designs that not only grab attention but also effectively communicate your message and inspire action." />
            </div>

            <Faq faqs={faqs} />

        </section>
    )
}