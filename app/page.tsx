import Image from "next/image";

import augustPortrait from "./public/17C4EEED-3B01-413C-B86D-004BC65A7095.png";
import winterFamily from "./public/ACCD8F2A-E9C5-40BD-9955-ED7CA61BD34E.png";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      {/* HERO */}
      <section className="text-center">
        <div className="mx-auto w-64 overflow-hidden rounded-full border border-black/20 shadow-sm">
          <Image
            src={augustPortrait}
            alt="August Edward Winter"
            priority
            className="h-auto w-full"
          />
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight">
          August Edward Winter
        </h1>

        <p className="mt-3 opacity-80">Lutheran Missionary • 1838–1927</p>

        <p className="mt-6 mx-auto max-w-2xl text-base opacity-80">
          A narrative reconstruction of Winter’s missionary journey from 1861–1865,
          based on his published account and family records.
        </p>
      </section>

      {/* FAMILY PHOTO */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold text-center">Family Legacy</h2>

        <div className="mt-8 mx-auto max-w-md rounded-2xl border border-black/20 bg-white/40 p-3 shadow-sm">
          <Image
            src={winterFamily}
            alt="Four generations of the Winter family"
            className="h-auto w-full rounded-xl"
          />
        </div>

        <p className="mt-6 text-center mx-auto max-w-2xl opacity-80">
          Four generations of the Winter family: AE Winter (1838–1927), Daniel
          Winter (1866–1948), Albert Winter (1893–1968), and Lillian Rose Louise
          Winter (1918–2005).
        </p>
      </section>
    </main>
  );
}
