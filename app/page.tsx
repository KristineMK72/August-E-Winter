const highlights = [
  { title: "Timeframe", text: "1861–1865" },
  { title: "Primary text", text: "Winter’s own account (published 1899)" },
  { title: "Family notes", text: "Background by Wilhelm Winter" },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <section className="rounded-3xl border border-black/10 bg-white/50 p-10">
        <p className="text-xs tracking-[0.25em] uppercase opacity-70">
          A reconstructed narrative
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          August Edward Winter’s Missionary Journey
        </h1>

        <p className="mt-4 max-w-2xl text-base opacity-80">
          A readable timeline and reference hub based on Winter’s published account (1899),
          with family background compiled by Wilhelm Winter.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/timeline"
            className="rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-[#fbf6ea] hover:opacity-90 transition"
          >
            Read the Timeline
          </a>
          <a
            href="/sources"
            className="rounded-full border border-black/15 px-6 py-3 text-sm hover:bg-black/5 transition"
          >
            View Sources
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-3">
        {highlights.map((h) => (
          <div
            key={h.title}
            className="rounded-2xl border border-black/10 bg-white/40 p-6"
          >
            <div className="text-xs tracking-[0.25em] uppercase opacity-60">
              {h.title}
            </div>
            <div className="mt-2 font-medium">{h.text}</div>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">What you’ll find here</h2>
        <ul className="mt-4 space-y-2 opacity-80 list-disc pl-5">
          <li>A chronological timeline of the journey (1861–1865)</li>
          <li>Key locations and events (expandable)</li>
          <li>A clean citations + sources page</li>
        </ul>
      </section>
    </main>
  );
}
