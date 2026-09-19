'use client';

import dynamic from "next/dynamic";

// Laad het Elfsight-platform script client-side, pas nádat de pagina
// in de browser staat — voorkomt SSR-conflicten en blokkeert de render niet.
const ElfsightPlatform = dynamic(
  () =>
    Promise.resolve(() => (
      <div
        className="elfsight-app-2269ca8e-7957-4fa2-960d-adeb9a5f2b2e"
        data-elfsight-app-lazy
      />
    )),
  { ssr: false }
);

export default function ElfsightReviews() {
  return (
    <div className="mx-auto w-full max-w-4xl">
      {/* Elfsight platform.js — asynchroon laden na hydration */}
      <script
        src="https://static.elfsight.com/platform/platform.js"
        async
      />
      <ElfsightPlatform />
    </div>
  );
}
