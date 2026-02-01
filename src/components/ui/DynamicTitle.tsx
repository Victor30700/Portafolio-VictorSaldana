"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CHARS = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/";

interface DynamicTitleProps {
  titles: string[];
}

export default function DynamicTitle({ titles }: DynamicTitleProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(titles[0]);
  const [scramble, setScramble] = useState(titles[0]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let counter = 0;
    const targetText = titles[index];

    const animateText = () => {
      interval = setInterval(() => {
        const scrambled = targetText
          .split("")
          .map((char, i) => {
            if (i < counter) {
              return targetText[i];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");

        setScramble(scrambled);
        counter += 1 / 3;

        if (counter >= targetText.length) {
          clearInterval(interval);
          setTimeout(() => {
            setIndex((prev) => (prev + 1) % titles.length);
          }, 3000); // Wait 3 seconds before next title
        }
      }, 30);
    };

    animateText();

    return () => clearInterval(interval);
  }, [index, titles]);

  return (
    <motion.h2
      className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {scramble}
    </motion.h2>
  );
}
