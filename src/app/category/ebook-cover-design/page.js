"use client"
import Faqq from "@/app/atom/Faqq"
import DesignProcess from "@/app/components/home/Category/DesignProcess"
import ServiceDesign from "@/app/components/services/ServiceDesign"
import ServiceIntro from "@/app/components/services/ServiceIntro"
import ServicesCTA from "@/app/components/services/ServicesCTA"
import { designProcess, faqs, servicesDesignData } from "@/data/ebook-cover-design"
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

                <main className="top-[40%] sm:top-[30%] z-30 min-h-[641px] absolute sm:px-0 sm:mt-5">
                    <div className="flex justify-center items-center flex-col gap-2 sm:gap-6 w-full">
                        <span className="font-[100px] text-center w-full font-springRainSolid text-white leading-[25px] lg:leading-[45px] text-[20px] lg:text-[35px]">
                            Services
                        </span>
                        <h1 className="w-full text-mobHeaderTex text-centert sm:text-tabHeaderText lg:text-lapHeaderText font-bold leading-[28px] sm:leading-[35px] lg:leading-[58.85px] text-white capitalize text-center tracking-[-1px] lg:-tracking-[3px] max-w-[300px] sm:max-w-5xl">
                            Create Ebooks That Sell: Gorgeous <span className="text-primaryGreen"><strong>Ebook Cover Design</strong></span><span> Services</span>
                        </h1>
                        <p className="text-tabHeaderBody font-medium leading-[22px] tracking-[0.2px] text-primaryGray text-center max-w-[350px] sm:max-w-[500px] md:max-w-[700px] px-2 sm:px-0">
                            Standing out in the cut throat internet market of today requires an engaging ebook cover design. The first thing that readers see about your ebook is its cover, so it has to draw them in, fairly represent the material of your book, and make them want to download it. Our specialty at Logo Design Maker is creating visually striking ebook cover designs that are also purposefully created to turn people into readers.
                        </p>
                    </div>
                </main>
            </div>

            <div className="mt-64 sm:mt-0">
                <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="The Influence of a Skillfully Designed" heading2=" Ebook Cover" para1="Never undervalue the impact of a well done ebook cover design. Visibility and sales of your ebook can be greatly increased by a well-designed cover. In busy online markets like Amazon Kindle Direct Publishing, it can make your work stand out and draw in prospective readers who are browsing through a ton of selections." para2={<span>Our skilled ebook cover designers can produce designs that appeal to your genre and intended readership since they are aware of the particular design quirks of the ebook industry.</span>} withButton={true} flexDirection="flex-row" />
            </div>

            <ServiceDesign imgSrc="/services/SocialMediaDesignBeyond.png" subHeading1="BUILT FOR CREATIVE, PERFORMANCE & MARKETING TEAMS" heading1="Elevate Your Ebook with Our Services for " heading2="Ebook Cover Design" para={<span>Choose Logo Design Maker for your ebook cover design and you get:</span>} flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData} />

            <DesignProcess heading="Our Collaborative Magazine Design Process" designProcess={designProcess} />

            <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1={<span>Choose Us for Unmatched Quality and Outstanding Service</span>} para1={<span>Our goal at Logo Design Maker is enabling writers to create visually stunning ebook covers that really bring their novels to life. Professional covers, in our opinion, are an investment in the success of your ebook. Our collaborative and open approach guarantees your involvement at every stage.</span>} para2={<span>Our group of skilled and experienced ebook cover designers is committed to produce excellent covers that will not only look great but also successfully promote your ebook and increase sales.</span>} withButton={true} flexDirection="flex-row" />

            <ServicesCTA imgSrc="/services/SocialMediaDesignFuel.png" heading="Are You Prepared to Wow Your Viewers?" para={<span>Don&apos;t settle for a background-blending do-it-yourself cover or a stock template. Let our knowledgeable designers produce a polished ebook cover that catches the spirit of your book and makes readers want to download it. Get in free consultation with us now to find out how we can assist you in creating a sellable ebook cover.</span>} />

            <Faqq faqs={faqs} />

        </section>
    )
}