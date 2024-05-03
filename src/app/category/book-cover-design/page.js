"use client"
import Faqq from "@/app/atom/Faqq"
import DesignProcess from "@/app/components/home/Category/DesignProcess"
import ServiceDesign from "@/app/components/services/ServiceDesign"
import ServiceIntro from "@/app/components/services/ServiceIntro"
import ServicesCTA from "@/app/components/services/ServicesCTA"
import { designProcess, faqs, servicesDesignData } from "@/data/book-cover-design"
import Image from "next/image"

export default function BookCoverDesign() {


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
                            Unleash Your Book's Potential with a Stunning <span className="text-primaryGreen">Book Cover Design</span>
                        </h1>
                        <p className="text-tabHeaderBody font-medium leading-[22px] tracking-[0.2px] text-white text-center max-w-[350px] sm:max-w-[500px]">
                            Crafting unique book cover designs that captivate, reflect your story's essence, and entice readers to dive in. Let Logo Design Maker create your powerful marketing tool.
                        </p>
                    </div>
                </main>

            </div>

            <ServiceIntro imgSrc="/services/Building Web and App Development.png" heading1="The Power of a Professional " heading2="Book Cover Design" para1="In today's competitive publishing landscape, a professional book cover design is more important than ever. A well-designed cover can significantly increase your book's visibility and sales. It can help your book stand out on crowded shelves and online marketplaces, attracting the right readers and boosting your book's success." para2="Our experienced book cover designers understand the importance of creating covers that are not only visually appealing but also strategically designed to resonate with your target audience." withButton={true} flexDirection="flex-row" />

            <ServiceDesign imgSrc="/services/investInBrandDesign.png" subHeading1="BUILT FOR CREATIVE, PERFORMANCE & MARKETING TEAMS" heading1="Elevate Your Book with Our " heading2="Book Cover Design Services" para="When you choose Logo Design Maker for your book cover design, you benefit from:" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData} />

            <DesignProcess heading="Our Collaborative Book Cover Design Process" designProcess={designProcess} />

            <ServiceIntro imgSrc="/services/Building Web and App Development.png" heading1="Unparalleled Quality & Exceptional Service" para1="At Logo Design Maker, we are passionate about helping authors bring their stories to life with captivating book cover designs. We believe a professional cover is an investment in your book's success. We offer a collaborative and transparent process, ensuring you're involved every step of the way." para2="Our team of experienced and talented book cover designers is dedicated to creating high-quality covers that not only look amazing but also effectively market your book." withButton={true} flexDirection="flex-row" />

            <ServicesCTA imgSrc="/services/brand and identity design.png" heading="Ready to Unlock Your Book's Full Potential?" para="Partner with Logo Design Maker and experience the difference a human touch can make. Contact us today to schedule a free consultation and discuss your custom logo design needs." />

            <Faqq faqs={faqs} />

        </section>
    )
}