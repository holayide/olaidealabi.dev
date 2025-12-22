import { detailsPopup } from "@/data/navlinks";
import type { ProjectDetailProps } from "@/type";
import { useState } from "react";

export default function ProjectDetail({
  setSelectedProject,
  selectedProject,
}: ProjectDetailProps) {
  type ActiveSection = (typeof detailsPopup)[number]["link"];
  const [activeSection, setActiveSection] = useState<ActiveSection>("overview");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={() => setSelectedProject(null)}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
      />

      {/* Modal */}
      <div
        className="
                    relative z-10 w-full max-w-2xl rounded-2xl
                    border border-white/10 bg-zinc-900 py-6
                    animate-in fade-in zoom-in duration-200
                  "
      >
        <div className="flex items-center justify-between mb-1 px-6">
          <h2 className="text-xl md:text-2xl font-bold">
            {selectedProject.title}
          </h2>

          <button
            onClick={() => setSelectedProject(null)}
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            ✕
          </button>
        </div>

        <p className="px-6 mb-6 text-xs sm:text-sm text-start leading-relaxed text-gray-400">
          {selectedProject.description}
        </p>

        <nav className="border-b border-t border-neutral-700 mb-6">
          <ul className="flex items-center gap-1 px-6 font-semibold">
            {detailsPopup.map((detail) => (
              <li
                key={detail.link}
                onClick={() => setActiveSection(detail?.link)}
                className={`flex text-sm py-3 px-6 rounded-lg cursor-pointer ${
                  activeSection === detail.link
                    ? "bg-[#262626]"
                    : "bg-transparent hover:bg-[#262626]"
                }`}
              >
                <span className="mr-1 sm:mr-2">{detail.icon}</span>{" "}
                <span className="hidden sm:block">{detail.title}</span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-h-auto md:min-h-87.5 h-full px-6 mb-4">
          {activeSection === "overview" && (
            <div>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="aspect-video w-full rounded-xl object-cover"
              />
            </div>
          )}

          {activeSection === "features" && (
            <div className="mb-6 flex flex-col text-start">
              <h3 className="text-base sm:text-lg mb-6">
                Key Features & Highlights
              </h3>

              <div className="flex flex-col gap-2 sm:gap-3 overflow-auto">
                {selectedProject?.features?.map((feature, i) => (
                  <div className="p-3 sm:p-4 rounded-lg border bg-neutral-800 hover:bg-neutral-700">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xs sm:text-sm bg-accent/60 px-2 py-1 rounded font-bold flex-x-shrink-0">
                        {i + 1}
                      </span>
                      <p className="flex-1 text-xs sm:text-base text-pri/80">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "tech" && (
            <div className="mb-6 flex flex-col text-start">
              <h3 className="text-base sm:text-lg mb-6">Technologies</h3>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3 px-6">
          <a
            href={selectedProject.liveUrl}
            target="_blank"
            className="flex-1 rounded-lg bg-accent px-4 py-2 text-center text-sm font-semibold text-black hover:bg-accent-soft cursor-pointer"
          >
            Live Site
          </a>

          <a
            href={selectedProject.githubUrl}
            target="_blank"
            className="flex-1 rounded-lg border border-white/10 px-4 py-2 text-center text-sm text-gray-300 font-semibold hover:bg-white/5 cursor-pointer"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
