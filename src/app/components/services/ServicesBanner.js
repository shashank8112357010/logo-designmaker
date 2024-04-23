import Image from "next/image";
import Carousal from "../cardCarousal/Carousal";
import ButtonAtom from "@/app/atom/ButtonAtom";
import { Card } from "@/data/Data";

export default function ServicesBanner({ heading, subHeading, para }) {
    return (
        <div className="w-full">

            <div className="flex flex-row gap-4 items-center justify-center overflow-hidden xl:gap-10 h-[420px] xs:h-[383px] sm:h-[583px] lg:h-[581px] relative mb-8">

                <div className="absolute top-0 -left-40 xs:-left-80 sm:-left-32 lg:left-0">
                    <Image src="/services/serviceGradLeftTop.png" width={807} height={291} alt="linear-gradient-bottom" />
                </div>
                <div className="absolute bottom-0 -left-40 xs:-left-80 sm:-left-32 lg:left-0">
                    <Image src="/services/serviceGradLeftBottom.png" width={807} height={291} alt="linear-gradient-bottom" />
                </div>

                <div className="absolute top-0 -right-40 xs:-right-80 sm:-right-32 lg:right-0">
                    <Image src="/services/serviceGradRightTop.png" width={807} height={291} alt="linear-gradient-bottom" />
                </div>
                <div className="absolute bottom-0 -right-40 xs:-right-80 sm:-right-32 lg:right-0">
                    <Image src="/services/serviceGradRightBottom.png" width={807} height={291} alt="linear-gradient-bottom" />
                </div>

                <div className="w-[100px] sm:w-[250px] lg:w-[250px] h-screen flex flex-row-reverse gap-x-3 overflow-hidden absolute left-0 ">
                    <Carousal carousalDelay="carousal" />
                    <Carousal carousalDelay="carousal2" />
                    <Carousal carousalDelay="carousal" />
                </div>
                <div className="w-[100px] sm:w-[250px] lg:w-[250px] h-screen flex flex-row gap-x-3 overflow-hidden absolute right-0">
                    <Carousal carousalDelay="carousal" />
                    <Carousal carousalDelay="carousal2" />
                    <Carousal carousalDelay="carousal" />
                </div>


                <main className="top-[15%] md:top-[20%] lg:top-[12%] z-30 sm:w-[984px] max-w-[984px] min-h-[341px] absolute sm:px-0">

                    <div className="flex justify-center items-center flex-col gap-2 sm:gap-6 w-full">
                        <span className="font-[100px] text-center w-full font-springRainSolid text-white leading-[25px] lg:leading-[45px] text-[20px] lg:text-[35px]">Services</span>
                        <h1 className="max-w-[250px] sm:max-w-[1920px] text-mobHeaderText sm:text-tabHeaderText lg:text-lapHeaderText font-bold leading-[28px] sm:leading-[35px] lg:leading-[58.85px] text-white capitalize text-center tracking-[-1px] lg:-tracking-[3px] ">{heading}
                            <br />
                            <span className="font-[100px] font-springRainSolid text-primaryGreen tracking-wide">{subHeading}</span>
                        </h1>
                        <div className="text-white flex flex-col justify-center items-center">
                            <p className="mb-2 text-center text-mobHeaderBody sm:text-tabHeaderBody lg:text-lapHeaderBody font-medium leading-[19px] sm:leading-[22px] lg:leading-[25px] tracking-[-0.2px] max-w-[320px] sm:max-w-[550px] lg:max-w-[600px]">
                                {para}
                            </p>

                        </div>
                        <ButtonAtom displayy="block" title="Get Started" />
                    </div>
                </main>
            </div>
        </div>

    )
}