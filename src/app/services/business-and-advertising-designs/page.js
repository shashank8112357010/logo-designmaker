"use client"
import DesignHeader from "@/app/atom/DesignHeader";
import Sliderr from "@/app/atom/Slider";
import Story from "@/app/atom/Story";
import ServicesBanner from "@/app/components/services/ServicesBanner";
import { useState } from "react";
import ServicesCTA from "@/app/components/services/ServicesCTA";
import { faqs } from "@/data/website-and-app-design";
import { servicesDesignData1, servicesDesignData2, tellStoryContent } from "@/data/business-and-advertising-designs";
import Faqq from "@/app/atom/Faqq";
import TellStoryContent from "@/app/components/home/tellStory/TellStoryContent";
import ServiceDesign from "@/app/components/services/ServiceDesign";
import ServiceIntro from "@/app/components/services/ServiceIntro";

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

            <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="Eye-Catching " heading2=" Advertising Design" heading3=" Services to Propel Your Business"
                para1={<span>Specifically, at Logo Design Maker, we embrace the importance of your brand&apos;s consistent imIn the competitive landscape of business today, one has to stand out. Effective advertisement is all about attractive visuals and communicating clearly to attract attention for the proper and effective <strong> advertising your brand</strong>. Here at Logo Design Maker, we recognize that powerful advertising requires powerful <strong>advertising design services</strong>.</span>}
                para2={<span>Our designers are able to create visuals that are so attractive that they can effectively portray your brand and your message in an effective way, whether it&apos;s a captivating presentation, a persuasive advertisement, or an informative brochure.
                </span>} withButton={true} flexDirection="flex-row" />

            <ServiceDesign imgSrc="/services/SocialMediaDesignBeyond.png" subHeading1="Beyond Aesthetics: Design that Tells a " subHeading2="Strategic Story" heading1="The Strategic Benefits of Professional " heading2="Advertising Design" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData1} />

            <div>
                <div className="pt-20">
                    <DesignHeader heading="A Symphony of" subHeading="Advertising Design" subHeading2="Solutions for Your Needs" para={<span>We provide a full suite of <strong>advertising design services</strong> to help you cater to your specific needs and marketing goals. Here&apos;s a closer look at how we can help you create impactful visuals that get results:</span>} />
                </div>
                <div className="tellStoryContent flex flex-col-reverse md:flex-col sm:px-10 lg:px-20 w-full pb-20">
                    <Story setContent={setContent} content={content} arrayData={[1, 2, 3, 4, 5]} />
                    {content && <TellStoryContent content={content} tellStoryContent={tellStoryContent} rowReverse={true} />}
                </div>
            </div>

            <Sliderr slideData={slideData} />

            <ServiceDesign imgSrc="/services/SocialMediaDesignEarth.png" heading1="Grow Your Business with Results-Driven Design: Do It Now!" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData2} />

            <div className=" mt-8 sm:mt-32 md:mt-44">
                <ServicesCTA imgSrc="/services/SocialMediaDesignFuel.png" heading="Think you have what it takes to level up in business?" para="Don't settle for generic marketing materials. Design with Logo Design Maker and let our professional group of designers do the rest. Contact us today to transform your marketing strategy with impactful design solutions." />
            </div>

            <Faqq faqs={faqs} />

        </section>
    )
}