export type Person = {
  name: string;
  role: string;
  years?: string;
  blurb: string;
  relation: "family" | "ministry" | "legacy";
};

export const people: Person[] = [
  {
    name: "Wilhelm Winter",
    role: "Father",
    years: "Germany \u2192 America",
    blurb:
      "Father of August Edward Ludwig Winter. With Henrietta Meissner he raised the family in Waldeck before the 1843 voyage that brought them to Baltimore and then Ohio.",
    relation: "family",
  },
  {
    name: "Henrietta Meissner Winter",
    role: "Mother",
    years: "Germany \u2192 America",
    blurb:
      "Mother of August. The Meissner–Winter household carried Lutheran faith, work discipline, and the courage to cross an ocean with young children.",
    relation: "family",
  },
  {
    name: "Johanna Christiana Posner Winter",
    role: "Wife",
    years: "1842 \u2013 ? \u00b7 Married July 3, 1862",
    blurb:
      "Met August at a synod in Watertown, Wisconsin through Pastor Ruff (her brother-in-law\u2019s connection). They married after knowing each other only three days. She went with him at once to the Minnesota frontier as a missionary\u2019s wife during the Civil War and the Dakota Conflict.",
    relation: "family",
  },
  {
    name: "August Posner",
    role: "Father-in-law",
    blurb:
      "Johanna\u2019s father. August wrote ahead asking for his consent and blessing before the wedding\u2014Johanna resolved that if her father approved, she would marry.",
    relation: "family",
  },
  {
    name: "Pastor Ruff",
    role: "Fellow pastor \u00b7 Matchmaker",
    blurb:
      "At the Watertown synod, when Winter said he hadn\u2019t found a wife, Pastor Ruff offered a practical answer: a \u2018nice sister-in-law\u2019\u2014Johanna Posner. The introduction shaped the rest of Winter\u2019s life on the frontier.",
    relation: "ministry",
  },
  {
    name: "Daniel Winter",
    role: "Son",
    years: "1866 \u2013 1948",
    blurb:
      "One of the four generations preserved in the family photograph\u2014carrying the Winter name and story forward after the missionary years.",
    relation: "legacy",
  },
  {
    name: "Albert Winter",
    role: "Grandson",
    years: "1893 \u2013 1968",
    blurb:
      "Third generation in the family line shown with August, Daniel, and Lillian\u2014living proof that the journey did not end in 1927.",
    relation: "legacy",
  },
  {
    name: "Lillian Rose Louise Winter",
    role: "Great-granddaughter",
    years: "1918 \u2013 2005",
    blurb:
      "Fourth generation in the family portrait. Through her and her kin, the autobiography and oral memory of August\u2019s missionary roads were kept alive.",
    relation: "legacy",
  },
];
