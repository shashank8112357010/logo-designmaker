export default function Input({ type, id, placeholder }) {
    return (
        <input type={type}
            id={id}
            className="shadow-sm bg-white/5 border-[1px] border-white/20 text-white/25 text-white text-[15px] rounded-[5px] block w-full outline-none py-[12px] px-[14px] "
            placeholder={placeholder}
            required
        />
    )
}