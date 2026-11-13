import Section from "../ui/Section";
import { programs, english } from "../../data";

export default function ProgrammeGrid() {
  return (
    <Section
      id="programmes"
      title="Explore our programmes"
      intro="From short awards to doctoral degrees, all on the Malta Qualifications Framework."
    >
      <div className="grid grid--4">
        {programs.map((program) => (
          <article key={program.title} className="card card--media">
            <img src={program.img} alt="" loading="lazy" />
            <div className="card__body">
              <h3>{program.title}</h3>
              <p>{program.level}</p>
              <p className="tags">
                <span>{program.ects}</span>
                <span>{program.mode}</span>
              </p>
            </div>
          </article>
        ))}
        <article className="card card--english">
          <h3>English School</h3>
          <ul>
            {english.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
