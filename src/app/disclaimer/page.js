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
                    <div className="font-bold text-mobHeaderText sm:text-tabHeaderText lg:text-lapHeaderText tracking-[-1px] lg:-tracking-[3px] leading-[20px] sm:leading-[28px] pb-2 sm:pb-0 lg:leading-[58.85px]">Disclaimer</div>
                </div>
            </div>
            <p className="z-30 px-4 sm:px-10 lg:px-20 sm:pt-7 pb-8  text-white text-lapHeaderBody sm:text-tabHeaderBody lg:text-lapHeaderBody font-medium sm:leading-[25px] tacking-[1px]">
                If you require any more information or have any questions about our site&apos;s disclaimer, please feel free to contact us by email at legal@logo-designmaker.com.
                If you require any more information or have any questions about our sites disclaimer, please feel free to contact us by email at legal@logo-designmaker.com.
            </p>

            <div className="px-4 sm:px-10 lg:px-20">

                <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>
                <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                    All the information on this website - https://logo-designmaker.com/contact - is published in good faith and for general information purpose only. logo-designmaker does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (logo-designmaker), is strictly at your own risk. logo-designmaker will not be liable for any losses and/or damages in connection with the use of our website.
                </p>
                <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                    If you require any more information or have any questions about our site&apos;s disclaimer, please feel free to contact us by email at legal@logo-designmaker.com.
                    From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone &apos;bad&apos;.
                </p>
                <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                    Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their &apos;Terms of Service&apos; before engaging in any business or uploading any information.
                </p>

                <div className="pb-10 pt-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Consent
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
                </div>
                <div className="pb-20">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Update
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
                </div>
            </div>

        </section >
    )
}