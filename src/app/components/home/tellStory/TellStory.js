"use client"
import { useState } from "react"
import TellStoryContent from "./TellStoryContent"
import Story from "@/app/atom/Story"
import { tellStoryContent } from "@/data/Data"

export default function TellStory() {
    const [content, setContent] = useState(1)

    return (
        <section className=" bg-primaryBlack mx-auto max-w-[1920px] px-4 sm:px-20 py-8 md:pb-20 md:pt-0">
            <div className="flex justify-center items-center flex-col text-white mb-10 ">
                <span className="font-springRainSolid text-[18px] sm:text-[35px] ">
                    How Does
                </span>
                <h5 className="text-mobHeading1 sm:text-tabHeading1 lg:text-lapHeading1 font-bold leading-[21px] sm:leading-[29px] lg:leading-[44px] tracking-[-1px] sm:tracking-[-1px] text-center max-w-[200px] sm:max-w-[250px] lg:max-w-[400px]">
                    Logo Design Maker works for your needs
                </h5>
            </div>

            <div className="flex flex-col-reverse md:flex-col max-w-[1220px] mx-auto">
                <Story setContent={setContent} content={content} arrayData={[1, 2, 3, 4, 5, 6]} />
                {/* here  */}
                {content && <TellStoryContent content={content} tellStoryContent={tellStoryContent} />}
            </div>
        </section >
    )
}