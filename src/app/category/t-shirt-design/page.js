"use client"
import Faqq from "@/app/atom/Faqq"
import DesignProcess from "@/app/components/home/Category/DesignProcess"
import ServiceDesign from "@/app/components/services/ServiceDesign"
import ServiceIntro from "@/app/components/services/ServiceIntro"
import ServicesCTA from "@/app/components/services/ServicesCTA"
import { designProcess, faqs, servicesDesignData } from "@/data/t-shirt-design"
import Image from "next/image"

export default function TShirtDesign() {

    return (
        <section className="w-full max-w-[1920px] mx-auto bg-primaryBlack pb-32">
            <div className="flex flex-row gap-4 items-center justify-center xl:gap-10 h-[250px] xs:h-[283px] sm:h-[553px] relative">

                <div className="absolute left-0 top-20">
                    <Image src="/pricing/LeftGrPricing.png" width={856} height={815} alt="linear-gradient-top" />
                </div>
                <div className="absolute top-20 right-0 ">
                    <Image src="/pricing/RightGrPricing.png" width={856} height={815} alt="linear-gradient-bottom" />
                </div>

                <main className="top-[40%] md:top-[35%] z-30 min-h-[641px] absolute sm:px-0 sm:mt-5">
                    <div className="flex justify-center items-center flex-col gap-2 sm:gap-6 w-full">
                        <span className="font-[100px] text-center w-full font-springRainSolid text-white leading-[25px] lg:leading-[45px] text-[20px] lg:text-[35px]">
                            Services
                        </span>
                        <h1 className="w-full text-mobHeaderTex text-centert sm:text-tabHeaderText lg:text-lapHeaderText font-bold leading-[28px] sm:leading-[35px] lg:leading-[58.85px] text-white capitalize text-center tracking-[-1px] lg:-tracking-[3px] max-w-[300px] sm:max-w-[65rem]">
                            Unleash Your Creativity: Get Custom
                            <span className="text-primaryGreen"> T-Shirt Design </span>That Make a Statement
                        </h1>
                        <p className="text-tabHeaderBody font-medium leading-[22px] tracking-[0.2px] text-white text-center max-w-[350px] sm:max-w-[600px]">
                            Turn your ideas into wearable art! Design your own custom t-shirt online with our user-friendly platform, or tap into the expertise of our talented t-shirt designers. We offer a wide range of styles and sizes to fit everyone, from men&apos;s designer tees to comfy women&apos;s graphics and fun, colorful options for kids. No matter your vision, our tools and experienced designers can help you create the perfect custom t-shirt that reflects your unique style.
                        </p>
                    </div>
                </main>
            </div>

            <ServiceIntro imgSrc="/services/Building Web and App Development.png" heading1="The Power of " heading2="T-Shirt Design" para1="T-shirt design goes beyond aesthetics. It's a powerful tool for self-expression and brand building. Custom t-shirts can be a conversation starter, a way to promote your favorite band or cause, or simply a fun way to show off your personality. Men's designer t-shirts can elevate a casual look, while women's designer t-shirts can add a touch of individuality to any outfit." para2="T-shirt designs can also be used for marketing purposes. Create custom t-shirts with your brand logo or slogan for your company, sports team, or event. The possibilities for t-shirt design are endless!" withButton={true} flexDirection="flex-row" />

            <ServiceDesign imgSrc="/services/BrandDesigns.png" subHeading1="BUILT FOR CREATIVE, PERFORMANCE & MARKETING TEAMS" heading1="Elevate Your Wardrobe with Our " heading2="T-Shirt Design Services" para="When you choose Logo Design Maker for your t-shirt design needs, you benefit from:" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData} />

            <DesignProcess heading="Our Collaborative T-Shirt Design Process" designProcess={designProcess} />

            <ServiceIntro imgSrc="/services/Building Web and App Development.png" heading1="Your Trusted Partner for Exceptional T-Shirt Design" para1="AAt Logo Design Maker, we are passionate about helping individuals and businesses create impactful t-shirt designs. We offer a user-friendly platform for those who want to design their own t-shirt online and a dedicated design team for those seeking professional assistance. We use top-of-the-line printing technologies and premium t-shirt materials to ensure your custom t-shirts are not only visually stunning but also comfortable and durable." para2="Whether you're looking for men's designer t-shirts with a sophisticated touch, women's designer t-shirts with a fashion-forward flair, or fun graphic tees for kids, we have the expertise to bring your vision to life. Our commitment to excellent customer service and fast turnaround times makes us the perfect partner for all your t-shirt design needs." withButton={true} flexDirection="flex-row" />

            <ServicesCTA imgSrc="/services/takeYourAction.png" heading="Still Need Help? We're Here for You!" para="Partner with Logo Design Maker and experience the difference a human touch can make. Contact us today to schedule a free consultation and discuss your custom logo design needs." />

            <Faqq faqs={faqs} />

        </section>
    )
}