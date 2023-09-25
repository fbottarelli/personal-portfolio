"use client"; // Custom directive or import (exact purpose is unclear without further context).

import React from "react";
import SectionHeading from "./section-heading";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Importing styles for the vertical timeline component.
import { experiencesData } from "@/lib/data"; // Importing data for the experiences to be displayed.
import { useSectionInView } from "@/lib/hooks"; // Custom hook to check if the "Experience" section is in view.
import { useTheme } from "@/context/theme-context"; // Custom hook to get the current theme (e.g., "light" or "dark").

export default function Experience() {
    const { ref } = useSectionInView("Experience"); // Using the custom hook to get a reference for the "Experience" section.
    const { theme } = useTheme(); // Using the custom hook to get the current theme.

    return (
        <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            {/* Displaying the heading for the section. */}
            <SectionHeading>My experience</SectionHeading>

            {/* Creating the vertical timeline. */}
            <VerticalTimeline lineColor="#ededed">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        {/* Individual timeline element for each experience. */}
                        <VerticalTimelineElement
                            contentStyle={{
                                background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                                fontSize: "1.5rem",
                            }}
                        >
                            {/* Displaying the title, location, and description for the experience. */}
                            <h3 className="font-semibold capitalize">{item.title}</h3>
                            <p className="font-normal !mt-0">{item.location}</p>
                            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}
