import Section from "../ui/Section";
import { accreditations } from "../../data";

export default function AccreditationList() {
  return (
    <Section title="Accreditations and memberships">
      <ul className="logos">
        {accreditations.map((item) => (
          <li key={item.name}>
            <img src={item.img} alt={item.name} loading="lazy" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
