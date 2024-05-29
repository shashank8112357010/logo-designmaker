"use client"
import Button from "@/app/atom/Button";
import DesignHeader from "@/app/atom/DesignHeader";
import Sliderr from "@/app/atom/Slider";
import Story from "@/app/atom/Story";
import ServicesBanner from "@/app/components/services/ServicesBanner";
import { useState } from "react";
import ServiceDesign from "@/app/components/services/ServiceDesignTop";
import ServicesCTA from "@/app/components/services/ServicesCTA";
import { faqs } from "@/data/website-and-app-design";
import { servicesDesignData1, servicesDesignData2 } from "@/data/book-and-magazine-designs";
import Faqq from "@/app/atom/Faqq";
import TellStoryContent from "@/app/components/home/tellStory/TellStoryContent";
import { tellStoryContent } from "@/data/book-and-magazine-designs";
import Head from 'next/head';
import ServiceDesignBottom from "@/app/components/services/ServiceDesignBottom";
import ServiceDesignTop from "@/app/components/services/ServiceDesignTop";

// export function generateMetaData() {
//     return {
//         title: "Book & Magazine Design Services | Logo Design Maker",
//         description: "Elevate your publications with Logo Design Maker's book & magazine design services. We craft captivating covers & layouts that grab attention & drive sales.",
//         keyword: "Logo Design Maker, Book cover design, Magazine design, Book layout, Magazine layout, Design services for publications, Professional book design services, Professional magazine design services, Book cover design company, Magazine design company, E-book cover design services"
//     };
// }

// export const metadata = {
//     title: "Book and magazine Page",
//     description: "Book",
// };

export default function BookMagazineDesigns() {
    const [content, setContent] = useState(1)

    const slideData = [
        {
            para: "Logo Design Maker's book cover design expertise was instrumental in the success of my debut novel. Their understanding of genre conventions and ability to translate my vision into a captivating design helped my book stand out on bookstore shelves and online retailers. Since the release of the book, I've seen a significant increase in sales and reader engagement.",
            name: "Sarah Jones",
            img: "/home/TestimonialAvtar.png",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker's book cover design expertise was instrumental in the success of my debut novel. Their understanding of genre conventions and ability to translate my vision into a captivating design helped my book stand out on bookstore shelves and online retailers. Since the release of the book, I've seen a significant increase in sales and reader engagement.",
            name: "Sarah Jones",
            img: "/home/TestimonialAvtar.png",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker's book cover design expertise was instrumental in the success of my debut novel. Their understanding of genre conventions and ability to translate my vision into a captivating design helped my book stand out on bookstore shelves and online retailers. Since the release of the book, I've seen a significant increase in sales and reader engagement.",
            name: "Sarah Jones",
            img: "/home/TestimonialAvtar.png",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
    ];

    const metaData = {
        title: "Aman Book & Magazine Design Services | Logo Design Maker",
        description: "Elevate your publications with Logo Design Maker's book & magazine design services. We craft captivating covers & layouts that grab attention & drive sales.",
        keywords: "Logo Design Maker, Book cover design, Magazine design, Book layout, Magazine layout, Design services for publications, Professional book design services, Professional magazine design services, Book cover design company, Magazine design company, E-book cover design services"
    }

    return (
        <>
            <Head>
                <title>{metaData.title}</title>
                <meta name="description" content={metaData.description} />
                <meta name="keywords" content={metaData.keywords} />
            </Head>

            <section className="bg-primaryBlack overflow-hidden pt-20 max-w-[1920px] mx-auto">

                <ServicesBanner heading="Captivate Readers, Fuel Imagination: Unleash the Power of " subHeading="Book & Magazine Design" para="In publishing, first impressions matter. At Logo Design Maker, we create captivating book covers and magazine layouts that grab attention and accurately represent your content. With our eye-catching visuals and captivating typography, we'll entice readers and boost sales." />

                <ServiceDesignTop imgSrc="/services/BrandDesigns.png" subHeading1="Beyond Aesthetics: " subHeading2=" Design that Tells a Story" heading1="The Power of the First Look: Design that Ignites " heading2="Curiosity and Drives Sales" para="Investing in professional book and magazine design offers more than just a pretty cover or layout. It's a strategic investment that delivers a range of benefits for your publication:" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData1} />

                <div>
                    <div className="pt-20">
                        <DesignHeader heading="A Symphony of Design Solutions for" subHeading=" Your Publication" para="We offer a range of book and magazine design services to cater to your specific needs. Here's a closer look at how we can help you create a publication that stands out on the shelf or in the digital landscape:" />
                    </div>
                    <div className="tellStoryContent flex flex-col-reverse md:flex-col sm:px-10 lg:px-20 w-full pb-20">
                        <Story setContent={setContent} content={content} arrayData={[1, 2, 3]} />
                        {content && <TellStoryContent content={content} tellStoryContent={tellStoryContent} rowReverse={true} />}
                    </div>
                </div>

                <Sliderr slideData={slideData} />

                <ServiceDesignBottom imgSrc="/services/readyToUnleash.png" heading1="Ready to unleash the power of " heading2="book and magazine design" heading3="for your publication?" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData2} />

                <div className=" mt-8 sm:mt-32 md:mt-44">
                    <ServicesCTA imgSrc="/services/smart-analytical-data-on-an-open-laptop.png" heading="Fuel Your Publication's Success: Take Action Today!" para="Investing in professional book and magazine design is an investment in the success of your publication. At Logo Design Maker, we offer a variety of design packages to suit your specific needs and budget. Let our experienced designers create a visually stunning design that not only grabs attention but also accurately reflects the essence of your publication and fuels the imagination of your readers." />
                </div>

                <Faqq faqs={faqs} />

            </section>
        </>
    )
}


