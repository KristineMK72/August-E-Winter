const timeline = [
  { year: "1861", title: "Departure / early journey", note: "Add details here." },
  { year: "1862", title: "Major leg of the mission", note: "Add details here." },
  { year: "1863", title: "Key events", note: "Add details here." },
  { year: "1864", title: "Later journey", note: "Add details here." },
  { year: "1865", title: "Return / conclusion", note: "Add details here." },
];

export default function TimelinePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <h1 className="text-3xl font-semibold">Timeline (1861–1865)</h1>
      <p className="mt-3 max-w-2xl opacity-80">
        A chronological outline based on the published 1899 account.
      </p>

      <div className="mt-10 space-y-4">
        {timeline.map((t) => (
          <div key={t.year} className="rounded-2xl border border-black/10 bg-white/40 p-6">
            <div className="text-xs tracking-[0.25em] uppercase opacity-60">{t.year}</div>
            <div className="mt-2 text-lg font-medium">{t.title}</div>
            <div className="mt-2 opacity-80">{t.note}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
