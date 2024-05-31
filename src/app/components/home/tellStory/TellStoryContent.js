import React from "react";
import Lottie from "lottie-react";
import Button from "@/app/atom/Button";

export default function TellStoryContent({ content, tellStoryContent, rowReverse }) {

    return (
        <div className="flex justify-center">

            {
                tellStoryContent.filter((item) => item.step === content).map((item) => {
                    return (
                        <div key={item.step} className={`justify-between flex flex-col ${rowReverse ? "md:flex-row-reverse" : "md:flex-row"} lg:px-20 items-center gap-20`}>
                            <div className="">
                                <Lottie animationData={item?.lottieImg} loop={true} />
                            </div>
                            <div className="flex items-center flex-col sm:max-w-[600px] justify-center text-white ">
                                <div className={`flex flex-col  ${rowReverse ? "lg:pl-0" : "md:pl-12 lg:pl-28"} gap-6 items-center md:items-start`}>
                                    <h3 className="text-mobTitle text-center sm:text-start sm:text-tabTitle lg:text-lapTitle font-semibold leading-[21px] lg:leading-[30px]">
                                        {item.heading}
                                    </h3>
                                    <p className="max-w-[330px] md:max-w-[520px] px-4 md:px-0 text-center md:text-start text-mobBody sm:text-tabBody lg:text-lapBody tracking-[0.5px] leading-[18px] lg:leading-[28px] text-primaryGray"
                                        dangerouslySetInnerHTML={{ __html: item.para }}>
                                    </p>
                                    <div className="w-full mx-auto text-center md:text-start">
                                        <Button title="Get Started Now" urlLink={item.urlLink} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}



