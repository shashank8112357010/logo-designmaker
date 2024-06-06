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

                <main className="top-[40%] sm:top-[30%] z-30 min-h-[641px] absolute sm:px-0 sm:mt-5">
                    <div className="flex justify-center items-center flex-col gap-2 sm:gap-6 w-full">
                        <span className="font-[100px] text-center w-full font-springRainSolid text-white leading-[25px] lg:leading-[45px] text-[20px] lg:text-[35px]">
                            Services
                        </span>
                        <h1 className="w-full text-mobHeaderTex text-centert sm:text-tabHeaderText lg:text-lapHeaderText font-bold leading-[28px] sm:leading-[35px] lg:leading-[58.85px] text-white capitalize text-center tracking-[-1px] lg:-tracking-[3px] max-w-[300px] sm:max-w-5xl">
                            Unleash Your Book&apos;s Potential with a Stunning <span className="text-primaryGreen"><strong> Book Cover Design</strong></span>
                        </h1>
                        <p className="text-tabHeaderBody font-medium leading-[22px] tracking-[0.2px] text-primaryGray text-center max-w-[350px] sm:max-w-[500px] md:max-w-[700px] px-2 sm:px-0">
                            Your book cover pattern is the first gist your book makes on effectiveness readers. It&apos;s a right marketing tool that could pattern a book cover that grabs attention, accurately reflects your story is essence,&apos; and entices readers to dive in. At Logo Design Maker, we specialized in crafting book cover designs that are as unequaled as your book itself.
                        </p>
                    </div>
                </main>
            </div>

            <div className="mt-64 sm:mt-0">
                <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="The Power of a Professional" heading2=" Book Cover Design" para1={<span>In today is competitor publishing landscape, a captain book cover pattern is more authorized than ever. A well designed cover could importantly improver your book is profile and sales. It could help your book stood out on crowded shelves and on line as well as &apos; marketplaces, attracting the right readers and boosting your book is success.</span>} para2={<span>Our experienced book cover designers learn the grandness of creating covers that are not only visually appealing but also strategically designed to vibrate with your direct audience.</span>} withButton={true} flexDirection="flex-row" />
            </div>

            <ServiceDesign imgSrc="/services/SocialMediaDesignBeyond.png" subHeading1="BUILT FOR CREATIVE, PERFORMANCE & MARKETING TEAMS" heading1="Elevate Your Book with Our " heading2={<span><strong>Book Cover Design Services</strong></span>} para={<span>When you prefer Logo Design Maker for your book cover design, you welfare from:</span>} flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData} />

            <DesignProcess heading="Our Collaborative Magazine Design Process" designProcess={designProcess} />

            <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1={<span>Unparalleled Quality & Exceptional Service</span>} para1={<span>At Logo Design Maker, we are aflame about helping authors bring their stories to life with captivating book cover designs. We consider a captain cover is an investing in your book is success. We offer a cooperative and vaporous process, ensuring you was involved every step of the way.</span>} para2={<span>Our team of experienced and talented book cover designers was dedicated to creating high quality covers that not only looked amazing but also efficaciously marketed your book.</span>} withButton={true} flexDirection="flex-row" />

            <ServicesCTA imgSrc="/services/SocialMediaDesignFuel.png" heading="Ready to Unlock Your Book's Full Potential?" para={<span>Do not settee for an unpainted cover that blends into the background. Let our skilled designers make a book cover pattern that captures the meat of your book and compels readers to dive in. Contact us today for a free audience and discovered how we could help you promote your book with a pattern a book cover that truly stands out.</span>} />

            <Faqq faqs={faqs} />

        </section>
    )
}