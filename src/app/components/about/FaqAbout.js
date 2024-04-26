'use client'
import Image from "next/image"

export default function FaqAbout({ data, index, openIndex, setOpenIndex, setCurrentIndex }) {
    const isOpen = openIndex === index;

    const toggleAccordion = () => {
        if (isOpen) {
            return;
        }
        setOpenIndex(index);
        setCurrentIndex(index)
    };

    return (
        <div className={`${isOpen && "bg-secondaryBlack"} flex flex-col gap-8 pb-2 customBorderBottom3 py-6 px-4 rounded-[20px] `}
        >
            <div className="flex items-center justify-between gap-4 cursor-pointer" onClick={toggleAccordion}>
                <div className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-semibold leading-[21px] cursor-pointer w-full block">
                    {data.ques}
                </div>

                <Image src={isOpen ? "/home/UpArrow.png" : "/home/DownArrow.png"} width={15} height={15} alt={isOpen ? "DownArrowImg" : "UpArrowImg"} />
            </div>
            <div className="overflow-hidden">
                <p className={`transition-all duration-500 ease-in-out ${isOpen ? "max-h-32" : "max-h-0"} text-mobBody max-w-xl lg:max-w-3xl sm:text-tabBody lg:text-lapBody text-primaryGrey`}>
                    {data.ans}
                </p>
            </div>

        </div>
    )
}