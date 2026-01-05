import type { TestimonialCardProps } from "@/type";
import { Linkedin } from "lucide-react";

export function TestimonialCard({
  quote,
  name,
  title,
  company,
  avatar,
  linkedinUrl,
}: TestimonialCardProps) {
  return (
    <div className="h-full flex flex-col justify-between bg-card border border-border rounded-xl p-5 md:p-12 max-w-2xl w-full mx-auto">
      <div className="mb-10">
        <svg
          className="size-8 md:size-10 text-primary mb-6"
          fill="#e4aa48"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-foreground/90 text-base md:text-lg text-start leading-snug md:leading-relaxed italic">
          "{quote}"
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-primary font-semibold overflow-hidden">
          <img src={avatar} alt="avatar" />
        </div>

        <div className="flex-1 flex flex-col items-start">
          <div className="text-start mb-2">
            <h3 className="text-foreground font-semibold text-sm md:text-base">
              {name}
            </h3>
            <p className="text-muted-foreground text-xs">
              {title} at {company}
            </p>
          </div>

          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 text-accent hover:text-white/60 transition-colors"
              aria-label={`Visit ${name}'s LinkedIn profile`}
            >
              <Linkedin className="w-3 h-3" />{" "}
              <span className="text-xs text-accent">Linkedin</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
