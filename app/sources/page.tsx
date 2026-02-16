export default function SourcesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <h1 className="text-3xl font-semibold">Sources</h1>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white/40 p-6">
        <h2 className="text-lg font-medium">Primary</h2>
        <ul className="mt-3 list-disc pl-5 opacity-80 space-y-2">
          <li>August Edward Winter — published account (1899).</li>
        </ul>
      </div>

      <div className="mt-4 rounded-2xl border border-black/10 bg-white/40 p-6">
        <h2 className="text-lg font-medium">Background</h2>
        <ul className="mt-3 list-disc pl-5 opacity-80 space-y-2">
          <li>Family background compiled by Wilhelm Winter.</li>
        </ul>
      </div>
    </main>
  );
}
