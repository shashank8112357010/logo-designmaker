'use client'
import { useState } from "react"
import Image from "next/image"

export default function FaqShowAtom({ data, index, openIndex, setOpenIndex }) {
    const isOpen = openIndex === index;

    const toggleAccordion = () => {
        setOpenIndex(isOpen ? null : index);
    };

    return (
        <div className="flex flex-col gap-2 pb-2 customBorderBottom2 border-white"
        >
            <div className="flex items-center justify-between gap-4 cursor-pointer" onClick={toggleAccordion}>
                <div className=" text-mobTitle sm:text-tabTitle lg:text-lapTitle font-normal leading-6 sm:leading-6 lg:leading-9 cursor-pointer w-full block" >
                    {data.ques}
                </div>

                <Image src={isOpen ? "/home/UpArrow.png" : "/home/DownArrow.png"} width={15} height={15} alt={isOpen ? "DownArrowImg" : "UpArrowImg"} />

            </div>
            <div className="overflow-hidden">
                <p className={`transition-all duration-500 ease-in-out ${isOpen ? "h-32 xs:h-24" : "h-0"} text-mobBody max-w-xl lg:max-w-3xl sm:text-tabBody lg:text-lapBody text-primaryGrey`}>
                    {data.ans}
                </p>
            </div>

        </div>
    )
}