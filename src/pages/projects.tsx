import ProjectContents from "@/components/features/project-page";
import Heading from "@/components/ui/heading";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="relative bg-light-grey section-padding">
      <div className="mb-5">
        <div className="text-center container-base">
          <Heading title="Projects" />
          <ProjectContents />
        </div>

        <div className="mt-15 flex items-center justify-center">
          <a
            href="https://github.com/holayide"
            className="group flex text-accent"
            target="_blank"
          >
            <span className="mr-3">more</span>
            <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
