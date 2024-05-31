"use client"
import Button from "@/app/atom/Button";
import DesignHeader from "@/app/atom/DesignHeader";
import Sliderr from "@/app/atom/Slider";
import Story from "@/app/atom/Story";
import ServicesBanner from "@/app/components/services/ServicesBanner";
import { useState } from "react";
import ServicesCTA from "@/app/components/services/ServicesCTA";
import { faqs } from "@/data/website-and-app-design";
import { servicesDesignData1, servicesDesignData2, tellStoryContent } from "@/data/illustration-and-art";
import ServiceIntro from "@/app/components/services/ServiceIntro";
import Faqq from "@/app/atom/Faqq";
import TellStoryContent from "@/app/components/home/tellStory/TellStoryContent";
import ServiceDesign from "@/app/components/services/ServiceDesign";

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

            <ServicesBanner heading="Breathe Life into Your Brand: The Power of " subHeading="Illustration & Art" para={<span>Visuals have the ability to cut through the clutter and make an impact in a world overflowing with information. We at Logo Design Maker recognize the special storytelling potential of art and illustration. Our staff of skilled <strong>graphic design artists </strong> can produce character designs that not only improve your visual identity but also deepen your connection with your audience, as well as <strong>illustrations for websites.</strong></span>} />

            <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="Creating Visual Narratives from " heading2=" Concept to Creation" para1={<span>We can help with everything from unique mascots for your business to eye-catching illustrations for your website and interesting graphics for your marketing materials. Our <strong> graphic design and illustration </strong> services are customized to your vision and demands.</span>} para2="By working together, we will learn about your target market, ideal aesthetic, and brand identity. Your idea will then be translated by our artists into visually stunning images that will captivate your audience and make an impression." withButton={true} flexDirection="flex-row" />

            <ServiceDesign imgSrc="/services/illustrationDesgin.png" subHeading1="From Concept to Creation: " subHeading2="Crafting Visual Narratives" heading1="Business Results to Brand Resonance: The Strategic Benefits of " heading2="Art and Illustration" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData1} />

            <div>
                <div className="pt-20">
                    <DesignHeader heading="An " subHeading="Illustration & Art " subHeading2="Solutions Symphony" para="We provide a wide selection of design and illustration services to suit your particular brand requirements. Here's a sneak peek at how we can use images to help you communicate your brand story" />
                </div>
                <div className="tellStoryContent flex flex-col-reverse md:flex-col sm:px-10 lg:px-20 w-full pb-20">
                    <Story setContent={setContent} content={content} arrayData={[1, 2, 3, 4, 5]} />
                    {content && <TellStoryContent content={content} tellStoryContent={tellStoryContent} rowReverse={true} />}
                </div>
            </div>

            <Sliderr slideData={slideData} />

            <ServiceDesign imgSrc="/services/readyToUnleash.png" heading1="Boost the Development of Your " heading2="Brand " heading3=": Act Right Now!" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData2} />

            <div className="mt-0 md:mt-28">
                <ServicesCTA imgSrc="/services/takeYourAction.png" heading="All set to give your brand the power of art and illustration?" para="Tell your brand narrative, but make it visual! Work with Logo Design Maker to let our group of gifted artists to bring your brand to life with eye-catching images and distinctive graphics that enthrall your audience and take your business to new heights. Contact us now to start creating a work of art based on your brand identity!" />
            </div>

            <Faqq faqs={faqs} />

        </section>
    )
}