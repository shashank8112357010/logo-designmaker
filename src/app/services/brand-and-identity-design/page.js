
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
import { servicesDesignData1, servicesDesignData2 } from "@/data/brand-and-identity-design";

export default function BrandIdentityDesign() {
    const [content, setContent] = useState(1)

    const slideData = [
        {
            para: "Logo Design Maker completely transformed my brand identity! From the initial consultation to the final design, the process was smooth and collaborative. They truly captured the essence of my brand and created a cohesive visual experience that resonates with my target audience. I highly recommend their services to anyone looking to elevate their brand.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker completely transformed my brand identity! From the initial consultation to the final design, the process was smooth and collaborative. They truly captured the essence of my brand and created a cohesive visual experience that resonates with my target audience. I highly recommend their services to anyone looking to elevate their brand.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker completely transformed my brand identity! From the initial consultation to the final design, the process was smooth and collaborative. They truly captured the essence of my brand and created a cohesive visual experience that resonates with my target audience. I highly recommend their services to anyone looking to elevate their brand.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
    ];

    return (
        <section className="bg-primaryBlack overflow-hidden pt-20 max-w-[1920px] mx-auto">

            <ServicesBanner heading="Elevate Your Brand Experience: The Power of " subHeading="Brand & Identity Design" para="In today's market, a robust brand identity is essential, not optional. It defines your brand story, influences customer perception, and cultivates loyalty. From visuals to messaging, it's your brand's essence, making a lasting impression and distinguishing you from competitors." />

            <ServiceDesign imgSrc="/services/investInBrandDesign.png" subHeading1="Beyond the Logo: Building a " subHeading2="Cohesive Brand Identity" heading1="Why Invest in " heading2="Brand Identity Design?" para="A well-crafted brand identity isn't just about aesthetics; it's a strategic investment that delivers tangible benefits. Here's how:" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData1} />

            <div>
                <div className="pt-20">
                    <DesignHeaderAtom heading="Crafting a Seamless Brand Experience with" subHeading="Logo Design Maker" para="At Logo Design Maker, we create impactful brand identities beyond just logos. Our experienced team collaborates closely with you to craft visually stunning designs that resonate with your audience and drive business growth." />
                </div>
                <div className="tellStoryContent sm:px-10 lg:px-20 w-full pb-20">
                    <StoryAtom setContent={setContent} content={content} />
                    <div className="w-full flex flex-col-reverse gap-12 md:gap-0 md:flex-row justify-evenly items-center">
                        <div className="w-3/3">
                            <div className="flex flex-col items-center md:items-start text-center md:text-start gap-2 mb-6">
                                <div className="max-w-[280px] sm:max-w-[380px] lg:max-w-[600px] lg:text-[38px] sm:text-[25px] text-[18px] font-bold leading-[21px] sm:leading-[29px] lg:leading-[44px] tracking-[-1px] text-white gap-4 md:gap-0">
                                    Stationery Design
                                </div>
                                <p className="max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] mx-auto lg:text-[16px] sm:text-[12px] text-[12px] lg:leading-[28px]  sm:leading-[18px] leading-[18px] text-primaryGray px-4 sm:px-0 lg:px-0">
                                    Elevate your business communications beyond the digital realm with a suite of custom-designed stationery. Our designers will create a cohesive set of letterheads, envelopes, and invoices that seamlessly integrate with your overall brand identity. Imagine the impact of crafting a handwritten note to a client on a letterhead that beautifully showcases your logo, color palette, and typography. This attention to detail reinforces professionalism and builds trust with your audience, leaving a lasting and positive impression.
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


            <ServiceDesign imgSrc="/services/brand and identity design.png" heading1="Ready to unlock the power of exceptional " heading2="Brand Identity design?" flexDirection="flex-row" servicesDesignData={servicesDesignData2} />

            <ServicesCTA imgSrc="/services/smart-business-plan-and-corporate-strategy.png" heading="Ready to Elevate Your Brand Experience?" para="Investing in a professional brand identity design is an investment in your business's future. At Logo Design Maker, we offer a variety of branding services to suit your specific needs and budget. Whether you're looking for a standalone logo design or a comprehensive brand identity package, our team is here to help you create a memorable and impactful brand experience." />

            <FaqAtom faqs={faqs} />

        </section>
    )
}