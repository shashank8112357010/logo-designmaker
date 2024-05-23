
"use client"
import DesignHeader from "@/app/atom/DesignHeader";
import Sliderr from "@/app/atom/Slider";
import Story from "@/app/atom/Story";
import ServicesBanner from "@/app/components/services/ServicesBanner";
import { useState } from "react";
import ServiceDesign from "@/app/components/services/ServiceDesign";
import ServicesCTA from "@/app/components/services/ServicesCTA";
import { faqs } from "@/data/website-and-app-design";
import { servicesDesignData1, servicesDesignData2, tellStoryContent } from "@/data/brand-and-identity-design";
import Faqq from "@/app/atom/Faqq";
import TellStoryContent from "@/app/components/home/tellStory/TellStoryContent";
import Button from "@/app/atom/Button";

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
                    <DesignHeader heading="Crafting a Seamless Brand Experience with" subHeading="Logo Design Maker" para="At Logo Design Maker, we create impactful brand identities beyond just logos. Our experienced team collaborates closely with you to craft visually stunning designs that resonate with your audience and drive business growth." />
                </div>
                <div className="tellStoryContent flex flex-col-reverse md:flex-col sm:px-10 lg:px-20 w-full pb-20">
                    <Story setContent={setContent} content={content} arrayData={[1, 2, 3, 4, 5, 6, 7]} />
                    {content && <TellStoryContent content={content} tellStoryContent={tellStoryContent} rowReverse={true} />}
                </div>
            </div>

            <Sliderr slideData={slideData} />


            <ServiceDesign imgSrc="/services/brand and identity design.png" heading1="Ready to unlock the power of exceptional " heading2="Brand Identity design?" flexDirection="flex-row" servicesDesignData={servicesDesignData2} />

            <ServicesCTA imgSrc="/services/smart-business-plan-and-corporate-strategy.png" heading="Ready to Elevate Your Brand Experience?" para="Investing in a professional brand identity design is an investment in your business's future. At Logo Design Maker, we offer a variety of branding services to suit your specific needs and budget. Whether you're looking for a standalone logo design or a comprehensive brand identity package, our team is here to help you create a memorable and impactful brand experience." />

            <Faqq faqs={faqs} />

        </section>
    )
}