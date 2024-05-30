"use client"
import DesignHeader from "@/app/atom/DesignHeader";
import Sliderr from "@/app/atom/Slider";
import Story from "@/app/atom/Story";
import ServicesBanner from "@/app/components/services/ServicesBanner";
import { useState } from "react";
import ServiceIntro from "@/app/components/services/ServiceIntro";
import ServicesCTA from "@/app/components/services/ServicesCTA";
import { faqs, servicesDesignData, tellStoryContent } from "@/data/website-and-app-design";
import Faqq from "@/app/atom/Faqq";
import TellStoryContent from "@/app/components/home/tellStory/TellStoryContent";
import ServiceDesign from "@/app/components/services/ServiceDesign";


export default function WebsiteAppDesign() {
    const [content, setContent] = useState(1)

    const slideData = [
        {
            para: "Working with Logo Design Maker on my website design was a truly collaborative experience. Their team listened carefully to my vision and translated it into a stunning and user-friendly website. Since launching the new website, I've seen a significant increase in website traffic, qualified leads, and overall brand engagement.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: 'Owner of "Blooming Yoga Studio'
        },
        {
            para: "Working with Logo Design Maker on my website design was a truly collaborative experience. Their team listened carefully to my vision and translated it into a stunning and user-friendly website. Since launching the new website, I've seen a significant increase in website traffic, qualified leads, and overall brand engagement.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: 'Owner of "Blooming Yoga Studio”'
        },
        {
            para: "Working with Logo Design Maker on my website design was a truly collaborative experience. Their team listened carefully to my vision and translated it into a stunning and user-friendly website. Since launching the new website, I've seen a significant increase in website traffic, qualified leads, and overall brand engagement.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: 'Owner of "Blooming Yoga Studio”'
        },
    ];


    return (
        <section className="bg-primaryBlack overflow-hidden pt-20 max-w-[1920px] mx-auto">
            <ServicesBanner heading="Craft a Digital Oasis: Unleash the Power of" subHeading="Website & App Design " para="Unlock your online potential with visually stunning and highly engaging web designs tailored to your business needs. Connect your marketing and development teams to our professional web design services to create captivating user experiences." />

            <ServiceIntro imgSrc="/services/Building Web and App Development.png" heading1="Building a Thriving Online Presence: Your " heading2="Website & App " heading3="as the Cornerstone" para1="In today's digital age, your website and app are often the first point of contact for potential customers. They serve as digital storefronts, information hubs, and brand ambassadors. A well-designed website or app can captivate your audience, tell your brand story, and ultimately drive conversions. Here at Logo Design Maker, we understand the importance of crafting exceptional digital experiences." para2="That's why we offer a comprehensive suite of Website & App Design services designed to create engaging and effective online platforms that elevate your brand and propel your business forward." withButton={true} flexDirection="flex-row" />

            <ServiceIntro imgSrc="/services/Building Web and App Development.png" subHeading1="Beyond Functionality: Designing for" subHeading2=" User Experience" heading1="Crafting User-Centric Digital Experiences: " heading2="Aesthetic, Intuitive, Effective " para1="Our approach to website and app design goes beyond aesthetics. We believe in creating user-centric experiences that are both visually appealing and intuitive to navigate. Our team of experienced designers and developers will work closely with you to understand your target audience, business goals, and brand identity. Through this collaborative process, we'll craft a website or app that not only looks stunning but also guides users on a seamless journey that ultimately leads to conversions." para2="Imagine a website so user-friendly that visitors can find the information they need with just a few clicks or an app so intuitive that it becomes an indispensable part of their daily routine. That's the power of exceptional website and app design." withButton={false} flexDirection="flex-row-reverse" />

            <div>
                <div className="pt-20">
                    <DesignHeader heading="A Symphony of Services: Building Your" subHeading="Digital Presence" para="We offer a diverse range of website and app design solutions to cater to your specific needs. Here's a closer look at some of the ways we can help you build your digital oasis" />
                </div>
                <div className="tellStoryContent flex flex-col-reverse md:flex-col sm:px-10 lg:px-20 w-full pb-20">
                    <Story setContent={setContent} content={content} arrayData={[1, 2, 3, 4, 5, 6, 7]} />
                    {content && <TellStoryContent content={content} tellStoryContent={tellStoryContent} rowReverse={true} />}
                </div>
            </div>

            <Sliderr slideData={slideData} />

            <ServiceDesign imgSrc="/services/ServicesDesign.png" heading1="Ready to unlock the power of exceptional " heading2="website and app design? " flexDirection="flex-row" servicesDesignData={servicesDesignData} />

            <ServicesCTA imgSrc="/services/CTAImg.png" heading="Fuel Your Brand&apos;s Growth: Take Action Today!" para="Investing in professional website and app design is an investment in your brand&apos;s digital future. At Logo Design Maker, we offer a variety of design packages to suit your specific needs and budget. Let our experienced team craft a website or app that not only elevates your brand image but also delivers exceptional user experiences, drives conversions, and propels your business forward." />

            <Faqq faqs={faqs} />
        </section>
    )
}