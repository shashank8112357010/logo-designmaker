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

                <main className="top-[40%] sm:top-[30%] z-30 min-h-[641px] absolute sm:px-0 sm:mt-5">
                    <div className="flex justify-center items-center flex-col gap-2 sm:gap-6 w-full">
                        <span className="font-[100px] text-center w-full font-springRainSolid text-white leading-[25px] lg:leading-[45px] text-[20px] lg:text-[35px]">
                            Services
                        </span>
                        <h1 className="w-full text-mobHeaderTex text-centert sm:text-tabHeaderText lg:text-lapHeaderText font-bold leading-[28px] sm:leading-[35px] lg:leading-[58.85px] text-white capitalize text-center tracking-[-1px] lg:-tracking-[3px] max-w-[300px] sm:max-w-5xl">
                            Unleash Your Creativity: Custom <span className="text-primaryGreen">Sticker Design </span>for Every Occasion
                        </h1>
                        <p className="text-tabHeaderBody font-medium leading-[22px] tracking-[0.2px] text-white text-center max-w-[350px] sm:max-w-[500px]">
                            Express yourself and virgin your personality with unequaled backbone designs. Whether you are decorating your laptop, water bottle, car, or only wanting to add a touch of whimsy to your quotidian life, impost stickers are a various and fun way to make a statement. At Logo Design Maker, we specialized in helping you bring your backbone pattern ideas to life. Design stickers online, with our easy choline or collaborate with our talented designers to make one of a kind stickers that are idealistic for you or your brand.
                        </p>
                    </div>
                </main>
            </div>

            <div className="mt-64 sm:mt-0">
                <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="The Power of " heading2="Sticker Design" para1="Sticker designs were more than just ornamental elements. They can be a right tool for self expression as well as brand promotion, or only sparking a conversation. Custom stickers allow you to virgin your unequaled style, elevate your preferred causes,' or even advertise your business." para2="With uninterrupted possibilities for customization, backbone patterns open doors for creativity and self expression." withButton={true} flexDirection="flex-row" />
            </div>

            <ServiceDesign imgSrc="/services/SocialMediaDesignBeyond.png" subHeading1="BUILT FOR CREATIVE, PERFORMANCE & MARKETING TEAMS" heading1="Elevate Your World with Our " heading2="Sticker Design Services" para="When you prefer Logo Design Maker for your backbone pattern needs, you welfare from;" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData} />

            <DesignProcess heading="Our Collaborative Sticker Design Process" designProcess={designProcess} />

            <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="Your Trusted Partner for Exceptional Sticker Design" para1="At Logo Design Maker, we are aflame about helping individuals and businesses make impactful backbone designs. We offer an easy choline for those who want to pattern their own stickers online, and a dedicated pattern team for those seeking captain assistance." para2="We use high quality materials and fashionable printing technologies to check your stickers are not only visually stunning but also indestructible and long lasting. Our dedication to first class client redevelopment and fast reversal times makes us the idealistic mate for all your backbone pattern needs." withButton={true} flexDirection="flex-row" />

            <ServicesCTA imgSrc="/services/SocialMediaDesignFuel.png" heading="Still Need Help? We're Here for You!" para="Even with our easy platform, we learn that some clients might have preferred captain aid with their backbone design. Our skillful pattern team is ready to hang you in realizing your idea. Whether you have a clear conception in mind or need help brainstorming ideas, we could cooperate with you to make unequaled and impactful backbone designs." />

            <Faqq faqs={faqs} />

        </section>
    )
}