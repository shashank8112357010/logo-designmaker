import Image from "next/image";

export default function Price() {
    return (
        <section className="w-full max-w-[1920px] mx-auto bg-primaryBlack ">
            <div className="flex flex-row gap-4 items-center justify-center xl:gap-10 h-[380px] xs:h-[383px] sm:h-[403px] md:h-[700px] relative ">


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
                    <div>
                        <div className="w-[570px] h-[801px] rounded-[30px] border-[2px] text-white bg-red-500 pb-400 z-50">
                            mana
                        </div>
                    </div>
                </main>

            </div>
        </section>
    )
}