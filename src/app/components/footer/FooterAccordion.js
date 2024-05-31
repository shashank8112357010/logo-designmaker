"use client"
import { useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js
import Link from 'next/link';

export default function FooterAccordion({ footerLinks }) {
  const [openFooterLinks, setOpenFooterLinks] = useState(null);
  const toggleAccordion = (index) => {
    // setOpenFooterLinks(isOpen ? null : index);
    setOpenFooterLinks((prevState) => (prevState === index ? null : index));
  };

  return (
    <div className="px-6 max-w-[450px]">
      {footerLinks.map((link, index) => (
        <div key={index} className="mb-4 ">
          <div
            className="flex justify-between items-center gap-[10.5rem] cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <p className="text-mobfooterTitle whitespace-nowrap  sm:text-tabfooterTitle lg:text-lapfooterTitle font-bold text-white leading-[24px]">
              {link.heading}
            </p>
            <div className="w-2 h-[5px] relative">
              <Image
                src={openFooterLinks === index ? "/home/UpArrow.png" : "/home/DownArrow.png"}
                fill
                alt={openFooterLinks === index ? "UpArrowImg" : "DownArrowImg"}
              />
            </div>
          </div>

          <ul className={`${(openFooterLinks === index) ? "max-h-60" : "max-h-0"} overflow-hidden mt-2 cursor-pointer transition-all duration-500 ease-in-out flex flex-col justify-start items-start`}>
            {footerLinks[index]?.data?.map((item, itemIndex) => (
              <li key={itemIndex} className="text-primaryGrey mb-2 text-[14px] capitalize leading-[21px]">
                <Link href={item.url ? item.url : "#"}>{item.heading}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};


