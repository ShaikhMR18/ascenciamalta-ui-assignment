import Button from "../ui/Button";
import Section from "../ui/Section";

export default function CallToAction() {
  return (
    <Section tone="cta">
      <div className="cta">
        <h2>Registration and admission are simple and free.</h2>
        <Button to="/contact" variant="light">
          Get in touch
        </Button>
      </div>
    </Section>
  );
}
