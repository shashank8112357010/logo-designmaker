"use client"
import { useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js

export default function FooterAccordion({ footerLinks }) {
  const [openFooterLinks, setOpenFooterLinks] = useState(null);
  const toggleAccordion = (index) => {
    // setOpenFooterLinks(isOpen ? null : index);
    setOpenFooterLinks((prevState) => (prevState === index ? null : index));
  };

  return (
    <div className="px-6">
      {footerLinks.map((link, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center gap-[10.5rem] cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <p className="text-mobfooterTitle sm:text-tabfooterTitle lg:text-lapfooterTitle font-bold text-white leading-[24px]">
              {link.heading}
            </p>
            <Image
              src={openFooterLinks === index ? "/home/UpArrow.png" : "/home/DownArrow.png"}
              width={10}
              height={4}
              alt={openFooterLinks === index ? "UpArrowImg" : "DownArrowImg"}
            />
          </div>

          <ul className={`${(openFooterLinks === index) ? "max-h-60" : "max-h-0"} overflow-hidden mt-2 cursor-pointer transition-all duration-500 ease-in-out flex flex-col justify-start items-start`}>
            {footerLinks[index]?.data?.map((item, itemIndex) => (
              <li key={itemIndex} className="text-primaryGrey mb-2 text-[14px] capitalize leading-[21px]">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};


