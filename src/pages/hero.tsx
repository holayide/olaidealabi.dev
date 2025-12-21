import { HeroContent, ProfileImage } from "@/components/features/hero-page";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden mb-3">
      <div className="container-base">
        <div className="py-5 grid 992:grid-cols-2 gap-10 992:gap-15 items-center">
          <HeroContent />
          <ProfileImage />
        </div>
      </div>
    </section>
  );
}
