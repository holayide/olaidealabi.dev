export default function Heading({ title }: { title: string }) {
  return (
    <div className="inline-block mb-8 md:mb-12 animate-fade-in-down">
      <h2 className="text-2xl md:text-4xl font-bold pb-2 px-2.5">{title}</h2>
      <div className="flex items-center justify-center gap-4">
        <div className="h-0.5 w-20 md:w-32 bg-linear-to-r from-transparent via-yellow-500 to-yellow-500"></div>
        <div className="w-3 h-3 bg-yellow-500 rotate-45"></div>
        <div className="h-0.5 w-20 md:w-32 bg-linear-to-l from-transparent via-yellow-500 to-yellow-500"></div>
      </div>
    </div>
  );
}
