import ButtonAtom from "./ButtonAtom";
import InputAtom from "./InputAtom";

export default function FormAtom() {
    return (
        <div className=" bg-white/10 rounded-[20px] p-4 flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="w-full sm:w-1/2">
                    <label for="firstname" className="block mb-2 text-[15px]">First name*</label>
                    <InputAtom type="text" id="firstname" placeholder="John" />
                </div>
                <div className="w-full sm:w-1/2">
                    <label for="lastname" className="block mb-2 text-[15px]">Last name*</label>
                    <InputAtom type="text" id="lastname" placeholder="Doe" />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="w-full sm:w-1/2">
                    <label for="phone" className="block mb-2 text-[15px]">Phone*</label>
                    <InputAtom type="text" id="phone" placeholder="1234567890" />
                </div>
                <div className="w-full sm:w-1/2">
                    <label for="title" className="block mb-2 text-[15px]">Job Title*</label>
                    <InputAtom type="text" id="title" placeholder="Ex: Product Designer" />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="w-full sm:w-1/2">
                    <label for="company" className="block mb-2 text-[15px]">Company*</label>
                    <InputAtom type="text" id="company" placeholder="Enter your company" />
                </div>
                <div className="w-full sm:w-1/2">
                    <label for="country" className="block mb-2 text-[15px]">Country*</label>
                    <InputAtom type="text" id="country" placeholder="Select Your Country" />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="w-full">
                    <label for="companyEmail" className="block mb-2 text-[15px]">Company Email*</label>
                    <InputAtom type="text" id="companyEmail" placeholder="company@xyz.com" />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="w-full">
                    <label for="message" className="block mb-2 text-[15px]">Message*</label>
                    <InputAtom type="text" id="message" placeholder="Enter your message" />
                </div>
            </div>
            <ButtonAtom title="Get Started" displayy="max-w-[120px] text-center block mx-auto" />
        </div>
    )
}