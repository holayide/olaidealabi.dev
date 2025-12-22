import { useEffect, useRef } from "react";

import { bottomRowSkills, topRowSkills } from "../../../data/skills";
import { SkillCard } from "./skill-card";

export default function SkillsShowcase() {
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;

    if (!topRow || !bottomRow) return;

    // Duplicate skills for seamless infinite scroll
    const topRowContent = topRow.querySelector(".scroll-content");
    const bottomRowContent = bottomRow.querySelector(".scroll-content");

    if (topRowContent && bottomRowContent) {
      const topClone = topRowContent.cloneNode(true);
      const bottomClone = bottomRowContent.cloneNode(true);
      topRow.appendChild(topClone);
      bottomRow.appendChild(bottomClone);
    }
  }, []);

  return (
    <section className="w-full">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Top Row - Scrolls Left to Right */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-10 md:w-32 bg-linear-to-r from-dark-gray via-dark-gray/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-10 md:w-32 bg-linear-to-l from-dark-gray via-dark-gray/50 to-transparent z-10 pointer-events-none" />

          <div ref={topRowRef} className="flex gap-4 animate-scroll-left">
            <div className="scroll-content flex gap-6">
              {topRowSkills.map((skill, index) => (
                <SkillCard key={`top-${index}`} skills={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row - Scrolls Right to Left */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-10 md:w-32 bg-linear-to-r from-dark-gray via-dark-gray/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-10 md:w-32 bg-linear-to-l from-dark-gray via-dark-gray/50 to-transparent z-10 pointer-events-none" />

          <div ref={bottomRowRef} className="flex gap-4 animate-scroll-right">
            <div className="scroll-content flex gap-6">
              {bottomRowSkills.map((skill, index) => (
                <SkillCard key={`bottom-${index}`} skills={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
