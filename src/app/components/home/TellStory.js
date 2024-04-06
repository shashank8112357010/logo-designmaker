import Image from "next/image"

export default function TellStory() {
    return (
        <section className=" bg-primaryBlack mx-auto max-w-[1920px] px-4 sm:px-20 py-8 md:py-20">
            <div className="flex justify-center items-center flex-col text-white mb-10 ">
                <span className="font-springRainSolid text-[18px] sm:text-[35px] ">
                    How Does
                </span>
                <h5 className="text-mobHeading1 sm:text-tabHeading1 lg:text-lapHeading1 font-bold leading-[21px] sm:leading-[29px] lg:leading-[44px] tracking-[-1px] sm:tracking-[-1px] text-center max-w-[200px] sm:max-w-[250px] lg:max-w-[400px]">
                    Logo Design Maker works for your needs
                </h5>
            </div>

            <div className="px-4 sm:px-20 py-8 md:py-20">
                <div className="font-bold text-[14px] lg:text-[21px] flex gap-2 float-right">
                    <button className="w-[40px] lg:w-[59px] h-[40px] lg:h-[59px] rounded-full text-secondaryBlack bg-white">1</button>
                    <button className="w-[40px] lg:w-[59px] h-[40px] lg:h-[59px] rounded-full bg-secondaryBlack text-white">2</button>
                    <button className="w-[40px] lg:w-[59px] h-[40px] lg:h-[59px] rounded-full bg-secondaryBlack text-white">3</button>
                    <button className="w-[40px] lg:w-[59px] h-[40px] lg:h-[59px] rounded-full bg-secondaryBlack text-white">4</button>
                    <button className="w-[40px] lg:w-[59px] h-[40px] lg:h-[59px] rounded-full bg-secondaryBlack text-white">5</button>
                    <button className="w-[40px] lg:w-[59px] h-[40px] lg:h-[59px] rounded-full bg-secondaryBlack text-white">6</button>
                </div>

            </div>
            <div className="flex px-20">
                <div className="w-[301px] h-[516px] relative">
                    <Image src="/home/TellStoryBg.png" fill alt="logo design makers works for you" />
                </div>
                <div className=" flex items-center w-[600px] flex-col justify-center text-white">
                    <div className="flex w-[600px] flex-col pl-28 gap-6">
                        <div className="text-[24px] leading-[31px]">
                            Step 1
                        </div>
                        <p className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-semibold leading-[30px]">
                            Tell Your Story
                        </p>
                        <div className="text-mobBody sm:text-tabBody lg:text-lapBody">
                            Share your brand vision, inspiration, and any specific ideas you may have. The more we know about your brand, the better we can capture its essence in your logo.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}