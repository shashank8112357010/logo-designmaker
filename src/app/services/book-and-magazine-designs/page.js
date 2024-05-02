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
import { faqs } from "@/data/website-and-app-design";
import { servicesDesignData1, servicesDesignData2 } from "@/data/book-and-magazine-designs";
import Faqq from "@/app/atom/Faqq";

export default function BookMagazineDesigns() {
    const [content, setContent] = useState(1)

    const slideData = [
        {
            para: "Logo Design Maker's book cover design expertise was instrumental in the success of my debut novel. Their understanding of genre conventions and ability to translate my vision into a captivating design helped my book stand out on bookstore shelves and online retailers. Since the release of the book, I've seen a significant increase in sales and reader engagement.",
            name: "Sarah Jones",
            img: "/home/TestimonialAvtar.png",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker's book cover design expertise was instrumental in the success of my debut novel. Their understanding of genre conventions and ability to translate my vision into a captivating design helped my book stand out on bookstore shelves and online retailers. Since the release of the book, I've seen a significant increase in sales and reader engagement.",
            name: "Sarah Jones",
            img: "/home/TestimonialAvtar.png",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker's book cover design expertise was instrumental in the success of my debut novel. Their understanding of genre conventions and ability to translate my vision into a captivating design helped my book stand out on bookstore shelves and online retailers. Since the release of the book, I've seen a significant increase in sales and reader engagement.",
            name: "Sarah Jones",
            img: "/home/TestimonialAvtar.png",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
    ];


    return (
        <section className="bg-primaryBlack overflow-hidden pt-20 max-w-[1920px] mx-auto">

            <ServicesBanner heading="Captivate Readers, Fuel Imagination: Unleash the Power of " subHeading="Book & Magazine Design" para="In publishing, first impressions matter. At Logo Design Maker, we create captivating book covers and magazine layouts that grab attention and accurately represent your content. With our eye-catching visuals and captivating typography, we'll entice readers and boost sales." />

            <ServiceDesign imgSrc="/services/investInBrandDesign.png" subHeading1="Beyond Aesthetics: " subHeading2=" Design that Tells a Story" heading1="The Power of the First Look: Design that Ignites " heading2="Curiosity and Drives Sales" para="Investing in professional book and magazine design offers more than just a pretty cover or layout. It's a strategic investment that delivers a range of benefits for your publication:" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData1} />

            <div>
                <div className="pt-20">
                    <DesignHeader heading="A Symphony of Design Solutions for" subHeading=" Your Publication" para="We offer a range of book and magazine design services to cater to your specific needs. Here's a closer look at how we can help you create a publication that stands out on the shelf or in the digital landscape:" />
                </div>
                <div className="tellStoryContent sm:px-10 lg:px-20 w-full pb-20">
                    <Story setContent={setContent} content={content} />
                    <div className="w-full flex flex-col-reverse gap-12 md:gap-0 md:flex-row justify-evenly items-center">
                        <div className="w-3/3">
                            <div className="flex flex-col items-center md:items-start text-center md:text-start gap-2 mb-6">
                                <div className="max-w-[280px] sm:max-w-[380px] lg:max-w-[600px] lg:text-[38px] sm:text-[25px] text-[18px] font-bold leading-[21px] sm:leading-[29px] lg:leading-[44px] tracking-[-1px] text-white gap-4 md:gap-0">
                                    Magazine Design
                                </div>
                                <p className="max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] mx-auto lg:text-[16px] sm:text-[12px] text-[12px] lg:leading-[28px]  sm:leading-[18px] leading-[18px] text-primaryGray px-4 sm:px-0 lg:px-0">
                                    Capture the essence of your magazine and entice readers with a visually stunning and user-friendly design. Our team will create captivating layouts that showcase your articles, photographs, and advertisements in a way that is both aesthetically pleasing and easy to navigate. Whether you&apos;re launching a lifestyle magazine, a business publication, or a niche-specific periodical, we&apos;ll ensure your magazine design reflects your brand identity and engages readers from cover to cover.
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
                <ServicesCTA imgSrc="/services/smart-analytical-data-on-an-open-laptop.png" heading="Fuel Your Publication's Success: Take Action Today!" para="Investing in professional book and magazine design is an investment in the success of your publication. At Logo Design Maker, we offer a variety of design packages to suit your specific needs and budget. Let our experienced designers create a visually stunning design that not only grabs attention but also accurately reflects the essence of your publication and fuels the imagination of your readers." />
            </div>

            <Faqq faqs={faqs} />

        </section>
    )
}