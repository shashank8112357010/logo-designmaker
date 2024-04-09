import { tellStoryContent } from "@/data/Data"
import Image from "next/image"

export default function TellStoryContent({ content }) {

    return (
        <div className="flex justify-center">

            {
                tellStoryContent.filter((item) => item.step === content).map((item) => {
                    return (
                            <div key={item.step} className="flex flex-col md:flex-row lg:px-20 items-center gap-8 ">
                                <Image src="/home/TellStoryBgLap.png" width={301} height={516} className="bg-green-500 hidden md:block" alt={item.heading} />
                                <div className="block md:hidden relative w-[291px] md:w-[339px] h-[200px] md:h-[233px]">
                                    <Image src="/home/TellStoryBgMob.png" fill alt={item.heading} />
                                </div>
                                <div className="flex items-center flex-col sm:max-w-[600px] justify-center text-white ">
                                    <div className="flex flex-col md:pl-12 lg:pl-28 gap-6 items-center md:items-start">
                                        <div className="text-[18px] lg:text-[24px] leading-[21px] lg:leading-[31px]">
                                            {item.step}
                                        </div>
                                        <div className="text-mobTitle text-center sm:text-start sm:text-tabTitle lg:text-lapTitle font-semibold leading-[21px] lg:leading-[30px]">
                                            {item.heading}
                                        </div>
                                        <p className="max-w-[330px] md:max-w-[520px] px-4 md:px-0 text-center md:text-start text-mobBody sm:text-tabBody lg:text-lapBody leading-[18px] lg:leading-[28px] text-primaryGray">
                                            {item.para}
                                        </p>
                                    </div>
                                </div>
                            </div>
                    )
                })
            }
        </div>
    )
}



{/* <div className="flex flex-col md:flex-row lg:px-20 items-center gap-8">
<Image src="/home/TellStoryBgLap.png" width={301} height={516} className="hidden md:block" alt="logo design makers works for you" />
<div className="block md:hidden relative w-[291px] md:w-[339px] h-[200px] md:h-[233px]">
    <Image src="/home/TellStoryBgMob.png" fill alt="logo design makers works for you" />
</div>
<div className="flex items-center flex-col justify-center text-white ">
    <div className="flex flex-col md:pl-12 lg:pl-28 gap-6 items-center md:items-start">
        <div className="text-[18px] lg:text-[24px] leading-[21px] lg:leading-[31px]">
            Step 1
        </div>
        <p className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-semibold leading-[21px] lg:leading-[30px]">
            Tell Your Story
        </p>
        <div className="max-w-[330px] md:max-w-[520px] px-4 md:px-0 text-center md:text-start text-mobBody sm:text-tabBody lg:text-lapBody leading-[18px] lg:leading-[28px] text-primaryGray">
        </div>
    </div>
</div>
</div> */}