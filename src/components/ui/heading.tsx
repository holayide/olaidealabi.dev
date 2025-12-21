import type { HeadingProps } from "@/type";

export default function Heading({ title, type = "light" }: HeadingProps) {
  return (
    <div className="inline-block mb-12">
      <h3 className="text-2xl font-bold pb-2 px-2.5 tracking-[0.12em] uppercase">
        {title}
      </h3>
      <hr className="w-full border-2 border-accent" />
      <div className="text-center -mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#e4aa48"
          viewBox="0 0 20 20"
          className={`w-5 h-5 inline-block  ${
            type === "light" ? "bg-light-grey" : "bg-dark-gray"
          }`}
        >
          <path fillRule="evenodd" d="M5 8l5 5 5-5H5z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}
