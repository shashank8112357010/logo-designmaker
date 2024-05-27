import Image from "next/image";

export default function page() {
    return (
        <section className="bg-primaryBlack text-white pt-20 relative max-w-[1920px] mx-auto">
            <div className="max-w-full flex flex-row z-10 gap-4 px-4 sm:px-10 lg:px-20 xl:gap-10 h-[120px] relative">
                <div className="absolute left-0 top-0">
                    <Image src="/pricing/LeftGrPricing.png" width={856} height={615} alt="linear-gradient-top" />
                </div>
                <div className="absolute top-0 right-0 ">
                    <Image src="/pricing/RightGrPricing.png" width={856} height={615} alt="linear-gradient-bottom" />
                </div>
                <div className="top-[30%] z-30 min-h-[541px] absolute sm:px-0 sm:mt-5">
                    <h1 className="font-bold text-mobHeaderText sm:text-tabHeaderText lg:text-lapHeaderText tracking-[-1px] lg:-tracking-[3px] leading-[20px] sm:leading-[28px] pb-2 sm:pb-0 lg:leading-[58.85px]">Disclaimer</h1>
                </div>
            </div>

            <div className="px-4 sm:px-10 lg:px-20">

                <div className="pb-10 pt-4">
                    <h2 className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Use Condition
                    </h2>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">Your acceptance to these Terms of Use is indicated by your use of logo-designmaker. Kindly give them serious reading. This page is not for you if you disagree. We keep the right to change these terms at any moment and without warning.</p>
                </div>
                <div className="pb-10 pt-4">
                    <h2 className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Ownership and Use of the Logo
                    </h2>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">Logos made with our service are licensed for usage to you.  The extent of the license given (e.g., personal, commercial use) is detailed in our particular price plans. Every right not specifically granted in these Terms of Use is reserved by us.</p>
                </div>
                <div className="pb-10 pt-4">
                    <h2 className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Content Disclaimer
                    </h2>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">Professional design advice is not provided by the information on this website, including that on branding and logo design. It is simply intended for informative purposes. Although we work hard to present correct information, we cannot promise its correctness, completeness, or dependability.
                    </p>
                </div>
                <div className="pb-10 pt-4">
                    <h2 className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Warranties Disclaimer
                    </h2>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">Concerning the use of this website and the logos made using our service, we disclaim any guarantees, expressed or implied. This covers, among other things, the guarantees of merchantability, suitability for a certain use, and non-infringement.</p>
                </div>
                <div className="pb-10 pt-4">
                    <h2 className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Liability Limitation
                    </h2>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">Any losses resulting from the usage of this website or the logos made with our service are not liable by us. This covers punitive, incidental, consequential, and direct losses among others.</p>
                </div>
                <div className="pb-10 pt-4">
                    <h2 className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Copyright and Trademark
                    </h2>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">Copyright and trademark laws protect all of the material on this website, including the logos. Without our express written permission, no material from this website may be copied, altered, or distributed.</p>
                </div>
                <div className="pb-10 pt-4">
                    <h2 className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Third-Party Links
                    </h2>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">There could be links on this website to websites run by other parties. The practices or material of any other websites are not our responsibility.</p>
                </div>
                <div className="pb-10 pt-4">
                    <h2 className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Governing Law
                    </h2>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">The laws of London shall apply and these Terms of Use shall be interpreted accordingly.</p>
                </div>
                <div className="pb-20 pt-4">
                    <h2 className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Get in Touch
                    </h2>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">If you would want to ask us any issues regarding these Terms of Use, email info@logo-designmaker.com.</p>
                </div>
            </div>

        </section >
    )
}