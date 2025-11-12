import { useEffect, useState } from "react";
import { subscribe } from "../../utils/toast";
import "./Toast.css";

export default function Toast() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const unsub = subscribe((msg) => {
      setMessage(msg);
      setTimeout(() => setMessage(null), 4000);
    });
    return unsub;
  }, []);

  if (!message) return null;

  return <div className="toast">{message}</div>;
}
