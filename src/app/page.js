
import { HeroBanner } from "./components/home/HeroBanner";
import { HomeSlider } from "./components/home/HomeSlider";
import { SpeakServices } from "./components/home/SpeakServices";
import { WhyChoose } from "./components/home/WhyChoose";
import { Faq } from "./components/home/Faq";
import { DesignYourLogo } from "./components/home/DesignYourLogo";


export default function Home() {

  return (
    <>
      <HeroBanner />
      <SpeakServices />
      <WhyChoose />
      <HomeSlider />
      <Faq />
      <DesignYourLogo />
    </>
  );
}




