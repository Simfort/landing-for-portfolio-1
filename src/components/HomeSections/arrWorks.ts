import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";

export type Works = { title: string; desc: string; img: string };

export const arrWorks: Works[] = [
  {
    title: "Sheepify States",
    desc: "Designed some empty state screens in kawaii style for the popular sheepify app",
    img: work1,
  },
  {
    title: "HoneyBunny",
    desc: "A colorful dashboard to manage your fictional projects and team, all in a single place.",
    img: work2,
  },
  {
    title: "Memrise Redesign",
    desc: "I redesigned the popular language learning app memrise in kawaii style to make it more cute.",
    img: work3,
  },
];
