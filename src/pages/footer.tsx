import Socials from "@/components/ui/socials";
import { navLinks } from "@/data/navlinks";

export default function Footer() {
  return (
    //border-t border-accent
    <footer className="bg-dark-grey text-center py-8 text-base text-pri">
      <div className="text-start container-base">
        <h3 className="mb-6 text-2xl font-bold">
          hor<span className="text-accent">la</span>
        </h3>

        <div className="flex flex-col sm:flex-row justify-between gap-5">
          <div>
            <p className="max-w-60 text-sm mb-5">
              I'm Ola - I build, learn, and solve problems through quality code.
              Thanks for exploring my corner of the web!
            </p>
            <Socials />
          </div>

          <nav className="hidden sm:block">
            <ul className="max-w-70 flex flex-row-reverse flex-wrap gap-3 text-sm">
              {navLinks.map((item) => (
                <li key={item} className="hover:text-accent">
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* text-start sm:text-end  */}
        <p className="text-sm mt-8">
          Copyright &copy;{" "}
          <span className="text-accent font-semibold">
            {new Date().getFullYear()}
          </span>{" "}
          by Olaide Alabi. All rights reserved
        </p>
      </div>
    </footer>
  );
}
