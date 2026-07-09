"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Reveal from "./Reveal";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function onSubmit(data: FormValues) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-28 border-t border-line relative overflow-hidden">
      <div className="glow bg-blue w-[400px] h-[400px] top-0 left-1/3 animate-drift" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
        <Reveal>
          <>
            <p className="font-mono text-xs uppercase tracking-widest text-blue mb-3">Get started</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-6">
              Let&apos;s talk about what you actually need.
            </h2>
            <p className="text-dim leading-relaxed mb-10 max-w-md">
              Book a free 20-minute call. We&apos;ll listen to what&apos;s slowing you down, map out
              what automation could fix, and put together a plan and a price built around your
              business — not a fixed package.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-dim">
                <span className="text-ink font-medium">Email</span> hello@vantageai.co
              </div>
              <div className="flex items-center gap-3 text-dim">
                <span className="text-ink font-medium">Phone</span> (555) 019-2244
              </div>
              <div className="flex items-center gap-3 text-dim">
                <span className="text-ink font-medium">Based in</span> Los Angeles, CA
              </div>
            </div>
          </>
        </Reveal>

        <Reveal className="glass rounded-2xl p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-dim block mb-2">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="w-full rounded-lg px-4 py-3 text-sm"
                placeholder="Jamie Rivera"
              />
              {errors.name && <p className="text-xs text-blue mt-1">Name is required.</p>}
            </div>
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-dim block mb-2">
                Business email
              </label>
              <input
                {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                type="email"
                className="w-full rounded-lg px-4 py-3 text-sm"
                placeholder="jamie@business.com"
              />
              {errors.email && <p className="text-xs text-blue mt-1">Valid email is required.</p>}
            </div>
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-dim block mb-2">
                What&apos;s slowing you down, or what would you love automated?
              </label>
              <textarea
                {...register("message")}
                rows={3}
                className="w-full rounded-lg px-4 py-3 text-sm"
                placeholder="Tell us the idea, however specific or vague — we'll figure out if it's possible."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue to-purple text-white rounded-lg py-3.5 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Request my strategy call"}
            </button>
            {status === "success" && (
              <p className="text-xs text-center text-dim">
                Thanks — we got your message and will reach out shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-center text-blue">
                Something went wrong sending that. Please email hello@vantageai.co directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
