import profile from "@/assets/profile.jpg";

export default function ProfileImage() {
  return (
    <div className="order-1 992:order-2 flex justify-center">
      <div className="relative w-70 h-70 md:w-80 md:h-80 lg:w-90 lg:h-90">
        <div
          style={{ filter: "blur(60px)" }}
          className="absolute inset-0 rounded-full bg-linear-to-tr from-accent to-accent-soft blur-[60px] opacity-20 animate-glow"
        />

        {/* <div className="h-full relative rounded-full overflow-hidden bg-light-grey border-4 border-accent/30 shadow-2xl ring-8 ring-accent/10"> */}
        {/* // shadow-[var(--shadow-card),_0_0_0_8px_rgba(228,170,72,0.1)] */}
        <div
          className="
                h-full relative rounded-full overflow-hidden
                bg-light-grey
                border-4 border-accent/30
                shadow-[var(--shadow-card),0_0_0_8px_rgba(228,170,72,0.1)]
          "
        >
          <img
            src={profile}
            alt="Olaide"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
