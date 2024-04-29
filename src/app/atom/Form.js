import Button from "./Button";
import Input from "./Input";

export default function Form() {
    return (
        <div className=" bg-white/10 rounded-[20px] p-4 flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="w-full sm:w-1/2">
                    <label htmlFor="firstname" className="block mb-2 text-[15px]">First name*</label>
                    <Input type="text" id="firstname" placeholder="John" />
                </div>
                <div className="w-full sm:w-1/2">
                    <label htmlFor="lastname" className="block mb-2 text-[15px]">Last name*</label>
                    <Input type="text" id="lastname" placeholder="Doe" />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="w-full sm:w-1/2">
                    <label htmlFor="phone" className="block mb-2 text-[15px]">Phone*</label>
                    <Input type="text" id="phone" placeholder="1234567890" />
                </div>
                <div className="w-full sm:w-1/2">
                    <label htmlFor="title" className="block mb-2 text-[15px]">Job Title*</label>
                    <Input type="text" id="title" placeholder="Ex: Product Designer" />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="w-full sm:w-1/2">
                    <label htmlFor="company" className="block mb-2 text-[15px]">Company*</label>
                    <Input type="text" id="company" placeholder="Enter your company" />
                </div>
                <div className="w-full sm:w-1/2">
                    <label htmlFor="country" className="block mb-2 text-[15px]">Country*</label>
                    <Input type="text" id="country" placeholder="Select Your Country" />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="w-full">
                    <label htmlFor="companyEmail" className="block mb-2 text-[15px]">Company Email*</label>
                    <Input type="text" id="companyEmail" placeholder="company@xyz.com" />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="w-full">
                    <label htmlFor="message" className="block mb-2 text-[15px]">Message*</label>
                    <Input type="text" id="message" placeholder="Enter your message" />
                </div>
            </div>
            <Button title="Get Started" displayy="max-w-[120px] text-center block mx-auto" />
        </div>
    )
}