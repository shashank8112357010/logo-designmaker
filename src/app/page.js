import DesignYourLogo from "./components/home/DesignYourLogo";
import Faq from "./components/home/Faq";
import HeroBanner from "./components/home/HeroBanner";
import HomeSlider from "./components/home/HomeSlider";
import HumanTouch from "./components/home/HumanTouch";
import SpeakServices from "./components/home/SpeakServices";
import TellStory from "./components/home/TellStory";
import WhyChoose from "./components/home/WhyChoose";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <SpeakServices />
      {/* <HumanTouch /> */}
      <WhyChoose />
      <HomeSlider />
      <TellStory />
      <Faq />
      <DesignYourLogo />
    </>
  );
}




