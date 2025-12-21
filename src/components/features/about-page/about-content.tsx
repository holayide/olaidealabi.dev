import { MoveRight } from "lucide-react";

export default function AboutContent() {
  return (
    <div className="text-start">
      <h2 className="text-3xl lg:text-[42px] font-bold text-white leading-tight mb-8">
        Frontend Engineer with {""}
        <span className="bg-linear-to-r from-accent-soft via-accent to-[#d89a35] bg-clip-text text-transparent italic">
          a Full-Stack Mindset
        </span>
      </h2>

      <div className="flex flex-col gap-6 text-base">
        <p className="leading-6">
          I’m a frontend web developer with a strong eye for design, passionate
          about building seamless, user-focused digital experiences by combining
          clean, scalable code, modern technologies, and AI-powered tools to
          create accessible, high-performing interfaces that solve real
          problems.
        </p>

        <p className="leading-6">
          Beyond coding, I enjoy exploring new ideas, refining my craft, and
          finding inspiration in thoughtful design.
        </p>

        <p className="font-semibold leading-5 text-white">
          I believe in waking up each day eager to make a difference!
        </p>
      </div>

      <div className="pt-8">
        <a
          href="https://github.com/holayide"
          target="_blank"
          className="flex items-center gap-2 text-accent hover:text-white transition-colors duration-300 group"
        >
          <span className="text-sm font-medium">More about me</span>
          <MoveRight size={20} />
        </a>
      </div>
    </div>
  );
}
