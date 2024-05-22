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

                <main className="top-[40%] md:top-[27%] z-30 min-h-[641px] absolute sm:px-0 sm:mt-5">
                    <div className="flex justify-center items-center flex-col gap-2 sm:gap-6 w-full">
                        <span className="font-[100px] text-center w-full font-springRainSolid text-white leading-[25px] lg:leading-[45px] text-[20px] lg:text-[35px]">
                            Services
                        </span>
                        <h1 className="w-full text-mobHeaderTex text-centert sm:text-tabHeaderText lg:text-lapHeaderText font-bold leading-[28px] sm:leading-[35px] lg:leading-[58.85px] text-white capitalize text-center tracking-[-1px] lg:-tracking-[3px] max-w-[300px] sm:max-w-5xl">
                            Unleash Your Brand Potential: Get Custom <span className="text-primaryGreen">Merchandise Design </span>That Makes a Statement
                        </h1>
                        <p className="text-tabHeaderBody font-medium leading-[22px] tracking-[0.2px] text-white text-center max-w-[350px] sm:max-w-[500px]">
                            In today's competitive landscape, standing out is crucial. At Logo Design Maker, we help businesses create impactful merchandise that builds brand loyalty and engages customers. Design online with our platform or collaborate with our designers to bring your vision to life. Whether for promotion or custom products, we have the tools and expertise to help you succeed.
                        </p>
                    </div>
                </main>
            </div>

            <ServiceIntro imgSrc="/services/Building Web and App Development.png" heading1="The Power of " heading2="Merchandise Design" para1="Merchandise design goes beyond functionality; it's a strategic marketing tool that connects you with your customers on a deeper level. Custom-designed merchandise can boost brand awareness through eye-catching items featuring your logo and branding message, driving recognition wherever they go. It also enhances customer engagement by serving as conversation starters, strengthening the bond between your brand and your audience. " para2="Merchandise design goes beyond functionality; it's a strategic marketing tool that connects you with your customers on a deeper level. Custom-designed merchandise can boost brand awareness through eye-catching items featuring your logo and branding message, driving recognition wherever they go. It also enhances customer engagement by serving as conversation starters, strengthening the bond between your brand and your audience. " withButton={true} flexDirection="flex-row" />

            <ServiceDesign imgSrc="/services/investInBrandDesign.png" subHeading1="BUILT FOR CREATIVE, PERFORMANCE & MARKETING TEAMS" heading1="Elevate Your World with Our " heading2="Merchandise Design Services" para="When you choose Logo Design Maker for your merchandise design needs, you benefit from:" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData} />

            <DesignProcess heading="Our Collaborative Merchandise Design Process" designProcess={designProcess} />

            <ServiceIntro imgSrc="/services/Building Web and App Development.png" heading1="Your Trusted Partner for Exceptional Merchandise Design" para1="At Logo Design Maker, we are passionate about helping businesses create merchandise design that strengthens their brand identity and connects with their target audience. We offer a user-friendly online platform for those who want to design merchandise online, and a dedicated design team for those seeking professional assistance." para2="We use top-of-the-line printing technologies and premium materials to ensure your merchandise is not only visually stunning but also built to last. Our commitment to excellent customer service, fast turnaround times, and competitive pricing makes us the perfect partner for all your merchandise design needs." withButton={true} flexDirection="flex-row" />

            <ServicesCTA imgSrc="/services/brand and identity design.png" heading="Still Need Help? We're Here for You!" para="Partner with Logo Design Maker and experience the difference a human touch can make. Contact us today to schedule a free consultation and discuss your custom logo design needs." />

            <Faqq faqs={faqs} />

        </section>
    )
}