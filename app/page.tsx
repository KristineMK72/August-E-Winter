import Image from "next/image";

const augustPortraitSrc = "/17C4EEED-3B01-413C-B86D-004BC65A7095.png";
const winterFamilySrc = "/ACCD8F2A-E9C5-40BD-9955-ED7CA61BD34E.png";

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section style={{ textAlign: "center", paddingTop: 18 }}>
        <div
          style={{
            width: 260,
            height: 260,
            margin: "0 auto",
            borderRadius: 9999,
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,.18)",
            boxShadow: "0 10px 25px rgba(0,0,0,.06)",
            background: "rgba(255,255,255,.3)",
          }}
        >
          <Image
            src={augustPortraitSrc}
            alt="August Edward Winter"
            width={520}
            height={520}
            priority
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <h1 style={{ marginTop: 18, marginBottom: 6, fontSize: 40, lineHeight: 1.1 }}>
          August Edward Winter
        </h1>

        <div style={{ opacity: 0.8 }}>Lutheran Missionary • 1838–1927</div>

        <p style={{ maxWidth: 700, margin: "18px auto 0", opacity: 0.85 }}>
          A narrative reconstruction of Winter’s missionary journey from 1861–1865,
          based on his published account and family records.
        </p>
      </section>

      {/* FAMILY PHOTO */}
      <section style={{ marginTop: 54 }}>
        <h2 style={{ textAlign: "center", fontSize: 26, marginBottom: 14 }}>
          Family Legacy
        </h2>

        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            borderRadius: 18,
            border: "1px solid rgba(0,0,0,.16)",
            background: "rgba(255,255,255,.55)",
            padding: 10,
            boxShadow: "0 10px 25px rgba(0,0,0,.06)",
          }}
        >
          <Image
            src={winterFamilySrc}
            alt="Four generations of the Winter family"
            width={1400}
            height={900}
            style={{ width: "100%", height: "auto", borderRadius: 12 }}
          />
        </div>

        <p style={{ maxWidth: 760, margin: "14px auto 0", textAlign: "center", opacity: 0.85 }}>
          Four generations of the Winter family: AE Winter (1838–1927), Daniel Winter (1866–1948),
          Albert Winter (1893–1968), and Lillian Rose Louise Winter (1918–2005).
        </p>
      </section>
    </div>
  );
}
