"use client";

import { useEffect, useState } from "react";

type HealthResponse = {
  status: string;
  message: string;
};

export default function Home() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/health`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        return response.json();
      })
      .then((data: HealthResponse) => {
        setHealth(data);
      })
      .catch((err: Error) => {
        setError(err.message);
      });
  }, []);

  return (
    <main>
      <h1>Chat Application</h1>

      <h2>Backend Status</h2>

      {health && (
        <p>
          {health.status}: {health.message}
        </p>
      )}

      {error && <p>Backend error: {error}</p>}
    </main>
  );
}