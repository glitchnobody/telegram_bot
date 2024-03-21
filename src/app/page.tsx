"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [isValid, setValid] = useState(false);

  useEffect(() => {
    window.Telegram.WebApp.ready() && setValid(true);
  }, []);

  if (!isValid) {
    return null;
  }

  return (
    <main className="">
      sdas
      <div>ssd</div>
    </main>
  );
}
