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

  // ✅ NEW ENTRY INSERTED HERE
  {
    year: "February 1861",
    title: "From Ohio to the Minnesota frontier",
    subtitle: "Train, stagecoach, ice roads, and a missed coach",
    story: [
      "Early in 1861, Winter was notified that he should serve as a missionary in Minnesota. He left his home in Ohio about the first of February and began the long winter journey west.",
      "He traveled via Chicago and Milwaukee to La Crosse — as far as the railroad had yet been built. From there he took the stagecoach. From La Crosse to Hastings he crossed the Mississippi River, which was covered with ice and nearly two feet of snow.",
      "At Hastings — then called 'Minnesota Landing' — the horses were changed and passengers stopped at the hotel. Winter believed he must have lingered too long, for when he returned, the coach had already left. Though he tried to catch it, the horses traveled faster than he could run. There was nothing left for him to do but to walk.",
      "After only a few miles, a farmer bound for Winona with a sled offered him a ride. He waited there until noon for the next stagecoach.",
      "From Hastings to St. Paul they traveled overland in bitter cold. The stage driver suggested greasing the runners so they would slip better, but it caused the vehicle to drop into ruts and bounce hard against the frozen road. Even so, they pushed onward as quickly as possible.",
      "Winter reached St. Paul on February 12. Minneapolis was his destination, and he hired a team for $1.50 to travel the remaining ten miles.",
    ],
    quote:
      "I must have been too slow, for on my return, I found, to my great dismay, that the coach had left… There was nothing left for me to do but to walk.",
    facts: [
      "Left Ohio: early February 1861",
      "Reached St. Paul: February 12, 1861",
      "Final leg to Minneapolis: hired team for $1.50",
    ],
    locations: [
      "Ohio",
      "Chicago, Illinois",
      "Milwaukee, Wisconsin",
      "La Crosse, Wisconsin",
      "Hastings (Minnesota Landing), Minnesota",
      "St. Paul, Minnesota",
      "Minneapolis, Minnesota",
    ],
    sources: ["A.E. Winter autobiography (Minnesota experiences, 1861–1865)"],
  },

  {
    year: "1856–1859",
    title: "St. John’s Prairie rises",
    subtitle: "A congregation forms on the frontier",
    story: [
      "As Lutheran families moved into southeastern Minnesota, the need for churches followed them. St. John’s Prairie began to take shape—first in scattered gatherings, then as a more formal congregation.",
      "Pastors traveled to serve the people, riding out through distance and hardship. The early church was built as much by endurance as by sermons: a frontier faith taking root where it was most needed.",
    ],
    quote:
      "In the early fifties several Lutheran families… settled in the Prairie Mount area.",
    locations: ["Sibley County, Minnesota", "St. John’s Prairie"],
  },

  {
    year: "1861 (July 4)",
    title: "Ordained into ministry",
    subtitle: "The formal beginning of the missionary years",
    story: [
      "By 1861, the frontier church was growing, but pastors were few. Congregations were spread out, and the work demanded travel, stamina, and a willingness to live with uncertainty.",
      "On July 4, 1861, August Edward Winter was ordained—marking the formal start of the work that would soon pull him onto long roads and into scattered frontier settlements.",
      "From this point forward, his calling wasn’t only private devotion. It became public responsibility: sermons, sacraments, pastoral care, and the constant demand to go wherever people needed a shepherd.",
    ],
    quote:
      "There was a scarcity of Pastors… Father was to preach at one of their places regularly.",
    locations: ["Minnesota frontier settlements"],
  },

  {
    year: "1862 (May 18)",
    title: "Prairie Mount: installed as pastor",
    subtitle: "A congregation anchored west of Henderson",
    story: [
      "On May 18, 1862, Winter was installed as pastor at Prairie Mount—one of the frontier congregations taking root among new Lutheran settlements.",
      "Even today the site remains sacred ground: the building has changed, but there is still a church at that location in the rural area west of Henderson, Minnesota.",
    ],
    locations: ["Prairie Mount (west of Henderson), Minnesota"],
  },

  {
    year: "1862 (July 3)",
    title: "A marriage after three days",
    subtitle: "Watertown Synod → Milwaukee wedding → Minnesota roads",
    story: [
      "At a synod in Watertown, Wisconsin, fellow pastors urged Winter to marry. He replied plainly, “I haven’t found a girl yet.”",
      "Pastor Ruff offered a solution: a ‘nice sister-in-law’ who would be an ideal wife. Winter agreed—and wrote ahead to Johanna’s father, August Posner, asking for consent and blessing if the meeting went well.",
      "Johanna Christina Posner (born April 6, 1842) was unsure at first. She prayed and resolved that if her father gave his consent and blessing, she would marry.",
      "They were married on July 3, 1862 after knowing each other only three days.",
      "She immediately went with him to Minnesota, where he was a traveling missionary—stepping into the strain of frontier life during the Civil War era.",
    ],
    quote: "They were married the 3rd day of July, 1862.",
    locations: ["Watertown, Wisconsin", "Milwaukee, Wisconsin", "Minnesota"],
  },

  {
    year: "1862 (August)",
    title: "Rumors, flight, and the road to safety",
    subtitle: "Henderson → Belle Plaine → Fort Ridgely",
    story: [
      "Barely had Winter returned from Milwaukee with his new wife when unrest escalated. In his autobiography, he described August 1862 as a time when attacks on settlers west and southwest of their settlement stirred fear across the region.",
      "When rumors spread that danger might reach them too, they fled to Henderson on a Tuesday forenoon. The threat didn’t materialize, and they returned the next day.",
      "Soon after—late on a Friday night (Winter remembered it as the ‘2rd of August’)—neighbors roused them again. Settlers formed a group: women and children were placed on wagons with bedding and a few belongings, while the men rode ponies so they could watch more closely.",
      "In Belle Plaine they were met by about 200 soldiers, who unloaded the wagons and took them for their own use as they hurried toward the fighting. Winter never again saw his pony.",
      "They remained sheltered in Belle Plaine until all was reported safe. Later, Winter traveled to Fort Ridgely after hearing of a horse left there unclaimed, but it was not his. Not long after, the government provided him another good horse, which he used on later journeys.",
    ],
    locations: ["Henderson, Minnesota", "Belle Plaine, Minnesota", "Fort Ridgely, Minnesota"],
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
