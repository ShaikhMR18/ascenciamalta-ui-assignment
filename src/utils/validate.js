export function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (values.message.trim().length < 10) errors.message = "Write at least 10 characters.";

  return errors;
}
