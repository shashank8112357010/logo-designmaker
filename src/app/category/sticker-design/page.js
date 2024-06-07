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
                            Release Your Innovativeness: <span className="text-primaryGreen">Design Customized Stickers </span>That Gain Experiences
                        </h1>
                        <p className="text-tabHeaderBody font-medium leading-[22px] tracking-[0.2px] text-primaryGray text-center max-w-[350px] sm:max-w-[500px] md:max-w-[700px]">
                            Customized stickers are something other than enrichments; they are an imaginative articulation of your interesting style and character. At Logo Design Maker, we offer <strong>sticker design services </strong>that permit you to design your own stickers, ideal for any event. Whether it's for individual use, business advancements, or unique occasions, our <strong>custom stickers </strong>will assist you with gaining enduring experiences. Investigate the vast potential outcomes and <strong>design stickers online</strong> today.
                        </p>
                    </div>
                </main>
            </div>

            <div className="mt-64 sm:mt-0">
                <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="The Force of Customized " heading2="Sticker Design" para1={<span>Customized sticker design offers help that goes past simple common sense. It takes into consideration self-articulation and adds an individual touch to exceptional events. From finishing your PC or telephone to making remarkable<strong> car sticker designs</strong>, the conceivable outcomes are unfathomable. Custom stickers can be custom-made to mirror your character, image, or occasion subject, making each sticker an assertion piece. Whether you're looking to <strong>design your own stickers</strong> for a birthday celebration or to advance your business, our <strong>sticker design services </strong>give an innovative outlet to feature your independence and make each second noteworthy.</span>} withButton={true} flexDirection="flex-row" />
            </div>

            <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="Worked FOR Imaginative, Execution and Advertising Groups " para1={<span>Our customized sticker design administration is custom-made explicitly for imaginative, execution, and advertising groups. With our custom stickers, you can undoubtedly make eye-getting designs that improve your image perceivability and advertising efforts. Our foundation permits you to design stickers online easily, giving one of a kind highlights like a large number of layouts, simple to-utilize design devices, and quick completion times. Whether you want <strong>car sticker designs </strong> for limited time occasions or customized stickers for your showcasing materials, our <strong>sticker design services</strong> guarantee your group can deliver superior grade, significant designs rapidly and effectively.</span>} withButton={true} flexDirection="flex-row-reverse" />

            <DesignProcess heading="Our Cooperative Sticker Design Interaction" designProcess={designProcess} />

            <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="Your Believed Accomplice for Extraordinary Sticker Design" para1={<span>At Logo Design Maker, we highly esteem being a confided in accomplice for excellent <strong> sticker design services</strong>. Our group of gifted designers is devoted to conveying superior grade, custom stickers that meet your careful particulars. We focus on customer fulfillment and quality confirmation, guaranteeing each design is fastidiously created to surpass your assumptions. Whether you're making <strong>car sticker designs</strong> for limited time stickers for your business, you can trust us to give a consistent and pleasant design insight.<strong> Design stickers online</strong> with certainty and let us assist you with rejuvenating your vision.</span>} withButton={true} flexDirection="flex-row" />

            <ServicesCTA imgSrc="/services/SocialMediaDesignFuel.png" heading="Still Need Assistance? We're Hanging Around for You!" para={<span>Need help with your custom stickers? Reach us today, and our group will be eager to assist you <strong> design stickers online</strong>  that sticks out.</span>} />

            < Faqq faqs={faqs} />

        </section >
    )
}