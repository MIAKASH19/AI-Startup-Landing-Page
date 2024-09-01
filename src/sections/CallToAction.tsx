import Button from "@/components/Button";
import starBg from "@/assets/stars.png";
import Gridlines from "@/assets/grid-lines.png";

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="border border-white/15 py-24 rounded-lg relative"
          style={{
            backgroundImage: `url(${starBg.src})`,
          }}
        >
          <div className="absolute inset-0 bg-[rgb(74,32,138)] rounded-lg bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]" style={{
            backgroundImage: `url(${Gridlines.src})`
          }}></div>
          <div className="relative">
            <h1 className="text-5xl tracking-tighter text-center md:text-6xl lg:max-w-2xl max-w-sm mx-auto font-medium">
              AI Driven SEO for everone
            </h1>
            <p className="text-center px-4 text-lg md:text-xl md:max-w-md max-w-xs  mx-auto tracking-tight text-white/70 mt-5">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <Button>Join Waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
