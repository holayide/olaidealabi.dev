import Socials from "@/components/ui/socials";
import { navLinks } from "@/data/navlinks";

export default function Footer() {
  return (
    <footer className="bg-dark-gray border-t border-accent text-center py-8 text-base text-pri">
      <div className="text-start container-base">
        <h3 className="mb-7 text-lg">
          hor<span className="text-accent">la</span>
        </h3>

        <div className="flex flex-col sm:flex-row justify-between gap-5">
          <div>
            <Socials />
            <p className="text-sm text-start sm:text-end mt-2">
              Copyright &copy;{" "}
              <span className="text-accent font-semibold">
                {new Date().getFullYear()}
              </span>{" "}
              by Olaide Alabi.
            </p>
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
      </div>
    </footer>
  );
}
