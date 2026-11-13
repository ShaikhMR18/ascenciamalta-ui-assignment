import { Button, Section } from "../components/UI.jsx";
import {
  stats,
  programs,
  english,
  director,
  accreditations,
} from "../data/";
import HeroSlider from "../components/HeroSlider.jsx";
import usePageTitle from "../hooks/usePageTitle.js";

export default function Home() {
  usePageTitle("Home");
  return (
    <>
     <HeroSlider />

      <Section tone="tint">
        <ul className="stats">
          {stats.map((s) => (
            <li key={s.value}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="programmes"
        title="Explore our programmes"
        intro="From short awards to doctoral degrees, all on the Malta Qualifications Framework."
      >
        <div className="grid grid--4">
          {programs.map((p) => (
            <article key={p.title} className="card card--media">
              <img src={p.img} alt="" loading="lazy" />
              <div className="card__body">
                <h3>{p.title}</h3>
                <p>{p.level}</p>
                <p className="tags">
                  <span>{p.ects}</span>
                  <span>{p.mode}</span>
                </p>
              </div>
            </article>
          ))}
          <article className="card card--english">
            <h3>English School</h3>
            <ul>
              {english.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section tone="dark">
        <div className="director">
          <img
            src={director.img}
            alt={`${director.name}, ${director.role}`}
            loading="lazy"
          />
          <div>
            <h2>Welcome to Ascencia Malta</h2>
            {director.text.map((t) => (
              <p key={t}>{t}</p>
            ))}
            <p>
              <strong>{director.name}</strong>, {director.role}
            </p>
          </div>
        </div>
      </Section>

      <Section title="Accreditations and memberships">
        <ul className="logos">
          {accreditations.map((a) => (
            <li key={a.name}>
              <img src={a.img} alt={a.name} loading="lazy" />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cta">
        <div className="cta">
          <h2>Registration and admission are simple and free.</h2>
          <Button to="/contact" variant="light">
            Get in touch
          </Button>
        </div>
      </Section>
    </>
  );
}
