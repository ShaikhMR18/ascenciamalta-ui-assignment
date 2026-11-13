import usePageTitle from "../hooks/usePageTitle";
import PageBanner from "../components/ui/PageBanner";
import Section from "../components/ui/Section";
import ContactForm from "../components/contact/ContactForm";
import ContactDetails from "../components/contact/ContactDetails";
import CampusMap from "../components/contact/CampusMap";

export default function Contact() {
  usePageTitle("Contact");

  return (
    <>
      <PageBanner
        title="Contact us"
        text="Questions about courses, dates or applying? Send us a message."
      />
      <Section>
        <div className="split split--form">
          <ContactForm />
          <ContactDetails />
        </div>
      </Section>
      <CampusMap />
    </>
  );
}
