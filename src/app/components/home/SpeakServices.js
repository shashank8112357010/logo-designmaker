"use client"
import Box from "@/app/atom/Box";
import { BoxData } from "@/data/Data";
import DesignHeader from "@/app/atom/DesignHeader";


export default function SpeakServices() {

    return (
        <section className="max-w-[1920px] mx-auto bg-primaryBlack text-white pt-16 pb-12 sm:py-16 px-[2px]">

            <DesignHeader
                heading="Create a Design That Speaks Volumes"
                para="Crafting standout logos, we go beyond templates to create visual masterpieces uniquely tailored to your vision and values."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 mx-8 sm:mx-12 my-12 text-center">
                {BoxData.map((item) => <Box key={item.id} image={item.image} textPosition={item.textPosition} justifyContent={item.justifyContent} alignItems={item.alignItems} maxWidth={item.maxWidth} headingText={item.headingText} paraText={item.paraText} />)}
            </div>
        </section>
    )
}