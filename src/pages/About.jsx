import CampusLife from "../components/CampusLife.jsx";
import { PageBanner } from "../components/UI.jsx";
import { about } from "../data/";
import usePageTitle from "../hooks/usePageTitle.js";

export default function About() {
  usePageTitle("About us");
  return (
    <>
      <PageBanner
        title="About Ascencia Malta"
        text="Higher education, English language and digital learning in Floriana."
      />

      <CampusLife about={about} />
    </>
  );
}
