import ContactPage from "@/components/features/contact-page";
import Heading from "@/components/ui/heading";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-dark-gray section-padding">
      <div className="text-center container-base mb-5 sm:mb-15">
        <Heading title="Get In Touch" />
        <p className="mb-8 text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto text-pretty">
          Ready to bring your ideas to life? Let's discuss your project and
          explore how we can work together.
        </p>

        <ContactPage />
      </div>
    </section>
  );
}
