import { AboutContent } from "@/components/features/about-page";
import Heading from "@/components/ui/heading";

export default function About() {
  return (
    <section id="about" className="relative bg-light-grey section-padding">
      <div className="text-center container-base mb-12">
        <Heading title="Know About me" />

        <AboutContent />
      </div>
    </section>
  );
}
