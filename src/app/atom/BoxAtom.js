import Image from "next/image"

export const BoxAtom = ({ image, textPosition, justifyContent, alignItems, maxWidth, headingText, paraText }) => {
    return (
        <div className={`flex flex-col ${textPosition} ${justifyContent} ${alignItems} ${maxWidth} gap-[24px] mx-auto`}>
            <div className="relative w-[28px] lg:w-[54px] h-[28px] lg:h-[54px]">
                <Image src={image} alt="image" fill className="max-w-none mx-auto" />
            </div>
            <h3 className="text-[14px] sm:text-[14px] lg:text-[20px]  font-semibold capitalize">
                {headingText}
            </h3>
            <p className="text-[12px] sm:text-[12px] lg:text-[16px]  font-normal leading-[18px] sm:leading-[18px] lg:leading-[28px] px-4 sm:px-12 md:px-16 lg:px-8 text-primaryGray ">
                {paraText}
            </p>
        </div>
    )
}