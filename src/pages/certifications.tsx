import CertificationContent from "@/components/features/certification-page";
import Heading from "@/components/ui/heading";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative bg-light-grey section-padding"
    >
      <div className="text-center container-base pb-5">
        <Heading title="Certifications" />
        <CertificationContent />
      </div>
    </section>
  );
}
