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
            <div className="flex flex-row gap-4 items-center justify-center xl:gap-10 h-[550px] sm:h-[603px] md:h-[553px] relative">

                <div className="absolute left-0 top-20">
                    <Image src="/pricing/LeftGrPricing.png" width={856} height={815} alt="linear-gradient-top" />
                </div>
                <div className="absolute top-20 right-0 ">
                    <Image src="/pricing/RightGrPricing.png" width={856} height={815} alt="linear-gradient-bottom" />
                </div>

                <main className="top-[25%] md:top-[27%] z-30 min-h-[641px] absolute sm:px-0 sm:mt-5">
                    <div className="flex justify-center items-center flex-col gap-2 sm:gap-6 w-full">
                        <span className="font-[100px] text-center w-full font-springRainSolid text-white leading-[25px] lg:leading-[45px] text-[20px] lg:text-[35px]">
                            Services
                        </span>
                        <h1 className="w-full text-mobHeaderTex text-centert sm:text-tabHeaderText lg:text-lapHeaderText font-bold leading-[28px] sm:leading-[35px] lg:leading-[58.85px] text-white capitalize text-center tracking-[-1px] lg:-tracking-[3px] max-w-[300px] sm:max-w-5xl">
                            Unleash Your Creativity: Design Personalized <span className="text-primaryGreen">Cups & Mugs design </span>That Make Memories
                        </h1>
                        <p className="text-tabHeaderBody font-medium leading-[22px] tracking-[0.2px] text-white text-center max-w-[350px] sm:max-w-[500px]">
                            Mugs and cups are more than beverage vessels; they&apos;re companions, conversation starters, and keepsakes. Personalized designs turn them into extraordinary gifts that tell a story. Imagine enjoying your coffee from a mug with a funny saying or cherished memory. Personalized wedding cups or unique mugs for coworkers leave lasting impressions. At Logo Design Maker, design your own mugs online or collaborate with our designers to create personalized cups for any occasion.
                        </p>
                    </div>
                </main>
            </div>

            <ServiceIntro imgSrc="/services/Building Web and App Development.png" heading1="The Power of Personalized " heading2="Cup & Mug Design" para1="Personalized cup and mug design goes beyond practicality, offering a way to express yourself, celebrate special occasions, or show someone you care. These custom designs make meaningful gifts for birthdays, holidays, weddings, or any special occasion, providing a thoughtful and unique present that can be cherished for years. Personalized cups commemorate special events like weddings, graduations, or anniversaries, adding a personal touch and serving as lasting reminders of these moments. " para2="They also offer a cost-effective method to promote your business or organization; creating mugs with your logo or slogan to distribute at events or as employee gifts can boost brand recognition. Additionally, designing your own mug with a funny saying, quote, or photo allows you to express your individuality and stand out. Personalized cup and mug design lets you create something truly special for yourself or someone you love." withButton={true} flexDirection="flex-row" />

            <ServiceDesign imgSrc="/services/BrandDesigns.png" subHeading1="BUILT FOR CREATIVE, PERFORMANCE & MARKETING TEAMS" heading1="Elevate Your Mornings with Our Personalized " heading2="Cup Design Services" para="When you choose Logo Design Maker for your personalized cup & mug design needs, you benefit from:" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData} />

            <DesignProcess heading="Our Collaborative Cup or Mug Design Process" designProcess={designProcess} />

            <ServiceIntro imgSrc="/services/Building Web and App Development.png" heading1="Your Trusted Partner for Exceptional Cup or Mug Design" para1="At Logo Design Maker, we are passionate about helping businesses create Cup or Mug Design that strengthens their brand identity and connects with their target audience. We offer a user-friendly online platform for those who want to design merchandise online, and a dedicated design team for those seeking professional assistance." para2="We use top-of-the-line printing technologies and premium materials to ensure your merchandise is not only visually stunning but also built to last. Our commitment to excellent customer service, fast turnaround times, and competitive pricing makes us the perfect partner for all your merchandise design needs." withButton={true} flexDirection="flex-row" />

            <ServicesCTA imgSrc="/services/brand and identity design.png" heading="Still Need Help? We're Here for You!" para="Partner with Logo Design Maker and experience the difference a human touch can make. Contact us today to schedule a free consultation and discuss your custom logo design needs." />

            <Faqq faqs={faqs} />

        </section>
    )
}