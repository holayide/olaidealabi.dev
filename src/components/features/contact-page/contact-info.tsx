import { contactInfoDatas } from "./contactsinfo-data";

export default function ContactInfo() {
  return (
    <div className="py-8 px-5 sm:py-8 sm:px-8 border border-accent/30 rounded-4xl">
      <div className="flex flex-col items-center">
        <h2 className=" sm:max-w-117.5 lg:max-w-xl text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] text-white drop-shadow-sm">
          Let’s build something {""}
          <span className="text-primary bg-clip-text text-transparent bg-linear-to-br from-[#f5c151] to-[#AD8620]">
            amazing {""}
          </span>
          together.
        </h2>

        <p className="mt-3 text-gray-300/90 text-sm font-normal leading-relaxed max-w-xl">
          I’m open to freelance work, collaborations, and full-time
          opportunities.
        </p>

        <div className="mt-20 mb-15 w-full grid grid-cols-2 md:grid-cols-3 gap-y-8 items-center justify-center">
          {contactInfoDatas.map((info, i) => (
            <a
              key={info.title}
              href="https://www.google.com/maps/place/Lagos,+Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center
               ${
                 i === contactInfoDatas.length - 1
                   ? "col-span-2 md:col-span-1"
                   : ""
               }
              `}
            >
              <div
                className="
                    w-12 h-12 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4
                    bg-neutral-800 
                "
              >
                {info.icon}
              </div>
              <h3 className="font-semibold mb-2 text-white">{info.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-300">
                {info.text}
              </p>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
          <a
            href="mailto:iamolaidealabi@gmail.com"
            className="relative flex items-center justify-center h-12 px-10 rounded-full bg-accent text-[#231d10] text-base font-bold tracking-wide transition-all duration-300 hover:scale-[1.02] hover:bg-[#ffcd60] hover:shadow-[0_0_30px_rgba(245,193,81,0.4)] active:scale-95 group/btn-primary overflow-hidden cursor-pointer"
          >
            <span className="relative z-10">Send Quick Email</span>

            <div className="absolute inset-0 -translate-x-full group-hover/btn-accent:animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/30 to-transparent z-0"></div>
          </a>

          <a
            href="https://wa.me/+2348176579175"
            target="_blank"
            className="flex items-center justify-center h-12 px-10 rounded-full bg-transparent border border-accent/40 text-accent text-base font-bold tracking-wide transition-all duration-300 hover:scale-[1.02] hover:bg-accent/10 hover:border-accent active:scale-95 cursor-pointer"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </div>
  );
}
