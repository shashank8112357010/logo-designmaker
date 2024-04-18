import SliderAtom from "@/app/atom/SliderAtom";

export default function HomeSlider() {

    const slideData = [
        {
            para: "I was initially hesitant to outsource my logo design, but Logo Design Maker made the process incredibly smooth and enjoyable. The designer really captured the essence of my brand, and the final logo is exactly what I envisioned. Highly recommend!",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "I was initially hesitant to outsource my logo design, but Logo Design Maker made the process incredibly smooth and enjoyable. The designer really captured the essence of my brand, and the final logo is exactly what I envisioned. Highly recommend!",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
        {
            para: "I was initially hesitant to outsource my logo design, but Logo Design Maker made the process incredibly smooth and enjoyable. The designer really captured the essence of my brand, and the final logo is exactly what I envisioned. Highly recommend!",
            img: "/home/TestimonialAvtar.png",
            name: "Sarah Jones",
            designation: "Developer",
            founder: "Founder of Green Meadows Bakery"
        },
    ];

    return (
        <SliderAtom slideData={slideData} />
    );
};

