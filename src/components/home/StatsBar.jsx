import Section from "../ui/Section";
import { stats } from "../../data";

export default function StatsBar() {
  return (
    <Section tone="tint">
      <ul className="stats">
        {stats.map((item) => (
          <li key={item.value}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
