export default function DesignHeader({ heading, para, subHeading }) {
    return (
        <div className="text-center flex flex-col items-center gap-2 mb-6">
            <div className="max-w-[280px] sm:max-w-[380px] lg:max-w-[700px] lg:text-[38px] sm:text-[25px] text-[18px] font-bold leading-[21px] sm:leading-[29px] lg:leading-[44px] tracking-[-1px] text-white">
                {heading} <span className="text-primaryGreen">{subHeading}</span>
            </div>
            <p className="max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] mx-auto lg:text-[16px] sm:text-[12px] text-[12px] lg:leading-[28px]  sm:leading-[18px] leading-[18px] text-primaryGray px-4 sm:px-0 lg:px-0">
                {para}
            </p>
        </div>
    )
}