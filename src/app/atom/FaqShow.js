'use client'
import Image from "next/image"

export default function FaqShow({ data, index, openIndex, setOpenIndex }) {
    // if openIndex === null , it is equal to index
    const isOpen = openIndex === index;

    const toggleAccordion = () => {
        setOpenIndex(isOpen ? null : index);
    };

    return (
        <div className="flex flex-col gap-2 pb-2 customBorderBottom2 border-white"
        >
            <div className="flex items-center justify-between gap-4 cursor-pointer" onClick={toggleAccordion}>
                <h3 className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-semibold leading-[21px] cursor-pointer w-full block" dangerouslySetInnerHTML={{ __html: data.ques }}>
                </h3>

                <Image src={isOpen ? "/home/UpArrow.png" : "/home/DownArrow.png"} width={15} height={15} alt={isOpen ? "DownArrowImg" : "UpArrowImg"} />
            </div>
            <div className="overflow-hidden">
                <p className={`transition-all duration-500 ease-in-out ${isOpen ? "max-h-32" : "max-h-0"} text-mobBody max-w-xl lg:max-w-3xl sm:text-tabBody lg:text-lapBody text-primaryGrey`} dangerouslySetInnerHTML={{ __html: data.ans }}>
                </p>
            </div>

        </div>
    )
}