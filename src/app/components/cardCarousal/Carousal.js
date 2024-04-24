"use client"
import { Card } from "@/data/Data"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Carousal({ carousalDelay }) {
    const location = usePathname()

    return (
        <div
            className={`${carousalDelay} flex justify-center opacity-50  ${location === "/" ? "gap-4 sm:gap-10" : "gap-y-3"} flex-col h-screen z-20`}>
            {Card.map((item) => {
                return (
                    <div key={item.id} className="card text-lg text-center rounded-[20px]">
                        {location === "/" ?
                            <Image src={item.img} width={223} height={405} alt={item.id} priority />
                            :
                            <div className="w-[70px] sm:w-[100px] lg:w-[105px] h-[150px] lg:h-[150px] relative">
                                <Image src={item.img} fill alt={item.id} priority />
                            </div>
                        }

                    </div>
                )
            })}
        </div>
    )
}