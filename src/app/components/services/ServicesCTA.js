import ButtonAtom from "@/app/atom/ButtonAtom"
import Image from "next/image"

export default function ServicesCTA({ heading, para, imgSrc }) {
    return (
        <section className="max-w-[1920px] mx-auto px-4 sm:px-10 lg:px-10 bg-primaryBlack text-white pb-20 pt-20 lg:pt-10">
            <div className="bg-secondaryBlack relative px-5 py-2 lg:px-8 lg:py-10 rounded-[18px] flex justify-center flex-col lgg:flex-row">

                <div className="block lgg:hidden bg-red-500">
                    <div className="w-[300px] sm:w-[500px] block lgg:hidden h-[360px] sm:h-[600px] absolute -top-40 sm:-top-56 left-[1%] xs:left-[22%] md:left-[20%]">
                        <Image src={imgSrc} alt="Call to action logo design" fill />
                    </div>
                </div>

                <div className="w-full lgg:w-[556px] pb-10 lgg:pb-0 pt-40 sm:pt-72 lgg:pt-0 lg:mx-1 flex flex-col justify-center items-center lgg:justify-normal lg:items-start gap-[22px]">
                    <div className="flex flex-col items-center lgg:items-start justify-center gap-[11px]">
                        <div className="text-mobHeaderText text-center lgg:text-start sm:text-tabHeaderText lg:text-lapHeaderText font-bold leading-[22px] sm:leading-[33px] lg:leading-[58px] tracking-[-1px]">
                            {heading}
                        </div>
                        <p className="text-mobHeaderBody text-center lgg:text-start sm:text-tabHeaderBody lg:text-lapHeaderBody font-medium leading-[21px] lg:leading-[25px] ">
                            {para}
                        </p>
                        <div>
                            <ButtonAtom title="Get Started"/>
                        </div>
                    </div>
                </div>

                <div className="relative lgg:w-[450px]">
                    <div className="lgg:w-[480px] xl:w-[487px] hidden lgg:block h-[350px] xl:h-[549px] absolute -top-[250px] xl:-top-[280px] -right-20 xl:-right-28">
                        <Image src={imgSrc} alt="Call to action logo design" fill />
                    </div>
                </div>
            </div>

        </section>
    )
}    