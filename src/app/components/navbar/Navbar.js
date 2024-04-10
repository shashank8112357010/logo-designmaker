"use client"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
    const [hide, setHide] = useState(false)
    const [show, setShow] = useState(false)
    const dropMenu = [
        {
            id:1,
           img:"/navbar/BookIcon.png",
           heading:"Book and magazine designs",
           subHeading:"Your Digital Content Supercharged" 
        },
        {
            id:2,
           img:"/navbar/BookIcon.png",
           heading:"Business and advertising designs",
           subHeading:"Eye Catchy Designs That Perform" 
        },
        {
            id:3,
           img:"/navbar/BookIcon.png",
           heading:"Business and advertising designs",
           subHeading:"Eye Catchy Designs That Perform" 
        },
        {
            id:4,
           img:"/navbar/BookIcon.png",
           heading:"Business and advertising designs",
           subHeading:"Eye Catchy Designs That Perform" 
        },
       
    ]
    const dropMenus = [
        {
            id:1,
           img:"/navbar/BookIcon.png",
           heading:"Book and magazine designs",
           subHeading:"Your Digital Content Supercharged" 
        },
        {
            id:2,
           img:"/navbar/BookIcon.png",
           heading:"Book and magazine designs",
           subHeading:"Your Digital Content Supercharged" 
        },
        {
            id:3,
           img:"/navbar/BookIcon.png",
           heading:"Book and magazine designs",
           subHeading:"Your Digital Content Supercharged" 
        },
        {
            id:4,
           img:"/navbar/BookIcon.png",
           heading:"Book and magazine designs",
           subHeading:"Your Digital Content Supercharged" 
        },
       
    ]

    return (
        <section className="relative max-w-[1920px] z-50 mx-auto bg-secondaryBlack h-[84px] text-white ">
            <div className="flex justify-between items-center h-full px-4 sm:px-10 lg:px-20 relative">
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
                        <li className=" gap-1 flex flex-col justify-center relative">
                            <div className="flex justify-center gap-1">

                            <a className="hover:text-primaryGreen" href="#">
                                Services
                            </a>
                            <Image src="/navbar/expand_icon.svg" className="cursor-pointer" width={10} height={10} alt="logoImg" />
                            </div>
                     
                        </li>
                        <li><a className="hover:text-primaryGreen" href="#">Price</a></li>
                        <li><a className="hover:text-primaryGreen" href="#">Contact</a></li>
                    </ul>
                    <button className="text-[10px] sm:text-[14px] font-semibold border-2 border-primaryGreen hover:bg-primaryGreen text-white hover:text-black px-[16px] sm:px-[28px] py-[6px] sm:py-[8px] rounded-[4px] transition-all duration-300 ease-in-out">Sign in</button>
                    <button className="hidden sm:block text-[10px] sm:text-[14px] font-semibold bg-primaryGreen border-2 border-primaryGreen hover:bg-secondaryBlack hover:border-primaryGreen text-black hover:text-white px-[14px] py-[8px] rounded-[4px] transition-all duration-300 ease-in-out">Get Started</button>
                </div>
                <div className="bg-darkBlack w-[910px] flex justify-between  absolute top-[112px] right-[154px]">
                    
                    <div className="flex flex-col justify-center gap-6 pl-[20px] py-10"> 
                    <div>
                       <p className="text-[16px] font-normal leading-[28px] tracking-[6%]">SERVICES</p> 
                    </div>
                    <div className="flex  justify-center gap-[39px]">
                        <div className="flex flex-col items-start">
                        {
                            dropMenu.map((item)=>{
                                return(
                                    <div key={item.id} className="flex justify-center items-start gap-[6px] " >

                                    <Image width={15} height={15} src={item.img} alt="BookIconImg"/>
                                   <div>
                                    <p className="text-lapTitle3 leading-[19px] font-bold">{item.heading}</p>
                                    <p className="text-lapfooterBody text-primaryGrey  font-normal leading-[21px]">{item.subHeading}</p> 
                                   </div>
                                    </div> 
                                )
                            })
                        }
                            
                        </div>
                        <div className="flex flex-col">
                        {
                            dropMenus.map((item)=>{
                                return(
                                    <div key={item.id} className="flex justify-center items-start gap-[6px] " >

                                    <Image width={15} height={15} src={item.img} alt="BookIconImg"/>
                                   <div>
                                    <p className="text-lapTitle3 leading-[19px] font-bold">{item.heading}</p>
                                    <p className="text-lapfooterBody text-primaryGrey  font-normal leading-[21px]">{item.subHeading}</p> 
                                   </div>
                                    </div> 
                                )
                            })
                        }
                                    
                        </div>
                    </div>

                    </div>
                    <div className="flex flex-col justify-center items-center bg-lightBlack w-[236px]">
                    <Image width={163} height={163} src='/navbar/DropDownMedia.png' alt="BookIconImg"/>
                    <div className="w-[187px] flex flex-col  gap-2 pr-2 ">
                        <p className="text-lapfooterBody leading-[21px] tracking-[6%] font-normal capitalize">BOOK A CALL </p>
                        <p className="text-lapTitle3 font-bold leading-[19px] -tracking-[1%]">Want to know if Logo design maker is A good fit?</p>
                    </div>
                    <div className="flex relative items-center justify-center w-[200px] pb-2 px-4  " >
                            <input type="text" placeholder="Enter Your Email" className="text-primaryBlack outline-none border-none rounded-[45px] inputDesign2 pt-[2px] pr-[5px] pb-[2px] pl-[10px] " />
                            <div className="absolute right-[18px] top-[5px] sm:top-0">
                                <button className="bg-buttonBlack text-[10px] leading-[14px] font-semibold rounded-[45px] py-[5px] px-[8px]">Start</button>
                            </div>
                        </div>
                    </div>
                    {/* 2pxtop, 5pxrigth, 2pxbottom, 10.01pxleft */}
            </div> 


            </div> 
          

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
        </section>
    )
}

