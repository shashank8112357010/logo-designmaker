"use client"
import Faqq from "@/app/atom/Faqq"
import DesignProcess from "@/app/components/home/Category/DesignProcess"
import ServiceDesign from "@/app/components/services/ServiceDesign"
import ServiceIntro from "@/app/components/services/ServiceIntro"
import ServicesCTA from "@/app/components/services/ServicesCTA"
import { designProcess, faqs, servicesDesignData } from "@/data/sticker-design"
import Image from "next/image"

export default function StickerDesign() {


    return (
        <section className="w-full max-w-[1920px] mx-auto bg-primaryBlack pb-32">
            <div className="flex flex-row gap-4 items-center justify-center xl:gap-10 h-[250px] xs:h-[283px] sm:h-[553px] relative">

                <div className="absolute left-0 top-20">
                    <Image src="/pricing/LeftGrPricing.png" width={856} height={815} alt="linear-gradient-top" />
                </div>
                <div className="absolute top-20 right-0 ">
                    <Image src="/pricing/RightGrPricing.png" width={856} height={815} alt="linear-gradient-bottom" />
                </div>

                <main className="top-[40%] md:top-[40%] z-30 min-h-[641px] absolute sm:px-0 sm:mt-5">
                    <div className="flex justify-center items-center flex-col gap-2 sm:gap-6 w-full">
                        <span className="font-[100px] text-center w-full font-springRainSolid text-white leading-[25px] lg:leading-[45px] text-[20px] lg:text-[35px]">
                            Services
                        </span>
                        <h1 className="w-full text-mobHeaderTex text-centert sm:text-tabHeaderText lg:text-lapHeaderText font-bold leading-[28px] sm:leading-[35px] lg:leading-[58.85px] text-white capitalize text-center tracking-[-1px] lg:-tracking-[3px] max-w-[300px] sm:max-w-5xl">
                            Unleash Your Creativity: Custom <span className="text-primaryGreen">Sticker Design </span>for Every Occasion
                        </h1>
                        <p className="text-tabHeaderBody font-medium leading-[22px] tracking-[0.2px] text-white text-center max-w-[350px] sm:max-w-[500px]">
                            Express yourself with unique sticker designs from Logo Design Maker! Decorate your laptop, water bottle, car, or anything else with custom stickers. Use our user-friendly platform to design online or work with our talented designers to create one-of-a-kind stickers perfect for you or your brand.
                        </p>
                    </div>
                </main>
            </div>

            <ServiceIntro imgSrc="/services/Building Web and App Development.png" heading1="The Power of " heading2="Sticker Design" para1="Sticker designs are more than just decorative elements. They can be a powerful tool for self-expression, brand promotion, or simply sparking a conversation. Custom stickers allow you to showcase your unique style, promote your favorite causes, or even advertise your business." para2=" With endless possibilities for customization, sticker design opens doors for creativity and self-expression." withButton={true} flexDirection="flex-row" />

            <ServiceDesign imgSrc="/services/BrandDesigns.png" subHeading1="BUILT FOR CREATIVE, PERFORMANCE & MARKETING TEAMS" heading1="Elevate Your World with Our " heading2="Sticker Design Services" para="When you choose Logo Design Maker for your sticker design needs, you benefit from:" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData} />

            <DesignProcess heading="Our Collaborative Sticker Design Process" designProcess={designProcess} />

            <ServiceIntro imgSrc="/services/Building Web and App Development.png" heading1="Your Trusted Partner for Exceptional Sticker Design" para1="At Logo Design Maker, we are passionate about helping individuals and businesses create impactful sticker designs. We offer a user-friendly platform for those who want to design their own stickers online, and a dedicated design team for those seeking professional assistance." para2="At Logo Design Maker, we are passionate about helping individuals and businesses create impactful sticker designs. We offer a user-friendly platform for those who want to design their own stickers online, and a dedicated design team for those seeking professional assistance." withButton={true} flexDirection="flex-row" />

            <ServicesCTA imgSrc="/services/brand and identity design.png" heading="Still Need Help? We're Here for You!" para="Partner with Logo Design Maker and experience the difference a human touch can make. Contact us today to schedule a free consultation and discuss your custom logo design needs." />

            <Faqq faqs={faqs} />

        </section>
    )
}