import usePageTitle from "../hooks/usePageTitle";
import HeroSlider from "../components/home/HeroSlider";
import StatsBar from "../components/home/StatsBar";
import ProgrammeGrid from "../components/home/ProgrammeGrid";
import DirectorMessage from "../components/home/DirectorMessage";
import AccreditationList from "../components/home/AccreditationList";
import CallToAction from "../components/home/CallToAction";

export default function Home() {
  usePageTitle("Home");

  return (
    <>
      <HeroSlider />
      <StatsBar />
      <ProgrammeGrid />
      <DirectorMessage />
      <AccreditationList />
      <CallToAction />
    </>
  );
}
