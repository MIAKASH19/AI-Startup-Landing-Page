import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 ">
      <div className="absolute inset-0 backdrop-blur md:hidden -z-10"></div>
      <div className="container">
        <div className="relative flex justify-between items-center md:border md:p-2.5 rounded-xl max-w-2xl mx-auto border-white/15">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div className="h-10 w-10 inline-flex justify-center items-center border rounded-lg border-white/15 ">
            <LogoIcon className="h-8 w-8" />
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a
                href="#"
                className="text-white/70  transition hover:text-white"
              >
                Features
              </a>
              <a
                href="#"
                className="text-white/70  transition hover:text-white"
              >
                Developers
              </a>
              <a
                href="#"
                className="text-white/70  transition hover:text-white"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-white/70  transition hover:text-white"
              >
                Changelog
              </a>
            </nav>
          </div>
          <div className="flex gap-4">
            <Button>Join Waitlist</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
