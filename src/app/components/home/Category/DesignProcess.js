export default function DesignProcess({ heading, designProcess }) {
    return (
        <div>
            <div className="text-center flex flex-col items-center gap-2 mb-6">
                <h2 className="max-w-[280px] sm:max-w-[380px] lg:max-w-[650px] lg:text-[38px] sm:text-[25px] text-[18px] font-bold leading-[21px] sm:leading-[29px] lg:leading-[44px] tracking-[-1px] text-white">
                    {heading}
                </h2>

                <div className="my-10 flex flex-wrap flex-row justify-center gap-16 px-4">
                    {designProcess.map((item) => {
                        return (
                            <div key={item.id} className="w-[250px] lg:w-[350px] text-start pb-6 lg:pb-10 border-b-2 border-primaryGreen">
                                <div className="text-white text-mobTitle sm:text-tabTitle lg:text-lapTitle font-semibold" dangerouslySetInnerHTML={{ __html: item.heading }}></div>
                                <div className="text-primaryGray text-mobBody sm:text-tabBody lg:text-lapBody leading-[20px] lg:leading-[28.8px] " dangerouslySetInnerHTML={{ __html: item.para }}></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}