import Button from "@/components/Button";
import starBg from "@/assets/stars.png";

export const Hero = () => {
  return (
    <section
      className="h-[652px] md:h-[95vh] flex justify-center items-center relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starBg.src})`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]">
      </div>

      <div className="absolute border border-white/20 h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]" />

      <div className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border rounded-full opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-2 w-2 absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />

        <div className="h-2 w-2 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />

        <div className="h-5 w-5 absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 border border-white rounded-full inline-flex justify-center items-center">
          <div className="h-2 w-2  bg-white rounded-full" />
        </div>
      </div>

      <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] border border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="absolute -rotate-45 opacity-20 h-[544px] w-[544px] md:h-[980px] md:w-[980px] border border-white/50 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-2 w-2 absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />

        <div className="h-2 w-2 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />

        <div className="h-2 w-2 absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />

        <div className="h-2 w-2 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />
      </div>

      <div className="container relative mt-16">
        <h1 className="text-8xl md:text-[168px] lg:text-[230px] font-semibold tracking-tighter bg-white text-transparent bg-clip-text text-center bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]">
          AI SEO
        </h1>
        <p className="text-lg  mt-5 text-white/70 text-center md:text-xl max-w-xl mx-auto">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="mt-5 flex justify-center">
          <Button>Join Waitlist</Button>
        </div>
      </div>
    </section>
  );
};
