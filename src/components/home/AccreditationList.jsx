import Section from "../ui/Section";
import { accreditations } from "../../data";

const accreditationGroups = [
  { title: "Accreditation and Licensing", names: ["MFHEA", "ELT Council", "ATHE"] },
  { title: "Qualifications Frameworks", names: ["MQF", "EQF"] },
  { title: "Funding and Mobility Opportunities", names: ["Erasmus+"] },
];

export default function AccreditationList() {
  return (
    <Section
      title="Accreditations, Recognition and Memberships"
      intro="Ascencia Malta is fully recognised within the Maltese and European education systems. Our programmes and schools are accredited by the relevant national authorities, placed on the Malta Qualifications Framework (MQF) and European Qualifications Framework (EQF), and supported by membership in respected international bodies."
      tone="tint"
    >
      <div className="accreditation-groups">
        {accreditationGroups.map((group) => (
          <article className="accreditation-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="accreditation-logos" aria-label={group.title}>
              {group.names.map((name) => {
                const item = accreditations.find((accreditation) => accreditation.name === name);
                if (!item) return null;

                return (
                  <li className="accreditation-logo" key={item.name}>
                    <img src={item.img} alt={item.name} loading="lazy" />
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
