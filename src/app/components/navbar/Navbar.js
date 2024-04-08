"use client"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
    const [hide, setHide] = useState(false)
    const [show, setShow] = useState(false)

    return (
        <section className="relative max-w-[1920px] z-50 mx-auto bg-secondaryBlack h-[84px] text-white ">
            <div className="flex justify-between items-center h-full px-4 sm:px-10 lg:px-20">
                <div className="lg:hidden cursor-pointer" onClick={() => setHide(!hide)}>
                    {hide ?
                        <Image src="/navbar/Cross.png" width={26} height={10} alt="logoImg" />
                        :
                        <Image src="/navbar/Hamburger.png" width={26} height={10} alt="logoImg" />
                    }
                </div>

                <div>
                    <div className="relative w-[140px] xs:w-[180px] sm:w-[230px] h-[28px] xs:h-[36px] sm:h-[48px]">
                        <Image src="/navbar/Logo.png" alt="logo design maker" fill className="mx-auto" />
                    </div>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    <ul className="text-[14px] gap-8 font-bold hidden lg:flex">
                        <li className="flex gap-1 justify-center">
                            <a className="hover:text-primaryGreen" href="#">
                                About Us
                            </a>
                        </li>
                        <li className="flex gap-1 justify-center">
                            <a className="hover:text-primaryGreen" href="#">
                                Services
                            </a>
                            <Image src="/navbar/expand_icon.svg" className="cursor-pointer" width={10} height={10} alt="logoImg" />
                        </li>
                        <li><a className="hover:text-primaryGreen" href="#">Price</a></li>
                        <li><a className="hover:text-primaryGreen" href="#">Contact</a></li>
                    </ul>
                    <button className="text-[10px] sm:text-[14px] font-semibold border-2 border-primaryGreen hover:bg-primaryGreen text-white hover:text-black px-[16px] sm:px-[28px] py-[6px] sm:py-[8px] rounded-[4px] transition-all duration-300 ease-in-out">Sign in</button>
                    <button className="hidden sm:block text-[10px] sm:text-[14px] font-semibold bg-primaryGreen border-2 border-primaryGreen hover:bg-secondaryBlack hover:border-primaryGreen text-black hover:text-white px-[14px] py-[8px] rounded-[4px] transition-all duration-300 ease-in-out">Get Started</button>
                </div>
            </div>

            <div className={`-z-40 bg-primaryBlack flex flex-col lg:hidden absolute ${hide ? "left-[0px]" : "-py-0 -left-[72rem]"} bg-lightWhite w-full transition-all duration-500 ease-in-out rounded-br-[20px] rounded-bl-[20px]`} >
                <div className="bg-primaryBlack absolute w-full">
                    <div className="p-8">
                        <ul className="flex flex-col gap-4 text-[14px] text-white font-semibold">
                            <li className="customBorderBottom border-primaryGrey pb-2 cursor-pointer"><a>About Us</a></li>
                            <li className={`customBorderBottom  border-primaryGrey pb-2 transition-all duration-700 ease-in-out cursor-pointer `} onClick={() => setShow(!show)}>
                                <a>
                                    Services
                                </a>
                                <Image className="inline float-end mt-1" src={show ? "/home/UpArrow.png" : "/home/DownArrow.png"} width={10} height={10} alt={show ? "DownArrowImg" : "UpArrowImg"} />

                                <div className={`transition-all duration-500 ease-in-out`} >
                                    <ul className={`mt-2 cursor-pointer transition-all duration-500 ease-in-out ${show ? "h-60" : "h-0 opacity-0"}`} >
                                        {
                                            ["logo design", "buisness cards", "product packaging", "landing page design", "website development", "buisness cards", "social media profile banners", "custom illustrations"].map((item, index) => <li key={index} className="text-primaryGrey mb-2 text-[14px] capitalize"><a>{item}</a></li>)
                                        }
                                    </ul>
                                </div>
                            </li>
                            <li className="customBorderBottom border-primaryGrey pb-2 cursor-pointer"><a>Pricing</a></li>
                            <li className="customBorderBottom border-primaryGrey pb-2 cursor-pointer"><a>Contact</a></li>
                            <li className="customBorderBottom border-primaryGrey pb-2 cursor-pointer"><a>Resources</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

