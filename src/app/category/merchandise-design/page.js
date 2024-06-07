"use client"
import Faqq from "@/app/atom/Faqq"
import DesignProcess from "@/app/components/home/Category/DesignProcess"
import ServiceDesign from "@/app/components/services/ServiceDesign"
import ServiceIntro from "@/app/components/services/ServiceIntro"
import ServicesCTA from "@/app/components/services/ServicesCTA"
import { designProcess, faqs, servicesDesignData } from "@/data/merchandise-design"
import Image from "next/image"

export default function MerchandiseDesign() {

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
                            Unleash Your Creativity: Design <span className="text-primaryGreen">Personalized Merchandise </span>That Make Memories
                        </h1>
                        <p className="text-tabHeaderBody font-medium leading-[22px] tracking-[0.2px] text-white text-center max-w-[350px] sm:max-w-[500px] md:max-w-[700px]">
                            At<strong> Logo Design Maker</strong>, we rejuvenate your vision with our custom <strong>merchandise design</strong> services. Customized merchandise goes past straightforward reasonableness; it turns into an impression of your image and character. Whether you're hoping to make promotional things, custom attire, or special adornments, our master designers are here to assist you with designing merchandise online that sticks out and gains enduring experiences.
                        </p>
                    </div>
                </main>
            </div>

            <div className="mt-64 sm:mt-0">
                <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1=" The Force of Customized " heading2="Merchandise Design" para1={<span><strong>Customized merchandise design</strong> offers undeniably something other than utility; it's a type of self-articulation and a method for honoring unique events. With custom design merchandise, you can make things that mirror your special style and brand ethos. Whether for corporate occasions, showcasing efforts, or individual gifts, custom merchandise upgrades your presence and has an enduring effect. Our <strong>merchandise designers</strong> comprehend the significance of making things that resonate with your crowd, it isn't just down to earth yet in addition critical and effective to guarantee that each piece.</span>}
                    para2={<span>Customized merchandise likewise fills in as a strong promoting device. At the point when your image's logo or message is shown on excellent, customized items, it assists work with marking acknowledgment and steadfastness. These things become a piece of your customers' regular routines, continually helping them to remember your image. From promotional giveaways to marked merchandise for your group, the potential outcomes are inestimable. At <strong>Logo Design Maker</strong>, we are devoted to transforming your thoughts into the real world, giving designs that genuinely mirror your image's character and values.   </span>}
                    withButton={true} flexDirection="flex-row" />
            </div>

            <ServiceDesign imgSrc="/services/SocialMediaDesignBeyond.png" subHeading1="Worked FOR Innovative, Execution and Showcasing Groups" heading1="Elevate Your Mornings with Our Personalized " heading2="Cup Design Services" para={<span>Our customized <strong> merchandise design </strong>administration is explicitly custom-made for innovative, execution, and advertising groups who try to raise their marking and promotional endeavors. With Logo Design Maker, you get:</span>} flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData} />

            <DesignProcess heading="Our Cooperative Merchandise Design Cycle" designProcess={designProcess} />

            <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="Your Believed Accomplice for Uncommon Merchandise Design" para1={<span>At Logo Design Maker, we highly esteem being a confided in accomplice for <strong>exceptional merchandise design</strong>. Our group's skill and obligation to quality guarantee that each venture fulfills the most elevated guidelines. We center around customer fulfillment, offering customized assistance and meticulousness in each design. With our <strong>merchandise design services</strong>, you can unhesitatingly make things that address your issues as well as surpass your assumptions. Trust us to convey quality, dependability, and imagination in each piece of merchandise we design.</span>}
                para2={<span>We accept that the best designs come from cooperation and understanding. That is the reason we concentrate intensely on getting to know your image and your vision. Our designers are talented as well as energetic about transforming thoughts into effective designs. We invest wholeheartedly in our capacity to change your ideas into unmistakable items that say something. At the point when you pick Logo Design Maker, you're picking an accomplice committed to assisting your image with sparkling.</span>}
                withButton={true} flexDirection="flex-row" />

            <ServicesCTA imgSrc="/services/SocialMediaDesignFuel.png" heading="Still Need Assistance? We're Hanging Around for You!" para={<span>Assuming that you have any inquiries or need further help with your<strong> merchandise design</strong>, go ahead and us. We're here to help!</span>} />

            <Faqq faqs={faqs} />

        </section>
    )
}