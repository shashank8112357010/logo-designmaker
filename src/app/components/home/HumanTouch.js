import DesignHeader from "@/app/atom/DesignHeader";

export default function HumanTouch() {

    return (
        <section className=" max-w-[1920px] mx-auto bg-primaryBlack text-white pt-0 md:pt-16 pb-16">

            <DesignHeader heading="We Design with a Human Touch" para=" Our designers prioritize human connection, delving into your brand&apos;s essence for a resonant logo that propels success." />

            <ul className="flex justify-center cursor-pointer gap-5 whitespace-nowrap px-4 leading-[18px] sm:leading-[24px] text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2 font-normal text-center overflow-hidden">
                <li className="hover:text-primaryGreen hover:border-b-4 hover:border-primaryGreen pb-2 px-2">Business & Advertising</li>
                <li className="hover:text-primaryGreen hover:border-b-4 hover:border-primaryGreen pb-2 px-2">Packaging & Label Design</li>
                <li className="hover:text-primaryGreen hover:border-b-4 hover:border-primaryGreen pb-2 px-2 ">Website & App Design</li>
                <li className="hover:text-primaryGreen hover:border-b-4 hover:border-primaryGreen pb-2 px-2">Social Media Design</li>
                <li className="hover:text-primaryGreen hover:border-b-4 hover:border-primaryGreen pb-2 px-2">Illustration & Art</li>
                <li className="hover:text-primaryGreen hover:border-b-4 hover:border-primaryGreen pb-2 px-2">Book & Magazine Design</li>
            </ul>

            <div className="flex justify-center items-center sm:items-start flex-col sm:flex-row pt-8 gap-4  ">
                <div className="flex flex-col gap-[9px] lg:gap-[14px]" >
                    <div className="bg-red-500 w-[183px] h-[155px] lg:w-[267px] lg:h-[255px] rounded-[11px]  lg:rounded-[16px]">

                    </div>
                    <div className="bg-green-700 w-[183px]  h-[155px] lg:w-[267px] lg:h-[255px] rounded-[9px] lg:rounded-[14px]"></div>
                </div>
                <div className="bg-yellow-500 w-[183px] h-[319px] lg:w-[266px] lg:h-[464px] rounded-[9px] lg:rounded-[14px]"></div>
                <div className="bg-purple-500 w-[183px] h-[199px] lg:w-[266px] lg:h-[289px] rounded-[9px]  lg:rounded-[14px]"></div>

            </div>
        </section>
    )

}