"use client"
import DesignHeader from "@/app/atom/DesignHeader";
import Sliderr from "@/app/atom/Slider";
import Story from "@/app/atom/Story";
import ServicesBanner from "@/app/components/services/ServicesBanner";
import { useState } from "react";
import ServicesCTA from "@/app/components/services/ServicesCTA";
import { faqs } from "@/data/website-and-app-design";
import ServiceIntro from "@/app/components/services/ServiceIntro";
import { servicesDesignData1, servicesDesignData2, tellStoryContent } from "@/data/social-media-design";
import Faqq from "@/app/atom/Faqq";
import TellStoryContent from "@/app/components/home/tellStory/TellStoryContent";
import ServiceDesign from "@/app/components/services/ServiceDesign";

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

            <ServicesBanner heading="Stand Out in the Crowd with Captivating Visuals" subHeading="Social Media Design" para={<span>Social media rules the modern digital world. It&apos;s a thriving area to increase brand recognition, establish relationships with your intended market, and foster a devoted following. How, though, do you distinguish yourself? Key is <strong> social media design! </strong> Offering complete <strong> social media design services</strong>, Logo Design Maker also provides <strong>social media graphic design</strong> and <strong>social media post design</strong>. We create visually striking content that draws in viewers, starts discussions, and elevates your social media profile.</span>} />

            <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="Building Visual Stories Beyond " heading2="Likes and Shares" para1={<span> <strong>Social media graphic design </strong> that works goes beyond just producing visually appealing images. It&apos;s about creating a unified visual story that fits with your brand identity and speaks to your intended audience. Working directly with you, our team of skilled<strong> social media designers</strong> will ascertain your target demographics, social media objectives, and brand voice.</span>} para2={<span>Through this cooperative process, we will create a successful<strong> social media design strategy </strong>that uses eye-catching images to connect your audience, communicate your brand story, and eventually provide the desired outcomes—increased sales, lead generation, or brand exposure.</span>} withButton={true} flexDirection="flex-row" />

            <ServiceDesign imgSrc="/services/SocialMediaDesignBeyond.png" subHeading1="Beyond Likes & Shares: " subHeading2="Building Visual Stories" heading1="Above and Beyond Likes and Shares: The Strategic Benefits of Engaging " heading2="Social Media Design" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData1} />

            <div>
                <div className="pt-20">
                    <DesignHeader heading="A Symphony of" subHeading="Social Media Design" subHeading2=" Options" para={<span>We provide a broad selection of <strong> social media design services </strong> to suit your particular requirements and platforms. A closer look at how we could assist you in creating an eye-catching social media presence follows:</span>} />
                </div>
                <div className="tellStoryContent flex flex-col-reverse md:flex-col sm:px-10 lg:px-20 w-full pb-20">
                    <Story setContent={setContent} content={content} arrayData={[1, 2, 3, 4]} />
                    {content && <TellStoryContent content={content} tellStoryContent={tellStoryContent} rowReverse={true} />}
                </div>
            </div>

            <Sliderr slideData={slideData} />

            <ServiceDesign imgSrc="/services/SocialMediaDesignEarth.png" heading1="Start Growing Your " heading2=" Brand Right Now!" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData2} />

            <div className=" mt-8 sm:mt-32 md:mt-44">
                <ServicesCTA imgSrc="/services/SocialMediaDesignFuel.png" heading="Fuel Your Brand's Growth: Take Action Today!" para="Never become part of the background noise. Using visually striking social media graphics created by Logo Design Maker, stand out from the competition. Make contact with us now to turn your social media presence into a brand-growth and engagement magnet!" />
            </div>

            <Faqq faqs={faqs} />

        </section>
    )
}