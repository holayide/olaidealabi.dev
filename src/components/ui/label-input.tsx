import type { ReactNode } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface LabelInputProps {
  label: string;
  icon?: ReactNode;
  type?: "input" | "text-area";
  placeholder: string;
  error?: string;
  register?: UseFormRegisterReturn;
}

export default function LabelInput({
  label,
  icon,
  type = "input",
  placeholder,
  error,
  register,
}: LabelInputProps) {
  return (
    <div className="text-start">
      <label
        htmlFor={label.toLowerCase()}
        className="inline-block mb-1 text-sm font-medium"
      >
        {label}
      </label>
      {type === "input" ? (
        <>
          <div className="relative bg-light-grey rounded-lg overflow-hidden">
            <span className="text-sm absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              {icon}
            </span>
            <input
              {...register}
              type="text"
              id={label.toLowerCase()}
              placeholder={placeholder}
              className={`
                    py-3 px-4 pl-12 w-full text-sm transition-colors duration-200
                    border border-transparent rounded-lg
                    ${error ? "border-red-500" : "border-transparent"}
                    focus:border-accent focus:ring-1 focus:ring-accent
                    focus:outline-none placeholder:text-sm placeholder:text-white/35
                `}
            />
          </div>

          {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
        </>
      ) : (
        <>
          <textarea
            {...register}
            name="message"
            placeholder={placeholder}
            rows={6}
            className={` 
                    px-4 py-3 w-full rounded-lg transition-colors duration-200
                    bg-light-grey text-white text-sm 
                    ${error ? "border-red-500" : "border-transparent"}
                    focus:border-accent focus:ring-1 focus:ring-accent
                    focus:outline-none placeholder:text-sm placeholder:text-white/35
                `}
          ></textarea>

          {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
        </>
      )}
    </div>
  );
}
