import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

import { TestimonialCard } from "./testimonial-card";
import { testimonials } from "@/data/contents";

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swipeStartX = useRef(0);
  const swipeEndX = useRef(0);
  const isSwiping = useRef(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const SWIPE_THRESHOLD = 60;

  const onTouchStart = (e: React.TouchEvent) => {
    swipeStartX.current = e.touches[0].clientX;
    isSwiping.current = true;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping.current) return;
    swipeEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!isSwiping.current) return;

    const delta = swipeStartX.current - swipeEndX.current;

    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    isSwiping.current = false;
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto md:px-4">
      <div className="flex items-center gap-6 md:gap-12">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="
            w-12 h-12 rounded-full border bg-card cursor-pointer
            transition-all duration-300 ease-out 
            hover:translate-y-1 hover:bg-accent
            hidden md:flex items-center justify-center 
          "
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Slider */}
        <div
          className="flex-1 overflow-hidden touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full flex">
                <div className="w-full">
                  <TestimonialCard {...testimonial} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="
            w-12 h-12 rounded-full border bg-card cursor-pointer
            transition-all duration-300 ease-out
            hover:translate-y-1 hover:bg-accent
            hidden md:flex items-center justify-center
          "
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="mt-8 flex items-center justify-center gap-8">
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`size-3 rounded-full transition-all cursor-pointer ${
                index === currentIndex ? "bg-accent" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          {currentIndex + 1} of {testimonials.length}
        </p>
      </div>
    </div>
  );
}
