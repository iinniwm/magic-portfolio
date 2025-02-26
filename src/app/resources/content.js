import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Nitipoom",
  lastName: "Nuchnoi",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar1.jpg",
  location: "Asia/Bangkok", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Thai"], // optional: Leave the array empty if you don't want to display languages
};


const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/iinniwm",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://github.com/iinniwm",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "Nitipoom.nuc@outlook.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Welcome to my Portfolio</>,
  subline: (
    <>
      👋 Hi, I’m winnii. I'm guy who is interest in a lot of languages coding.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hello, my name is Nitipoom Nuchnoi. I am recent graduate from Thammasat University, Rangsit
        Campus, With a degree in Computer Science. I am interested in Software engineer and Software
        Tester. I am a hardworking and dedicated individual who is always looking to improve my skills and knowledge.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "TOPIC MODELING ON JOB REVIEWS IN GLASSDOOR DATASET",
        timeframe: "2022 - 2023",
        role: "Final project",
        achievements: [
          <>
            learning project about machine learning, natural language processing, Utilized
            Python libraries including NLTK, Gensim, and spaCy for text preprocessing and model
            development and data analytics.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Thammasat University",
        description: <> Bachelor of Science in Computer Science.</>
      },
      {
        name: "Suankularb Wittayalai Nonthaburi school",
        description: <>Science - Mathematic.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [ ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "React.js",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Java Spring Boot",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
