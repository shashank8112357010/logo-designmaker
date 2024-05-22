import Button from "@/app/atom/Button";
import Image from "next/image";

export default function ServiceIntro({ imgSrc, subHeading1, subHeading2, heading1, heading2, heading3, para1, para2, withButton, flexDirection }) {
    return (
        <main className="max-w-[1920px] mx-auto w-full justify-center items-center flex">
            <div className={`flex ${flexDirection} text-white pt-10 pb-10 lg:pt-20 lg:pb-10 px-4 justify-center lg:justify-start sm:px-10 lg:px-10 gap-10 flex-wrap lg:flex-nowrap`}>
                {/* first section */}
                <div className="md:min-w-[370px] flex justify-center items-center">
                    <Image src={imgSrc} width={350} height={316} alt="Building Web and App Development" />
                </div>

                {/* second section */}
                <div className="max-w-[400px] sm:max-w-[480px] lg:max-w-[700px] flex flex-col gap-4 items-center  lg:items-start text-center lg:text-start">
                    <div className="w-full uppercase text-[10px] sm:text-[14px] lg:text-[20px] leading-[11px] sm:leading-[16px] lg:leading-[23px] font-medium ">
                        {subHeading1}
                        <span className="text-primaryGreen">{subHeading2}</span>
                    </div>
                    <div className="text-mobHeading1 sm:text-tabHeading1 lg:text-lapHeading1 font-bold leading-[21px] sm:leading-[29px] lg:leading-[44px] tracking-[-1px]">
                        {heading1}<span className="text-primaryGreen">{heading2}</span> <span>{heading3}</span>
                    </div>
                    <p className="font-normal text-mobBody sm:text-tabBody lg:text-lapBody tracking-[0.5px] leading-[18px] lg:leading-[28px] ">
                        {para1}
                    </p>
                    <p className="font-normal text-mobBody sm:text-tabBody lg:text-lapBody tracking-[0.5px] leading-[18px] lg:leading-[28px] my-2">
                        {para2}
                    </p>

                    {withButton &&
                        <div className="lg:w-full">
                            <Button title="Get Started Now" displayy="block" />
                        </div>
                    }

                </div>
            </div>
        </main>
    )
}