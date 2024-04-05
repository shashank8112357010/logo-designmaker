import { Card } from "@/data/Data"
import Image from "next/image"

export const Carousal = ({ carousalDelay }) => {
    return (
        <div className={`${carousalDelay} flex justify-center items-center opacity-50 gap-4 sm:gap-10 flex-col h-screen z-20`}>
            {Card.map((item) => {
                return (
                    <div key={item.id} className="card text-lg text-center bg-white rounded-[20px]">
                        <Image src={item.img} width={223} height={405} alt={item.id} priority />
                    </div>
                )
            })}
        </div>
    )
}