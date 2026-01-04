import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 w-12.5 h-12.5 bg-accent rounded-full flex items-center justify-center shadow-lg transition-all hover:bg-[#d19a3a] hover:-translate-y-0.5 z-40 cursor-pointer"
        >
          <ArrowUp className="w-6 h-6 text-black" />
        </button>
      )}
    </>
  );
}
