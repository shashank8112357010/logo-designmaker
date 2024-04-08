import Image from "next/image"

export default function TellStoryContent({ content }) {

    const tellStoryContent = [
        { img: "/home/TellStoryBgMob", step: 1, heading: "Tell Your Story", para: "Share your brand vision, inspiration, and any specific ideas you may have. The more we know about your brand, the better we can capture its essence in your logo." },
        { img: "/home/Card1.png", step: 2, heading: "Next, establish the visual style and overall atmosphere.", para: "Craft a logo that instantly communicates your brands narrative. Share your unique style preferences and brand ethos with us to tailor a distinctive logo that resonates with your audience." },
        { img: "/home/Card2.png", step: 3, heading: "Tell Your Next Design Logo", para: "Our team will work closely with you to ensure every element of your logo embodies your brand's essence. Share your vision, values, and desired aesthetic, and let us transform them into a captivating logo that leaves a lasting impression." },
        { img: "/home/Card3.png", step: 4, heading: "Share your style preferences and brand", para: "Next, establish the visual style and overall atmosphere." },
        { img: "/home/Card4.png", step: 5, heading: "Next, establish the visual style and overall atmosphere.", para: "Craft a logo that instantly communicates your brands narrative. Share your unique style preferences and brand ethos with us to tailor a distinctive logo that resonates with your audience" },
        { img: "/home/Card5.png", step: 6, heading: "Tell Your Final Review", para: "Our team will work closely with you to ensure every element of your logo embodies your brand's essence. Share your vision, values, and desired aesthetic, and let us transform them into a captivating logo that leaves a lasting impression." },
    ]

    return (
        <div className="flex justify-center">

            {
                tellStoryContent.filter((item) => item.step === content).map((item) => {
                    return (
                        <>
                            <div key={item.step} className="flex flex-col md:flex-row lg:px-20 items-center gap-8 ">
                                <Image src="/home/TellStoryBgLap.png" width={301} height={516} className="hidden md:block" alt={item.heading} />
                                <div className="block md:hidden relative w-[291px] md:w-[339px] h-[200px] md:h-[233px]">
                                    <Image src="/home/TellStoryBgMob.png" fill alt={item.heading} />
                                </div>
                                <div className="flex items-center flex-col justify-center text-white ">
                                    <div className="flex flex-col md:pl-12 lg:pl-28 gap-6 items-center md:items-start">
                                        <div className="text-[18px] lg:text-[24px] leading-[21px] lg:leading-[31px]">
                                            {item.step}
                                        </div>
                                        <div className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-semibold leading-[21px] lg:leading-[30px]">
                                            {item.heading}
                                        </div>
                                        <p className="max-w-[330px] md:max-w-[520px] px-4 md:px-0 text-center md:text-start text-mobBody sm:text-tabBody lg:text-lapBody leading-[18px] lg:leading-[28px] text-primaryGray">
                                            {item.para}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}



{/* <div className="flex flex-col md:flex-row lg:px-20 items-center gap-8">
<Image src="/home/TellStoryBgLap.png" width={301} height={516} className="hidden md:block" alt="logo design makers works for you" />
<div className="block md:hidden relative w-[291px] md:w-[339px] h-[200px] md:h-[233px]">
    <Image src="/home/TellStoryBgMob.png" fill alt="logo design makers works for you" />
</div>
<div className="flex items-center flex-col justify-center text-white ">
    <div className="flex flex-col md:pl-12 lg:pl-28 gap-6 items-center md:items-start">
        <div className="text-[18px] lg:text-[24px] leading-[21px] lg:leading-[31px]">
            Step 1
        </div>
        <p className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-semibold leading-[21px] lg:leading-[30px]">
            Tell Your Story
        </p>
        <div className="max-w-[330px] md:max-w-[520px] px-4 md:px-0 text-center md:text-start text-mobBody sm:text-tabBody lg:text-lapBody leading-[18px] lg:leading-[28px] text-primaryGray">
        </div>
    </div>
</div>
</div> */}