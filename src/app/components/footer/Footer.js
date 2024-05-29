import Image from "next/image"
import FooterAccordion from "./FooterAccordion"
import { footerLinks, socialLinks } from "@/data/Data"
import Link from "next/link"

export default function Footer() {

    return (
        <section className="max-w-[1920px] mx-auto bg-secondaryBlack pt-10 relative sm:bg-[#182736]/50% text-white">

            {/* //footer Gradient  */}
            <div className="absolute bottom-[-10px] sm:bottom-[0px]">
                <Image src="/footer/FooterGradient.png" width={1920} height={56} alt="FooterGradient" />
            </div>
            <div className="flex flex-row justify-center items-center sm:px-8 ">
                <div className="flex max-w-[1920px] mx-auto  justify-center flex-col sm:flex-row sm:pb-8 lg:pb-16 lg:flex-row text-center sm:text-start gap-[20px] sm:text-normal  sm:justify-normal flex-wrap relative">
                    {
                        footerLinks && footerLinks.map((footer, index) => {
                            return (
                                <div key={index} className={`flex-col gap-4 z-50 hidden sm:flex ${footer.heading === "Category" ? 'sm:w-[200px] lg:w-[220px]' : footer.heading === "Get design" ? 'sm:w-[210px] lg:w-[240px]' : footer.heading === "Support" ? 'sm:w-[200px] lg:w-[110px]' : footer.heading === "Company" ? 'sm:w-[200px] lg:w-[100px]' : "lg:w-[100px]"}   `}
                                >
                                    <p className="text-mobfooterTitle sm:text-tabfooterTitle lg:text-lapfooterTitle font-bold">{footer.heading}</p>
                                    <ul className="text-mobfooterLinks sm:text-tabfooterLinks capitalize lg:text-[14px] leading-8 font-normal text-primaryGrey">
                                        {footer.data?.map((item) => (
                                            <li className="!cursor-pointer hover:text-primaryGreen" key={item.id}>
                                                <Link href={item.url ? item.url : "#"} >
                                                    {item?.heading}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        })
                    }

                    {/* mobileScreenFooter lists */}
                    <div className="block sm:hidden mb-12 z-40">
                        <FooterAccordion footerLinks={footerLinks} />
                    </div>

                    <div className="flex-col flex  px-2 sm:ml-8 gap-4  mb-8 items-center sm:items-start mx-auto w-[338px] lg:w-[250px]  ">
                        <Image src="/navbar/Logo.png" width={230} height={54} alt="logoImg" />
                        <p className="text-mobfooterBody max-w-[500px] px-1 sm:text-tabfooterBody lg:text-lapfooterBody font-normal leading-[18px]">
                            {`Logo Design Maker isn't just about creating logos – we build brands. We offer a comprehensive suite of design services to cater to all your branding needs, from logo design and business  cards to website development and social media graphics.`}
                        </p>
                    </div>

                </div>
            </div>

            {/* //mainFooteBottom */}
            <div className="flex sm:justify-between justify-center items-center sm:flex-row flex-col w-full mx-auto pt-[40px] pb-[20px] lg:px-10 gap-4 sm:gap-0  sm:px-8">
                <div>
                    <p className="text-[12px] whitespace-nowrap">© 2024 LogoDesignMaker Inc. All rights reserved.</p>
                </div>
                <div className="flex justify-between gap-[32px] cursor-pointer">
                    {
                        socialLinks.map((links, index) => {
                            return (
                                <Image key={index} src={`/footer/${links.img}.png`} width={18} height={18} alt={`${links.img}Img`} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

