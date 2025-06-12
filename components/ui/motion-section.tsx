"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export function MotionSection({
  children,
  className,
  id,
  delay = 0.2,
}: MotionSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id={id} className={className} ref={ref}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </section>
  );
}