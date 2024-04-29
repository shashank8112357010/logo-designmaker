"use client"
import Image from "next/image";
import { priceCardData } from "@/data/pricing";

export default function Price() {

    return (
        <section className="w-full max-w-[1920px] mx-auto bg-primaryBlack">
            <div className="flex flex-row gap-4 items-center justify-center xl:gap-10 h-[250px] xs:h-[283px] sm:h-[403px] relative">

                <div className="absolute top-20 md:top-32 left-0 w-[313px] md:w-[650px] h-[205px] md:h-[500px]">
                    <Image src="/pricing/pricingLeftDollar.png" fill alt="linear-gradient-top" />
                </div>
                <div className="absolute top-20 md:top-20 right-0 w-[455px] md:w-[1005px] h-[205px] md:h-[505px]">
                    <Image src="/pricing/pricingRightDollar.png" fill alt="linear-gradient-bottom" />
                </div>

                <div className="absolute left-0 top-20">
                    <Image src="/pricing/LeftGrPricing.png" width={856} height={815} alt="linear-gradient-top" />
                </div>
                <div className="absolute top-20 right-0 ">
                    <Image src="/pricing/RightGrPricing.png" width={856} height={815} alt="linear-gradient-bottom" />
                </div>

                <main className="top-[40%] md:top-[40%] z-30 min-h-[341px] absolute sm:px-0 sm:mt-5">
                    <div className="flex justify-center items-center flex-col gap-2 sm:gap-6 w-full">
                        <span className="font-[100px] text-center w-full font-springRainSolid text-white leading-[25px] lg:leading-[45px] text-[20px] lg:text-[35px]">Pricing</span>
                        <h1 className="w-full text-mobHeaderTex text-centert sm:text-tabHeaderText lg:text-lapHeaderText font-bold leading-[28px] sm:leading-[35px] lg:leading-[58.85px] text-white capitalize text-center tracking-[-1px] lg:-tracking-[3px] max-w-[300px] sm:max-w-5xl">
                            Simple Pricing for meaningful services
                        </h1>
                        <p className="text-tabHeaderBody font-medium leading-[22px] text-white text-center max-w-[350px] sm:max-w-[500px] tracking-[0.2px]">
                            Whether you are just starting or scaling up, we have got a plan to fit your needs
                        </p>
                    </div>
                </main>
            </div>

            <div className="pb-32 md:pb-20 flex items-center justify-center pt-52 px-4">
                <div className="bg-secondaryBlack rounded-[20px] flex flex-row max-w-[1237px] gap-1 px-6 sm:px-8 py-8 flex-wrap justify-center">

                    {priceCardData.map((item) => {
                        return (
                            <div key={item.id} className={`group relative max-w-[305px] sm:max-w-[375px] h-[700px] sm:h-[801px] rounded-[30px] flex justify-center items-center text-white pb-400 z-50 ${item.translateOnHover && "bg-primaryBlack -translate-y-4 PricingboxShadow transition-all duration-300 ease-in-out "} `}>

                                <div className="flex flex-col px-[8px] sm:px-8 gap-4 py-8 sm:py-16 w-[280px] sm:w-[410px]">

                                    <div className={`w-[44px] h-[44px] flex justify-center items-center ${item.translateOnHover && "bg-primaryGreen border-primaryGreen border-2"}  border-primaryGreen border-2 rounded-[11.1px]`}>
                                        <Image src={item.img} alt="image of pricing" width={19} height={19} />
                                    </div>

                                    <div className=" font-medium text-[22px] lg:text-[36px]">
                                        {item.category}
                                    </div>

                                    <p className=" text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2">
                                        {item.para}
                                    </p>

                                    <div className="text-mobHeaderText  sm:text-tabHeaderText lg:text-[46px] pb-6 font-bold tracking-[-1px] leading-[58px] border-b-[1px] border-[#E7EBFF]">
                                        {item.money}
                                    </div>

                                    <div className="">
                                        <div className="flex flex-col gap-2 justify-center mt-2">
                                            {item.pricingList
                                                .map(((item) => item.list.map((item, index) => {
                                                    return (
                                                        <div key={index} className="flex flex-row gap-2 sm:gap-3">
                                                            <div className="w-4 h-4">
                                                                <div className="mt-[3px] w-[12px] h-[13px] relative">
                                                                    <Image src="/pricing/checkCirclePrice.png" fill alt="checkCirclePrice" />
                                                                </div>
                                                            </div>
                                                            <div className="text-[16px]">
                                                                {item}
                                                            </div>
                                                        </div>
                                                    )
                                                })))}
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <button className={`${item.translateOnHover && "bg-primaryGreen text-black"}  text-[10px] sm:text-[18px] mt-2 font-normal border-[1px] border-primaryGreen hover:bg-secondaryBlack hover:text-white px-[14px] py-[8px] rounded-[4px] w-full transition-all duration-300 ease-in-out`} aria-disabled="true">
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}



                </div>
            </div>
        </section >
    )
}


{/* <div className="pb-32 md:pb-20 flex justify-center items-center ">
    <div className="relative max-w-[305px] sm:max-w-[570px] h-[700px] sm:h-[801px] rounded-[30px] flex justify-center items-center border-[1px] border-primaryGreen text-white pb-400 z-50 ">

        <div className="absolute top-0 left-0 right-0 w-full h-[400px] -z-50 sm:h-[600px]">
            <Image src="/pricing/PricingBox1.png" fill alt="linear-gradient-top" className="rounded-[20px]" />
        </div>
        <div className="absolute bottom-0 w-full h-[400px] -z-50 sm:h-[600px]">
            <Image src="/pricing/PricingBox2.png" fill alt="linear-gradient-bottom" className="rounded-[20px]" />
        </div>

        <div className="flex flex-col gap-8 sm:gap-16 py-8 sm:py-16 w-[280px] sm:w-[500px] ">
            <div className="text-mobHeaderText text-center w-full sm:text-tabHeaderText lg:text-lapHeaderText font-bold tracking-[-1px] leading-[58px]">
                $350
            </div>
            <div className="flex justify-center items-center">
                <ul className="rounded-[30px] relative border-primaryGreen font-semibold text-mobTitle sm:text-tabTitle lg:text-lapTitle border-[1.5px] py-2 sm:gap-4 flex justify-center items-center flex-row">
                    <li className={`
                ${content === "Pro" ? "left-[182px] sm:left-[308px] lg:left-[340px] w-12 sm:w-16 lg:w-20" :
                            content === "Popular" ? "w-20 sm:w-28 lg:w-32 left-[87px] sm:left-[144px] lg:left-[167px]" :
                                content === "Basic" && "w-14 sm:w-20 lg:w-24 left-[15px] sm:left-[20px] lg:left-[20px]"
                        } 
                 absolute transition-all duration-500 ease-in-out rounded-[30px] h-6 sm:h-10 bg-primaryGreen -z-[1] `}>
                    </li>
                    <li className={`${content === "Basic" && "text-black"} border-r px-5 sm:px-10 py-2 border-white cursor-pointer`} onClick={() => setContent("Basic")}>Basic</li>
                    <li className={`${content === "Popular" && "text-black"} border-r px-5 sm:px-10 py-2 border-white cursor-pointer`} onClick={() => setContent("Popular")}>Popular</li>
                    <li className={`${content === "Pro" && "text-black"} px-5 sm:px-10 py-2 cursor-pointer`} onClick={() => setContent("Pro")}>Pro</li>
                </ul>
            </div>
            <div className="px-[8px] sm:px-8">
                <div className="font-semibold text-mobTitle sm:text-tabTitle lg:text-lapTitle leading-[30px] mb-4">Includes:</div>
                <div className="flex flex-col gap-2 justify-center">
                    {pricingList.filter((item) => item.id === content)
                        .map(((item) => item.list.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-row gap-2 sm:gap-4">
                                    <div className="w-4 h-4">
                                        <div className="mt-[3px] w-[16px] sm:w-[20px] h-[16px] sm:h-[20px] relative">
                                            <Image src="/pricing/checkCirclePrice.png" fill alt="checkCirclePrice" />
                                        </div>
                                    </div>
                                    <div className="text-[16px]">
                                        {item}
                                    </div>
                                </div>
                            )
                        })))}
                </div>

            </div>
            <div className="block mx-auto">
                <ButtonAtom title="Book Your Call Now" />
            </div>
        </div>
    </div>
</div> */}