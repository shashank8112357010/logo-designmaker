"use client"
import Faqq from "@/app/atom/Faqq"
import DesignProcess from "@/app/components/home/Category/DesignProcess"
import ServiceDesign from "@/app/components/services/ServiceDesign"
import ServiceIntro from "@/app/components/services/ServiceIntro"
import ServicesCTA from "@/app/components/services/ServicesCTA"
import { designProcess, faqs, servicesDesignData } from "@/data/bag-&-tote-design"
import Image from "next/image"

export default function BagAndToteDesign() {

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
                        Release Your Innovativeness: Design <span className="text-primaryGreen">Customized Bags and Totes </span>That Gain Experiences
                        </h1>
                        <p className="text-tabHeaderBody font-medium leading-[22px] tracking-[0.2px] text-white text-center max-w-[350px] sm:max-w-[500px] md:max-w-[700px]">
                        At <strong>Logo Design Maker</strong>, we offer <strong>custom bag and tote design</strong> administrations that engage you to make exceptional, critical frills. Customized bags and totes are something beyond practical things; they mirror your own style and brand personality. Whether you want a designer laptop bag for work, an in vogue tote for everyday use, or a remarkable bag for a unique event, our master designers are here to rejuvenate your vision.
                        </p>
                    </div>
                </main>
            </div>

            <div className="mt-64 sm:mt-0">
                <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="The Force of Customized " heading2="Bag and Tote Design" para1={<span>Customized <strong>bag and tote design</strong> offers various advantages past usefulness. Custom-designed bags and totes give a road to self-articulation, permitting you to exhibit your style and character. They are ideally suited for unique events like corporate occasions, weddings, or brand advancements, where a custom touch has a huge effect. With <strong>custom bag and tote design</strong>, you can make things that are functional as well as convey nostalgic worth, making them valued belongings into the indefinite future.</span>} para2={<span><strong>Custom bag and tote design</strong> likewise assumes a crucial part in marking. An interesting, very much designed bag can act as a portable promotion for your image, expanding perceivability and acknowledgment. At Logo Design Maker, our capable <strong>bag designers</strong> comprehend the significance of making designs that reverberate with your crowd and mirror your image's qualities. Whether it's a <strong>designer laptop bag</strong>, a <strong>designer beach bag</strong>, or a <strong>designer baby bag</strong>, we guarantee each design is created flawlessly.</span>} withButton={true} flexDirection="flex-row" />
            </div>

            <ServiceDesign imgSrc="/services/SocialMediaDesignBeyond.png" subHeading1="Worked FOR Imaginative, Execution and Promoting Groups" heading1="Elevate Your Mornings with Our Personalized " heading2="Cup Design Services" para={<span>Our customized <strong>bag and tote design</strong> administrations are explicitly custom-made for imaginative, execution, and promoting groups, offering interesting elements that take care of your requirements:</span>} flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData} />

            <DesignProcess heading="Our Cooperative Bag and Tote Design Interaction" designProcess={designProcess} />

            <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="Your Confided in Accomplice for Extraordinary Bag and Tote Design" para1={<span>At Logo Design Maker, we value being a confided in accomplice for uncommon <strong>bag and tote design</strong>. Our group's mastery and obligation to quality guarantee that each venture fulfills the most noteworthy guidelines. Customer fulfillment and quality affirmation are our first concerns. With our <strong>custom bag and tote design</strong> administrations, you can certainly make things that address your issues as well as surpass your assumptions.</span>} 
            para2={<span>We have confidence in the force of coordinated effort and figuring out your image's extraordinary necessities. Our designers are energetic about transforming your ideas into the real world, guaranteeing that each bag and tote we design is a genuine impression of your vision. Trust <strong>Logo Design Maker</strong> to convey quality, dependability, and imagination in each piece of headwear we design.</span>} withButton={true} flexDirection="flex-row" />

            <ServicesCTA imgSrc="/services/SocialMediaDesignFuel.png" heading="Still Need Assistance? We're Hanging Around for You!" para={<span>On the off chance that you want further help with your <strong>bag and tote design</strong>, make sure to us. We're here to help!</span>} />

            <Faqq faqs={faqs} />

        </section>
    )
}





