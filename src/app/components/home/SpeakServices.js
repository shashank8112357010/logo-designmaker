import { BoxAtom } from "@/app/atom/BoxAtom"
import { BoxData } from "@/data/Data"

export const SpeakServices = () => {

    return (
        <section className=" max-w-[1920px] mx-auto font-poppins bg-secondaryBlack text-white py-16">
            <div className="text-center flex flex-col gap-2">
                <h2 className="lg:text-[38px] sm:text-[25px] text-[18px] font-bold">Create a Design That Speaks Volumes</h2>
                <p className="max-w-[650px] mx-auto lg:text-[16px] sm:text-[12px] text-[12px] lg:leading-[28px]  sm:leading-[18px] leading-[18px] text-primaryGray px-4 sm:px-0 lg:px-0">
                    Crafting standout logos, we go beyond templates to create visual masterpieces uniquely tailored to your vision and values.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm: gap-y-12 gap-x-8 mx-8 sm:mx-12 my-12 text-center">

                {BoxData.map((item) => <BoxAtom key={item.id} image={item.image} textPosition={item.textPosition} justifyContent={item.justifyContent} alignItems={item.alignItems} maxWidth={item.maxWidth} headingText={item.headingText} paraText={item.paraText} />)}
            </div>
        </section>
    )
}