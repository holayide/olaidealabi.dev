import { AboutContent, ThreeDCarousel } from "@/components/features/about-page";
import Heading from "@/components/ui/heading";

export default function About() {
  return (
    <section id="about" className="relative bg-light-grey section-padding">
      <div className="text-center container-base mb-10">
        <Heading title="Know About me" />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="order-2 md:order-1">
            <ThreeDCarousel />
          </div>
          <div className="order-1 md:order-2">
            <AboutContent />
          </div>
        </div>
      </div>
    </section>
  );
}
