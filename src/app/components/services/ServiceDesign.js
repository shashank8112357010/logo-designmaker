import Button from "@/app/atom/Button";
import Image from "next/image";

export default function ServiceDesign({ imgSrc, subHeading1, subHeading2, heading1, heading2, heading3, para, withButton, flexDirection, servicesDesignData }) {


    return (
        <main className="max-w-[1920px]  mx-auto w-full justify-center items-center flex">
            <div className={`flex ${flexDirection} text-white  pb-20 lg:pb-20   items-center lg:justify-between lg:w-[94.1%] justify-center  sm:px-10 lg:mx-auto flex-wrap lg:flex-nowrap`}>
                {/* first section */}
                <div className=" flex justify-center items-center  lg:min-w-[450px] ">
                    <Image src={imgSrc} width={450} height={350} alt={heading2} />
                </div>

                {/* second section */}
                <div className="max-w-[400px]  sm:max-w-[480px] mt-20 lg:max-w-[730px] flex flex-col gap-4 lg:items-start items-center text-start">
                    <h2 className="w-full  uppercase text-[10px] sm:whitespace-nowrap sm:text-[14px] lg:text-[20px] leading-[11px] sm:leading-[16px] lg:leading-[23px] font-medium ">
                        {subHeading1}
                        <span className="text-primaryGreen">{subHeading2}</span>
                    </h2>
                    <h2 className="text-mobHeading1 sm:text-tabHeading1 lg:text-lapHeading1 font-bold leading-[21px] sm:leading-[29px] lg:leading-[44px] tracking-[-1px]">
                        {heading1}<span className="text-primaryGreen">{heading2}</span> <span>{heading3}</span>
                    </h2>

                    <p className="font-normal -mb-8 text-mobBody sm:text-tabBody lg:text-lapBody tracking-[0.5px] leading-[18px] lg:leading-[28px] mt-2">
                        {para}
                    </p>

                    {/* mapping Data  */}
                    <div>
                        <div>
                            {
                                servicesDesignData?.map((item) => {
                                    return (
                                        <div key={item.id} className="flex flex-row justify-center gap-1 pr-4">
                                            {/* <div className="w-6 h-2 relative mt-[18px]">
                                            </div> */}
                                            <div className="text-primaryGreen font-bold text-mobBody sm:text-tabBody lg:text-lapBody leading-[21px] sm:leading-[25px] lg:leading-[28px] tracking-[-1px]">
                                                <div className="font-normal text-white mt-4" dangerouslySetInnerHTML={{ __html: item.subHeading }}>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>

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