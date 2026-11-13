import { useRef } from "react";
import { Link } from "react-router-dom";
import Section from "../ui/Section";
import { programs, english } from "../../data";
import "../../styles/programmeSlider.css";

const CARD_GAP = 20;

export default function ProgrammeGrid() {
  const viewportRef = useRef(null);

  const slide = (direction) => {
    const viewport = viewportRef.current;
    const card = viewport?.querySelector(".programme-card");
    if (!viewport || !card) return;

    viewport.scrollBy({
      left: direction * (card.offsetWidth + CARD_GAP),
      behavior: "smooth",
    });
  };

  return (
    <Section id="programmes" tone="tint">
      <div className="programme-slider">
        <div className="programme-slider__head">
          <div>
            <h2 className="programme-slider__title">Explore our programmes</h2>
            <p className="programme-slider__intro">
              From short awards to doctoral degrees, all on the Malta Qualifications Framework.
            </p>
          </div>
          <div className="programme-slider__controls">
            <button type="button" onClick={() => slide(-1)} aria-label="Previous programmes">
              &#8592;
            </button>
            <button type="button" onClick={() => slide(1)} aria-label="Next programmes">
              &#8594;
            </button>
          </div>
        </div>

        <div className="programme-slider__viewport" ref={viewportRef}>
          <div className="programme-slider__track">
            {programs.map((program) => (
              <article key={program.title} className="programme-card">
                <img src={program.img} alt="" loading="lazy" />
                <div className="programme-card__body">
                  <h3>{program.title}</h3>
                  <p className="programme-card__level">{program.level}</p>
                  <p className="programme-card__meta">
                    <span>{program.ects}</span>
                    <span>{program.mode}</span>
                  </p>
                  <Link to="/contact" className="programme-card__link">
                    Enquire
                  </Link>
                </div>
              </article>
            ))}

            <article className="programme-card programme-card--english">
              <div className="programme-card__body">
                <h3>English School</h3>
                <p className="programme-card__level">Language programmes</p>
                <ul>
                  {english.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
                <Link to="/contact" className="programme-card__link">
                  Enquire
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </Section>
  );
}
