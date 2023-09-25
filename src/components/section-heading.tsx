import React from "react";
import { motion } from "framer-motion";


type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
      <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
      >
    <h2 className="text-3xl font-medium font-sans mb-8 text-center">
      {children}
    </h2>
      </motion.div>
  );
}
