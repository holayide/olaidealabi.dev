import type { MobileMenuProps } from "@/type";
import { navLinks } from "@/data/navlinks";

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/70 z-40 transition ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-dark-gray z-600 p-10 transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-xl cursor-pointer"
        >
          ✕
        </button>

        <nav className="mt-20 flex flex-col gap-6 text-xl">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={onClose}
              className="flex justify-between border-b border-white/20 pb-3 hover:text-accent"
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
