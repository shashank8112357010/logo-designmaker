export default function StoryAtom({ content, setContent }) {

    return (
        <div className="px-4 sm:px-20 py-8 md:pt-10 items-center md:items-end">
            <div className=" font-bold text-[14px] lg:text-[21px] flex gap-1 sm:gap-2 w-full items-center justify-center md:justify-end">
                {
                    [1, 2, 3, 4, 5, 6].map((num, index) => {
                        return (
                            <button
                                onClick={() => setContent(num)}
                                key={num} className={`${content !== index + 1 ? "bg-secondaryBlack text-white" : "bg-white text-secondaryBlack"} w-[40px] lg:w-[59px] h-[40px] lg:h-[59px] rounded-full `}>
                                {num}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}