export default function AboutContent() {
  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
      <div className="border border-red-700">img</div>

      <div className="flex flex-col gap-5 text-start">
        <p className="leading-6">
          I’m a frontend web developer with a strong eye for design and a
          passion for building seamless, user-focused digital experiences. I
          bridge the gap between aesthetic design and clean, scalable code.
        </p>

        <p>
          My work centers on crafting modern interfaces using technologies like
          React, Next.js, and Tailwind CSS, guided by solid UX principles. I
          also leverage AI-powered tools to improve development efficiency,
          accessibility, and overall user experience. I believe great websites
          do more than look good — they communicate clearly, perform
          efficiently, and solve real problems.
        </p>

        <p>
          Beyond coding, I enjoy exploring design trends, refining my craft, and
          contributing to meaningful projects.
        </p>
      </div>
    </div>
  );
}
