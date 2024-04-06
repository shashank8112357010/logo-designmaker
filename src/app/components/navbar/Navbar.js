import Image from "next/image"

export const Navbar = () => {
    return (
        <section className="max-w-[1920px] mx-auto bg-secondaryBlack h-[84px] text-white px-4 sm:px-10 lg:px-20">
            <div className="flex justify-between items-center h-full">
                <div className="lg:hidden">
                    <Image src="/navbar/Hamburger.png" width={26} height={10} alt="logoImg" />
                </div>
                <div>
                    <Image src="/navbar/Logo.png" width={230} height={54} alt="logoImg" className="hidden sm:block" />
                    <Image src="/navbar/Logo.png" width={180} height={54} alt="logoImg" className="hidden xs:block sm:hidden" />
                    <Image src="/navbar/Logo.png" width={140} height={54} alt="logoImg" className="block xs:hidden" />
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
        </section>
    )
}