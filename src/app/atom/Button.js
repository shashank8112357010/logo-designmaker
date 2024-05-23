import { useRouter } from "next/navigation";

export default function Button({ title, displayy, urlLink }) {

    const router = useRouter()
    return (
        <button onClick={() => router.push(urlLink)} className={`${displayy} text-[10px] sm:text-[14px] font-semibold bg-primaryGreen border-2 border-primaryGreen hover:bg-secondaryBlack hover:border-primaryGreen text-black hover:text-white px-[14px] py-[8px] rounded-[4px] transition-all duration-300 ease-in-out`} aria-disabled="true">
            {title}
        </button>
    )
}