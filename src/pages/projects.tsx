import ProjectContents from "@/components/features/project-page";
import Heading from "@/components/ui/heading";

export default function Projects() {
  return (
    <section id="about" className="relative bg-light-grey section-padding">
      <div className="text-center container-base mb-5">
        <Heading title="Projects" />
        <ProjectContents />
      </div>
    </section>
  );
}
