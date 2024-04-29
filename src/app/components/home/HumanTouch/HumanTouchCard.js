import Image from "next/image";

export default function HumanTouchCard() {
    return (
        <div className="flex justify-center items-center sm:items-start flex-col sm:flex-row pt-8 gap-4  ">
            <div className="flex flex-col gap-[9px] lg:gap-[14px]" >
                <div className=" w-[183px] h-[155px] lg:w-[267px] lg:h-[255px] relative rounded-[11px]  lg:rounded-[16px]">
                    <Image src="/home/HumanCard1.png" alt="human touch" fill />
                </div>
                <div className="relative w-[183px]  h-[155px] lg:w-[267px] lg:h-[255px] rounded-[9px] lg:rounded-[14px]">
                    <Image src="/home/HumanCard2.png" alt="human touch 2" fill />
                </div>
            </div>
            <div className="relative w-[183px] h-[319px] lg:w-[266px] lg:h-[520px] rounded-[9px] lg:rounded-[14px]">
                <Image src="/home/HumanCard3.png" alt="human touch 3" fill />
            </div>
            <div className="flex flex-col gap-[9px] lg:gap-[14px]" >
                <div className=" w-[183px] h-[155px] lg:w-[267px] lg:h-[255px] relative rounded-[11px]  lg:rounded-[16px]">
                    <Image src="/home/HumanCard4.png" alt="human touch" fill />
                </div>
                <div className="relative w-[183px] h-[155px] lg:w-[267px] lg:h-[255px] rounded-[9px] lg:rounded-[14px]">
                    <Image src="/home/HumanCard1.png" alt="human touch 2" fill />
                </div>
            </div>
        </div>
    )
}