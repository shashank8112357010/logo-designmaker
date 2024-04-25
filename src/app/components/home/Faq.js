'use client'
import FaqAtom from "@/app/atom/FaqAtom"
import { faqs } from "@/data/Data"

export default function Faq() {
    return (
        <FaqAtom faqs={faqs} />
    )
}