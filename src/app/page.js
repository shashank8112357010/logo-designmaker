
import { HeroBanner } from "./components/home/HeroBanner";
import { HomeSlider } from "./components/home/HomeSlider";
import { SpeakServices } from "./components/home/SpeakServices";
import { WhyChoose } from "./components/home/WhyChoose";


export default function Home() {

  return (
    <>
      <HeroBanner />
      <SpeakServices />
      <WhyChoose />
      <HomeSlider />
    </>
  );
}




