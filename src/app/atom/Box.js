import Image from "next/image"

export default function Box({ image, textPosition, alignItems, headingText, paraText }) {
    return (
        <div className={`flex flex-col ${textPosition} ${alignItems} boxShadow px-1 pb-4 gap-[8px] sm:gap-[16px] mx-auto transition-all duration-300 ease-in-out hover:translate-x-2 hover:-translate-y-2`}>
            <div className="relative w-[28px] lg:w-[54px] h-[28px] lg:h-[54px]">
                <Image src={image} alt={headingText} fill className="max-w-none mx-auto" />
            </div>
            <h3 className="text-[14px] sm:text-[14px] lg:text-[20px] text-white font-semibold capitalize">
                {headingText}
            </h3>
            <p className="text-[12px] sm:text-[12px] lg:text-[16px]  font-normal leading-[18px] sm:leading-[18px] max-w-[213px] lg:max-w-[295px] lg:leading-[28px] text-primaryGray ">
                {paraText}
            </p>
        </div>
    )
}