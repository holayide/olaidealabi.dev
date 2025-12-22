import type { SkillsProps } from "@/type";

export function SkillCard({ skills }: SkillsProps) {
  const { name, img } = skills;

  return (
    <div
      className="w-35 group relative shrink-0 px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-102"
      style={{
        backgroundColor: "rgba(52, 52, 59, 0.6)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(218, 218, 218, 0.2)",
        boxShadow: "0 0 10px rgba(228, 170, 72, 0.15)",
      }}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle at center, rgba(228, 170, 72, 0.3), transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      {/* Skill text */}
      <div className="relative flex flex-col items-center z-10 whitespace-nowrap">
        <div
          className="w-8 h-8 text-white"
          dangerouslySetInnerHTML={{ __html: img }}
        />
        <p className="mt-4 text-xs font-semibold md:font-medium">{name}</p>
      </div>

      {/* Accent border on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          border: "1px solid rgba(228, 170, 72, 0.4)",
        }}
      />
    </div>
  );
}
