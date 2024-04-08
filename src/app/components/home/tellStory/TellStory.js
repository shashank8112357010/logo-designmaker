"use client"
import { useState } from "react"
import TellStoryContent from "./TellStoryContent"

export default function TellStory() {
    const [content, setContent] = useState(1)

    const handleContent = (num) => {
        console.log(num)
        setContent(num)
    }

    return (
        <section className=" bg-primaryBlack mx-auto max-w-[1920px] px-4 sm:px-20 py-8 md:py-20">
            <div className="flex justify-center items-center flex-col text-white mb-10 ">
                <span className="font-springRainSolid text-[18px] sm:text-[35px] ">
                    How Does
                </span>
                <h5 className="text-mobHeading1 sm:text-tabHeading1 lg:text-lapHeading1 font-bold leading-[21px] sm:leading-[29px] lg:leading-[44px] tracking-[-1px] sm:tracking-[-1px] text-center max-w-[200px] sm:max-w-[250px] lg:max-w-[400px]">
                    Logo Design Maker works for your needs
                </h5>
            </div>

            <div className="flex flex-col-reverse md:flex-col max-w-[1220px] mx-auto">
                <div className="px-4 sm:px-20 py-8 md:py-10 items-center md:items-end">
                    <div className=" font-bold text-[14px] lg:text-[21px] flex gap-1 sm:gap-2 w-full items-center justify-center md:justify-end">
                        {
                            [1, 2, 3, 4, 5, 6].map((num, index) => {
                                return (
                                    <button
                                        onClick={() => handleContent(num)}
                                        key={num} className={`${num === index + 1 ? "bg-white text-secondaryBlack" : "bg-secondaryBlack text-white"} w-[40px] lg:w-[59px] h-[40px] lg:h-[59px] rounded-full `}>
                                        {num}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
                {content &&<TellStoryContent content={content} />}
            </div>
        </section >
    )
}