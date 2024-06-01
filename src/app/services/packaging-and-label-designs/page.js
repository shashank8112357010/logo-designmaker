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

            <ServiceDesign imgSrc="/services/BrandDesigns.png" subHeading1="From Concept to Creation: Crafting " subHeading2="Packaging that Captivates" heading1="From Shelf Appeal to Brand Advocacy: The Tangible Benefits of Exceptional " heading2="Packaging & Labelling" para="Investing in professional packaging and labeling design is more than just creating something visually appealing; it's a strategic investment that delivers tangible benefits for your brand:" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData1} />

            <div>
                <div className="pt-20">
                    <DesignHeader heading="A Symphony of Design Solutions for" subHeading="Your Products" para="We offer a comprehensive range of packaging and labeling design services to cater to your specific needs. Here's a glimpse into how we can help you create packaging and labeling that sells:" />
                </div>
                <div className="tellStoryContent flex flex-col-reverse md:flex-col sm:px-10 lg:px-20 w-full pb-20">
                    <Story setContent={setContent} content={content} arrayData={[1, 2, 3, 4]} />
                    {content && <TellStoryContent content={content} tellStoryContent={tellStoryContent} rowReverse={true} />}
                </div>
            </div>

            <Sliderr slideData={slideData} />

            <ServiceDesign imgSrc="/services/smart-equity-financing-agreement-for-startup.png" heading1="Ready to transform your " heading2="into potent marketing tools?" heading3="into potent marketing tools?" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData2} />

            <div className="mt-28 sm:mt-52">
                <ServicesCTA imgSrc="/services/takeYourAction.png" heading="Drive your product&apos;s success with compelling design: Act now!" para="Investing in professional packaging and labeling design is an investment in your product&apos;s success. At Logo Design Maker, we offer a comprehensive suite of design services to cater to your specific needs and product positioning. Our experienced designers can create visually captivating packaging and labels that not only grab attention but also effectively communicate your brand message and entice customers to choose your product." />
            </div>

            <Faqq faqs={faqs} />

        </section>
    )
}