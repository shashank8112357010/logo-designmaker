"use client"
import Button from "@/app/atom/Button";
import DesignHeader from "@/app/atom/DesignHeader";
import Sliderr from "@/app/atom/Slider";
import Story from "@/app/atom/Story";
import ServicesBanner from "@/app/components/services/ServicesBanner";
import Image from "next/image";
import { useState } from "react";
import ServiceDesign from "@/app/components/services/ServiceDesign";
import ServicesCTA from "@/app/components/services/ServicesCTA";
import Faq from "@/app/atom/Faqq";
import { faqs } from "@/data/website-and-app-design";
import { servicesDesignData1, servicesDesignData2 } from "@/data/packaging-and-label-designs";

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

            <ServiceDesign imgSrc="/services/investInBrandDesign.png" subHeading1="From Concept to Creation: Crafting " subHeading2="Packaging that Captivates" heading1="From Shelf Appeal to Brand Advocacy: The Tangible Benefits of Exceptional " heading2="Packaging & Labelling" para="Investing in professional packaging and labeling design is more than just creating something visually appealing; it's a strategic investment that delivers tangible benefits for your brand:" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData1} />

            <div>
                <div className="pt-20">
                    <DesignHeader heading="A Symphony of Design Solutions for" subHeading="Your Products" para="We offer a comprehensive range of packaging and labeling design services to cater to your specific needs. Here's a glimpse into how we can help you create packaging and labeling that sells:" />
                </div>
                <div className="tellStoryContent sm:px-10 lg:px-20 w-full pb-20">
                    <Story setContent={setContent} content={content} />
                    <div className="w-full flex flex-col-reverse gap-12 md:gap-0 md:flex-row justify-evenly items-center">
                        <div className="w-3/3">
                            <div className="flex flex-col items-center md:items-start text-center md:text-start gap-2 mb-6">
                                <div className="max-w-[280px] sm:max-w-[380px] lg:max-w-[600px] lg:text-[38px] sm:text-[25px] text-[18px] font-bold leading-[21px] sm:leading-[29px] lg:leading-[44px] tracking-[-1px] text-white gap-4 md:gap-0">
                                    Packaging Design
                                </div>
                                <p className="max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] mx-auto lg:text-[16px] sm:text-[12px] text-[12px] lg:leading-[28px]  sm:leading-[18px] leading-[18px] text-primaryGray px-4 sm:px-0 lg:px-0">
                                    From boxes and bags to bottles and tubes, we can design captivating packaging that showcases your product in style. Our designers will create visually appealing and functional packaging solutions that not only look great but also ensure your product arrives safely at its destination. We&apos;ll consider factors like material selection, size, and functionality to create packaging that enhances your brand image and protects your product.
                                </p>
                            </div>
                            <div className="w-full mx-auto text-center md:text-start">
                                <Button title="Get Started Now" />
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <Image src="/services/ServicesSliderImg.png" alt="services slider" width={300} height={400} />
                        </div>
                        <div className="block md:hidden">
                            <Image src="/services/ServiceSliderImgMob.png" alt="services slider" width={300} height={400} />
                        </div>
                    </div>
                </div>
            </div>

            <Sliderr slideData={slideData} />

            <ServiceDesign imgSrc="/services/smart-equity-financing-agreement-for-startup.png" heading1="Ready to transform your " heading2="into potent marketing tools?" heading3="into potent marketing tools?" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData2} />

            <div className="mt-52">
                <ServicesCTA imgSrc="/services/smart-analytical-data-on-an-open-laptop.png" heading="Drive your product&apos;s success with compelling design: Act now!" para="Investing in professional packaging and labeling design is an investment in your product&apos;s success. At Logo Design Maker, we offer a comprehensive suite of design services to cater to your specific needs and product positioning. Our experienced designers can create visually captivating packaging and labels that not only grab attention but also effectively communicate your brand message and entice customers to choose your product." />
            </div>

            <Faq faqs={faqs} />

        </section>
    )
}