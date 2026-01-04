import { certifications } from "@/data/contents";
import { useRef, useState } from "react";

export default function CertificationStack() {
  const [stack, setStack] = useState(certifications);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setDragX(e.clientX - startX.current);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);

    if (Math.abs(dragX) > 120) {
      // move card to back
      setStack((prev) => [...prev.slice(1), prev[0]]);
    }

    setDragX(0);
  };

  return (
    <div className="relative w-full max-w-md mx-auto h-82 lg:hidden flex items-center justify-center">
      {stack.map((cert, index) => {
        const isTop = index === 0;

        return (
          <div
            key={cert.id}
            className={`absolute transition-transform duration-300 touch-none ${
              isTop ? "cursor-grab active:cursor-grabbing" : ""
            }`}
            style={{
              transform: isTop
                ? `translateX(${dragX}px) rotate(${dragX * 0.05}deg)`
                : `translateY(${index * 8}px) scale(${1 - index * 0.04})`,
              zIndex: stack.length - index,
              transition: isDragging && isTop ? "none" : "transform 0.3s ease",
            }}
            onPointerDown={isTop ? onPointerDown : undefined}
            onPointerMove={isTop ? onPointerMove : undefined}
            onPointerUp={isTop ? onPointerUp : undefined}
            onPointerLeave={isTop ? onPointerUp : undefined}
          >
            <div className="w-64 h-80 bg-white rounded-xl shadow-2xl overflow-hidden border">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
