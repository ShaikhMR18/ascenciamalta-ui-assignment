import Section from "../ui/Section";
import { director } from "../../data";

export default function DirectorMessage() {
  return (
    <Section tone="dark">
      <div className="director">
        <img src={director.img} alt={`${director.name}, ${director.role}`} loading="lazy" />
        <div>
          <h2>Welcome to Ascencia Malta</h2>
          {director.text.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            <strong>{director.name}</strong>, {director.role}
          </p>
        </div>
      </div>
    </Section>
  );
}
