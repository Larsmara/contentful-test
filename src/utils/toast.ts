type Listener = (message: string) => void;

let listeners: Listener[] = [];

export function showToast(message: string) {
  listeners.forEach((l) => l(message));
}

export function subscribe(listener: Listener) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}
