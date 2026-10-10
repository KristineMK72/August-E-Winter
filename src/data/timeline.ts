export type TimelineImage = {
  src: string;
  alt: string;
  caption: string;
};

export type TimelineMap = {
  bbox: string;
  label: string;
  marker?: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  subtitle: string;
  story: string[];
  quote?: string;
  locations?: string[];
  facts?: string[];
  images?: TimelineImage[];
  map?: TimelineMap;
};

const wiki = (file: string, width = 900) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

export const timeline: TimelineItem[] = [
  {
    year: "1838",
    title: "A boy in Waldeck",
    subtitle: "Beginnings in Germany",
    story: [
      "August Edward Ludwig Winter was born on December 27, 1838, in Mengeringshausen, in the Province of Waldeck, Germany.",
      "The world he entered was shaped by faith, work, and order\u2014family life marked by hymns, Scripture, and the expectation that children would listen, learn, and carry themselves with discipline.",
    ],
    quote:
      "The boys loved to browse in the shop\u2026 When he had no work in his shop, he worked for farmers as a laborer.",
    locations: ["Mengeringshausen (Waldeck), Germany"],
    images: [
      {
        src: wiki("Waldeck_(Merian).jpg"),
        alt: "Historic engraving of Waldeck, 1655",
        caption: "Waldeck \u2014 Matth\u00e4us Merian engraving (1655)",
      },
      {
        src: wiki("Waldeck_um_1800_mit_Elsterberg.jpg"),
        alt: "Waldeck around 1800",
        caption: "Waldeck with Elsterberg, circa 1800",
      },
    ],
    map: {
      bbox: "8.85,51.15,9.15,51.35",
      label: "Waldeck region, Germany",
      marker: "51.25,9.00",
    },
  },
  {
    year: "1843",
    title: "Across the ocean",
    subtitle: "A six-week voyage to America",
    story: [
      "In 1843, the Winter family left Germany and crossed the Atlantic. The journey took about six weeks\u2014long enough for the ocean to feel endless, and for a child\u2019s memory to hold onto fragments of motion, fear, and wonder.",
      "They arrived in Baltimore, Maryland on June 8, 1843, then moved onward to Ohio, where a new life began with hard winters, simple homes, and the slow work of settling.",
    ],
    quote: "They landed in Baltimore, Maryland, after a six week trip on the ocean.",
    locations: ["Bremen, Germany", "Baltimore, Maryland", "East Rushville, Ohio"],
    images: [
      {
        src: wiki("Below_deck_on_the_emigrant_ship_St_Vincent_(1829)_in_1844.jpg"),
        alt: "Below deck on an emigrant ship, 1844",
        caption: "Below deck on an emigrant ship (Illustrated London News, 1844)",
      },
      {
        src: wiki("Sailing_Ship_of_1840_(imp-cswc-GB-237-CSWC47-LS16-015).jpg"),
        alt: "Sailing ship of 1840",
        caption: "A sailing ship of the 1840s \u2014 the kind of vessel that crossed the Atlantic",
      },
    ],
    map: {
      bbox: "-76.75,39.20,-76.45,39.40",
      label: "Baltimore harbor",
      marker: "39.29,-76.61",
    },
  },
  {
    year: "1844\u20131860",
    title: "Ohio years",
    subtitle: "Work, family, and faith without a Lutheran church",
    story: [
      "Ohio became home. The Winters lived first in East Rushville, then later bought land and built a steadier life. Work was constant\u2014shops, farms, repairs\u2014whatever was needed to keep food on the table and a roof over the family.",
      "Even without a local Lutheran church, faith stayed central. They traveled when they could, listened for the right preaching, and held to what they knew\u2014prayer, devotion, and the steady rhythm of a God-centered home.",
    ],
    quote: "He demanded obedience and no arguments were allowed. His word was Law.",
    locations: ["East Rushville, Ohio", "Fairfield County, Ohio"],
    images: [
      {
        src: wiki("1850_Mitchell_Map_of_Ohio_-_Geographicus_-_Ohio-m-50.jpg"),
        alt: "1850 map of Ohio",
        caption: "Ohio as mapped in 1850 \u2014 the Winters\u2019 new home state",
      },
    ],
    map: {
      bbox: "-82.55,39.75,-82.25,39.95",
      label: "East Rushville / Fairfield County, Ohio",
      marker: "39.85,-82.40",
    },
  },
  {
    year: "February 1861",
    title: "From Ohio to the Minnesota frontier",
    subtitle: "Train, stagecoach, ice roads, and a missed coach",
    story: [
      "Early in 1861, Winter was notified that he should serve as a missionary in Minnesota. He left his home in Ohio about the first of February and began the long winter journey west.",
      "He traveled via Chicago and Milwaukee to La Crosse \u2014 as far as the railroad had yet been built. From there he took the stagecoach. From La Crosse to Hastings he crossed the Mississippi River, which was covered with ice and nearly two feet of snow.",
      "At Hastings \u2014 then called 'Minnesota Landing' \u2014 the horses were changed and passengers stopped at the hotel. Winter believed he must have lingered too long, for when he returned, the coach had already left. Though he tried to catch it, the horses traveled faster than he could run. There was nothing left for him to do but to walk.",
      "After only a few miles, a farmer bound for Winona with a sled offered him a ride. He waited there until noon for the next stagecoach.",
      "From Hastings to St. Paul they traveled overland in bitter cold. The stage driver suggested greasing the runners so they would slip better, but it caused the vehicle to drop into ruts and bounce hard against the frozen road. Even so, they pushed onward as quickly as possible.",
      "Winter reached St. Paul on February 12. Minneapolis was his destination, and he hired a team for $1.50 to travel the remaining ten miles.",
    ],
    quote:
      "I must have been too slow, for on my return, I found, to my great dismay, that the coach had left\u2026 There was nothing left for me to do but to walk.",
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
    images: [
      {
        src: wiki("LaCrosseWI_1867.jpg"),
        alt: "La Crosse, Wisconsin, 1867",
        caption: "La Crosse, Wisconsin, 1867 \u2014 end of the railroad line",
      },
      {
        src: wiki("Concord_stagecoach_1869.png"),
        alt: "Concord stagecoach, c. 1869",
        caption: "Stagecoach travel after the rails ended",
      },
      {
        src: wiki("St_Paul_(1865).jpg"),
        alt: "St. Paul, Minnesota, 1865",
        caption: "St. Paul, 1865 \u2014 he arrived here February 12, 1861",
      },
      {
        src: wiki("Hennepin_Avenue_Bridge_1865.jpg"),
        alt: "Hennepin Avenue Bridge, Minneapolis, c. 1865",
        caption: "Minneapolis \u2014 Hennepin Avenue Bridge, c. 1865",
      },
      {
        src: wiki("Minneapolis_Suspension_Bridge.jpg"),
        alt: "Minneapolis Suspension Bridge",
        caption: "Minneapolis Suspension Bridge in the 1860s",
      },
      {
        src: wiki(
          "1862_Johnson_Map_of_Minnesota_and_Dakota_-_Geographicus_-_MNDK-johnson-1862.jpg"
        ),
        alt: "1862 map of Minnesota and Dakota",
        caption: "Minnesota frontier as mapped in 1862",
      },
    ],
    map: {
      bbox: "-93.35,44.85,-92.85,45.05",
      label: "St. Paul \u2192 Minneapolis, 1861",
      marker: "44.95,-93.10",
    },
  },
  {
    year: "1856\u20131859",
    title: "St. John\u2019s Prairie rises",
    subtitle: "A congregation forms on the frontier",
    story: [
      "As Lutheran families moved into southeastern Minnesota, the need for churches followed them. St. John\u2019s Prairie began to take shape\u2014first in scattered gatherings, then as a more formal congregation.",
      "Pastors traveled to serve the people, riding out through distance and hardship. The early church was built as much by endurance as by sermons: a frontier faith taking root where it was most needed.",
    ],
    quote:
      "In the early fifties several Lutheran families\u2026 settled in the Prairie Mount area.",
    locations: ["Sibley County, Minnesota", "St. John\u2019s Prairie"],
    images: [
      {
        src: wiki("WestSide-1869.jpg"),
        alt: "West side of Minneapolis area, 1869",
        caption: "Minnesota river towns in the late 1860s",
      },
    ],
    map: {
      bbox: "-94.35,44.40,-93.85,44.70",
      label: "Sibley County, Minnesota",
      marker: "44.55,-94.10",
    },
  },
  {
    year: "1861 (July 4)",
    title: "Ordained into ministry",
    subtitle: "The formal beginning of the missionary years",
    story: [
      "By 1861, the frontier church was growing, but pastors were few. Congregations were spread out, and the work demanded travel, stamina, and a willingness to live with uncertainty.",
      "On July 4, 1861, August Edward Winter was ordained\u2014marking the formal start of the work that would soon pull him onto long roads and into scattered frontier settlements.",
      "From this point forward, his calling wasn\u2019t only private devotion. It became public responsibility: sermons, sacraments, pastoral care, and the constant demand to go wherever people needed a shepherd.",
    ],
    quote:
      "There was a scarcity of Pastors\u2026 Father was to preach at one of their places regularly.",
    locations: ["Minnesota frontier settlements"],
    images: [
      {
        src: "/17C4EEED-3B01-413C-B86D-004BC65A7095.png",
        alt: "Portrait of August Edward Winter",
        caption: "August Edward Winter",
      },
    ],
  },
  {
    year: "1862 (May 18)",
    title: "Prairie Mount: installed as pastor",
    subtitle: "A congregation anchored west of Henderson",
    story: [
      "On May 18, 1862, Winter was installed as pastor at Prairie Mount\u2014one of the frontier congregations taking root among new Lutheran settlements.",
      "Even today the site remains sacred ground: the building has changed, but there is still a church at that location in the rural area west of Henderson, Minnesota.",
    ],
    locations: ["Prairie Mount (west of Henderson), Minnesota"],
    images: [
      {
        src: wiki(
          "Northern_Pacific_Railroad_exploring_party_departing_Minneapolis,_1869_(TRANSPORT_286).jpg"
        ),
        alt: "Railroad exploring party departing Minneapolis, 1869",
        caption: "Frontier travel from Minneapolis, 1869",
      },
    ],
    map: {
      bbox: "-94.00,44.45,-93.60,44.65",
      label: "Henderson / Prairie Mount area",
      marker: "44.53,-93.80",
    },
  },
  {
    year: "1862 (July 3)",
    title: "A marriage after three days",
    subtitle: "Watertown Synod \u2192 Milwaukee wedding \u2192 Minnesota roads",
    story: [
      "At a synod in Watertown, Wisconsin, fellow pastors urged Winter to marry. He replied plainly, \u201cI haven\u2019t found a girl yet.\u201d",
      "Pastor Ruff offered a solution: a \u2018nice sister-in-law\u2019 who would be an ideal wife. Winter agreed\u2014and wrote ahead to Johanna\u2019s father, August Posner, asking for consent and blessing if the meeting went well.",
      "Johanna Christina Posner (born April 6, 1842) was unsure at first. She prayed and resolved that if her father gave his consent and blessing, she would marry.",
      "They were married on July 3, 1862 after knowing each other only three days.",
      "She immediately went with him to Minnesota, where he was a traveling missionary\u2014stepping into the strain of frontier life during the Civil War era.",
    ],
    quote: "They were married the 3rd day of July, 1862.",
    locations: ["Watertown, Wisconsin", "Milwaukee, Wisconsin", "Minnesota"],
    map: {
      bbox: "-88.95,43.05,-88.65,43.25",
      label: "Watertown, Wisconsin",
      marker: "43.19,-88.72",
    },
  },
  {
    year: "1862 (August)",
    title: "Rumors, flight, and the road to safety",
    subtitle: "Henderson \u2192 Belle Plaine \u2192 Fort Ridgely",
    story: [
      "Barely had Winter returned from Milwaukee with his new wife when unrest escalated. In his autobiography, he described August 1862 as a time when attacks on settlers west and southwest of their settlement stirred fear across the region.",
      "When rumors spread that danger might reach them too, they fled to Henderson on a Tuesday forenoon. The threat didn\u2019t materialize, and they returned the next day.",
      "Soon after\u2014late on a Friday night (Winter remembered it as the \u20182rd of August\u2019)\u2014neighbors roused them again. Settlers formed a group: women and children were placed on wagons with bedding and a few belongings, while the men rode ponies so they could watch more closely.",
      "In Belle Plaine they were met by about 200 soldiers, who unloaded the wagons and took them for their own use as they hurried toward the fighting. Winter never again saw his pony.",
      "They remained sheltered in Belle Plaine until all was reported safe. Later, Winter traveled to Fort Ridgely after hearing of a horse left there unclaimed, but it was not his. Not long after, the government provided him another good horse, which he used on later journeys.",
    ],
    locations: [
      "Henderson, Minnesota",
      "Belle Plaine, Minnesota",
      "Fort Ridgely, Minnesota",
    ],
    images: [
      {
        src: wiki("Fort_Ridgely.png"),
        alt: "Fort Ridgely",
        caption: "Fort Ridgely \u2014 destination after the flight",
      },
    ],
    map: {
      bbox: "-94.85,44.15,-94.45,44.45",
      label: "Fort Ridgely region",
      marker: "44.30,-94.65",
    },
  },
  {
    year: "1862\u20131865",
    title: "Missionary years",
    subtitle: "Long roads, scattered congregations",
    story: [
      "These were the years of the journey: serving scattered Lutheran congregations, traveling long distances, preaching wherever people gathered\u2014sometimes in churches, sometimes in homes, sometimes wherever there was shelter.",
      "The work was not a single destination, but a chain of stops: sermons, prayers, pastoral care, and the constant question of who needed a visit next\u2014and how far the next road would go.",
    ],
    quote:
      "We drove our fancy covered wagon to church, otherwise we walked then 3 miles to town.",
    locations: ["Minnesota", "rural congregations (multiple)"],
    images: [
      {
        src: wiki(
          "1862_Johnson_Map_of_Minnesota_and_Dakota_-_Geographicus_-_MNDK-johnson-1862.jpg"
        ),
        alt: "1862 Minnesota map",
        caption: "The Minnesota frontier during the missionary years",
      },
      {
        src: wiki("Hennepin_Avenue_Bridge_1865.jpg"),
        alt: "Hennepin Avenue Bridge c. 1865",
        caption: "Minneapolis in the 1860s",
      },
      {
        src: wiki("Sawmills.jpg"),
        alt: "Sawmills on the Mississippi, 1860s",
        caption: "Mississippi sawmills \u2014 the industrial frontier",
      },
    ],
    map: {
      bbox: "-96.5,43.5,-91.5,47.5",
      label: "Minnesota territory of service",
      marker: "45.0,-94.0",
    },
  },
  {
    year: "Late 1800s",
    title: "Hard living, steady faith",
    subtitle: "Homesteads, wells, crops, and endurance",
    story: [
      "Life on the land demanded ingenuity. Wells had to be covered. Water had to be strained. Gardens and orchards were survival as much as they were tradition.",
      "It was a life built on small victories: food preserved, animals tended, prayers spoken, and the simple decision\u2014over and over again\u2014not to quit.",
    ],
    quote: "We had no nice [water], so only warm water to drink \u2014 but it was wet!",
    locations: ["Midwest homesteads"],
    images: [
      {
        src: "/ACCD8F2A-E9C5-40BD-9955-ED7CA61BD34E.png",
        alt: "Four generations of the Winter family",
        caption: "Four generations of the Winter family",
      },
    ],
  },
  {
    year: "1900\u20131912",
    title: "Looking back",
    subtitle: "Autobiographical memory and legacy",
    story: [
      "As time passed, the stories became memory\u2014and memory became testimony. The family voice preserves what official records can\u2019t: what it felt like, what it cost, and what carried them through.",
      "This is where the timeline becomes more than dates. It becomes a record of character: devotion, economy, service, and the quiet weight of responsibility.",
    ],
    quote: "As long as I can remember, we also had daily devotions at the table\u2026",
    locations: ["Family records", "Midwest"],
  },
  {
    year: "1927",
    title: "A life completed",
    subtitle: "Passing in peace",
    story: [
      "On December 24, 1927, August Edward Winter died\u2014after decades shaped by mission work, frontier life, and the steady rhythm of faith and service.",
      "His story does not end with a date. It continues in the congregations touched by the work, and in the family who still remembers enough to preserve it.",
    ],
    quote:
      "He never complained\u2026 a week before he died, he suffered a severe heart attack\u2026 and a week later on Christmas Eve, December 24, 1927, God took him home in his sleep.",
    locations: ["Minnesota", "Midwest"],
    images: [
      {
        src: "/17C4EEED-3B01-413C-B86D-004BC65A7095.png",
        alt: "Portrait of August Edward Winter",
        caption: "August Edward Winter, remembered",
      },
    ],
  },
];
