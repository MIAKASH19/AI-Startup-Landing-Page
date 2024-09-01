"use client";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import productImage from "@/assets/product-image.png";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
  ValueAnimationTransition,
} from "framer-motion";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeaturesTab = (
  props: (typeof tabs)[number] &
    ComponentPropsWithoutRef<"div"> & { selected: boolean }
) => {
  const dotlottieRef = useRef<DotLottieCommonPlayer>(null);
  const tabRef = useRef<HTMLDivElement>(null);

  const xPercent = useMotionValue(0);
  const yPercent = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercent}% ${yPercent}%, black, transparent)`;

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Code that uses `window` or `document` here
      if (!tabRef.current || !props.selected) return;

      xPercent.set(0);
      yPercent.set(0);
      const { height, width } = tabRef.current.getBoundingClientRect();
      const circumstence = height * 2 + width * 2;

      const times = [
        0,
        width / circumstence,
        (width + height) / circumstence,
        (width * 2 + height) / circumstence,
        1,
      ];

      const options: ValueAnimationTransition = {
        times,
        duration: 4,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      };
      animate(xPercent, [0, 100, 100, 0, 0], options);
      animate(yPercent, [0, 0, 100, 100, 0], options);
    }
  }, [props.selected, xPercent, yPercent]);

  const handleTabHover = () => {
    if (dotlottieRef.current === null) return;
    dotlottieRef.current.seek(0);
    dotlottieRef.current.play();
  };
  return (
    <div
      ref={tabRef}
      onMouseEnter={handleTabHover}
      className="border border-white/15 rounded-md flex lg:flex-1 items-center gap-2.5 p-2.5 relative"
      onClick={props.onClick}
    >
      {props.selected && (
        <motion.div
          style={{
            maskImage,
          }}
          className="absolute inset-0 border -m-px border-[#A369FF] rounded-lg"
        ></motion.div>
      )}

      <div className="h-12 w-12 inline-flex items-center justify-center border border-white/15 rounded-lg relative">
        <DotLottiePlayer
          ref={dotlottieRef}
          src={props.icon}
          className="h-5 w-5"
        />
      </div>
      <div className="font-medium">{props.title}</div>
      {props.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff]">new</div>
      )}
    </div>
  );
};

export const Features = () => {
  const [selected, setSelected] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}%`;

  const handleSelectedTab = (index: number) => {
    setSelected(index);

    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };
    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateOptions
    );

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), 100, tabs[index].backgroundPositionX],
      animateOptions
    );

    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), 100, tabs[index].backgroundPositionY],
      animateOptions
    );
  };

  return (
    <section className="py-20 md:py-24 ">
      <div className="container ">
        <h2 className="text-5xl md:text-6xl lg:text-7xl  tracking-tighter text-center font-medium">
          Elevate your seo efforts.
        </h2>
        <p className="text-white/75 md:text-xl max-w-2xl mx-auto text-lg tracking-tighter text-center mt-5">
          From small startups to large enterprises, out AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row  gap-3">
          {tabs.map((tab, index) => (
            <FeaturesTab
              {...tab}
              onClick={() => handleSelectedTab(index)}
              key={index}
              selected={selected === index}
            />
          ))}
        </div>
        <div className="border border-white/20 mt-3 rounded-xl p-2.5">
          <motion.div
            className="aspect-video bg-cover border border-white/15 rounded-lg"
            style={{
              backgroundImage: `url(${productImage.src})`,
              backgroundPosition,
              backgroundSize,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};
