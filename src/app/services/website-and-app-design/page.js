"use client"
import ButtonAtom from "@/app/atom/ButtonAtom";
import DesignHeaderAtom from "@/app/atom/DesignHeaderAtom";
import StoryAtom from "@/app/atom/StoryAtom";
import CommonIntro from "@/app/components/services/CommonIntro";
import CommonServicesBanner from "@/app/components/services/CommonServicesBanner";
import Image from "next/image";
import { useState } from "react";

export default function WebsiteAppDesign() {
    const [content, setContent] = useState(1)

    return (
        <section className="bg-primaryBlack overflow-hidden pt-20">
            <CommonServicesBanner />
            <CommonIntro imgSrc="/services/Building Web and App Development.png" heading1="Building a Thriving Online Presence: Your " heading2="Website & App " heading3="as the Cornerstone" para1="In today's digital age, your website and app are often the first point of contact for potential customers. They serve as digital storefronts, information hubs, and brand ambassadors. A well-designed website or app can captivate your audience, tell your brand story, and ultimately drive conversions. Here at Logo Design Maker, we understand the importance of crafting exceptional digital experiences." para2="That's why we offer a comprehensive suite of Website & App Design services designed to create engaging and effective online platforms that elevate your brand and propel your business forward." withButton={true} flexDirection="flex-row" />

            <CommonIntro imgSrc="/services/Building Web and App Development.png" subHeading1="Beyond Functionality: Designing for" subHeading2=" User Experience" heading1="Crafting User-Centric Digital Experiences: " heading2="Aesthetic, Intuitive, Effective " para1="Our approach to website and app design goes beyond aesthetics. We believe in creating user-centric experiences that are both visually appealing and intuitive to navigate. Our team of experienced designers and developers will work closely with you to understand your target audience, business goals, and brand identity. Through this collaborative process, we'll craft a website or app that not only looks stunning but also guides users on a seamless journey that ultimately leads to conversions." para2="Imagine a website so user-friendly that visitors can find the information they need with just a few clicks or an app so intuitive that it becomes an indispensable part of their daily routine. That's the power of exceptional website and app design." withButton={false} flexDirection="flex-row-reverse" />

            <DesignHeaderAtom heading="A Symphony of Services: Building Your" subHeading="Digital Presence" para="We offer a diverse range of website and app design solutions to cater to your specific needs. Here's a closer look at some of the ways we can help you build your digital oasis" />

            <div className="tellStoryContent px-4 sm:px-10 lg:px-20 w-full pb-10">
                <StoryAtom setContent={setContent} content={content} />
                <div className="w-full flex flex-row  justify-center items-center">
                    <div className="w-2/3">
                        <div className="flex flex-col gap-2 mb-6">
                            <div className="max-w-[280px] sm:max-w-[380px] lg:max-w-[600px] lg:text-[38px] sm:text-[25px] text-[18px] font-bold leading-[21px] sm:leading-[29px] lg:leading-[44px] tracking-[-1px] text-white">
                                Banner Ad Design  <span className="text-primaryGreen"></span>
                            </div>
                            <p className="max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] mx-auto lg:text-[16px] sm:text-[12px] text-[12px] lg:leading-[28px]  sm:leading-[18px] leading-[18px] text-primaryGray px-4 sm:px-0 lg:px-0">
                                Captivate your audience on the web with eye-catching banner ads that grab attention and drive traffic to your website or landing page. Our designers understand the art of balancing visual appeal with concise messaging to create impactful banner ads that resonate with your target audience. Whether you're promoting a special offer, showcasing a new product launch, or driving brand awareness, our banner ad designs will help you achieve your marketing goals.
                            </p>
                        </div>
                        <ButtonAtom title="Get Started Now" />
                    </div>
                    <div>
                        <Image src="/services/ServicesSliderImg.png" alt="services slider" width={300} height={400} />
                    </div>
                </div>
            </div>
        </section>
    )
}