"use client"
import DesignHeader from "@/app/atom/DesignHeader";
import Sliderr from "@/app/atom/Slider";
import Story from "@/app/atom/Story";
import ServicesBanner from "@/app/components/services/ServicesBanner";
import { useState } from "react";
import ServiceDesign from "@/app/components/services/ServiceDesignTop";
import ServicesCTA from "@/app/components/services/ServicesCTA";
import { faqs } from "@/data/website-and-app-design";
import { servicesDesignData1, servicesDesignData2, tellStoryContent } from "@/data/business-and-advertising-designs";
import Faqq from "@/app/atom/Faqq";
import TellStoryContent from "@/app/components/home/tellStory/TellStoryContent";
import ServiceDesignTop from "@/app/components/services/ServiceDesignTop";
import ServiceDesignBottom from "@/app/components/services/ServiceDesignBottom";

export default function BusinessAdvertisingDesigns() {
    const [content, setContent] = useState(1)

    const slideData = [
        {
            para: "Logo Design Maker's expertise in brochure design was instrumental in creating a high-quality marketing tool for our business. Their ability to understand our target audience and translate our vision into a visually appealing and informative brochure has resulted in a significant increase in customer inquiries. We're incredibly pleased with the results and highly recommend Logo Design Maker's design services.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker's expertise in brochure design was instrumental in creating a high-quality marketing tool for our business. Their ability to understand our target audience and translate our vision into a visually appealing and informative brochure has resulted in a significant increase in customer inquiries. We're incredibly pleased with the results and highly recommend Logo Design Maker's design services.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker's expertise in brochure design was instrumental in creating a high-quality marketing tool for our business. Their ability to understand our target audience and translate our vision into a visually appealing and informative brochure has resulted in a significant increase in customer inquiries. We're incredibly pleased with the results and highly recommend Logo Design Maker's design services.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
    ];


    return (
        <section className="bg-primaryBlack overflow-hidden pt-20 max-w-[1920px] mx-auto">

            <ServicesBanner heading="Design that Drives Results: The Power of  " subHeading="Business & Marketing Materials" para="In the competitive business world, standing out is crucial. At Logo Design Maker, we specialize in creating compelling visuals that captivate your audience. From presentations to ads to brochures, our experienced team ensures your brand message shines through." />

            <ServiceDesignTop imgSrc="/services/BrandDesigns.png" subHeading1="Beyond Aesthetics: Design that Tells a " subHeading2="Strategic Story" heading1="From Presentations to Promotions: Design that Captures " heading2="Attention & Fuels Action" para="Investing in professional business and marketing materials design goes beyond creating visually appealing brochures or presentations. It's a strategic investment that delivers a range of benefits:" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData1} />

            <div>
                <div className="pt-20">
                    <DesignHeader heading="A Symphony of" subHeading=" Design Solutions for Your Apparel & Merchandise" para="We offer a comprehensive range of clothing and merchandise design services to cater to your specific needs. Here's a glimpse into how we can help you breathe life into your wearable creations:" />
                </div>
                <div className="tellStoryContent flex flex-col-reverse md:flex-col sm:px-10 lg:px-20 w-full pb-20">
                    <Story setContent={setContent} content={content} arrayData={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]} />
                    {content && <TellStoryContent content={content} tellStoryContent={tellStoryContent} rowReverse={true} />}
                </div>
            </div>

            <Sliderr slideData={slideData} />

            <ServiceDesignBottom imgSrc="/services/smart-equity-financing-agreement-for-startup.png" heading1="Ready to unleash the power of " heading2="clothing and merchandise design?" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData2} />

            <div className=" mt-8 sm:mt-32 md:mt-44">
                <ServicesCTA imgSrc="/services/smart-analytical-data-on-an-open-laptop.png" heading="Fuel Your Business Growth with Design that Drives Results: Take Action Today!" para="Investing in professional business and marketing materials design is an investment in your brand's success. At Logo Design Maker, we offer a comprehensive suite of design services to cater to your specific needs and marketing goals. Our experienced designers can create visually compelling designs that not only grab attention but also effectively communicate your message and inspire action." />
            </div>

            <Faqq faqs={faqs} />

        </section>
    )
}