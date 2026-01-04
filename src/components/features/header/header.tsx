import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

import { navLinksHeader } from "@/data/navlinks";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  // track nav
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id === "hero" ? "" : entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = navLinksHeader
      .map((link) => document.getElementById(link.toLowerCase()))
      .filter((section): section is HTMLElement => section !== null);

    const hero = document.getElementById("hero");

    sections.forEach((section) => observer.observe(section));
    if (hero) observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  // scroll
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
              {navLinksHeader.map((item) => {
                const id = item.toLowerCase();
                const isActive = activeSection === id;

                return (
                  <a
                    key={item}
                    href={`#${id}`}
                    className={`relative transition-colors
                        ${isActive ? "text-accent" : "hover:text-accent"}
                        after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-accent
                        after:transition-all
                        ${
                          isActive
                            ? "after:w-full"
                            : "after:w-0 hover:after:w-full"
                        }
                      `}
                  >
                    {item}
                  </a>
                );
              })}
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
