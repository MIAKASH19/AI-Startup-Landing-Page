"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
import productImage from "@/assets/product-image.png";

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

export const Features = () => {
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
            <div
              key={index}
              className="border border-white/15 rounded-md flex lg:flex-1 items-center gap-2.5 p-2.5"
            >
              <div className="h-12 w-12 inline-flex items-center justify-center border border-white/15 rounded-lg">
                <DotLottiePlayer src={tab.icon} className="h-5 w-5" autoplay />
              </div>
              <div className="font-medium">{tab.title}</div>
              {tab.isNew && (
                <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff]">
                  new
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="border border-white/20 mt-3 rounded-xl p-2.5">
          <div
            className="aspect-video bg-cover border border-white/15 rounded-lg"
            style={{
              backgroundImage: `url(${productImage.src})`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
