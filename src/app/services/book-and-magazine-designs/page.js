"use client"
import DesignHeader from "@/app/atom/DesignHeader";
import Sliderr from "@/app/atom/Slider";
import Story from "@/app/atom/Story";
import ServicesBanner from "@/app/components/services/ServicesBanner";
import { useState } from "react";
import ServicesCTA from "@/app/components/services/ServicesCTA";
import { faqs } from "@/data/website-and-app-design";
import { servicesDesignData1, servicesDesignData2 } from "@/data/book-and-magazine-designs";
import Faqq from "@/app/atom/Faqq";
import TellStoryContent from "@/app/components/home/tellStory/TellStoryContent";
import { tellStoryContent } from "@/data/book-and-magazine-designs";
import Head from 'next/head';
import ServiceDesign from "@/app/components/services/ServiceDesign";

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

                <ServicesBanner heading="Captivate Readers, Fuel Imagination: Unleash the Power of " subHeading="Book & Magazine Design" para={<span>As they say in publishing, first impressions count. An <strong>engaging magazine design</strong> or <strong>book cover design</strong> can make the difference between a reader picking it up and glancing right past it. We here at <strong> Logo Design Maker</strong> are aware of how important book design is to the success of your publication.</span>} />

                <ServiceDesign imgSrc="/services/BrandDesigns.png" subHeading1="Beyond Aesthetics: " subHeading2=" Design that Tells a Story" heading1="Professional " heading2="Book & Magazine Design" heading3=": A Strategic Investment for Success"
                    flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData1} />

                <div className="">
                    <div className="pt-20">
                        <DesignHeader heading="A Symphony of Design Solutions for" subHeading=" Your Publication" para={<span>We provide several <strong> book design </strong> and <strong> magazine design </strong>services to meet your particular requirements. The following provides a closer look at how we may assist you in producing a magazine that is unique on the shelf or online:</span>} />
                    </div>
                    <div className="tellStoryContent flex  flex-col-reverse md:flex-col sm:px-10 lg:px-20 w-full pb-20">
                        <Story setContent={setContent} content={content} arrayData={[1, 2, 3]} />
                        {content && <TellStoryContent content={content} tellStoryContent={tellStoryContent} rowReverse={true} />}
                    </div>
                </div>

                <Sliderr slideData={slideData} />

                <ServiceDesign imgSrc="/services/readyToUnleash.png" heading1="Need Help with Your Book Design Project?" flexDirection="flex-row-reverse" servicesDesignData={servicesDesignData2} />

                <div className="">
                    <ServicesCTA imgSrc="/services/takeYourAction.png" heading="Fuel Your Publication's Success: Take Action Today!" para="Investing in professional book and magazine design is an investment in the success of your publication. At Logo Design Maker, we offer a variety of design packages to suit your specific needs and budget. Let our experienced designers create a visually stunning design that not only grabs attention but also accurately reflects the essence of your publication and fuels the imagination of your readers." />
                </div>

                <Faqq faqs={faqs} />

            </section>
        </>
    )
}


