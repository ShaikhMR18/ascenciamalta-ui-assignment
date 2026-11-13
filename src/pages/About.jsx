import usePageTitle from "../hooks/usePageTitle";
import PageBanner from "../components/ui/PageBanner";
import SchoolStory from "../components/about/SchoolStory";
import CampusLife from "../components/about/CampusLife";

export default function About() {
  usePageTitle("About us");

  return (
    <>
      <PageBanner
        title="About Ascencia Malta"
        text="Higher education, English language and digital learning in Floriana."
      />
      <SchoolStory />
      <CampusLife />
    </>
  );
}
