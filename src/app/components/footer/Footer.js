import Image from "next/image"


export const Footer = () => {
    return (
        <section className="max-w-[1920px] mx-auto bg-primaryBlack text-white font-poppins px-8">


            <div className="flex justify-center flex-col sm:flex-row lg:flex-row  text-center sm:text-start gap-[33px]  sm:text-normal sm:justify-normal  flex-wrap lg:pl-10">
                {/* <div className="flex flex-col sm:flex-row lg:flex-row"> */}
                <div className="flex-col flex gap-4 sm:w-[200px] lg:w-[190px]">
                    <p className=" text-mobfooterTitle sm:text-tabfooterTitle lg:text-lapfooterTitle font-bold">Category</p>
                    <ul className="text-mobfooterLinks sm:text-tabfooterLinks lg:text-lapfooterLinks leading-8 font-normal text-primaryGrey">
                        <li>Brand & Identity</li>
                        <li>Business & Advertising</li>
                        <li>Packaging & Label Design</li>
                        <li>Website & App Design</li>
                        <li>Social Media Design</li>
                        <li>Illustration & Art</li>
                        <li>Book & Magzine Design</li>
                        <li>Clothing & Merchandise</li>
                    </ul>
                </div>
                <div className="flex-col flex gap-4 sm:w-[210px] lg:w-[180px]">
                    <p className="text-mobfooterTitle sm:text-tabfooterTitle lg:text-lapfooterTitle font-bold">Get design</p>
                    <ul className="text-mobfooterLinks sm:text-tabfooterLinks lg:text-lapfooterLinks font-normal text-primaryGrey leading-8">
                        <li>Logo design</li>
                        <li>Business cards</li>
                        <li>Product packaging</li>
                        <li>Landing page design</li>
                        <li>website development</li>
                        <li>Business cards</li>
                        <li>Social media profile banners</li>
                        <li>Custom illustrations</li>
                    </ul>
                </div>
                {/* </div> */}
                {/* <div className="flex gap-2   lg:flex-row flex-col"> */}
                <div className="flex-col flex gap-4 sm:w-[200px] lg:w-[100px]">
                    <p className="text-mobfooterTitle sm:text-tabfooterTitle lg:text-lapfooterTitle font-bold">Support</p>
                    <ul className="text-mobfooterLinks sm:text-tabfooterLinks lg:text-lapfooterLinks font-normal text-primaryGrey leading-8">
                        <li>Help Desk</li>
                        <li>Disclaimer</li>
                        <li>Privacy Policy</li>
                        <li>Terms  and Conditions</li>
                    </ul>
                </div>
                <div className="flex-col flex gap-4 sm:w-[200px] lg:w-[120px]">
                    <p className="text-mobfooterTitle sm:text-tabfooterTitle lg:text-lapfooterTitle font-bold">Company</p>
                    <ul className="text-mobfooterLinks sm:text-tabfooterLinks lg:text-lapfooterLinks font-normal text-primaryGrey leading-8">
                        <li>About us</li>
                        <li>Pricing</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="flex-col flex gap-4 lg:w-[100px] ">
                    <p className="text-mobfooterTitle sm:text-tabfooterTitle lg:text-lapfooterTitle font-bold">Resources</p>
                    <ul className="text-mobfooterLinks sm:text-tabfooterLinks lg:text-lapfooterLinks font-normal text-primaryGrey leading-8">
                        <li>Documentation</li>
                        <li>Papers</li>
                        <li>Press Conferences</li>
                    </ul>
                </div>
                {/* </div> */}
                <div className="flex-col  lg:flex gap-6 sm:block w-[250px] mx-auto sm:w-[338px] lg:w-[250px]  ">
                    <Image src="/navbar/Logo.png" width={230} height={54} alt="logoImg" className="mb-5" />
                    <p className="text-mobfooterBody sm:text-tabfooterBody lg:text-lapfooterBody font-normal font-poppins leading-5">{`Logo Design Maker isn't just about creating logos – we build brands. We offer a comprehensive suite of design services to cater to all your branding needs, from logo design and business cards to website development and social media graphics.`}</p>
                </div>
            </div>

        </section>
    )


}