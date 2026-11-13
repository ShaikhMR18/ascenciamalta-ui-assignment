import { useState } from "react";
import { PageBanner, Section, Button } from "../components/UI.jsx";
import { school } from "../data/";
import usePageTitle from "../hooks/usePageTitle.js";
import { validate } from "../utility/index.js";

const empty = { name: "", email: "", phone: "", message: "" };
const labels = { name: "Full name", email: "Your email", phone: "Your phone (optional)", message: "Message" };



export default function Contact() {
  usePageTitle("Contact");
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) { setSent(true); setValues(empty); }
  };

  return (
    <>
      <PageBanner title="Contact us" text="Questions about courses, dates or applying? Send us a message." />
      <Section>
        <div className="split split--form">
          {sent ? (
            <div className="thanks" role="status">
              <h2>Thank you</h2>
              <p>Your message was received. We will reply by email soon.</p>
              <Button variant="ghost" onClick={() => setSent(false)}>Send another message</Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="form">
              {Object.keys(labels).map((f) => (
                <div key={f} className="field">
                  <label htmlFor={f}>{labels[f]}</label>
                  {f === "message"
                    ? <textarea id={f} name={f} rows="5" value={values[f]} onChange={onChange} aria-invalid={!!errors[f]} />
                    : <input id={f} name={f} type={f === "email" ? "email" : f === "phone" ? "tel" : "text"} value={values[f]} onChange={onChange} aria-invalid={!!errors[f]} />}
                  {errors[f] && <p className="error">{errors[f]}</p>}
                </div>
              ))}
              <Button type="submit">Send message</Button>
            </form>
          )}
          <aside className="info">
            <h2>Let us know how we can help</h2>
            <p><strong>Address</strong><br />{school.address}</p>
            <p><strong>Email</strong><br /><a href={`mailto:${school.email}`}>{school.email}</a></p>
            <p><strong>Phone</strong><br />{school.phone}</p>
            <p><strong>Erasmus+ mobility</strong><br /><a href={`mailto:${school.erasmus}`}>{school.erasmus}</a></p>
            <p><strong>Opening hours</strong><br />{school.hours}</p>
          </aside>
        </div>
      </Section>
      <iframe className="map" title="Map of Ascencia Malta, Floriana" loading="lazy"
        src="https://maps.google.com/maps?q=Ascencia%20Malta&z=14&output=embed" />
    </>
  );
}
