"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/send-email";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const result = await sendEmail(data);
      if (result.success) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Email send failed:", result.error);
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-2">
            Name
          </label>
          <input
            {...register("name")}
            className={`w-full bg-zinc-900 border ${
              errors.name ? "border-red-500" : "border-zinc-800"
            } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-2">
            Email
          </label>
          <input
            {...register("email")}
            className={`w-full bg-zinc-900 border ${
              errors.email ? "border-red-500" : "border-zinc-800"
            } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-2">
            Message
          </label>
          <textarea
            {...register("message")}
            rows={5}
            className={`w-full bg-zinc-900 border ${
              errors.message ? "border-red-500" : "border-zinc-800"
            } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none`}
            placeholder="Tell me about your project..."
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full relative group overflow-hidden rounded-lg p-[1px] transition-transform active:scale-[0.98]"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500" />
            <div className="relative bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-lg px-4 py-4 transition-all duration-300">
                 <span className="font-bold text-white flex items-center justify-center gap-2 text-lg uppercase tracking-wider">
                    {isSubmitting ? (
                        <>
                           <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                           </svg>
                           Sending...
                        </>
                    ) : (
                        "Send Message"
                    )}
                 </span>
            </div>
        </button>

        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-center text-sm"
          >
            Message sent successfully! I&apos;ll get back to you soon.
          </motion.div>
        )}
      </form>
    </div>
  );
}
