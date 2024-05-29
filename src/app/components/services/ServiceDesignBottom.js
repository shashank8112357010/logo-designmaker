import Button from "@/app/atom/Button";
import Image from "next/image";

export default function ServiceDesignBottom({ imgSrc, subHeading1, subHeading2, heading1, heading2, heading3, para, withButton, flexDirection, servicesDesignData }) {


    return (
        <main className="max-w-[1920px] mx-auto w-full justify-center items-center flex">
            <div className={`flex ${flexDirection} text-white  pb-20 lg:pb-20 px-4 items-center lg:justify-start justify-center sm:px-10 lg:px-10 flex-wrap lg:flex-nowrap`}>
                {/* first section */}
                <div className=" flex justify-center relative min-w-[300px] lg:min-w-[350px] h-[250px] lg:h-[300px] items-center ">
                    <Image src={imgSrc} fill alt={heading2} />
                </div>

                {/* second section */}
                <div className="max-w-[400px] sm:max-w-[480px] lg:max-w-[760px] flex flex-col gap-4 items-center text-start">
                    <h2 className="w-full uppercase text-[10px] sm:whitespace-nowrap sm:text-[14px] lg:text-[20px] leading-[11px] sm:leading-[16px] lg:leading-[23px] font-medium ">
                        {subHeading1}
                        <span className="text-primaryGreen">{subHeading2}</span>
                    </h2>
                    <h2 className="text-mobHeading1 sm:text-tabHeading1 lg:text-lapHeading1 font-bold leading-[21px] sm:leading-[29px] lg:leading-[44px] tracking-[-1px]">
                        {heading1}<span className="text-primaryGreen">{heading2}</span> <span>{heading3}</span>
                    </h2>

                    <p className="font-normal text-mobBody sm:text-tabBody lg:text-lapBody tracking-[0.5px] leading-[18px] lg:leading-[28px] mt-2">
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
                            <Button title="Get Started Now" displayy="block" />
                        </div>
                    }

                </div>
            </div>
        </main>
    )
}