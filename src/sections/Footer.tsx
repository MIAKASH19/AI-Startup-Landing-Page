import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import TYSocial from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container ">
        <div className="flex flex-col lg:items-center lg:flex-row justify-between gap-5">
          <div className="flex items-center gap-2">
            <Logo className="h-6 w-6" />
            <div className="text-sm font-medium">AI Startup Landing Page</div>
          </div>
          <nav className="flex flex-col lg:flex-row gap-3 lg:gap-7 text-sm md:text-xs">
            {["Features", "Developers", "Pricing", "Blog", "Changelog"].map(
              (link, index) => (
                <a
                  href="#"
                  key={index}
                  className="text-white/70  transition hover:text-white"
                >
                  {link}
                </a>
              )
            )}
          </nav>
          <div className="flex gap-3">
            <XSocial className="text-white/40 hover:text-white transition" />
            <InstaSocial className="text-white/40 hover:text-white transition" />
            <TYSocial className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
