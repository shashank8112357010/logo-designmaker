'use client'
import Faqq from "@/app/atom/Faqq"
import { faqs } from "@/data/Data"

export default function Faq() {
    return (
        <Faqq faqs={faqs} />
    )
}