import Button from "@/app/atom/Button"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function ServicesCTA({ heading, para, imgSrc }) {
    const { pathname } = usePathname()

    return (
        <section className="max-w-[1920px] mx-auto flex justify-center px-4 sm:px-10 lg:px-10 bg-primaryBlack text-white pb-20 pt-20 lg:pt-10">
            <div className="bg-secondaryBlack relative px-6 pl-3 py-2 lg:px-8 lg:py-10 rounded-[18px] flex justify-between flex-col lgg:flex-row w-[94%]">
                <div className="w-full lgg:w-[710px] pb-10 lgg:pb-0 pt-12 lgg:pt-0 lg:mx-1 flex flex-col justify-center items-center lgg:justify-center lg:items-center gap-[22px]">
                    <div className="flex flex-col items-center lgg:items-start justify-center gap-[16px]">
                        <h2 className="text-mobHeaderText text-center lgg:text-start sm:text-tabHeaderText lg:text-lapHeaderText font-bold leading-[22px] sm:leading-[33px] lg:leading-[58px] tracking-[-1px]">
                            {heading}
                        </h2>
                        <p className="text-mobHeaderBody text-center lgg:text-start sm:text-tabHeaderBody lg:text-lapHeaderBody font-medium leading-[21px] lg:leading-[25px]">
                            {para}
                        </p>
                        <div className="mt-4">
                            <Button title="Get Started" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center lgg:justify-start">
                    <div className="w-[250px] xs:w-[300px] sm:w-[350px] lgg:w-[440px] block h-[200px] xs:h-[250px] sm:h-[290px] lgg:h-[380px] mb-3 relative">
                        <Image src={imgSrc} alt="Call to action logo design" fill />
                    </div>
                </div>
            </div>

        </section>
    )
}    