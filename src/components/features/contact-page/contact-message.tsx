import { Mail, UserPen } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import LabelInput from "@/components/ui/label-input";
import type { ContactFormValues } from "@/type";

export default function ContactMessage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>();

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("https://formspree.io/f/xreboolg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully!", { duration: 4000 });
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.", {
        duration: 5000,
      });
    }
  };

  return (
    <div className="p-8 border border-accent/30 rounded-4xl">
      <h4 className="text-lg text-start mb-8 font-semibold">Send a Message</h4>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <LabelInput
          label="Your Name"
          icon={<UserPen />}
          placeholder="jone doe"
          error={errors.name?.message}
          register={register("name", { required: "Name is required" })}
        />

        <LabelInput
          label="Email Address"
          icon={<Mail />}
          placeholder="example@gmail.com"
          error={errors.email?.message}
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
        />

        <LabelInput
          label="Project Details"
          type="text-area"
          placeholder="Please describe your project, requirements, and any specific questions you have..."
          error={errors.message?.message}
          register={register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-7 py-4 bg-accent hover:bg-accent-soft text-black text-sm font-semibold rounded-full cursor-pointer transition-colors duration-200"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-3">
              <div className="w-3 h-3 border-2 border-t-transparent border-black rounded-full animate-spin" />{" "}
              <span>Sending...</span>
            </div>
          ) : (
            "Submit Message"
          )}
        </button>
      </form>
    </div>
  );
}
