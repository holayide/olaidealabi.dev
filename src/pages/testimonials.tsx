import { TestimonialCarousel } from "@/components/features/testimonial-page";
import Heading from "@/components/ui/heading";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-dark-gray section-padding"
    >
      <div className="text-center container-base mb-5">
        <Heading title="Testimonials" />
        <p className="mb-8 text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto text-pretty">
          Testimonials from colleagues and supervisors who have worked with me
          directly.
        </p>

        <TestimonialCarousel />
      </div>
    </section>
  );
}
