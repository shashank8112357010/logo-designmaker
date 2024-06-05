"use client"
import DesignHeader from "@/app/atom/DesignHeader";
import Sliderr from "@/app/atom/Slider";
import Story from "@/app/atom/Story";
import ServicesBanner from "@/app/components/services/ServicesBanner";
import { useState } from "react";
import ServicesCTA from "@/app/components/services/ServicesCTA";
import { faqs } from "@/data/website-and-app-design";
import { servicesDesignData1, servicesDesignData2, tellStoryContent } from "@/data/clothing-and-merchandise";
import ServiceIntro from "@/app/components/services/ServiceIntro";
import Faqq from "@/app/atom/Faqq";
import TellStoryContent from "@/app/components/home/tellStory/TellStoryContent";
import ServiceDesign from "@/app/components/services/ServiceDesign";

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

            <ServicesBanner heading="Wear Your Brand, Spread the Word: The Power of  " subHeading="Clothing & Merchandise Design" para={<span>Clothes and goods now  days serve purposes beyond their original intent. They are today potent instruments for community development, brand marketing, and self-expression.<strong> Custom clothing and merchandise design</strong> has a special potential, which we at Logo Design Maker recognize.</span>} />

            <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="From Concept to Creation: Crafting  " heading2="Wearable Stories " para1={<span>Whether you&apos;re launching a new clothing line, creating promotional <strong> merchandise for your business </strong>, or designing personalized gifts, we&apos;re here to help you translate your vision into reality. Our designers will work closely with you to understand your target audience, brand identity, and desired aesthetic.</span>} para2="Through a collaborative process, well develop captivating designs that resonate with your audience, spark conversations, and leave a lasting impression." withButton={true} flexDirection="flex-row" />

            <ServiceDesign imgSrc="/services/SocialMediaDesignBeyond.png" subHeading1="Beyond Function: " subHeading2="Apparel & Merchandise as Walking Billboards" heading1="The Strategic Benefits of " heading2="Custom Clothing & Merchandise" heading3=": From Brand Awareness to Fan Involvement" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData1} />

            <div>
                <div className="pt-20">
                    <DesignHeader heading="For Your " subHeading=" Clothing and Merchandise" subHeading2=", a Symphony of Design Solutions" para="We provide a full spectrum of services for product and clothes design to meet your particular requirements. This is a sneak peek of how we can assist you in giving your wearable inventions life" />
                </div>
                <div className="tellStoryContent flex flex-col-reverse md:flex-col sm:px-10 lg:px-20 w-full pb-20">
                    <Story setContent={setContent} content={content} arrayData={[1, 2, 3, 4, 5]} />
                    {content && <TellStoryContent content={content} tellStoryContent={tellStoryContent} rowReverse={true} />}
                </div>
            </div>

            <Sliderr slideData={slideData} />

            <ServiceDesign imgSrc="/services/SocialMediaDesignEarth.png" heading1="Get Started Now to Grow Your Brand or Express Yourself " heading2="Stylishly!" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData2} />

            <div className="mt-8 sm:mt-32 md:mt-44">
                <ServicesCTA imgSrc="/services/SocialMediaDesignFuel.png" heading={<span>Ready to unleash the power of clothing and merchandise design?</span>} para={<span>Don&apos;t become part of the throng. Using personalized apparel and products created by <strong>Logo Design Maker</strong>, make a statement and stand out.<strong> Get in touch with us</strong> now and together we can turn your concepts into wearable masterpieces!</span>} />
            </div>

            <Faqq faqs={faqs} />

        </section>
    )
}