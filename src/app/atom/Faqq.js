'use client'
import FaqShow from "@/app/atom/FaqShow"
import { useState } from "react"

export default function Faqq({ faqs }) {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <section className="bg-primaryBlack text-white max-w-[1920px] mx-auto pb-28 px-4 sm:px-10 lg:px-20">
            <div className="flex flex-col  max-w-[1700px]  px-2 mx-auto gap-8">
                <h2 className="text-mobHeading1 sm:text-tabHeading1 lg:text-lapHeading1 font-bold" >FAQ&#39;S</h2>
                {faqs.map((item, index) =>
                    <FaqShow
                        key={item.id}
                        index={index}
                        data={item}
                        openIndex={openIndex}
                        setOpenIndex={setOpenIndex}
                    />
                )}
            </div>
        </section>
    )
}