import Image from "next/image";
import ButtonAtom from "../atom/ButtonAtom";

export default function Price() {

    const pricingList = [
        "Logo design (3 variations)",
        "Business Card design",
        "Stationery design",
        "Website design",
        "Brochure/Flyer design",
        "High resolution image files",
        "Extend customization options",
        "After service adjustment(time bound)",
        "Dedicated support for design consultation"
    ]

    return (
        <section className="w-full max-w-[1920px] mx-auto bg-primaryBlack ">
            <div className="flex flex-row gap-4 items-center justify-center xl:gap-10 h-[380px] xs:h-[383px] sm:h-[403px] relative ">


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

                <main className="top-[30%] md:top-[30%] z-30 sm:w-[984px] max-w-[984px] min-h-[341px] absolute sm:px-0 sm:mt-5">
                    <div className="flex justify-center items-center flex-col gap-2 sm:gap-6 w-full">
                        <span className="font-[100px] text-center w-full font-springRainSolid text-white leading-[25px] lg:leading-[45px] text-[20px] lg:text-[35px]">Pricing</span>
                        <h1 className="w-full text-mobHeaderTex text-centert sm:text-tabHeaderText lg:text-lapHeaderText font-bold leading-[28px] sm:leading-[35px] lg:leading-[58.85px] text-white capitalize text-center tracking-[-1px] lg:-tracking-[3px] max-w-[300px] sm:max-w-5xl">
                            Simple Pricing for meaningful services
                        </h1>
                        <p className="text-tabHeaderBody font-medium leading-[22px] tracking-[-1px] text-white text-center max-w-[350px] sm:max-w-[500px]">
                            Whether you are just starting or scaling up, we have got a plan to fit your needs
                        </p>
                    </div>
                </main>

            </div>

            <div className="pb-20 flex justify-center items-center">
                <div className="w-[570px] h-[801px] rounded-[30px]  flex justify-center items-center border-[1px] border-primaryGreen text-white pb-400 z-50 ">
                    <div className="flex flex-col gap-16 py-16 w-[400px] ">
                        <div className="text-mobHeaderText text-center w-full sm:text-tabHeaderText lg:text-lapHeaderText font-bold tracking-[-1px] leading-[58px]">
                            $350
                        </div>
                        <div className="flex justify-center items-center">
                            <ul className="rounded-[30px] relative border-primaryGreen font-semibold text-mobTitle sm:text-tabTitle lg:text-lapTitle border-[1.5px] py-2 gap-4 flex justify-center items-center flex-row">
                                <li className="absolute w-28 left-[172px] rounded-[30px] h-10 bg-primaryGreen -z-[1]"></li>
                                <li className="border-r px-10 py-2 border-white  cursor-pointer">Basic</li>
                                <li className="border-r px-10 py-2 border-white text-black cursor-pointer">Popular</li>
                                <li className="px-10 py-2 cursor-pointer">Pro</li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-semibold text-mobTitle sm:text-tabTitle lg:text-lapTitle leading-[30px] mb-4">Includes:</div>
                            <div className="flex flex-col gap-2 justify-center">
                                {pricingList.map((item) => {
                                    return (
                                        <div className="flex flex-row gap-4">
                                            <div className="mt-[3px]">
                                                <Image src="/pricing/checkCirclePrice.png" width={20} height={20} alt="checkCirclePrice" />
                                            </div>
                                            <div>
                                                {item}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                        <div className="block mx-auto">
                            <ButtonAtom title="Book Your Call Now" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}