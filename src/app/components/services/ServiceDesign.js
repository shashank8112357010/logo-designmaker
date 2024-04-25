import ButtonAtom from "@/app/atom/ButtonAtom";
import Image from "next/image";

export default function ServiceDesign({ imgSrc, subHeading1, subHeading2, heading1, heading2, heading3, para, withButton, flexDirection, servicesDesignData }) {


    return (
        <main className="max-w-[1920px] mx-auto w-full justify-center items-center flex">
            <div className={`flex ${flexDirection} text-white pb-20 lg:pb-20 px-4 items-center lg:justify-start justify-center sm:px-10 lg:px-10 flex-wrap lg:flex-nowrap`}>
                {/* first section */}
                <div className="md:min-w-[500px] flex justify-center items-center">
                    <Image src={imgSrc} width={500} height={216} alt={heading2} />
                </div>

                {/* second section */}
                <div className="max-w-[400px] sm:max-w-[480px] mt-20 lg:max-w-[740px] flex flex-col gap-4 items-center text-start">
                    <div className="w-full uppercase text-[10px] sm:whitespace-nowrap sm:text-[14px] lg:text-[20px] leading-[11px] sm:leading-[16px] lg:leading-[23px] font-medium ">
                        {subHeading1}
                        <span className="text-primaryGreen">{subHeading2}</span>
                    </div>
                    <div className="text-mobHeading1 sm:text-tabHeading1 lg:text-lapHeading1 font-bold leading-[21px] sm:leading-[29px] lg:leading-[44px] tracking-[-1px]">
                        {heading1}<span className="text-primaryGreen">{heading2}</span> <span>{heading3}</span>
                    </div>

                    <p className="font-normal text-mobBody sm:text-tabBody lg:text-lapBody tracking-[0.5px] leading-[18px] lg:leading-[28px] my-2">
                        {para}
                    </p>

                    {/* mapping Data  */}
                    <div>
                        <div>
                            {
                                servicesDesignData?.map((item) => {
                                    return (
                                        <div key={item.id} className="flex flex-row justify-center gap-1">
                                            <div className="w-6 h-2 relative mt-[18px]">
                                                <div className="w-2 h-2 bg-primaryGreen rounded-full"></div>
                                            </div>
                                            <div className="text-primaryGreen font-bold text-mobBody sm:text-tabBody lg:text-lapBody leading-[21px] sm:leading-[25px] lg:leading-[28px] tracking-[-1px] mt-2">
                                                {item.heading} &nbsp;
                                                <span className="font-normal text-white">
                                                    {item.subHeading}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>

                    {withButton &&
                        <div className="lg:w-full">
                            <ButtonAtom title="Get Started Now" displayy="block" />
                        </div>
                    }

                </div>
            </div>
        </main>
    )
}