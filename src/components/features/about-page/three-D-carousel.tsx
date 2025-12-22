import { useState, useEffect, useRef } from "react";
import { cardsData } from "@/data/contents";

export default function ThreeDCarousel() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [radius, setRadius] = useState(200);

  const totalCards = cardsData.length;
  const angleIncrement = 120;

  useEffect(() => {
    const updateRadius = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.offsetWidth;

      setRadius(width * 0.28);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalCards);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalCards]);

  return (
    <div ref={containerRef} className="relative w-full h-107.5">
      <div className="relative h-full flex items-center justify-center">
        <div
          className="relative w-full h-full"
          style={{
            perspective: "1200px",
            perspectiveOrigin: "center",
          }}
        >
          <div
            className="absolute inset-0 transition-transform duration-1000 ease-in-out"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${-activeIndex * angleIncrement}deg)`,
            }}
          >
            {cardsData.map((card, index) => {
              const angle = index * angleIncrement;
              const isActive = index === activeIndex;

              return (
                <div
                  key={card.id}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `
                      rotateY(${angle}deg)
                      translateZ(${radius}px)
                      scale(${isActive ? 1 : 0.85})
                    `,
                    zIndex: isActive ? 20 : 10,
                  }}
                >
                  <div
                    className={`w-64 h-87.5 rounded-2xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl transition-all duration-1000 ${
                      isActive
                        ? "ring-4 ring-accent/50 shadow-[0_0_40px_rgba(228,170,72,0.4)]"
                        : "opacity-70"
                    }`}
                  >
                    <div className="relative w-full h-full bg-linear-to-t from-black/90 via-black/50 to-transparent">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
