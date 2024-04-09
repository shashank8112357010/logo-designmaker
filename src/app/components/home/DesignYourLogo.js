import Image from "next/image"
export default function DesignYourLogo() {
    return (
        <section className="max-w-[1920px] mx-auto px-4 sm:px-10 lg:px-10 bg-primaryBlack text-white pb-60 ">
            <div className="bg-secondaryBlack px-5 py-7 lg:px-10 lg:py-20 rounded-[18px] flex justify-center">

                <div className="w-full lgg:w-[556px] lg:mx-1 flex flex-col justify-center items-center lgg:justify-normal lg:items-start gap-[22px]">
                    <div className="flex flex-col justify-center items-center gap-[11px]">
                        <h5 className="text-mobHeaderText text-center lg:text-start sm:text-tabHeaderText lg:text-lapHeaderText font-bold leading-[22px] sm:leading-[33px] lg:leading-[58px] tracking-[-1px]">Ready to Design Your Dream Logo?</h5>
                        <p className="text-mobHeaderBody text-center lg:text-start sm:text-tabHeaderBody lg:text-lapHeaderBody font-normal lg:font-medium leading-[21px] lg:leading-[25px] ">&#34;Discover your brand&#39;s power with Logo Design Maker. Get in touch for a free consultation now</p>
                    </div>
                    <div className="flex relative items-center justify-center lgg:justify-start w-full" >
                        <input type="text" placeholder="Enter Your Email" className="rounded-[45px] sm:px-[120px] sm:py-[25px] px-[30px] py-[18px] " />
                        <div className="absolute sm:left-[330px] sm:top-[5px] left-[180px] top-2">
                            <button className="bg-buttonBlack sm:px-[31px] sm:py-[20px] px-[20px] py-[10px] rounded-[45px]">Start</button>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-[22px] items-center w-full justify-center lgg:justify-start">
                        <div className="flex gap-1 items-center">
                            <div className="h-[20px] w-[20px] relative">
                                <Image src="/home/BulletPoint.png" alt="BulltePointImg" fill />
                            </div>
                            <p className="text-[14px] sm:text-[14px] lg:text-[18px]  whitespace-nowrap">Free 7-day trial</p>
                        </div>

                        <div className="flex items-center">
                            <div className="h-[20px] w-[20px] relative">
                                <Image src="/home/BulletPoint.png" alt="BulltePointImg" fill />
                            </div>
                            <p className="text-[14px] sm:text-[14px] lg:text-[18px] whitespace-nowrap">No credit card required</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <div className="h-[20px] w-[20px] relative">
                                <Image src="/home/BulletPoint.png" alt="BulltePointImg" fill />
                            </div>
                            <p className="text-[14px] sm:text-[14px] lg:text-[18px] whitespace-nowrap">Cancel anytime</p>
                        </div>
                    </div>
                </div>

                <div className="relative lgg:w-[450px]">
                    <div className="lgg:w-[500px] xl:w-[587px] hidden lgg:block h-[600px] xl:h-[689px] absolute -top-[120px] xl:-top-[180px] -right-20 xl:-right-32">
                        <Image src="/home/Image (15).png" alt="BulltePointImg" fill />
                    </div>
                </div>
            </div>

        </section>
    )
}    