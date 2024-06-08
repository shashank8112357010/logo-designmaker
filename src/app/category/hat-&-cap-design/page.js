"use client"
import Faqq from "@/app/atom/Faqq"
import DesignProcess from "@/app/components/home/Category/DesignProcess"
import ServiceDesign from "@/app/components/services/ServiceDesign"
import ServiceIntro from "@/app/components/services/ServiceIntro"
import ServicesCTA from "@/app/components/services/ServicesCTA"
import { designProcess, faqs, servicesDesignData } from "@/data/hat-&-cap-design"
import Image from "next/image"

export default function HatAndCapDesign() {

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
                            Unleash Your Creativity: Design<span className="text-primaryGreen">Personalized Hats and Caps </span>That Make Recollections
                        </h1>
                        <p className="text-tabHeaderBody font-medium leading-[22px] tracking-[0.2px] text-white text-center max-w-[350px] sm:max-w-[500px] md:max-w-[700px]">
                            At <strong>Logo Design Maker</strong>, we specialize in <strong>custom hat and cap design</strong> that allows you to communicate your novel style. Personalized hats and caps are something beyond accessories; they&apos;re an impression of your brand or personal flair. Whether for promotional occasions, team garbs, or personal use, designing your own hat guarantees an ideal fit for any occasion.
                        </p>
                    </div>
                </main>
            </div>

            <div className="mt-64 sm:mt-0">
                <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="The Force of Personalized " heading2="Hat and Cap Design" para1={<span>Personalized <strong>hat and cap design</strong> offers help that go past simple practicality. Custom hats and caps act as incredible assets for self-articulation and are ideally suited for special occasions. With custom <strong>hat and cap design</strong>, you can create interesting pieces that resonate with your audience and feature your brand&apos;s personality. Whether you&apos;re celebrating an achievement, launching another item, or basically wanting to make a statement, designing your own hat adds a personal touch that can&apos;t be replicated with off-the-rack things.</span>} para2={<span>Customized hats and caps also make astounding promotional merchandise. They give a tangible association with your brand that your audience can wear gladly. At <strong>Logo Design Maker</strong>, we understand the importance of creating designs that are visually appealing as well as meaningful and memorable. Our master <strong>hat designers</strong> work intimately with you to guarantee your vision is rejuvenated, making each hat or cap a treasured thing.</span>} withButton={true} flexDirection="flex-row" />
            </div>

            <ServiceDesign imgSrc="/services/SocialMediaDesignBeyond.png" subHeading1="Worked FOR CREATIVE, PERFORMANCE and MARKETING TEAMS" heading1="Elevate Your Mornings with Our Personalized " heading2="Cup Design Services" para={<span>Our personalized <strong>hat and cap design</strong> administration is tailored specifically for creative, performance, and marketing teams, giving novel features that cater to your particular requirements:</span>} flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData} />

            <DesignProcess heading="Our Collaborative Hat and Cap Design Cycle" designProcess={designProcess} />

            <ServiceIntro imgSrc="/services/clothing&merchandiseDesign.png" heading1="Your Confided in Partner for Exceptional Hat and Cap Design" para1={<span>At <strong>Logo Design Maker</strong>, we highly esteem being a confided in partner for exceptional <strong>hat and cap design</strong>. Our team&apos;s skill and obligation to quality guarantee that each undertaking fulfills the most noteworthy guidelines. Customer satisfaction and quality assurance are our first concerns. With our <strong>custom hat and cap design</strong> administrations, you can unhesitatingly create things that address your issues as well as surpass your expectations.</span>}
                para2={<span>We trust in the force of collaboration and understanding your brand&apos;s exceptional necessities. Our designers are passionate about transforming your ideas into reality, guaranteeing that each hat and cap we design is a genuine impression of your vision. Trust <strong>Logo Design Maker</strong> to convey quality, reliability, and creativity in each piece of headwear we design.</span>} withButton={true} flexDirection="flex-row" />

            <ServicesCTA imgSrc="/services/SocialMediaDesignFuel.png" heading="Still Need Assistance? We're Hanging Around for You!" para={<span>On the off chance that you want further assistance with your <strong>hat and cap design</strong>, make sure to us. We&apos;re here to help!</span>} />

            <Faqq faqs={faqs} />

        </section>
    )
}





