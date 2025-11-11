import { useEffect, useState } from "react";
import { subscribe } from "../utils/toast";

export default function Toast() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const unsub = subscribe((msg) => {
      setMessage(msg);
      setTimeout(() => setMessage(null), 4000); // auto-hide after 4s
    });
    return unsub;
  }, []);

  if (!message) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        background: "#f44336",
        color: "white",
        padding: "1em 1.5em",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      }}
    >
      {message}
    </div>
  );
}
