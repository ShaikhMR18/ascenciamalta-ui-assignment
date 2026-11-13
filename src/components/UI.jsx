import { Link } from "react-router-dom";



export function Button({ to, variant = "solid", children, ...rest }) {
  const cls = `btn btn--${variant}`;
  return to ? <Link to={to} className={cls} {...rest}>{children}</Link>
            : <button className={cls} {...rest}>{children}</button>;
}

export function Section({id, title, intro, tone, children }) {
  return (
    <section id={id} className={`section ${tone ? "section--" + tone : ""}`}>
      <div className="container">
        {title && <h2 className="section__title">{title}</h2>}
        {intro && <p className="section__intro">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export function PageBanner({ title, text }) {
  return (
    <div className="banner">
      <div className="container">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}
