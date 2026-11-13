import Button from "../ui/Button";
import useContactForm from "../../hooks/useContactForm";

const fields = [
  { name: "name", label: "Full name", type: "text" },
  { name: "email", label: "Your email", type: "email" },
  { name: "phone", label: "Your phone (optional)", type: "tel" },
  { name: "message", label: "Message", type: "textarea" },
];

export default function ContactForm() {
  const { values, errors, sent, onChange, onSubmit, reset } = useContactForm();

  if (sent) {
    return (
      <div className="thanks" role="status">
        <h2>Thank you</h2>
        <p>Your message was received. We will reply by email soon.</p>
        <Button variant="ghost" onClick={reset}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="form">
      {fields.map((field) => (
        <div key={field.name} className="field">
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              rows="5"
              value={values[field.name]}
              onChange={onChange}
              aria-invalid={!!errors[field.name]}
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              value={values[field.name]}
              onChange={onChange}
              aria-invalid={!!errors[field.name]}
            />
          )}
          {errors[field.name] && <p className="error">{errors[field.name]}</p>}
        </div>
      ))}
      <Button type="submit">Send message</Button>
    </form>
  );
}
