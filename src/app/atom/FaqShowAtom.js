'use client'
import { useState } from "react"
import Image from "next/image"

export default function FaqShowAtom({ data, index }) {
    const [show, setShow] = useState(false)

    return (
        <div className="flex flex-col gap-6 pb-2 "
            style={{ borderBottom: index !== data.length - 1 ? '1px solid #ccc' : 'none' }}        //need to fix this
        >
            <div className="flex items-center justify-between gap-4 cursor-pointer" onClick={() => setShow(!show)}>
                <p className=" text-mobTitle sm:text-tabTitle lg:text-lapTitle font-normal leading-6 sm:leading-6 lg:leading-9">
                    {data.ques}
                </p>

                <Image src={show ? "/home/UpArrow.png" : "/home/DownArrow.png"} width={15} height={15} alt={show ? "DownArrowImg" : "UpArrowImg"} />

            </div>
            {show && <p className="text-mobBody max-w-xl lg:max-w-3xl sm:text-tabBody lg:text-lapBody text-primaryGrey">{data.ans}</p>}
        </div>
    )
}