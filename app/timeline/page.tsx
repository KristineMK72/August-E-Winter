const timeline = [
  {
    year: "1861",
    title: "The journey begins",
    note:
      "Winter’s account opens as he sets out into a world shaped by distance, weather, and uncertainty—traveling by the routes available in the era, depending on communities and church networks along the way.",
  },
  {
    year: "1862",
    title: "Settling into the work",
    note:
      "The mission becomes routine and demanding: visits, services, and long stretches of travel. The story becomes less about one departure and more about endurance—showing up, again and again, wherever he is needed.",
  },
  {
    year: "1863",
    title: "Hardship and persistence",
    note:
      "This middle stretch carries the weight of the journey: delays, difficult conditions, and the emotional toll of sustained responsibility. The narrative reads like a steady record of perseverance.",
  },
  {
    year: "1864",
    title: "Later seasons of the mission",
    note:
      "As time passes, the work deepens. Relationships, congregations, and responsibilities continue to grow. The story becomes increasingly reflective—what it meant to serve, and what it cost.",
  },
  {
    year: "1865",
    title: "Closing chapter and return",
    note:
      "By the end of the period, the travel and labor come to a turning point. The account begins to shift toward conclusion—carrying forward the memory of where he went, what he witnessed, and what remained behind.",
  },
];

export default function TimelinePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <h1 className="text-3xl font-semibold">Timeline (1861–1865)</h1>
      <p className="mt-3 max-w-2xl opacity-80">
        A narrative outline of August Edward Winter’s missionary journey, based
        on his published account and related family records.
      </p>

      <div className="mt-10 space-y-4">
        {timeline.map((t) => (
          <section
            key={t.year}
            className="rounded-2xl border border-black/10 bg-white/40 p-6"
          >
            <div className="text-xs tracking-[0.25em] uppercase opacity-60">
              {t.year}
            </div>
            <h2 className="mt-2 text-lg font-medium">{t.title}</h2>
            <p className="mt-2 opacity-80 leading-relaxed">{t.note}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
