
"use client"
import ButtonAtom from "@/app/atom/ButtonAtom";
import DesignHeaderAtom from "@/app/atom/DesignHeaderAtom";
import SliderAtom from "@/app/atom/SliderAtom";
import StoryAtom from "@/app/atom/StoryAtom";
import ServicesBanner from "@/app/components/services/ServicesBanner";
import Image from "next/image";
import { useState } from "react";
import ServiceDesign from "@/app/components/services/ServiceDesign";
import ServicesCTA from "@/app/components/services/ServicesCTA";
import FaqAtom from "@/app/atom/faqAtom";
import { faqs } from "@/data/website-and-app-design";
import { servicesDesignData1, servicesDesignData2 } from "@/data/brand-and-identity-design";

export default function BrandIdentityDesign() {
    const [content, setContent] = useState(1)

    const slideData = [
        {
            para: "Logo Design Maker completely transformed my brand identity! From the initial consultation to the final design, the process was smooth and collaborative. They truly captured the essence of my brand and created a cohesive visual experience that resonates with my target audience. I highly recommend their services to anyone looking to elevate their brand.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker completely transformed my brand identity! From the initial consultation to the final design, the process was smooth and collaborative. They truly captured the essence of my brand and created a cohesive visual experience that resonates with my target audience. I highly recommend their services to anyone looking to elevate their brand.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "Logo Design Maker completely transformed my brand identity! From the initial consultation to the final design, the process was smooth and collaborative. They truly captured the essence of my brand and created a cohesive visual experience that resonates with my target audience. I highly recommend their services to anyone looking to elevate their brand.",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
    ];

    return (
        <section className="bg-primaryBlack overflow-hidden pt-20 max-w-[1920px] mx-auto">

            <ServicesBanner heading="Elevate Your Brand Experience: The Power of " subHeading="Brand & Identity Design" para="In today's market, a robust brand identity is essential, not optional. It defines your brand story, influences customer perception, and cultivates loyalty. From visuals to messaging, it's your brand's essence, making a lasting impression and distinguishing you from competitors." />
        </section>
    )
}