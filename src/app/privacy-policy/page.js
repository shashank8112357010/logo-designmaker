import Image from "next/image";

export default function page() {
    return (
        <section className="bg-primaryBlack text-white pt-20 relative max-w-[1920px] mx-auto">
            <div className="max-w-full flex flex-row z-10 gap-4 px-4 sm:px-10 lg:px-20 xl:gap-10 h-[200px] relative">
                <div className="absolute left-0 top-0">
                    <Image src="/pricing/LeftGrPricing.png" width={856} height={615} alt="linear-gradient-top" />
                </div>
                <div className="absolute top-0 right-0 ">
                    <Image src="/pricing/RightGrPricing.png" width={856} height={615} alt="linear-gradient-bottom" />
                </div>
                <div className="top-[30%] z-30 min-h-[541px] absolute sm:px-0 sm:mt-5">
                    <div className="font-bold text-mobHeaderText sm:text-tabHeaderText lg:text-lapHeaderText tracking-[-1px] lg:-tracking-[3px] leading-[20px] sm:leading-[28px] pb-2 sm:pb-0 lg:leading-[58.85px]">Privacy Policy</div>
                    <div className="text-[16px] leading-[20px] sm:leading-[28px] tracking-[1px]">Last updated: May 23,2024</div>
                </div>
            </div>
            <p className="z-30 px-4 sm:px-10 lg:px-20 sm:pt-7 pb-8 sm:pb-16 text-white text-lapHeaderBody sm:text-tabHeaderBody lg:text-lapHeaderBody font-medium sm:leading-[25px] tacking-[1px]">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>

            <div className="px-4 sm:px-10 lg:px-20">
                <div className="text-mobHeading1 pb-4 sm:pb-10 sm:text-tabHeading1 lg:text-lapHeading1 font-bold   leading-[20px] sm:leading-[44px] sm:tracking-[1px]">Interpretation and Definitions</div>

                <div className="pb-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Interpretation
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                </div>

                <div className="pb-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Definitions
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        Account means a unique account created for You to access our Service or parts of our Service. <br />
                        Affiliate means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.<br />
                        Company (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to APCL LONDON LTD, IInd Floor, College House, 17 King Edwards Road, RUISLIP, London, HA4 7AE, UNITED KINGDOM.<br />
                        Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.<br />
                        Country refers to: United Kingdom<br />
                        Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.<br />
                        Personal Data is any information that relates to an identified or identifiable individual.<br />
                        Service refers to the Website.<br />
                        Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.<br />
                        Third-party Social Media Service refers to any website or any social network website through which a User can log in or create an account to use the Service.<br />
                        Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).<br />
                        Website refers to logo-designmaker, accessible from https://logo-designmaker.com/<br />
                        You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                    </p>
                </div>
            </div>

            <div className="px-4 sm:px-10 lg:px-20">
                <div className="text-mobHeading1 pb-10 sm:text-tabHeading1 lg:text-lapHeading1 font-bold leading-[20px] sm:leading-[44px] sm:sm:tracking-[1px]">Collecting and Using Your Personal Data</div>

                <div className="pb-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Types of Data Collected
                    </div>
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Personal Data
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:<br />
                        Email address<br />
                        First name and last name<br />
                        Phone number<br />
                        Address, State, Province, ZIP/Postal code, City<br />
                        Usage Data
                    </p>

                    <div className="font-semibold pt-8 text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Usage Data
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        Usage Data is collected automatically when using the Service.<br />
                        Usage Data may include information such as Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.<br />
                        When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.<br />
                        We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                    </p>

                    <div className="font-semibold pt-8 text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Information from Third-Party Social Media Services
                    </div>
                    <div className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:
                        <ul className="ml-4">
                            <li className="custom-list-item">Google</li>
                            <li className="custom-list-item">Facebook</li>
                            <li className="custom-list-item">Instagram</li>
                            <li className="custom-list-item">Twitter</li>
                            <li className="custom-list-item">Linkedin</li>
                        </ul>
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service&apos;s account, such as Your name, Your email address, Your activities or Your contact list associated with that account.
                    </p>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service&apos;s account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.
                    </p>
                </div>
            </div>

            <div className="px-4 sm:px-10 lg:px-20">
                <div className="text-mobHeading1 pb-4 sm:pb-10 sm:text-tabHeading1 lg:text-lapHeading1 font-bold eading-[20px] sm:leading-[44px] sm:sm:tracking-[1px]">Interpretation and Definitions</div>

                <div className="pb-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Interpretation
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                </div>

                <div className="pb-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle sm:leading-[30px]">
                        Tracking Technologies and Cookies
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] sm:tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
                    </p>
                </div>

                <div className="pb-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle sm:leading-[30px]">
                        Cookies or Browser Cookies :- <span className="font-normal leading-[20px] sm:leading-[28px] sm:tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                            We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
                        </span>
                    </div>
                </div>
                <div className="pb-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle sm:leading-[30px]">
                        Web Beacons :- <span className="font-normal leading-[20px] sm:leading-[28px] sm:tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                            Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
                        </span>
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. You can learn more about cookies on TermsFeed website article.<br />
                        We use both Session and Persistent Cookies for the purposes set out below:
                    </p>
                </div>

                <div className="pb-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Necessary / Essential Cookies
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        Type: Session Cookies <br />
                        Administered by: Us<br />
                        Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                    </p>
                </div>
                <div className="pb-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Cookies Policy / Notice Acceptance Cookies
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        Type: Persistent Cookies<br />
                        Administered by: Us<br />
                        Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
                    </p>
                </div>
                <div className="pb-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Functionality Cookies
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        Type: Persistent Cookies<br />
                        Administered by: Us<br />
                        Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.<br />
                        For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.
                    </p>
                </div>
                <div className="pb-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Use of Your Personal Data
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        The Company may use Personal Data for the following purposes:
                    </p>
                    <p className=" mt-4 font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        To provide and maintain our Service, including to monitor the usage of our Service.
                    </p>
                    <p className=" mt-4 font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
                    </p>
                    <p className=" mt-4 font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
                    </p>
                    <p className=" mt-4 font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application&apos;s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
                    </p>
                    <p className=" mt-4 font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
                    </p>
                    <p className=" mt-4 font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        To manage Your requests: To attend and manage Your requests to Us.
                    </p>
                    <p className=" mt-4 font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
                    </p>
                    <p className=" mt-4 font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.
                    </p>
                    <p className=" mt-4 font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        We may share Your personal information in the following situations:<br />
                        With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
                    </p>
                    <p className=" mt-4 font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
                    </p>
                    <p className=" mt-4 font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
                    </p>
                    <p className=" mt-4 font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        With business partners: We may share Your information with Our business partners to offer You certain products, services or promotions.
                    </p>
                    <p className=" mt-4 font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.
                    </p>
                    <p className=" mt-4 font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        With Your consent: We may disclose Your personal information for any other purpose with Your consent.
                    </p>
                </div>

                <div className="pb-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Retention of Your Personal Data
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.<br />
                        The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
                    </p>
                </div>
                <div className="pb-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Transfer of Your Personal Data
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        Your information, including Personal Data, is processed at the Company&apos;s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.<br />
                        Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
                        The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
                    </p>
                </div>
                <div className="pb-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Delete Your Personal Data
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.<br />
                        Our Service may give You the ability to delete certain information about You from within the Service.<br />
                        You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.<br />
                        Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
                    </p>
                </div>

                <div className="pb-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Disclosure of Your Personal Data
                    </div>
                    <p className="pt-4 font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        Business Transactions <br />
                        If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                    </p>
                    <p className="pt-4 font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        Law enforcement
                        Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                    </p>
                    <div className="pt-4 font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        Other legal requirements <br />
                        The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:<br />
                        <ul className="ml-4">
                            <li className="custom-list-item">Comply with a legal obligation</li>
                            <li className="custom-list-item"> Protect and defend the rights or property of the Company</li>
                            <li className="custom-list-item"> Prevent or investigate possible wrongdoing in connection with the Service</li>
                            <li className="custom-list-item"> Protect the personal safety of Users of the Service or the public</li>
                            <li className="custom-list-item"> Protect against legal liability</li>
                        </ul>
                    </div>
                </div>
                <div className="pb-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Disclosure of Your Personal Data
                    </div>
                    <p className="pt-4 font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        Security of Your Personal Data <br />
                        The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                    </p>
                </div>
            </div>

            <div className="px-4 sm:px-10 lg:px-20">
                <div className="text-mobHeading1 pb-10 sm:text-tabHeading1 lg:text-lapHeading1 font-bold eading-[20px] sm:leading-[44px] sm:sm:tracking-[1px]">Interpretation and Definitions</div>

                <div className="pb-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Interpretation
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                </div>

                <div className="pb-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Children&apos;s Privacy
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.<br />
                        If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent&apos;s consent before We collect and use that information.
                    </p>
                </div>
                <div className="pb-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Links to Other Websites
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party&apos;s site. We strongly advise You to review the Privacy Policy of every site You visit.<br />
                        We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services
                    </p>
                </div>
                <div className="pb-10">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Changes to this Privacy Policy
                    </div>
                    <p className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.<br />
                        We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.<br />
                        You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                </div>
                <div className="pb-20">
                    <div className="font-semibold text-mobTitle sm:text-tabTitle sm:pb-2 lg:text-lapTitle leading-[30px]">
                        Contact Us
                    </div>
                    <div className="font-normal leading-[20px] sm:leading-[28px] tracking-[0.2px] text-mobBody sm:text-tabBody lg:text-lapBody">
                        If you have any questions about this Privacy Policy, You can contact us:
                        <ul className="ml-4">
                            <li className="custom-list-item">By visiting this page on our website: https://logo-designmaker.com/contact</li>
                        </ul>

                    </div>
                </div>
            </div>

        </section >
    )
}
