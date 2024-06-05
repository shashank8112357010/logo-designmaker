"use client"
import Faqq from "@/app/atom/Faqq"
import DesignProcess from "@/app/components/home/Category/DesignProcess"
import ServiceDesign from "@/app/components/services/ServiceDesign"
import ServiceIntro from "@/app/components/services/ServiceIntro"
import ServicesCTA from "@/app/components/services/ServicesCTA"
import { designProcess, faqs, servicesDesignData } from "@/data/magazine-design"
import Image from "next/image"

export default function MagazineDesign() {

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
                            Captivate Your Audience with Award-Winning <span className="text-primaryGreen"><strong>Magazine Design</strong></span>
                        </h1>
                        <p className="text-tabHeaderBody font-medium leading-[22px] tracking-[0.2px] text-primaryGray text-center max-w-[350px] sm:max-w-[500px] md:max-w-[700px] px-2 sm:px-0">
                            In the digital era of today, well-designed publications are still quite powerful. A visually arresting magazine design may draw readers in, improve reading, and make an impression that lasts a lifetime. At <span>Logo Design Maker</span>, we specialize in producing visually attractive <strong> magazine designs</strong> that are also expertly developed to excite your target market and improve your brand. Our staff of talented designers can assist you in realizing your idea whether you&apos;re starting a new magazine or redesigning an old one.
                        </p>
                    </div>
                </main>
            </div>

            <div className="mt-64 sm:mt-0">
                <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="The Art & Science of " heading2="Magazine Design" para1="Designing a magazine combines science and art. Visual appeal, a clear hierarchy, and user-friendly layouts that lead readers through your material are all important to our designers. We also take into account the general tenor of your publication and the particular requirements of your target reader." para2={<span>We guarantee your magazine provides a very immersive experience for your readers, from creating visually arresting <strong> magazine cover designs</strong> that draw attention on newsstands to creating layouts that improve reading and content flow.</span>} withButton={true} flexDirection="flex-row" />
            </div>

            <ServiceDesign imgSrc="/services/BrandDesigns.png" subHeading1="BUILT FOR CREATIVE, PERFORMANCE & MARKETING TEAMS" heading1="Elevate Your Magazine with " heading2="Our Magazine Design Services" para={<span>You gain the following when you use <strong> Logo Design Maker </strong>for your magazine design:</span>} flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData} />

            <DesignProcess heading="Our Collaborative Magazine Design Process" designProcess={designProcess} />

            <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1={<span>A Dependable Partner for Superior <strong>Magazine Design</strong></span>} para1={<span>Helping publishers produce magazines that are unique is our passion at <strong>Logo Design Maker</strong>. We guarantee your participation at every stage of the process by offering a cooperative and open one.</span>} para2={<span>Our staff of skilled and experienced designers is committed to meeting your needs and providing magazine designs that are not only aesthetically beautiful but also thoughtfully planned to captivate your readers and meet your financial objectives.</span>} withButton={true} flexDirection="flex-row" />

            <ServicesCTA imgSrc="/services/SocialMediaDesignFuel.png" heading="Are You Prepared to Wow Your Viewers?" para={<span>Don&apos;t settle for a mediocre <strong> magazine design</strong>. Give our talented designers the freedom to produce a magazine that appeals to your target market and captures the distinct voice of your business. See how we can help you improve your magazine and reach your publishing objectives by getting in touch with us for a free consultation right now.</span>} />

            <Faqq faqs={faqs} />

        </section>
    )
}