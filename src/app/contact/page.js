import Image from "next/image";
import Form from "../atom/Form";

export default function Contact() {
    return (
        <section className="bg-primaryBlack text-white overflow-hidden pt-20 relative max-w-[1920px] mx-auto flex justify-center items-center">
            <div className=" sm:w-[1036px] flex justify-between flex-col lg:flex-row sm:items-center pt-20 pb-0 sm:py-20 gap-20">

                <div className="absolute left-0 top-20">
                    <Image src="/pricing/LeftGrPricing.png" width={856} height={815} alt="linear-gradient-top" />
                </div>
                <div className="absolute top-20 right-0 ">
                    <Image src="/pricing/RightGrPricing.png" width={856} height={815} alt="linear-gradient-bottom" />
                </div>

                <div className="px-4 sm:p-[20px] z-50">
                    <div className="max-w-[300px] sm:w-[384px] flex flex-col items-center gap-10">
                        <div className="flex flex-col justify-center items-center gap-[11px] lg:w-[380px]">
                            <h5 className="text-mobHeaderText text-center lg:text-start sm:text-tabHeaderText lg:text-lapHeaderText font-bold leading-[22px] sm:leading-[33px] lg:leading-[58px] tracking-[-1px]">
                                See what We can do for you
                            </h5>
                            <p className="text-mobHeaderBody text-center lg:text-start sm:text-tabHeaderBody lg:text-lapHeaderBody font-normal lg:font-medium leading-[21px] lg:leading-[25px] ">
                                Book a short 20-min demo and discover a new way to get quality design work done reliably and affordably.
                            </p>
                        </div>
                        <div className="w-[300px] sm:w-[370px] block h-[230px] relative">
                            <Image src="/services/Building Web and App Development.png" alt="Design your logo image" fill />
                        </div>
                    </div>
                </div>

                <div className="px-4 sm:p-[20px] z-50 mb-20 sm:mb-0">
                    <Form />
                </div>
            </div>
        </section>
    )
}