import ButtonAtom from "@/app/atom/ButtonAtom";
import Image from "next/image";

const servicesDesignData = [
    { id: 1, heading: "Get a Free Quote:", subHeading: " Fill out our quick online form to receive a free quote and discuss your specific website or app design needs with our team." },
    { id: 2, heading: "Browse Our Portfolio:", subHeading: " Explore our diverse portfolio of Website & App Design projects across various industries to see the impact we can create." },
    { id: 3, heading: "Download Our Design Guide:", subHeading: " Learn valuable tips and insights on crafting user-centric websites and apps that drive engagement and achieve your business goals." },
]

export default function ServiceDesign({ imgSrc, subHeading1, subHeading2, heading1, heading2, heading3, para1, para2, withButton, flexDirection }) {
    return (
        <main className="max-w-[1920px] mx-auto w-full justify-center items-center flex">
            <div className={`flex ${flexDirection} text-white pb-20 lg:pb-20 px-4 items-center lg:justify-start justify-center sm:px-10 lg:px-10 flex-wrap lg:flex-nowrap`}>
                {/* first section */}
                <div className="md:min-w-[500px] flex justify-center items-center">
                    <Image src={imgSrc} width={500} height={216} alt="Building Web and App Development" />
                </div>

                {/* second section */}
                <div className="max-w-[400px] sm:max-w-[480px] lg:max-w-[700px] flex flex-col gap-4 items-center  text-start">
                    <div className="w-full uppercase text-[10px] sm:text-[14px] lg:text-[20px] leading-[11px] sm:leading-[16px] lg:leading-[23px] font-medium ">
                        {subHeading1}
                        <span className="text-primaryGreen">{subHeading2}</span>
                    </div>
                    <div className="text-mobHeading1 sm:text-tabHeading1 lg:text-lapHeading1 font-bold leading-[21px] sm:leading-[29px] lg:leading-[44px] tracking-[-1px]">
                        {heading1}<span className="text-primaryGreen">{heading2}</span> <span>{heading3}</span>
                    </div>

                    {/* mapping Data  */}
                    <div>
                        <div>
                            {
                                servicesDesignData.map((item) => {
                                    return (
                                        <div key={item.id} className="flex flex-row justify-center gap-1">
                                            <div className="w-6 h-2 relative mt-5">
                                                <Image src="/services/PencilIcon.png" fill alt="pencil icon for services design" />
                                            </div>
                                            <div className="text-primaryGreen font-bold text-mobBody sm:text-tabBody lg:text-lapBody leading-[21px] sm:leading-[25px] lg:leading-[28px] tracking-[-1px] mt-2">
                                                {item.heading}
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