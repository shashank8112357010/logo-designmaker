"use client"
import { useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js

export default function FooterAccordion({ footerLinks }) {
  const [openFooterLinks, setOpenFooterLinks] = useState(null);
<<<<<<< HEAD
  console.log("aman", footerLinks)
  console.log("varun", footerLinks[0].data)
=======
  
>>>>>>> 2cd516cf0d3432f96ac173390dc025452e0e9d64

  const toggleAccordion = (index) => {
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
            <p className="text-mobfooterTitle sm:text-tabfooterTitle lg:text-lapfooterTitle font-bold text-white">
              {link.heading}
            </p>
            <Image
              src={openFooterLinks === index ? "/home/UpArrow.png" : "/home/DownArrow.png"}
              width={15}
              height={15}
              alt={openFooterLinks === index ? "UpArrowImg" : "DownArrowImg"}
            />
          </div>
         
          {openFooterLinks === index && (
            <ul className="mt-2 cursor-pointer transition-all duration-500 ease-in-out flex flex-col justify-start items-start ">
              {footerLinks[index]?.data?.map((item, itemIndex) => (
                <li key={itemIndex} className="text-primaryGrey mb-2 text-[14px] capitalize">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};


