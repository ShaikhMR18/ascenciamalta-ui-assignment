import { school } from "../../data";

export default function ContactDetails() {
  return (
    <aside className="info">
      <h2>Let us know how we can help</h2>
      <p>
        <strong>Address</strong>
        <br />
        {school.address}
      </p>
      <p>
        <strong>Email</strong>
        <br />
        <a href={`mailto:${school.email}`}>{school.email}</a>
      </p>
      <p>
        <strong>Phone</strong>
        <br />
        {school.phone}
      </p>
      <p>
        <strong>Erasmus+ mobility</strong>
        <br />
        <a href={`mailto:${school.erasmus}`}>{school.erasmus}</a>
      </p>
      <p>
        <strong>Opening hours</strong>
        <br />
        {school.hours}
      </p>
    </aside>
  );
}
