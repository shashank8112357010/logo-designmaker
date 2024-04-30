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
import { servicesDesignData1, servicesDesignData2 } from "@/data/illustration-and-art";
import ServiceIntro from "@/app/components/services/ServiceIntro";

export default function IllustrationArt() {
    const [content, setContent] = useState(1)

    const slideData = [
        {
            para: "Logo Design Maker's illustration services were instrumental in creating a playful and engaging character for our children's book series. The artist perfectly captured the essence of our characters and brought them to life with vibrant illustrations. We've received rave reviews from parents and children alike, and the success of the series is in large part due to the captivating illustrations.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker's illustration services were instrumental in creating a playful and engaging character for our children's book series. The artist perfectly captured the essence of our characters and brought them to life with vibrant illustrations. We've received rave reviews from parents and children alike, and the success of the series is in large part due to the captivating illustrations.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker's illustration services were instrumental in creating a playful and engaging character for our children's book series. The artist perfectly captured the essence of our characters and brought them to life with vibrant illustrations. We've received rave reviews from parents and children alike, and the success of the series is in large part due to the captivating illustrations.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
    ];

    return (
        <section className="bg-primaryBlack overflow-hidden pt-20 max-w-[1920px] mx-auto">

            <ServicesBanner heading="Breathe Life into Your Brand: The Power of " subHeading="Illustration & Art" para="In a crowded world of information, visuals cut through the noise and make a lasting impact. At Logo Design Maker, we harness the storytelling power of illustration and art. Our talented artists craft captivating illustrations, creative graphics, and unique character designs, elevating your brand identity and forging deeper audience connections." />

            <ServiceIntro imgSrc="/services/Building Web and App Development.png" heading1="Beyond Text & Photos: The Art of Storytelling Through " heading2=" Illustration" para1="Whether you need eye-catching illustrations for your website, engaging graphics for your marketing materials, or a one-of-a-kind mascot for your brand, we're here to help. Our illustration and art services are tailored to your specific needs and vision." para2="Through a collaborative process, we'll get to know your brand identity, target audience, and desired aesthetic. Our artists will then translate your vision into captivating visuals that resonate with your audience and leave a lasting impression." withButton={true} flexDirection="flex-row" />

            <ServiceDesign imgSrc="/services/investInBrandDesign.png" subHeading1="From Concept to Creation: " subHeading2="Crafting Visual Narratives" heading1="From Brand Resonance to Business Results: The Strategic Advantages of " heading2="Illustration & Art" para="Investing in professional illustration and art goes beyond creating beautiful visuals. It's a strategic investment that delivers a range of benefits for your brand:" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData1} />

            <div>
                <div className="pt-20">
                    <DesignHeader heading="A Symphony of " subHeading="Illustration & Art Solutions" para="We offer a diverse range of illustration and art services to cater to your specific brand needs. Here's a glimpse into how we can help you tell your brand story through the power of visuals:" />
                </div>
                <div className="tellStoryContent sm:px-10 lg:px-20 w-full pb-20">
                    <Story setContent={setContent} content={content} />
                    <div className="w-full flex flex-col-reverse gap-12 md:gap-0 md:flex-row justify-evenly items-center">
                        <div className="w-3/3">
                            <div className="flex flex-col items-center md:items-start text-center md:text-start gap-2 mb-6">
                                <div className="max-w-[280px] sm:max-w-[380px] lg:max-w-[600px] lg:text-[38px] sm:text-[25px] text-[18px] font-bold leading-[21px] sm:leading-[29px] lg:leading-[44px] tracking-[-1px] text-white gap-4 md:gap-0">
                                    Card Design or Invitation Design
                                </div>
                                <p className="max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] mx-auto lg:text-[16px] sm:text-[12px] text-[12px] lg:leading-[28px]  sm:leading-[18px] leading-[18px] text-primaryGray px-4 sm:px-0 lg:px-0">
                                    Make a lasting first impression with beautifully designed cards or invitations. Whether it&apos;s a custom business card, a playful greeting card, or an elegant wedding invitation, our designers will create unique and visually captivating designs that perfectly reflect the occasion or your brand identity. From playful illustrations to elegant typography, we&apos;ll ensure your cards or invitations leave a memorable mark on the recipient.
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

            <ServiceDesign imgSrc="/services/smart-equity-financing-agreement-for-startup.png" heading1="Ready to unleash the power of " heading2="illustration and art " heading3="for your brand?" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData2} />

            <div className="mt-28 sm:mt-52">
                <ServicesCTA imgSrc="/services/smart-analytical-data-on-an-open-laptop.png" heading="Fuel Your Brand's Growth: Take Action Today!" para="Investing in professional illustration and art services is an investment in building a memorable brand identity. At Logo Design Maker, we offer a variety of illustration and art packages to suit your specific needs and budget. Let our talented artists help you tell your brand story through captivating visuals that connect with your audience and leave a lasting impression.
" />
            </div>

            <Faq faqs={faqs} />

        </section>
    )
}