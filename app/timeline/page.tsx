const timeline = [
  {
    year: "1838",
    title: "A boy in Waldeck",
    subtitle: "Beginnings in Germany",
    story: [
      "August Edward Ludwig Winter was born on December 27, 1838, in Mengeringshausen, in the Province of Waldeck, Germany.",
      "The world he entered was shaped by faith, work, and order—family life marked by hymns, Scripture, and the expectation that children would listen, learn, and carry themselves with discipline.",
    ],
    quote:
      "The boys loved to browse in the shop… When he had no work in his shop, he worked for farmers as a laborer.",
    locations: ["Mengeringshausen (Waldeck), Germany"],
  },

  {
    year: "1843",
    title: "Across the ocean",
    subtitle: "A six-week voyage to America",
    story: [
      "In 1843, the Winter family left Germany and crossed the Atlantic. The journey took about six weeks—long enough for the ocean to feel endless, and for a child’s memory to hold onto fragments of motion, fear, and wonder.",
      "They arrived in Baltimore, Maryland on June 8, 1843, then moved onward to Ohio, where a new life began with hard winters, simple homes, and the slow work of settling.",
    ],
    quote: "They landed in Baltimore, Maryland, after a six week trip on the ocean.",
    locations: ["Bremen, Germany", "Baltimore, Maryland", "East Rushville, Ohio"],
  },

  {
    year: "1844–1860",
    title: "Ohio years",
    subtitle: "Work, family, and faith without a Lutheran church",
    story: [
      "Ohio became home. The Winters lived first in East Rushville, then later bought land and built a steadier life. Work was constant—shops, farms, repairs—whatever was needed to keep food on the table and a roof over the family.",
      "Even without a local Lutheran church, faith stayed central. They traveled when they could, listened for the right preaching, and held to what they knew—prayer, devotion, and the steady rhythm of a God-centered home.",
    ],
    quote: "He demanded obedience and no arguments were allowed. His word was Law.",
    locations: ["East Rushville, Ohio", "Fairfield County, Ohio"],
  },

  {
    year: "1856–1859",
    title: "St. John’s Prairie rises",
    subtitle: "A congregation forms on the frontier",
    story: [
      "As Lutheran families moved into southeastern Minnesota, the need for churches followed them. St. John’s Prairie began to take shape—first in scattered gatherings, then as a more formal congregation.",
      "Pastors traveled to serve the people, riding out through distance and hardship. The early church was built as much by endurance as by sermons: a frontier faith taking root where it was most needed.",
    ],
    quote: "In the early fifties several Lutheran families… settled in the Prairie Mount area.",
    locations: ["Sibley County, Minnesota", "St. John’s Prairie"],
  },

  {
    year: "1861",
    title: "The call to serve",
    subtitle: "Mission work becomes a life",
    story: [
      "By 1861, the frontier church was growing, but pastors were few. Congregations were spread out, and the work demanded travel, stamina, and a willingness to live with uncertainty.",
      "This is the doorway into the missionary years—where faith stops being only private devotion and becomes a road: miles, weather, risk, and responsibility.",
    ],
    quote:
      "There was a scarcity of Pastors… Father was to preach at one of their places regularly.",
    locations: ["Minnesota frontier settlements"],
  },

  {
    year: "1862",
    title: "A marriage on the move",
    subtitle: "Love, partnership, and danger nearby",
    story: [
      "On July 3, 1862, August married Johanna Christina Posner. Their marriage wasn’t a quiet beginning—it was a beginning that unfolded alongside frontier instability and the pressure of constant need.",
      "They traveled into Minnesota mission territory at a time when the region was tense. Stories passed through communities—warnings, rumors, fear—and families did what they could to keep going without giving in to panic.",
    ],
    quote: "They were married the 3rd day of July, 1862.",
    locations: ["Minnesota", "Wisconsin", "Waldeck (family roots)"],
  },

  {
    year: "1862–1865",
    title: "Missionary years",
    subtitle: "Long roads, scattered congregations",
    story: [
      "These were the years of the journey: serving scattered Lutheran congregations, traveling long distances, preaching wherever people gathered—sometimes in churches, sometimes in homes, sometimes wherever there was shelter.",
      "The work was not a single destination, but a chain of stops: sermons, prayers, pastoral care, and the constant question of who needed a visit next—and how far the next road would go.",
    ],
    quote:
      "We drove our fancy covered wagon to church, otherwise we walked then 3 miles to town.",
    locations: ["Minnesota", "rural congregations (multiple)"],
  },

  {
    year: "Late 1800s",
    title: "Hard living, steady faith",
    subtitle: "Homesteads, wells, crops, and endurance",
    story: [
      "Life on the land demanded ingenuity. Wells had to be covered. Water had to be strained. Gardens and orchards were survival as much as they were tradition.",
      "It was a life built on small victories: food preserved, animals tended, prayers spoken, and the simple decision—over and over again—not to quit.",
    ],
    quote: "We had no nice [water], so only warm water to drink — but it was wet!",
    locations: ["Midwest homesteads"],
  },

  {
    year: "1900–1912",
    title: "Looking back",
    subtitle: "Autobiographical memory and legacy",
    story: [
      "As time passed, the stories became memory—and memory became testimony. The family voice preserves what official records can’t: what it felt like, what it cost, and what carried them through.",
      "This is where the timeline becomes more than dates. It becomes a record of character: devotion, economy, service, and the quiet weight of responsibility.",
    ],
    quote: "As long as I can remember, we also had daily devotions at the table…",
    locations: ["Family records", "Midwest"],
  },

  {
    year: "1927",
    title: "A life completed",
    subtitle: "Passing in peace",
    story: [
      "On December 24, 1927, August Edward Winter died—after decades shaped by mission work, frontier life, and the steady rhythm of faith and service.",
      "His story does not end with a date. It continues in the congregations touched by the work, and in the family who still remembers enough to preserve it.",
    ],
    quote:
      "He never complained… a week before he died, he suffered a severe heart attack… and a week later on Christmas Eve, December 24, 1927, God took him home in his sleep.",
    locations: ["Minnesota", "Midwest"],
  },
];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/50 px-3 py-1 text-xs">
      {children}
    </span>
  );
}

export default function TimelinePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <h1 className="text-3xl font-semibold">Timeline</h1>
      <p className="mt-3 max-w-2xl opacity-80">
        A narrative timeline drawn from Winter’s account and family records.
      </p>

      <div className="mt-10 space-y-8">
        {timeline.map((t) => (
          <article
            key={t.year}
            className="rounded-3xl border border-black/10 bg-white/40 p-7 shadow-sm"
          >
            <div className="text-xs tracking-[0.25em] uppercase opacity-60">
              {t.year}
            </div>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              {t.title}
            </h2>

            <p className="mt-2 opacity-75">{t.subtitle}</p>

            <div className="mt-6 space-y-4 leading-relaxed">
              {t.story.map((p, idx) => (
                <p key={idx} className="opacity-85">
                  {p}
                </p>
              ))}
            </div>

            {t.quote && (
              <blockquote className="mt-6 rounded-2xl border border-black/10 bg-[#fbf6ea] p-5 italic opacity-80">
                “{t.quote}”
              </blockquote>
            )}

            {t.locations?.length ? (
              <div className="mt-6">
                <div className="text-xs tracking-[0.25em] uppercase opacity-60">
                  Locations
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {t.locations.map((loc) => (
                    <Chip key={loc}>{loc}</Chip>
                  ))}
                </div>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </main>
  );
}
