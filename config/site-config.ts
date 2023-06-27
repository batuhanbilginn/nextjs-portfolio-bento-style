export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Youtube",
    icon: "youtube",
    username: "@makrdev",
    description:
      "I create videos about AI, Machine Learning, Deep Learning and Computer Vision.",
    color: "#FF0000",
    buttonTitle: "Subscribe",
    buttonLink: "https://www.youtube.com/@makrdev",
    buttonSecondaryText: "1.1K",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Discord",
    icon: "discord",
    username: "@makrdev",
    buttonTitle: "Join",
    buttonLink: "https://discord.gg/2kY6fJ5",
    buttonSecondaryText: "44",
    color: "#5865F2",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@batuhanbilginn",
    buttonTitle: "Follow",
    buttonSecondaryText: "36",
    buttonLink: "https://github.com/batuhanbilginn",
    color: "#070707",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Video Equipments",
    image: "/equipments-image.jpeg",
    equipments: [
      {
        title: "Sony A7III",
        link: "https://amzn.to/3j0ZQ8X",
      },
      {
        title: "Sony A7III",
        link: "https://amzn.to/3j0ZQ8X",
      },
      {
        title: "Sony A7III",
        link: "https://amzn.to/3j0ZQ8X",
      },
      {
        title: "Sony A7III",
        link: "https://amzn.to/3j0ZQ8X",
      },
      {
        title: "Sony A7III",
        link: "https://amzn.to/3j0ZQ8X",
      },
      {
        title: "Sony A7III",
        link: "https://amzn.to/3j0ZQ8X",
      },
      {
        title: "Sony A7III",
        link: "https://amzn.to/3j0ZQ8X",
      },
      {
        title: "Sony A7III",
        link: "https://amzn.to/3j0ZQ8X",
      },
      {
        title: "Sony A7III",
        link: "https://amzn.to/3j0ZQ8X",
      },
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "Twitter",
    icon: "twitter",
    username: "@makrdev",
    buttonTitle: "Follow",
    buttonLink: "https://twitter.com/makrdev",
    buttonSecondaryText: "279",
    color: "#1DA1F2",
    description:
      "I share my thoughts about AI, Machine Learning, Deep Learning and Computer Vision.",
  },
  {
    layout: "2x1",
    type: "mentor",
    title: "Next.js Mentorship",
    icon: "superpeer",
    promotion: "MAKRDEVFELLOWS",
    oldPrice: "$100",
    price: "$50",
    buttonLink: "https://superpeer.com/batuhanbilgin",
  },
  {
    layout: "2x1",
    type: "mentor",
    title: "Supabase Mentorship",
    icon: "superpeer",
    promotion: "MAKRDEVFELLOWS",
    oldPrice: "$100",
    price: "$50",
    buttonLink: "https://superpeer.com/batuhanbilgin",
  },
  {
    layout: "2x1",
    type: "project",
    title: "makrAI",
    icon: "github",
    color: "#070707",
    stars: 73,
    buttonLink: "",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Full-stack Multilingual Blog with Next.js 13",
    username: "@batuhanbilginn",
    description:
      "Learn how to build a full-stack, multilingual and high performant blog website with Next.js 13.4 and Directus.",
    icon: "udemy",
    buttonTitle: "Enroll",
    buttonSecondaryText: "79",
    buttonLink:
      "https://www.udemy.com/course/nextjs13-fullstack-blog-seo-internationalization/?couponCode=MAKRDEVFELLOWS2",
  },
  {
    layout: "2x1",
    type: "project",
    title: "AI Blog Post Generator",
    icon: "github",
    stars: 19,
    color: "#070707",
    buttonLink: "",
  },
];

export const siteConfig = {
  creator: "Batuhan Bilgin",
  title: "Developer & Creator",
  bio: "Building AI products and creating video tutorials on Youtube.",
  location: "Istanbul, Turkey",
  locationLink:
    "https://www.google.com/maps/place/Kad%C4%B1k%C3%B6y%2F%C4%B0stanbul/@40.981133,29.063053,12z/data=!3m1!4b1!4m6!3m5!1s0x14cac790b17ba89d:0xd2d24ea0437a7ee2!8m2!3d40.981867!4d29.0576302!16zL20vMDV5cWY4?entry=ttu",
  email: "batuhanbilginn@gmail.com",
  items: GridItems,
} as const;
