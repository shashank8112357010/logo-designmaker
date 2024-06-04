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
            <ServicesBanner heading="Craft a Digital Oasis: Unleash the Power of" subHeading="Website & App Design " para={<span>Have an engaging website or app to stand out in the digital throng! <strong> UI/UX design services </strong> combined with <strong>creative website design</strong> tells your brand story and produces results. Our group of UI/UX designers will create an intuitive experience that captures the essence of your company.<strong> Hire a website designer </strong>from Logo Design Maker to change your internet image right now!</span>} />

            <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="Designing for " heading2="User Experience " heading3=": Going Beyond Functionality" para1={<span>We take more than just aesthetics into website and app design. We think it&apos;s important to build aesthetically pleasing and easily navigable user-centric experiences <strong>(UX design websites)</strong>. Working directly with you, our team of skilled designers and developers will ascertain your target market, corporate objectives, and brand personality. Using this cooperative <strong>website design process</strong>, we will create an app or website that not only looks amazing but also takes visitors on a smooth trip that finally results in conversions.</span>} para2={<span>TImagine an app so simple to use that it becomes an essential part of daily life, or a website so user-friendly that users can locate the information they need with a few clicks. That is the potential of outstanding website and app design, provided by our group of knowledgeable<strong> website designers for small business.</strong></span>} withButton={true} flexDirection="flex-row" />

            <ServiceIntro imgSrc="/services/SocialMediaDesignBeyond.png" subHeading1="Beyond Functionality: Designing for" subHeading2=" User Experience" heading1="Beyond Usability: Creating for  " heading2="Quantifiable Gains " para1={<span>Putting money into skilled website and app design in the modern digital era goes beyond looks. For your company, it&apos;s a calculated investment with real returns. Having a consistent and eye-catching design on all of your channels increases audience trust and brand identification. This is the role of a <strong>UI/UX design service</strong>. Our <strong>UI/UX designers</strong> will make sure your website or app inspires trust and establishes you as a market leader by creating an intuitive experience with easy navigation, unambiguous information architecture, and excellent graphics.</span>}
                para2={<span>In a congested internet market, a distinctive and user-friendly design makes you stand out. Accept nothing less than generic! With our <strong>hire a website designer</strong> experience, you can create a digital experience that draws notice. But your app and website are potent storytelling instruments in addition to being beautiful. <strong>UI/UX design services </strong>allow you to employ content, user experience, and graphic design components to successfully convey your company&apos;s mission, values, and stories to your audience, building stronger bonds and brand loyalty.</span>}
                para3=" Ultimately, a well-designed website or app that emphasizes easy navigation, obvious calls to action, and smooth user journeys will promote discovery, participation, and conversions, boosting client engagement and advancing your company." withButton={false} flexDirection="flex-row-reverse" />

            <div>
                <div className="pt-20">
                    <DesignHeader heading="Creating Your" subHeading="Digital Presence" subHeading2="with a Symphony of Services" para="To suit your particular requirements, we provide a wide selection of website and app design services. The following provides a closer look at some of the ways we can assist you in creating your virtual haven:" />
                </div>
                <div className="tellStoryContent flex flex-col-reverse md:flex-col sm:px-10 lg:px-20 w-full pb-20">
                    <Story setContent={setContent} content={content} arrayData={[1, 2, 3, 4, 5]} />
                    {content && <TellStoryContent content={content} tellStoryContent={tellStoryContent} rowReverse={true} />}
                </div>
            </div>

            <Sliderr slideData={slideData} />

            <ServiceDesign imgSrc="/services/SocialMediaDesignEarth.png" heading1="Getting ready to experience the full potential of great " heading2="app and website design?" flexDirection="flex-row" servicesDesignData={servicesDesignData} />

            <ServicesCTA imgSrc="/services/SocialMediaDesignFuel.png" heading="Fuel the Expansion of Your Brand: Act Right Now!" para={<span>Resign yourself to a passable internet presence. Use a website or app created to wow by Logo Design Maker to elevate your brand and enthrall your audience.<strong> Get in touch with us </strong>right now and together we can make your digital vision come true! We provide <strong>UI/UX design services</strong> to guarantee a user-centric approach all through the design phase.<strong> Hire a website designer</strong> from our team of professionals to elevate the online appearance of your company.</span>} />

            <Faqq faqs={faqs} />
        </section>
    )
}