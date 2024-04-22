import Image from "next/image"

export default function WhyChoose() {
    return (
        <section className='max-w-[1920px] mx-auto bg-primaryBlack text-white pt-20 pb-20'>
            <div className='flex  md:flex-row flex-col  sm:gap-[30px] lg:gap-[63px]'>
                {/* //left section  */}
                <div className="md:w-[40%] flex flex-col text-center md:text-start justify-between">

                    <div className=" md:pl-4 lg:pl-0 px-10 md:px-0 flex justify-center flex-col max-w-[370px] mx-auto">
                        <span className="text-[18px] sm:text-[18px] lg:text-[35px] font-[250] tracking-[0.2px] font-springRainSolid">Why Choose</span>
                        <h4 className=' text-mobileHeading1 sm:text-tabHeading1 lg:text-lapHeading1 font-bold tracking-[-0.2] leading-5 sm:leading-7 lg:leading-10 mb-12'>
                            Logo Design Maker for your needs
                        </h4>
                        <p className="text-mobBody sm:text-tabBody lg:text-lapBody tracking-[0.5px] text-primaryGray font-normal leading-[18px] lg:leading-7" >Break free from generic logos! Logo Design Maker offers seamless branding solutions with collaborative support, turning your vision into standout identities effortlessly.</p>
                    </div>

                    <div className="flex items-end">
                        <div className="relative w-[235px] lg:w-[438px] h-[295px] lg:h-[546px]">
                            <Image src="/home/main.png" alt="Choose your design maker" fill className="mx-auto" />
                        </div>
                    </div>
                </div>

                {/* Right Section  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-5 md:gap-y-12 gap-x-16 px-10 md:px-0 lg:px-10 ">

                    <div className="flex flex-col text-center md:text-start items-center md:items-start gap-[16px] md:gap-[16px] lg:gap-[24px] w-[200px] md:w-[180px] lg:w-[248px] mx-auto">
                        <div className="relative w-[28px] lg:w-[54px] h-[28px] lg:h-[54px]">
                            <Image src="/home/Choose1.png" alt="Choose your brand" fill className="mx-auto" />
                        </div>
                        <h5 className="text-[14px] sm:text-[14px] lg:text-[20px] font-semibold ">
                            Your Brand, Our Expertise: One-Stop Branding!
                        </h5>
                        <p className="text-[12px] sm:text-[12px] lg:text-[16px]  font-normal leading-[18px] sm:leading-[18px] lg:leading-[28px] tracking-[-0.2px] text-primaryGray mb-2 sm:mb-0 lg:mb-0 ">
                            We provide a comprehensive suite of design services under one roof, saving you time and resources.
                        </p>
                    </div>
                    <div className="flex flex-col text-center md:text-start items-center md:items-start gap-[16px] md:gap-[16px] lg:gap-[24px] w-[200px] md:w-[180px] lg:w-[248px] mx-auto">
                        <div className="relative w-[28px] lg:w-[54px] h-[28px] lg:h-[54px]">
                            <Image src="/home/Service2.png" alt="Choose your design" fill className="mx-auto" />
                        </div>
                        <h5 className="text-[14px] sm:text-[14px] lg:text-[20px]  font-semibold">
                            Versatile Design Experts: Experience Across Fields!
                        </h5>
                        <p className="text-[12px] sm:text-[12px] lg:text-[16px] font-normal leading-[18px] sm:leading-[18px] lg:leading-[28px] tracking-[-0.2px] text-primaryGray mb-2 sm:mb-0 lg:mb-0 ">
                            Our team boasts expertise in diverse areas, ensuring a design solution tailored to your specific industry.
                        </p>
                    </div>
                    <div className="flex flex-col text-center md:text-start items-center md:items-start w-[200px] md:w-[180px] lg:w-[248px] gap-[16px] md:gap-[16px] lg:gap-[24px] mx-auto">
                        <div className="relative w-[28px] lg:w-[54px] h-[28px] lg:h-[54px]">
                            <Image src="/home/Choose3.png" alt="Choose your process" fill className="mx-auto" />
                        </div>
                        <h5 className="text-[14px] sm:text-[14px] lg:text-[20px]  font-semibold">
                            Effortless & Clear: Our Streamlined Process!
                        </h5>
                        <p className="text-[12px] sm:text-[12px] lg:text-[16px] font-normal leading-[18px] sm:leading-[18px] lg:leading-[28px] tracking-[-0.2px] text-primaryGray mb-2 sm:mb-0 lg:mb-0">
                            We offer a clear roadmap, keeping you informed and involved throughout the entire project.
                        </p>
                    </div>
                    <div className="flex flex-col text-center md:text-start items-center md:items-start gap-[24px] w-[200px] md:w-[180px] lg:w-[248px] mx-auto">
                        <div className="relative w-[28px] lg:w-[54px] h-[28px] lg:h-[54px]">
                            <Image src="/home/Choose4.png" alt="Choose your priority" fill className="mx-auto" />
                        </div>
                        <h5 className="text-[14px] sm:text-[14px] lg:text-[20px] font-semibold">
                            Your Needs, Our Priority: Dedicated Support!
                        </h5>
                        <p className="text-[12px] sm:text-[12px] lg:text-[16px] font-normal leading-[18px] sm:leading-[18px] lg:leading-[28px] tracking-[-0.2px] text-primaryGray mb-2 sm:mb-0 lg:mb-0">
                            Our support team is here to help, always ready to answer your questions and assist you every step of the way.
                        </p>
                    </div>
                    <div className="flex flex-col  text-center md:text-start items-center md:items-start gap-[16px] md:gap-[16px] lg:gap-[24px] w-[250px] md:w-[180px] lg:w-[248px] mx-auto">
                        <div className="relative w-[28px] lg:w-[54px] h-[28px] lg:h-[54px]">
                            <Image src="/home/Choose5.png" alt="Choose your brand" fill className="mx-auto" />
                        </div>
                        <h5 className="text-[14px] sm:text-[14px] lg:text-[20px]  font-semibold">
                            Swift Results, Superior Quality: Guaranteed!
                        </h5>
                        <p className="text-[12px] sm:text-[12px] lg:text-[16px] font-normal leading-[18px] sm:leading-[18px] lg:leading-[28px] tracking-[-0.2px]  text-primaryGray mb-2 sm:mb-0 lg:mb-0">
                            We deliver high-quality results efficiently, ensuring you can launch your brand promptly.
                        </p>
                    </div>
                    <div className="flex flex-col text-center md:text-start items-center md:items-start  gap-[16px] md:gap-[16px] lg:gap-[24px] w-[250px] md:w-[180px] lg:w-[248px] mx-auto">
                        <div className="relative w-[28px] lg:w-[54px] h-[28px] lg:h-[54px]">
                            <Image src="/home/Service6.png" alt="Choose your brand" fill className="mx-auto" />
                        </div>
                        <h5 className="text-[14px] sm:text-[14px] lg:text-[20px] font-semibold">
                            Budget-Friendly Packages: Affordable Excellence!
                        </h5>
                        <p className="text-[12px] sm:text-[12px] lg:text-[16px] font-normal leading-[18px] sm:leading-[18px] lg:leading-[28px] tracking-[-0.2px]  text-primaryGray mb-2 sm:mb-0 lg:mb-0">
                            We cater to businesses of all sizes, offering competitive pricing plans.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}