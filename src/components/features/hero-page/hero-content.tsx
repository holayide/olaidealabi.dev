import { ArrowRight, Download } from "lucide-react";
import Socials from "@/components/ui/socials";

export default function HeroContent() {
  return (
    <div className="order-2 992:order-1">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-6">
        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        <span className="text-sm">Available for work</span>
      </div>

      <h1 className="text-[42px] md:text-[56px] font-bold mb-3 leading-[1.1]">
        Hi, I'm <span className="text-accent">Olaide</span>
      </h1>

      <h2 className="text-lg md:text-[22px] mb-4 font-medium">Web Developer</h2>

      <div className="w-17.5 h-1 bg-accent rounded mb-5" />

      <p className="max-w-135 text-base mb-8 leading-relaxed">
        I'm a web developer focused on creating visually stunning and functional
        websites by bringing design to life. I specialize in building modern,
        responsive web applications that deliver exceptional user experiences.
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        <a
          href="#projects"
          className="px-6 py-3 inline-flex items-center justify-center text-base font-medium bg-accent text-black rounded-lg hover:-translate-y-0.5 transition"
        >
          View My Work{" "}
          <span>
            <ArrowRight size={18} className="ml-2" />
          </span>
        </a>

        <a
          href="https://drive.google.com"
          className="px-6 py-3 inline-flex items-center justify-center text-base font-medium border border-accent text-accent rounded-lg hover:bg-accent/10 hover:-translate-y-0.5 transition"
        >
          <span>
            <Download size={18} className="mr-2" />
          </span>
          Download CV
        </a>
      </div>

      <Socials />
    </div>
  );
}
