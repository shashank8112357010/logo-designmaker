"use client"
import Lottie from "lottie-react"
import Image from "next/image"
import designYourLogo from "../../../animate/DesignYourLogo.json"

export default function DesignYourLogo() {
    return (
        <section className="max-w-[1920px] justify-center items-center flex mx-auto px-4 sm:px-10 lg:px-10 bg-primaryBlack text-white pb-20 sm:pb-48 pt-20 lgg:pt-20">
            <div className="bg-secondaryBlack relative sm:px-5 py-7 lg:px-10 lg:py-20 rounded-[18px] flex justify-center flex-col lgg:flex-row">

                <div className=" block lgg:hidden bg-red-500">
                    <div className="w-[270px] sm:w-[320px] block lgg:hidden h-[320px] sm:h-[380px] absolute -top-20 sm:-top-24 left-[5%] xs:left-[24%] md:left-[34%]">
                        <Image src="/home/DesignYourLogo.png" alt="Design your logo image" fill />
                        {/* <Lottie animationData={designYourLogo} loop={true} /> */}
                    </div>
                </div>

                <div className="w-full lgg:w-[556px] pt-60 sm:pt-72 lgg:pt-0 lg:mx-1 flex flex-col justify-center items-center lgg:justify-normal lg:items-center gap-[22px]">
                    <div className="flex flex-col justify-center items-center gap-[11px]">
                        <h5 className="text-mobHeaderText text-center lg:text-start sm:text-tabHeaderText lg:text-lapHeaderText font-bold leading-[22px] sm:leading-[33px] lg:leading-[58px] tracking-[-1px]">Ready to Design Your Dream Logo?</h5>
                        <p className="text-mobHeaderBody text-center lg:text-start sm:text-tabHeaderBody lg:text-lapHeaderBody font-normal lg:font-medium leading-[21px] lg:leading-[25px] ">&#34;Discover your brand&#39;s power with Logo Design Maker. Get in touch for a free consultation now</p>
                    </div>
                    <div className="flex justify-center items-center w-full lgg:justify-start">
                        <div className="flex relative items-center justify-center px-2 lgg:justify-start w-[300px] sm:w-[420px]" >
                            <input type="text" placeholder="Enter Your Email" className="text-primaryBlack outline-none border-none rounded-[45px] inputDesign w-[300px] sm:w-[420px] py-4 pl-8 pr-24 sm:py-6 sm:pl-12 sm:pr-36" />
                            <div className="absolute right-4 top-[5px] sm:top-1">
                                <button className="bg-buttonBlack sm:px-[36px] sm:py-[20px] px-[20px] py-[10px] rounded-[45px]">Start</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-[22px] items-center w-full justify-center lgg:justify-start">
                        <div className="flex gap-1 items-center w-[200px] sm:w-auto">
                            <div className="h-[20px] w-[20px] relative">
                                <Image src="/home/BulletPoint.png" alt="BulltePointImg" fill />
                            </div>
                            <p className="text-[14px] ml-1 sm:text-[14px] lg:text-[18px]  whitespace-nowrap">Free 7-day trial</p>
                        </div>

                        <div className="flex items-center w-[200px] sm:w-auto">
                            <div className="h-[20px] w-[20px] relative">
                                <Image src="/home/BulletPoint.png" alt="BulltePointImg" fill />
                            </div>
                            <p className="text-[14px] ml-1 sm:text-[14px] lg:text-[18px] whitespace-nowrap">No credit card required</p>
                        </div>
                        <div className="flex gap-1 items-center w-[200px] sm:w-auto">
                            <div className="h-[20px] w-[20px] relative">
                                <Image src="/home/BulletPoint.png" alt="BulltePointImg" fill />
                            </div>
                            <p className="text-[14px] ml-1 sm:text-[14px] lg:text-[18px] whitespace-nowrap">Cancel anytime</p>
                        </div>
                    </div>
                </div>

                <div className="relative lgg:w-[450px]">
                    <div className="lgg:w-[500px] xl:w-[587px] hidden lgg:block h-[600px] xl:h-[689px] absolute -top-[120px] xl:-top-[180px] -right-20 xl:-right-28">
                        <Image src="/home/DesignYourLogo.png" alt="Design your logo image" fill />
                        {/* <Lottie animationData={designYourLogo} loop={true} /> */}
                    </div>
                </div>
            </div>

        </section>
    )
}    