import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useTransform
} from "framer-motion";
import { wrap } from "@popmotion/popcorn";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

export default function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);

  // Use useAnimationFrame to update the position of the text based on time.
  useAnimationFrame((_, delta) => {
    // Calculate how much to move the text by.
    let moveBy = baseVelocity * (delta / 1000);
    // Update the position.
    baseX.set(baseX.get() - moveBy);

    // Loop back to the starting position when reaching a certain point.
    const currentValue = baseX.get();
    if (currentValue < -45) {
      baseX.set(20);
    }
  });

  // This is a magic wrapping for the length of the text.
  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <div className="parallax w-full bg-slate-600">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}
