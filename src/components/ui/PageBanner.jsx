export default function PageBanner({ title, text }) {
  return (
    <div className="banner">
      <div className="container">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}
