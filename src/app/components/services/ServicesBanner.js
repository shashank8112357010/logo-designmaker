import Image from "next/image";
import Carousal from "../cardCarousal/Carousal";
import ButtonAtom from "@/app/atom/ButtonAtom";
import { Card } from "@/data/Data";

export default function ServicesBanner() {
    return (
        <div className="w-full">

            <div className="flex flex-row gap-4 items-center justify-center overflow-hidden xl:gap-10 h-[380px] xs:h-[383px] sm:h-[503px] lg:h-[501px] relative">
                <div className="w-[100px] sm:w-[250px] lg:w-[250px] h-screen flex flex-row-reverse gap-x-3 overflow-hidden absolute left-0">
                    <Carousal carousalDelay="carousal" />
                    <Carousal carousalDelay="carousal2" />
                    <Carousal carousalDelay="carousal" />
                </div>
                <div className="w-[100px] sm:w-[250px] lg:w-[250px] h-screen flex flex-row gap-x-3 overflow-hidden absolute right-0">
                    <Carousal carousalDelay="carousal" />
                    <Carousal carousalDelay="carousal2" />
                    <Carousal carousalDelay="carousal" />
                </div>
                <div className="absolute top-0">
                    <Image src="/home/bannerTop.png" width={1107} height={291} alt="linear-gradient-top" />
                </div>
                <div className="absolute bottom-0">
                    <Image src="/home/bannerBottom.png" width={1107} height={291} alt="linear-gradient-bottom" />
                </div>

                <main className="top-[15%] md:top-[20%] lg:top-[12%] z-30 sm:w-[984px] max-w-[984px] min-h-[341px] absolute sm:px-0">

                    <div className="flex justify-center items-center flex-col gap-2 sm:gap-6 w-full">
                        <span className="font-[100px] text-center w-full font-springRainSolid text-white leading-[25px] lg:leading-[45px] text-[20px] lg:text-[35px]">Services</span>
                        <h1 className="max-w-[230px] sm:max-w-[1000px] text-mobHeaderText sm:text-tabHeaderText lg:text-lapHeaderText font-bold leading-[28px] sm:leading-[35px] lg:leading-[58.85px] text-white capitalize text-center tracking-[-1px] lg:-tracking-[3px]">Craft a Digital Oasis: Unleash the Power of
                            <br />
                            <span className="font-[100px] font-springRainSolid text-primaryGreen tracking-wide">Website & App Design </span>
                        </h1>
                        <div className="text-white flex flex-col justify-center items-center">
                            <p className="mb-2 text-center text-mobHeaderBody sm:text-tabHeaderBody lg:text-lapHeaderBody font-medium leading-[19px] sm:leading-[22px] lg:leading-[25px] tracking-[-0.2px] max-w-[320px] sm:max-w-[550px] lg:max-w-[600px]">
                                Unlock your online potential with visually stunning and highly engaging web designs tailored to your business needs. Connect your marketing and development teams to our professional web design services to create captivating user experiences.
                            </p>

                        </div>
                        <ButtonAtom displayy="block" title="Get Started" />
                    </div>
                </main>
            </div>
        </div>

    )
}