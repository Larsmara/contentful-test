import "./Accordion.css";

interface Props {
  name?: string;
  title: string;
  text: string;
}

export function Accordion({ name = "details", title, text }: Props) {
  return (
    <details name={name} className="details-main">
      <summary>{title}</summary>
      <div>{text}</div>
    </details>
  );
}
