"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const roles = ["Software Developer", "Full Stack Developer", "Flutter Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // ms per character
  const deletingSpeed = 75; // ms per character
  const delayAfterTyping = 2500; // ms delay after fully typed text

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;

    const currentRole = roles[roleIndex];

    if (!isDeleting && displayedText.length < currentRole.length) {
      // Typing effect - add next character
      typingTimeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      // Wait before deleting
      typingTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayAfterTyping);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting effect - remove last character
      typingTimeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to next role and start typing again
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, roleIndex, roles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const backgroundShapes = [
    {
      size: "w-64 h-64",
      position: "top-20 right-[10%]",
      color: "bg-primary/5 dark:bg-primary/10",
      animation: {
        x: [-10, 10, -10],
        y: [-10, 15, -10],
        rotate: [0, 5, 0],
        transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
      },
    },
    {
      size: "w-96 h-96",
      position: "bottom-10 -left-20",
      color: "bg-accent/5 dark:bg-accent/10",
      animation: {
        x: [10, -10, 10],
        y: [5, -5, 5],
        rotate: [0, -5, 0],
        transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
      },
    },
    {
      size: "w-32 h-32",
      position: "top-40 left-[20%]",
      color: "bg-chart-1/5 dark:bg-chart-1/10",
      animation: {
        x: [-5, 5, -5],
        y: [8, -8, 8],
        rotate: [0, 15, 0],
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      },
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background shapes */}
      {backgroundShapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${shape.size} ${shape.position} ${shape.color} blur-3xl opacity-60`}
          animate={shape.animation}
        />
      ))}

      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={childVariants}
            className="inline-block bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6"
          >
            Full Stack Developer
          </motion.div>

          <motion.h1
            variants={childVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            Hi,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Sarthak Tambde
            </span> <br /> {" "}
            I'm a {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              {displayedText}
              <span className="border-r-2 border-primary animate-pulse ml-1" />
            </span>
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            I design and build beautiful interfaces that are intuitive to use,
            performant across devices, and accessible to everyone.
          </motion.p>

          <motion.div
            variants={childVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" asChild className="group">
              <Link href="#projects">
                View my work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Get in touch</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="flex items-center justify-center gap-6 mt-12"
          >
            <Link
              href="https://github.com/sarthak0422"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/sarthaktambde"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: animationComplete ? 1 : 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <motion.div
              className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
              initial={{ y: 0 }}
            >
              <motion.div
                className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
