import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

import { navLinks } from "@/data/navlinks";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-500 backdrop-blur-[10px] bg-header border-b border-white/10 transition ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container-base">
          <nav className="h-20 flex items-center justify-between">
            <a href="/" className="text-2xl font-bold">
              <span className="text-pri">hor</span>
              <span className="text-accent">la</span>
            </a>

            <div className="hidden md:flex gap-8 text-[15px]">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-accent relative after:absolute after:h-0.5 after:bg-accent after:w-0 hover:after:w-full after:left-0 after:-bottom-1 after:transition-all"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden w-11 h-11 rounded-lg border border-white/20 flex items-center justify-center cursor-pointer"
            >
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
