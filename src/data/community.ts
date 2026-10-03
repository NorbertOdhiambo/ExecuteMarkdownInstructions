import community01 from "../assets/community/community-01.jpeg";
import community02 from "../assets/community/community-02.jpeg";
import community03 from "../assets/community/community-03.jpeg";
import community04 from "../assets/community/community-04.jpeg";
import community05 from "../assets/community/community-05.jpeg";
import community06 from "../assets/community/community-06.jpeg";
import community07 from "../assets/community/community-07.jpeg";
import community08 from "../assets/community/community-08.jpeg";

export const communityImages = [
  {
    src: community01,
    alt: "An adult standing outdoors with three schoolchildren",
    theme: "care",
  },
  {
    src: community02,
    alt: "Schoolchildren gathered outdoors during a group activity",
    theme: "school",
  },
  {
    src: community03,
    alt: "An adult and three schoolchildren standing outdoors",
    theme: "care",
  },
  {
    src: community04,
    alt: "An adult standing with three schoolchildren outdoors",
    theme: "care",
  },
  {
    src: community05,
    alt: "A large group of schoolchildren gathered outdoors",
    theme: "school",
  },
  {
    src: community06,
    alt: "Schoolchildren taking part in an outdoor group activity",
    theme: "school",
  },
  {
    src: community07,
    alt: "An adult and three schoolchildren posing outdoors",
    theme: "care",
  },
  {
    src: community08,
    alt: "An adult standing outdoors with three schoolchildren in uniform",
    theme: "care",
  },
] as const;

export const communityContent = {
  eyebrow: "Education, Love & Compassion",
  heading: "Nurturing Young Minds, Caring for Young Lives",
  introduction:
    "At House of Prayer for All Nations, our commitment to serving God extends beyond the church and into the wider community. Through our school and care for vulnerable children, we seek to nurture young minds, demonstrate compassion and make a meaningful difference in the lives of those around us.",
  school: {
    heading: "A Foundation for a Brighter Future",
    body: "Education is an important part of building stronger communities. Through our school, House of Prayer for All Nations seeks to contribute to the growth, learning and development of children in the community.",
  },
  care: {
    heading: "Sharing Love Through Action",
    body: "Our commitment to compassion extends to vulnerable children. The church provides care and support to children in need, reflecting our belief in serving others and demonstrating the love of Christ.",
  },
} as const;
