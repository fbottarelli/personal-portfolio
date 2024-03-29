import React from "react";
import { CgWorkAlt } from "react-icons/cg";
/*import { FaReact } from "react-icons/fa";*/
import { LuGraduationCap } from "react-icons/lu";
/*import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";*/

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated Bachelor",
        location: "Padua, IT",
        description:
            "I graduated in Statistics for Technologies and Sciences at the University of Padua",
        icon: React.createElement(LuGraduationCap),
        date: "2019-2021",
    },
    {
        title: "Master in Data Science",
        location: "Padova, IT",
        description:
            "I'm currently studying to get a Master degree in Data Science, specializing in mathematics for artificial intelligence.",
        icon: React.createElement(LuGraduationCap),
        date: "2022 - present ",
    },
    {
        title: "DataOps and Database Administrator",
        location: "Padova, IT",
        description:
            "I work at Miriade Srl, a leading IT consulting firm, serving as a DataOps specialist and Database Administrator.",
        icon: React.createElement(CgWorkAlt),
        date: "2023 - present",
    },
] as const;

export const skillsData = [
    "Git",
    "R",
    "MySQL",
    "SQL",
    "Kafka",
    "Nifi",
    "Ansible",
    "Terraform",
    "AWS",
    "Cloudformation",
    "LangChain",
    "Machine Learning",
    "Statistics",
    "Deep Learning",
    "MongoDB",
    "PostgreSQL",
    "Python",
    "Denodo",
    "Cloudera",
    "Hadoop",
    "Linux",
    "Docker",
    "Ignite",
    // "JavaScript",
    // "TypeScript",
    // "React",
    // "Next.js",
    // "Node.js",
] as const;

/*export const projectsData = [
    {
        title: "CorpComment",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        imageUrl: corpcommentImg,
    },
    {
        title: "rmtDev",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: rmtdevImg,
    },
    {
        title: "Word Analytics",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: wordanalyticsImg,
    },
] as const;*/