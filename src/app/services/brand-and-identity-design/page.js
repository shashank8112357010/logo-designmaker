
"use client"
import DesignHeader from "@/app/atom/DesignHeader";
import Sliderr from "@/app/atom/Slider";
import Story from "@/app/atom/Story";
import ServicesBanner from "@/app/components/services/ServicesBanner";
import { useState } from "react";
import ServicesCTA from "@/app/components/services/ServicesCTA";
import { faqs } from "@/data/website-and-app-design";
import { servicesDesignData1, servicesDesignData2, tellStoryContent } from "@/data/brand-and-identity-design";
import Faqq from "@/app/atom/Faqq";
import TellStoryContent from "@/app/components/home/tellStory/TellStoryContent";
import ServiceDesign from "@/app/components/services/ServiceDesign";
import ServiceIntro from "@/app/components/services/ServiceIntro";

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

            <ServicesBanner heading="Elevate Your Brand Experience: The Power of " subHeading="Brand & Identity Design" para={<span>Indeed the importance of brand ID cannot be overemphasized in the current world economy, where firms have to do more than simply exist. It plays an essential role in a customer&apos;s buying decision and can make or mar the reputation of a company/brand. <strong>Brand identity design services </strong> and messaging are the services that include logo, color schemes, font style and patterns, and the general tone of voice. It is all about creating the first impression through <strong> brand identity designs</strong> that reflect the image of the intended target group.</span>} />

            <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="Holistic" heading2=" Branding Experience" heading3="and Logo Design Creator"
                para1={<span>Specifically, at Logo Design Maker, we embrace the importance of your brand&apos;s consistent image and its influence on your business performance. Our core service is <strong> brand identity design services</strong>; the branding solutions we provide will assist you in enhancing your brand impact throughout all of your promotional tools. Our <strong> branding identity design</strong> is not limited to the logo, but it extends to the entire process of logo creation to the overall macro management of your images across the firm&apos;s media.</span>}
                para2={<span>Our professional design department works in cooperation with you in an effort to realize your brand aims and objectives, define target demographics, and assess the competition. We put this knowledge into practice when creating memorable and attention-grabbing<strong> brand identity designs</strong> or logos that customers will appreciate and attract more consumers to businesses.
                </span>} withButton={true} flexDirection="flex-row" />

            <ServiceDesign imgSrc="/services/SocialMediaDesignBeyond.png" subHeading1="Beyond the Logo: Building a Cohesive" subHeading2=" Brand Identity" heading1="Why " heading2="Brand Identity Design?" heading3="Services Are Essential to Build?" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData1} />

            <div>
                <div className="pt-20">
                    <DesignHeader heading="Showcasing Our" subHeading="Brand Identity" subHeading2="Services" para="At Logo Design Maker, we create impactful brand identities beyond just logos. Our experienced team collaborates closely with you to craft visually stunning designs that resonate with your audience and drive business growth." />
                </div>
                <div className="tellStoryContent flex flex-col-reverse md:flex-col sm:px-10 lg:px-20 w-full pb-20">
                    <Story setContent={setContent} content={content} arrayData={[1, 2, 3, 4, 5]} />
                    {content && <TellStoryContent content={content} tellStoryContent={tellStoryContent} rowReverse={true} />}
                </div>
            </div>

            <Sliderr slideData={slideData} />


            <ServiceDesign imgSrc="/services/SocialMediaDesignEarth.png" heading1="Preparing for a " heading2="Brand Experience " heading3="Boost?" flexDirection="flex-row" servicesDesignData={servicesDesignData2} />

            <ServicesCTA imgSrc="/services/SocialMediaDesignFuel.png" heading="Ready to Elevate Your Brand Experience?" para={<span>Thou shall not put your branding efforts in the &apos;good enough&apos; category. Subject yourself and produce a marketable brand that captures the appeal of your target market and give the business the much-needed boost. Get a hold of <strong>Logo Design Maker</strong> today and see the power of a great image to bring your business to the next level!</span>} />

            <Faqq faqs={faqs} />

        </section>
    )
}