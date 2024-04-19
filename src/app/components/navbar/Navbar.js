"use client"
import ButtonAtom from "@/app/atom/ButtonAtom"
import { dropMenu, dropMenus } from "@/data/Data"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
    const [hide, setHide] = useState(false)
    const [show, setShow] = useState(false)
    const [dropDownMenu, setDropDownMenu] = useState(true)

    return (
        <section className="max-w-[1920px] z-[999] mx-auto bg-secondaryBlack h-[84px] text-white pr-4 fixed left-0 right-0">
            <div className="flex justify-between items-center h-full relative">
                <div className="lg:hidden cursor-pointer px-4 sm:px-10 lg:px-20" onClick={() => setHide(!hide)}>
                    {hide ?
                        <Image src="/navbar/Cross.png" width={26} height={10} alt="logoImg" />
                        :
                        <Image src="/navbar/Hamburger.png" width={26} height={10} alt="logoImg" />
                    }
                </div>

                <Link href="/" className="px-4 sm:px-10 lg:px-20">
                    <div className="relative w-[140px] xs:w-[180px] sm:w-[200px] h-[28px] xs:h-[36px] sm:h-[40px]">
                        <Image src="/navbar/Logo.png" alt="logo design maker" fill className="mx-auto" />
                    </div>
                </Link>
                <div className="flex gap-4 justify-center items-center h-full">
                    <ul className="text-[14px] gap-8 font-bold hidden lg:flex h-full">
                        <li className="flex gap-1 justify-center items-center py-[10px]">
                            <a className="hover:text-primaryGreen" href="#">
                                About Us
                            </a>
                        </li>
                        <li className="gap-1 flex flex-col servicesShow h-full justify-center z-10 relative">
                            <div className="flex justify-center gap-1 py-[10px] pr-4">
                                <div className="hover:text-primaryGreen cursor-pointer"
                                    onMouseEnter={() => setDropDownMenu(true)}
                                >
                                    Services
                                    <div className="servicesAfter"></div>
                                </div>

                                {/* //Dropdown services for lap screen */}
                                {dropDownMenu && (
                                    <div className={`servicesBottomList bg-darkBlack w-[910px] justify-between `}>
                                        <div className="flex flex-col justify-center gap-8 pl-[52px] -pt-4 pb-4">
                                            <div className="text-[16px] font-normal leading-[28px] tracking-[1px]">
                                                SERVICES
                                            </div>

                                            <div className="flex justify-center gap-[45px]">
                                                <div className="flex flex-col items-start gap-1">
                                                    {
                                                        dropMenu.map((item) => {
                                                            return (
                                                                <div key={item.id} className="flex mb-1 items-start gap-1" >
                                                                    <div className="relative w-4 h-4">
                                                                        <Image className="absolute top-[4.2px]" width={15} height={15} src={item.img} alt="BookIconImg" />
                                                                    </div>
                                                                    <div className="hover:underline">
                                                                        <Link href={`/services/${item.url}`} className="servicesHeading hover:text-primaryGreen transition-all duration-300 ease-in-out text-lapTitle3 leading-[19px] font-bold mb-[1px]"
                                                                            onClick={() => setDropDownMenu(!dropDownMenu)}
                                                                        >
                                                                            {item.heading}
                                                                        </Link>
                                                                        <p className="servicesSubHeading text-lapfooterBody text-primaryGrey mb-[1px] font-normal leading-[21px]">
                                                                            {item.subHeading}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    {
                                                        dropMenus.map((item) => {
                                                            return (
                                                                <div key={item.id} className="flex mb-1 items-start gap-1">
                                                                    <div className="relative w-4 h-4">
                                                                        <Image className="absolute top-[4.2px]" width={15} height={15} src={item.img} alt="BookIconImg" />
                                                                    </div>
                                                                    <div className="hover:underline">
                                                                        <Link href={`/services/${item.url}`} className="servicesHeading hover:text-primaryGreen transition-all duration-300 ease-in-out text-lapTitle3 leading-[19px] font-bold mb-[1px]"
                                                                            onClick={() => setDropDownMenu(!dropDownMenu)}
                                                                        >
                                                                            {item.heading}
                                                                        </Link>
                                                                        <p className="servicesSubHeading text-lapfooterBody text-primaryGrey mb-[1px] font-normal leading-[21px]">
                                                                            {item.subHeading}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                        <div className="flex flex-col justify-center items-center bg-lightBlack px-4 pb-4">
                                            <Image width={163} height={163} src='/navbar/DropDownMedia.png' alt="BookIconImg" />
                                            <div className="w-[187px] flex flex-col gap-y-2 pr-2">
                                                <p className="text-lapfooterBody leading-[21px] tracking-[6%] font-normal capitalize">BOOK A CALL </p>
                                                <p className="text-lapTitle3 font-bold leading-[19px] -tracking-[1%]">Want to know if Logo design maker is A good fit?</p>
                                            </div>
                                            <div className="flex relative items-center justify-center w-[190px] pb-2 px-4 py-8" >
                                                <input type="text" placeholder="Enter Your Email" className="inputDesign2 text-primaryBlack outline-none border-none rounded-[45px] py-1 pr-[5px] pl-[10px] w-[190px]" />
                                                <div className="absolute right-[4px] top-[34px]">
                                                    <button className="bg-buttonBlack text-[10px] leading-[14px] font-semibold rounded-[45px] py-[5px] px-[8px]">Send</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                }
                            </div>
                        </li>

                        <li className="flex item-center py-[10px] gap-1 justify-center">
                            <a className="hover:text-primaryGreen h-full flex justify-center items-center" href="#">
                                Price
                            </a>
                        </li>
                        <li className="flex item-center py-[10px] gap-1 justify-center">
                            <a className="hover:text-primaryGreen h-full flex justify-center items-center" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <button className="text-[10px] sm:text-[14px] font-semibold border-2 border-primaryGreen hover:bg-primaryGreen text-white hover:text-black px-[16px] sm:px-[28px] py-[6px] sm:py-[8px] rounded-[4px] transition-all duration-300 ease-in-out">
                        Sign in
                    </button>
                    <ButtonAtom displayy="hidden sm:block" title="Get Started" />
                </div>
            </div>

            {/* //mobile services  */}
            <div className={`-z-40 bg-secondaryBlack flex flex-col lg:hidden absolute ${hide ? "left-[0px] top-20" : "-py-0 top-12 -left-[72rem]"} bg-lightWhite w-full transition-all duration-500 ease-in-out rounded-br-[20px] rounded-bl-[20px]`} >
                <div className="bg-secondaryBlack absolute w-full">
                    <div className="p-8">
                        <ul className="flex flex-col text-[14px] text-white font-semibold">
                            <li className="customBorderBottom py-3 border-primaryGrey pb-2 cursor-pointer"><a>About Us</a></li>
                            <li className={`customBorderBottom pt-3 pb-2 border-primaryGrey transition-all duration-700 ease-in-out cursor-pointer relative`} >
                                <a onClick={() => setShow(!show)} className="block">
                                    Services
                                </a>
                                <Image className="inline absolute float-end mt-1 top-4 right-0" src={show ? "/home/UpArrow.png" : "/home/DownArrow.png"} width={10} height={10} alt={show ? "DownArrowImg" : "UpArrowImg"} />

                                <ul className={`mt-2 cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${show ? "max-h-60" : "max-h-0"}`}>
                                    {
                                        ["logo design", "buisness cards", "product packaging", "landing page design", "website development", "buisness cards", "social media profile banners", "custom illustrations"].map((item, index) => <li key={index} className="text-primaryGrey mb-2 text-[14px] capitalize"><a>{item}</a></li>)
                                    }
                                </ul>
                            </li>
                            <li className="customBorderBottom py-3 border-primaryGrey pb-2 cursor-pointer"><a>Pricing</a></li>
                            <li className="customBorderBottom py-3 border-primaryGrey pb-2 cursor-pointer"><a>Contact</a></li>
                            <li className="customBorderBottom py-3 border-primaryGrey pb-2 cursor-pointer"><a>Resources</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    )
}

