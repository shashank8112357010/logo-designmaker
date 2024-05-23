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
import ServiceIntro from "@/app/components/services/ServiceIntro";
import { servicesDesignData1, servicesDesignData2, tellStoryContent } from "@/data/social-media-design";
import Faqq from "@/app/atom/Faqq";
import TellStoryContent from "@/app/components/home/tellStory/TellStoryContent";

export default function SociaMediaDesign() {
    const [content, setContent] = useState(1)

    const slideData = [
        {
            para: "Logo Design Maker's social media design services have been a game-changer for my business. Their team developed a cohesive visual strategy and created stunning social media graphics that perfectly capture our brand personality. Since working with them, we've seen a significant increase in social media engagement, website traffic, and brand awareness.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker's social media design services have been a game-changer for my business. Their team developed a cohesive visual strategy and created stunning social media graphics that perfectly capture our brand personality. Since working with them, we've seen a significant increase in social media engagement, website traffic, and brand awareness.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker's social media design services have been a game-changer for my business. Their team developed a cohesive visual strategy and created stunning social media graphics that perfectly capture our brand personality. Since working with them, we've seen a significant increase in social media engagement, website traffic, and brand awareness.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
    ];

    return (
        <section className="bg-primaryBlack overflow-hidden pt-20 max-w-[1920px] mx-auto">

            <ServicesBanner heading="Spark Conversations, Fuel Engagement: The Power of " subHeading="Social Media Design" para="In today's digital era, social media is king for brand awareness and audience connection. To stand out, captivating visuals are key. At Logo Design Maker, we specialize in crafting attention-grabbing designs that elevate your social media presence." />

            <ServiceIntro imgSrc="/services/Building Web and App Development.png" heading1="Capture Attention, Cultivate Connections: " heading2="Social Media  " heading3="as Your Brand's Playground" para1="Effective social media design goes beyond simply creating aesthetically pleasing graphics. It's about crafting a cohesive visual narrative that resonates with your target audience and aligns with your brand identity. Our team of experienced social media designers will work closely with you to understand your brand voice, target demographics, and social media goals." para2="Through this collaborative process, we'll develop a social media design strategy that utilizes captivating visuals to tell your brand story, engage your audience, and ultimately drive desired results, whether it's brand awareness, lead generation, or increased sales." withButton={true} flexDirection="flex-row" />

            <ServiceDesign imgSrc="/services/investInBrandDesign.png" subHeading1="Beyond Likes & Shares: " subHeading2="Building Visual Stories" heading1="Beyond Likes & Shares: The Strategic Advantages of Compelling  " heading2="Social Media Design" para="Investing in professional social media design offers more than just creating pretty pictures. It's a strategic investment that delivers a range of benefits for your brand:" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData1} />

            <div>
                <div className="pt-20">
                    <DesignHeader heading="A Symphony of" subHeading="Social Media Design Solutions" para="We offer a diverse range of social media design services to cater to your specific needs and platforms. Here's a closer look at how we can help you craft a visually stunning social media presence:
" />
                </div>
                <div className="tellStoryContent flex flex-col-reverse md:flex-col sm:px-10 lg:px-20 w-full pb-20">
                    <Story setContent={setContent} content={content} arrayData={[1, 2, 3, 4]} />
                    {content && <TellStoryContent content={content} tellStoryContent={tellStoryContent} rowReverse={true} />}
                </div>
            </div>

            <Sliderr slideData={slideData} />

            <ServiceDesign imgSrc="/services/smart-equity-financing-agreement-for-startup.png" heading1="Ready to unleash the power of " heading2="social media design?" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData2} />

            <div className=" mt-8 sm:mt-32 md:mt-44">
                <ServicesCTA imgSrc="/services/smart-analytical-data-on-an-open-laptop.png" heading="Fuel Your Brand's Growth: Take Action Today!" para="Investing in professional social media design is an investment in building a thriving online presence. At Logo Design Maker, we offer a variety of design packages to suit your specific needs and budget. Let our experienced designers craft captivating social media visuals that capture attention, ignite conversations, and propel your brand to social media stardom!
" />
            </div>

            <Faqq faqs={faqs} />

        </section>
    )
}