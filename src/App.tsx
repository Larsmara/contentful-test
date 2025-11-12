import { useEffect, useState } from "react";
import { Loader } from "./components/Loader";
import { getContentfulData } from "./api";
import type { FAQ } from "./types";
import { Accordion } from "./components/Accordion/Accordion";
import "./App.css";

export function App() {
  const [response, setResponse] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContentfulData()
      .then((data) => setResponse(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="faq-main">
      {response.map((faq) => (
        <section key={faq.id} className="mb-8">
          <h2 className="faq-title">{faq.title}</h2>
          {faq.items.map((item) => (
            <Accordion key={item.id} title={item.name} text={item.text} />
          ))}
        </section>
      ))}
    </main>
  );
}
