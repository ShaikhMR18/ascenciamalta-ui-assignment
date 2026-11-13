import Section from "../ui/Section";
import { about } from "../../data";

const pillars = [
  { title: "Who we are", text: about.intro },
  { title: "Our mission", text: about.mission },
  { title: "Our vision", text: about.vision },
];

export default function SchoolStory() {
  return (
    <Section title="The school">
      <div className="grid grid--3">
        {pillars.map((item) => (
          <article key={item.title} className="card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
