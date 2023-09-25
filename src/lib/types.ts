import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

// type SectionName = "Home" | "About" | "Projects" | "Skills" | "Experience" | "Contact";
// This means that a variable of type SectionName can only have one of these specific string values. The as const assertion at the end of the links array ensures that TypeScript treats the array and its contents as immutable (read-only), which allows for more precise type inference.