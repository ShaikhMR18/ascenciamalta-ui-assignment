import { useState } from "react";
import { validate } from "../utils/validate";

const emptyForm = { name: "", email: "", phone: "", message: "" };

export default function useContactForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length === 0) {
      setSent(true);
      setValues(emptyForm);
    }
  };

  const reset = () => setSent(false);

  return { values, errors, sent, onChange, onSubmit, reset };
}
