import Image from "next/image"

import FooterAccordion from "./FooterAccordion"



export default function Footer() {

    

    const footerLinks = [
        {
            "heading": "Category",
            "data": ["Brand & Identity", "Business & Advertising", "Packaging & Label Design", "Website & App Design", "Social Media Design", "Illustration & Art", "Book & Magzine Design", "Clothing & Merchandise"]
        },
        {
            "heading": "Get design",
            "data": ["Logo design", "Business cards", "Product packaging", "Landing page design", "website development", "Social media profile banners", "Custom illustrations"]
        },
        {
            "heading": "Support",
            "data": ["Help Desk", "Disclaimer", "Privacy Policy", "Terms  and Conditions"]
        },

        {
            "heading": "Company",
            "data": ["About us ", "Pricing", "About us "]
        },
        {
            "heading": "Resources",
            "data": ["Documentation", "Papers", "Press Conferences"]
        }
    ]
    
    const socialLinks = [
        {
            img: "Facebook",
        },
        {
            img: "Insta",
        },
        {
            img: "Twitter",
        },
        {
            img: "Lknd",
        },
        {
            img: "Pint",
        }
    ]
    return (
        <section className="max-w-[1920px] mx-auto bg-primaryBlack text-white  sm:px-8">
            <div className="flex justify-center flex-col sm:flex-row lg:flex-row  text-center sm:text-start gap-[33px]  sm:text-normal sm:justify-normal  flex-wrap lg:pl-10 relative  ">
                {/* <div className="flex flex-col sm:flex-row lg:flex-row"> */}
                {
                    footerLinks && footerLinks.map((footer, index) => {
                        return (
                            <div key={index} className={`flex-col flex gap-4  ${footer.heading === "Category" ? 'sm:w-[200px] lg:w-[190px]' : footer.heading === "Get design" ? 'sm:w-[210px] lg:w-[180px]' : footer.heading === "Support" ? 'sm:w-[200px] lg:w-[100px]' : footer.heading === "Company" ? 'sm:w-[200px] lg:w-[120px]' : "lg:w-[100px]"}   `}
                            >
                                <p className=" text-mobfooterTitle sm:text-tabfooterTitle lg:text-lapfooterTitle font-bold">{footer.heading}</p>
                                <ul className="text-mobfooterLinks sm:text-tabfooterLinks  lg:text-lapfooterLinks leading-8 font-normal text-primaryGrey">
                                    {footer.data.map((item, indexx) => (
                                        <li className="!cursor-pointer" key={indexx}>
                                            <a href="#" >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })
                }
                <div className=" block sm:hidden mb-32 "  >
                   <FooterAccordion footerLinks={footerLinks}/>

                </div>


                <div className="flex-col  lg:flex gap-6 sm:block w-[250px] mx-auto sm:w-[338px] lg:w-[250px]  ">
                    <Image src="/navbar/Logo.png" width={230} height={54} alt="logoImg" className="" />
                    <p className="text-mobfooterBody sm:text-tabfooterBody lg:text-lapfooterBody font-normal leading-5">
                        {`Logo Design Maker isn't just about creating logos – we build brands. We offer a comprehensive suite of design services to cater to all your branding needs, from logo design and business  cards to website development and social media graphics.`}
                    </p>
                </div>
                <div className="absolute bottom-[-10px] sm:bottom-[0px]">

                    <Image src="/footer/FooterGradient.png" width={1440} height={56} alt="FooterGradient" />
                </div>
            </div>
            <div className="flex sm:justify-between justify-center items-center gap-[24px] sm:flex-row flex-col w-full mx-auto px-4 lg:px-[80px] pt-[40px] pb-[20px] ">
                <div>
                    <p className="text-[12px] whitespace-nowrap">© 2024 LogoDesignMaker Inc. All rights reserved.</p>
                </div>
                <div className="flex justify-between gap-[32px]">
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