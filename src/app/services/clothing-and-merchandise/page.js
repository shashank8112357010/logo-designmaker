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
import { servicesDesignData1, servicesDesignData2, tellStoryContent } from "@/data/clothing-and-merchandise";
import ServiceIntro from "@/app/components/services/ServiceIntro";
import Faqq from "@/app/atom/Faqq";
import TellStoryContent from "@/app/components/home/tellStory/TellStoryContent";

export default function ClothingMerchandise() {
    const [content, setContent] = useState(1)

    const slideData = [
        {
            para: "Logo Design Maker's expertise in t-shirt design was instrumental in launching our new clothing line. Their ability to understand our target audience and translate our vision into eye-catching designs was invaluable. We've seen a fantastic response to our new t-shirts, and they're quickly becoming a popular choice among our customers.",
            name: "Sarah Jones",
            img: "/home/TestimonialAvtar.png",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker's expertise in t-shirt design was instrumental in launching our new clothing line. Their ability to understand our target audience and translate our vision into eye-catching designs was invaluable. We've seen a fantastic response to our new t-shirts, and they're quickly becoming a popular choice among our customers.",
            name: "Sarah Jones",
            img: "/home/TestimonialAvtar.png",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker's expertise in t-shirt design was instrumental in launching our new clothing line. Their ability to understand our target audience and translate our vision into eye-catching designs was invaluable. We've seen a fantastic response to our new t-shirts, and they're quickly becoming a popular choice among our customers.",
            name: "Sarah Jones",
            img: "/home/TestimonialAvtar.png",
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
                    <DesignHeader heading="A Symphony of" subHeading=" Design Solutions for Your Apparel & Merchandise" para="We offer a comprehensive range of clothing and merchandise design services to cater to your specific needs. Here's a glimpse into how we can help you breathe life into your wearable creations:" />
                </div>
                <div className="tellStoryContent flex flex-col-reverse md:flex-col sm:px-10 lg:px-20 w-full pb-20">
                    <Story setContent={setContent} content={content} arrayData={[1, 2, 3, 4, 5, 6]} />
                    {content && <TellStoryContent content={content} tellStoryContent={tellStoryContent} rowReverse={true} />}
                </div>
            </div>

            <Sliderr slideData={slideData} />

            <ServiceDesign imgSrc="/services/smart-equity-financing-agreement-for-startup.png" heading1="Ready to unleash the power of " heading2="clothing and merchandise design?" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData2} />

            <div className=" mt-8 sm:mt-32 md:mt-44">
                <ServicesCTA imgSrc="/services/smart-analytical-data-on-an-open-laptop.png" heading="Fuel Your Brand's Growth or Express Yourself in Style: Take Action Today!" para="Investing in professional clothing and merchandise design is an investment in building brand awareness, fostering community spirit, or simply expressing your unique style. At Logo Design Maker, we offer a variety of design packages to suit your specific needs and budget. Let our experienced designers help you create visually captivating designs for your clothing and merchandise that not only look great but also effectively communicate your message and leave a lasting impression." />
            </div>

            <Faqq faqs={faqs} />

        </section>
    )
}