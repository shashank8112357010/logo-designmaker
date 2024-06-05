"use client"
import DesignHeader from "@/app/atom/DesignHeader";
import Sliderr from "@/app/atom/Slider";
import Story from "@/app/atom/Story";
import ServicesBanner from "@/app/components/services/ServicesBanner";
import { useState } from "react";
import ServicesCTA from "@/app/components/services/ServicesCTA";
import { faqs } from "@/data/website-and-app-design";
import { servicesDesignData1, servicesDesignData2, tellStoryContent } from "@/data/packaging-and-label-designs";
import Faqq from "@/app/atom/Faqq";
import TellStoryContent from "@/app/components/home/tellStory/TellStoryContent";
import ServiceDesign from "@/app/components/services/ServiceDesign";
import ServiceIntro from "@/app/components/services/ServiceIntro";

export default function PackagingLabelDesigns() {
    const [content, setContent] = useState(1)

    const slideData = [
        {
            para: "Logo Design Maker's expertise in packaging design was instrumental in the success of our new product launch. Their ability to understand our target audience and create packaging that not only looked great but also effectively communicated our brand message resulted in a significant increase in sales. We're incredibly impressed with their creativity and professionalism, and we highly recommend their design services to anyone looking to make their products stand out on crowded shelves.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker's expertise in packaging design was instrumental in the success of our new product launch. Their ability to understand our target audience and create packaging that not only looked great but also effectively communicated our brand message resulted in a significant increase in sales. We're incredibly impressed with their creativity and professionalism, and we highly recommend their design services to anyone looking to make their products stand out on crowded shelves.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker's expertise in packaging design was instrumental in the success of our new product launch. Their ability to understand our target audience and create packaging that not only looked great but also effectively communicated our brand message resulted in a significant increase in sales. We're incredibly impressed with their creativity and professionalism, and we highly recommend their design services to anyone looking to make their products stand out on crowded shelves.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
    ];

    return (
        <section className="bg-primaryBlack overflow-hidden pt-20 max-w-[1920px] mx-auto">

            <ServicesBanner heading="Design that Sells: The Power of " subHeading="Packaging & Labeling" para="In today's retail scene, first impressions are key. Packaging and labeling aren't just functional—they're powerful marketing tools. At Logo Design Maker, we grasp their importance. Our skilled designers create eye-catching packaging and labels that protect your product, attract attention, convey your brand's message, and boost sales." />

            <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="Unleash the Power of " heading2="Custom Packaging Designs" para1={<span>First impressions of products are quite important in the competitive market of today. Leave simple packing behind! <strong>packaging label design</strong> created especially for you are effective marketing tools.</span>} para2={<span>Experienced <strong> package designers</strong> at Logo Design Maker create eye-catching, educational designs that increase sales and convey your business message. Your product is protected by our <strong> custom packaging design</strong>, which also makes it leap off the shelves rather than be missed.</span>} withButton={true} flexDirection="flex-row" />

            <ServiceDesign imgSrc="/services/SocialMediaDesignBeyond.png" subHeading1="Beyond the Logo: Building a Cohesive " subHeading2="Brand Identity" heading1="From Concept to Creation: Crafting " heading2="Packaging Designs" heading3=" that Captivate" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData1} />

            <div>
                <div className="pt-20">
                    <DesignHeader heading="For Your Products, a Symphony of " subHeading="Design Solutions" para="We provide a full spectrum of labelling and packaging design services to meet your particular requirements:" />
                </div>
                <div className="tellStoryContent flex flex-col-reverse md:flex-col sm:px-10 lg:px-20 w-full pb-20">
                    <Story setContent={setContent} content={content} arrayData={[1, 2]} />
                    {content && <TellStoryContent content={content} tellStoryContent={tellStoryContent} rowReverse={true} />}
                </div>
            </div>

            <Sliderr slideData={slideData} />

            <ServiceDesign imgSrc="/services/SocialMediaDesignEarth.png" heading1="Beyond the Box: Examining " heading2="Extra Design" heading3="Options" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData2} />

            <div className="mt-28 sm:mt-40">
                <ServicesCTA imgSrc="/services/SocialMediaDesignFuel.png" heading="Are you prepared to use custom packaging design to elevate your brand?" para="Allow our staff of skilled designers to assist you create bespoke packaging designs that will not only look amazing but also be carefully planned to meet your marketing objectives. Get a free consultation with us now to find out how we can make your brand stand out from the competitors." />
            </div>

            <Faqq faqs={faqs} />

        </section>
    )
}