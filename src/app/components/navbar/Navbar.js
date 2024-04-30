"use client"
import Button from "@/app/atom/Button"
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
                            <Link href="/about-us" className="hover:text-primaryGreen">
                                About Us
                            </Link>
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
                                    <div className={`servicesBottomList bg-darkBlack w-[628px] h-[340px] justify-between rounded-[16px]`}>
                                        <div className="flex flex-col justify-start mt-4 gap-8 pl-8 -pt-4">
                                            <div className="text-[12px] font-normal mt-4 -mb-6 leading-[28px] tracking-[1px]">
                                                SERVICES
                                            </div>

                                            <div className="flex justify-center gap-[45px]">
                                                <div className="flex flex-col items-start gap-[16px]">
                                                    {
                                                        dropMenu.map((item) => {
                                                            return (
                                                                <div key={item.id} className="flex mb-1 items-start gap-2 hover:-translate-y-1 transition-all duration-300 ease-in-out" >
                                                                    <div className="relative w-5 h-5">
                                                                        <Image className="absolute top-[4.2px]" width={20} height={20} src={item.img} alt="BookIconImg" />
                                                                    </div>
                                                                    <Link href={`/services/${item.url}`} className="hover:underline flex flex-col gap-[2px] group">
                                                                        <div className="servicesHeading group-hover:text-primaryGreen transition-all duration-300 ease-in-out text-lapTitle3 leading-[19px] font-bold mb-[1px]"
                                                                            onClick={() => setDropDownMenu(!dropDownMenu)}
                                                                        >
                                                                            {item.heading}
                                                                        </div>
                                                                        <p className="servicesSubHeading cursor-pointer text-[14px] text-[#677489] mb-[1px] font-normal leading-[21px]">
                                                                            {item.subHeading}
                                                                        </p>
                                                                    </Link>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className="flex flex-col gap-[16px]">
                                                    {
                                                        dropMenus.map((item) => {
                                                            return (
                                                                <div key={item.id} className="flex mb-1 items-start gap-2 hover:-translate-y-1 transition-all duration-300 ease-in-out">
                                                                    <div className="relative w-5 h-5">
                                                                        <Image className="absolute top-[4.2px]" width={20} height={20} src={item.img} alt="BookIconImg" />
                                                                    </div>
                                                                    <Link href={`/services/${item.url}`} className="hover:underline group">
                                                                        <div className="servicesHeading group-hover:text-primaryGreen transition-all duration-300 ease-in-out text-lapTitle3 leading-[19px] font-bold mb-[1px]"
                                                                            onClick={() => setDropDownMenu(!dropDownMenu)}
                                                                        >
                                                                            {item.heading}
                                                                        </div>
                                                                        <p className="cursor-pointer servicesSubHeading text-lapfooterBody text-[#677489] mb-[1px] font-normal leading-[21px]">
                                                                            {item.subHeading}
                                                                        </p>
                                                                    </Link>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                )
                                }
                            </div>
                        </li>

                        <li className="flex item-center py-[10px] gap-1 justify-center">
                            <Link href="/price" className="hover:text-primaryGreen h-full flex justify-center items-center" >
                                Price
                            </Link>
                        </li>
                        <li className="flex z-10 item-center py-[10px] gap-1 justify-center">
                            <Link href="/contact" className="hover:text-primaryGreen h-full flex justify-center items-center">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <button className="text-[10px] sm:text-[14px] font-semibold border-2 border-primaryGreen hover:bg-primaryGreen text-white hover:text-black px-[16px] sm:px-[28px] py-[6px] sm:py-[8px] rounded-[4px] transition-all duration-300 ease-in-out">
                        Sign in
                    </button>
                    <Link href="/price">
                        <Button displayy="hidden sm:block" title="Get Started" />
                    </Link>
                </div>
            </div>

            {/* //mobile services  */}
            <div className={`-z-40 bg-secondaryBlack flex flex-col lg:hidden absolute ${hide ? "left-[0px] top-20" : "-py-0 top-12 -left-[72rem]"} bg-lightWhite w-full transition-all duration-500 ease-in-out rounded-br-[20px] rounded-bl-[20px]`} >
                <div className="bg-secondaryBlack absolute w-full">
                    <div className="p-8">
                        <ul className="flex flex-col text-[14px] text-white font-semibold">
                            <li className="customBorderBottom py-3 border-primaryGrey pb-2 cursor-pointer" onClick={() => setHide(!hide)}><Link href="/about-us">About Us</Link></li>
                            <li className={`customBorderBottom pt-3 pb-2 border-primaryGrey transition-all duration-700 ease-in-out cursor-pointer relative`} >
                                <a onClick={() => setShow(!show)} className="block">
                                    Services
                                </a>
                                <Image className="inline absolute float-end mt-1 top-4 right-0" src={show ? "/home/UpArrow.png" : "/home/DownArrow.png"} width={10} height={10} alt={show ? "DownArrowImg" : "UpArrowImg"} />

                                <ul className={`mt-2 cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${show ? "max-h-80" : "max-h-0"}`}>

                                    <div className="flex flex-col gap-4 justify-center mt-4">
                                        {
                                            dropMenu.map((item) => {
                                                return (
                                                    <div key={item.id} className="flex mb-1 items-start gap-3"
                                                        onClick={() => {
                                                            return (
                                                                setHide(false),
                                                                setShow(false)
                                                            )
                                                        }}>
                                                        <div className="relative w-5 h-5">
                                                            <Image className="absolute top-[2.2px]" width={20} height={20} src={item.img} alt="BookIconImg" />
                                                        </div>
                                                        <div className="hover:underline flex flex-col gap-[2px]">
                                                            <Link href={`/services/${item.url}`} className="servicesHeading hover:text-primaryGreen transition-all duration-300 ease-in-out text-lapTitle3 leading-[19px] font-bold mb-[1px]"
                                                                onClick={() => setDropDownMenu(!dropDownMenu)}
                                                            >
                                                                {item.heading}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        {
                                            dropMenus.map((item) => {
                                                return (
                                                    <div key={item.id} className="flex mb-1 items-start gap-3 "
                                                        onClick={() => {
                                                            return (
                                                                setHide(false),
                                                                setShow(false)
                                                            )
                                                        }}>

                                                        <div className="relative w-4 h-4">
                                                            <Image className="absolute top-[2.2px]" width={15} height={15} src={item.img} alt="BookIconImg" />
                                                        </div>
                                                        <div className="hover:underline flex flex-col gap-[2px]">
                                                            <Link href={`/services/${item.url}`} className="servicesHeading hover:text-primaryGreen transition-all duration-300 ease-in-out text-lapTitle3 leading-[19px] font-bold mb-[1px]"
                                                                onClick={() => setDropDownMenu(!dropDownMenu)}
                                                            >
                                                                {item.heading}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </ul>
                            </li>
                            <li className="customBorderBottom py-3 border-primaryGrey pb-2 cursor-pointer" onClick={() => setHide(false)}><Link href="/price">Pricing</Link></li>
                            <li className="customBorderBottom py-3 border-primaryGrey pb-2 cursor-pointer" onClick={() => setHide(false)}><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div >
        </section >
    )
}

