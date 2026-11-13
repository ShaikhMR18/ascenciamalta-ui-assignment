export default function Section({ id, title, intro, tone, children }) {
  const toneClass = tone ? `section--${tone}` : "";

  return (
    <section id={id} className={`section ${toneClass}`}>
      <div className="container">
        {title && <h2 className="section__title">{title}</h2>}
        {intro && <p className="section__intro">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
