import SkillsShowcase from "@/components/features/skills-showcase";
import Heading from "@/components/ui/heading";

export default function Skills() {
  return (
    <section id="skills" className="relative bg-dark-gray section-padding">
      <div className="text-center container-base mb-10">
        <Heading title="Skills & Technologies" type="dark" />
        <SkillsShowcase />
      </div>
    </section>
  );
}
