"use client"
import Faqq from "@/app/atom/Faqq"
import DesignProcess from "@/app/components/home/Category/DesignProcess"
import ServiceDesign from "@/app/components/services/ServiceDesign"
import ServiceIntro from "@/app/components/services/ServiceIntro"
import ServicesCTA from "@/app/components/services/ServicesCTA"
import { designProcess, faqs, servicesDesignData } from "@/data/personalized-cup-or-mug-design"
import Image from "next/image"

export default function PersonalizedCupOrMugDesign() {

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
                            Release Your Imagination: Design <span className="text-primaryGreen">Cups & Mugs design </span>That Gain Experiences
                        </h1>
                        <p className="text-tabHeaderBody font-medium leading-[22px] tracking-[0.2px] text-white text-center max-w-[350px] sm:max-w-[500px] md:max-w-[700px]">
                            Personalized cups and mugs are something beyond drinkware; they are a material for your innovativeness and individual articulation. At Logo Design Producer, we offer<strong> personalized cup and mug design</strong> administrations that permit you to design your own mug, making unique pieces that mirror your style and make each taste extraordinary. Begin your day with a mug that recounts your story.
                        </p>
                    </div>
                </main>
            </div>

            <div className="mt-64 sm:mt-0">
                <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="The Force of Personalized " heading2="Cup and Mug Design" para1={<span>Personalized cup and mug designs offer advantages that go past simple usefulness. They give a unique method for communicating your character and make extraordinary events significantly more essential. Whether it&apos;s a <strong>unique coffee mug design</strong> for your morning normal or a bunch of <strong> personalized cups</strong> For a family assembling, these hand crafts add an individual touch to your daily existence. Envision tasting your number one drink from a mug that exhibits your imagination or giving a custom mug that impeccably catches the beneficiary&apos;s character. With <strong>personalized cup designs</strong>, the conceivable outcomes are huge, and the outcomes are dependably extraordinary.</span>} withButton={true} flexDirection="flex-row" />
            </div>

            <ServiceDesign imgSrc="/services/SocialMediaDesignBeyond.png" subHeading1="Worked FOR Inventive, Execution and Advertising Groups" heading1="Elevate Your Mornings with Our Personalized " heading2="Cup Design Services" para={<span>Our <strong>personalized cup and mug design</strong> administration is customized to address the issues of innovative, execution, and promoting groups. This is the way we support your unique prerequisites:</span>} flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData} />

            <DesignProcess heading="Our Cooperative Cup and Mug Design Cycle" designProcess={designProcess} />

            <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="Your Confided in Accomplice for Remarkable Cup and Mug Design" para1={<span>At Logo Design Creator, we are devoted to giving excellent  <strong>personalized cup and mug design </strong> administrations. Our group of talented designers is focused on conveying superior grade, custom mugs that meet your careful determinations. We focus on consumer loyalty and quality confirmation, guaranteeing each design is fastidiously created to surpass your assumptions. Whether you&apos;re making  <strong>unique coffee mug designs </strong> For individual use or limited time cups for your business, you can trust us to give a consistent and charming design insight.  <strong>Design your own mug </strong> with certainty and let us assist you with rejuvenating your vision.</span>} withButton={true} flexDirection="flex-row" />

            <ServicesCTA imgSrc="/services/SocialMediaDesignFuel.png" heading="Still Need Assistance? We're Hanging Around for You!" para={<span>Need help with your  <strong>personalized cup and mug design</strong>? Reach us today, and our group will be eager to assist you design your own mug that sticks out.</span>} />

            <Faqq faqs={faqs} />

        </section>
    )
}





