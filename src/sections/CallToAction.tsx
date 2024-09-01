"use client";
import { useEffect, useRef } from "react";
import Button from "@/components/Button";
import starBg from "@/assets/stars.png";
import Gridlines from "@/assets/grid-lines.png";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";

export const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const borderDivRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const useRelativeMousePosition = (to: React.RefObject<HTMLElement>) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
      const updateMousePosition = (event: MouseEvent) => {
        if (!to.current) return;

        const rect = to.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        mouseX.set(x);
        mouseY.set(y);
      };

      document.addEventListener("mousemove", updateMousePosition);

      return () => {
        document.removeEventListener("mousemove", updateMousePosition);
      };
    }, [to, mouseX, mouseY]);

    return [mouseX, mouseY];
  };

  const [mouseX, mouseY] = useRelativeMousePosition(borderDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section ref={sectionRef} className="py-20 md:py-24">
      <div className="container">
        <motion.div
          ref={borderDivRef}
          className="border border-white/15 py-24 rounded-lg relative group"
          style={{
            backgroundImage: `url(${starBg.src})`,
            backgroundPositionY,
          }}
          animate={{
            backgroundPositionX: starBg.width,
          }}
          transition={{
            duration: 80,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] rounded-lg bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{
              backgroundImage: `url(${Gridlines.src})`,
            }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] rounded-lg bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_0px_0px,black,transparent)] group-hover:opacity-100 opacity-0 transition duration-700"
            style={{
              maskImage,
              backgroundImage: `url(${Gridlines.src})`,
            }}
          ></motion.div>
          <div className="relative">
            <h1 className="text-5xl tracking-tighter text-center md:text-6xl lg:max-w-2xl max-w-sm mx-auto font-medium">
              AI Driven SEO for everyone
            </h1>
            <p className="text-center px-4 text-lg md:text-xl md:max-w-md max-w-xs mx-auto tracking-tight text-white/70 mt-5">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <Button>Join Waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
