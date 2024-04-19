'use client'
<<<<<<< HEAD
import {FaqAtom} from "@/app/atom/faqAtom"
=======
import FaqAtom from "@/app/atom/FaqAtom"
>>>>>>> dev
import { faqs } from "@/data/Data"
import { useState } from "react"

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <FaqAtom faqs={faqs} />
    )
}