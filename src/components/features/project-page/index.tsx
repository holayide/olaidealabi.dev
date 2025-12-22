import { useState } from "react";

import { projectsData } from "@/data/contents";
import ProjectDetail from "./project-detail";
import type { ProjectProps } from "@/type";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null
  );

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="h-full p-5 flex flex-col text-start group rounded-2xl 
                    border border-white/10 overflow-hidden
                    bg-linear-to-b from-white/5 to-transparent 
                    transition-transform duration-300 ease-out
                    transform-gpu
                    hover:-translate-y-2 hover:scale-[1.02]
                  "
          >
            <div className="mb-4 aspect-video overflow-hidden bg-black/50 rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="mb-2 text-xl font-bold">{project.title}</h3>

            <p className="line-clamp-3 mb-8 text-sm flex-1 leading-relaxed text-gray-400">
              {project.description}
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedProject(project)}
                className="flex-1 text-center rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white cursor-pointer"
              >
                View Details
              </button>

              <a className="flex-1 text-center rounded-lg bg-accent px-4 py-2 text-sm font-medium text-black transition hover:bg-accent-soft cursor-pointer">
                Live Site
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectDetail
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
    </>
  );
}
