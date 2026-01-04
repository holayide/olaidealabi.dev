import { certifications } from "@/data/contents";
import { useEffect, useRef, useState } from "react";
import CertificateModal from "./certificate-modal";

export default function CertificateCard() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      setContainerWidth(containerRef.current!.offsetWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const closeModal = () => setSelectedCert(null);

  return (
    <div className="hidden lg:block">
      {/* Fan Wrapper */}
      <div className="relative w-full max-w-6xl h-95 sm:h-105 md:h-112 mx-auto flex items-end justify-center pb-10">
        {/* Fan Container */}
        <div
          ref={containerRef}
          className="relative w-full h-full flex items-end justify-center px-4 md:px-8"
        >
          {certifications.map((cert, index) => {
            const totalCards = certifications.length;
            const middleIndex = (totalCards - 1) / 2;

            // Card width based on screen size
            const cardWidth =
              containerWidth < 640 ? 208 : containerWidth < 768 ? 224 : 288;

            // Available space for spreading
            const availableWidth = Math.max(containerWidth - cardWidth, 0);
            const maxSpread = availableWidth / (totalCards - 1 || 1);
            const spread = Math.min(120, maxSpread);

            const offset = (index - middleIndex) * spread;
            const angle = (index - middleIndex) * 10;
            const zIndex = 100 - Math.abs(index - middleIndex);

            return (
              <div
                key={cert.id}
                className="absolute bottom-0 cursor-pointer transition-all duration-500 ease-out
                           hover:-translate-y-6 hover:scale-105 hover:z-50"
                style={{
                  transformOrigin: "bottom center",
                  transform: `translateX(${offset}px) rotate(${angle}deg)`,
                  zIndex,
                }}
                onClick={() => setSelectedCert(index)}
              >
                <div className="bg-gray-200 w-52 h-64 sm:w-56 sm:h-72 md:w-72 md:h-96 rounded-lg shadow-2xl overflow-hidden border-4 border-white">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedCert !== null && (
        <CertificateModal closeModal={closeModal} selectedCert={selectedCert} />
      )}
    </div>
  );
}
