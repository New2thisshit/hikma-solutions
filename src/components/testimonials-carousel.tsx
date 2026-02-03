"use client";

import { useEffect, useRef } from "react";

type Testimonial = {
  quote: string;
  name: string;
  org: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Hikma Solutions guided us through scope decisions and kept every milestone predictable.",
    name: "Operations Lead",
    org: "Logistics Team",
  },
  {
    quote:
      "The communication was crisp, and the delivery quality exceeded expectations.",
    name: "Product Founder",
    org: "Mobile Startup",
  },
  {
    quote:
      "They moved fast without sacrificing polish, which is rare to find.",
    name: "Marketing Director",
    org: "Growth Agency",
  },
];

export default function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollByCard = (direction: "next" | "prev") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const gap = 16;
    const amount = card.offsetWidth + gap;
    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const startAuto = () => {
      intervalRef.current = setInterval(() => {
        scrollByCard("next");
      }, 4200);
    };

    const stopAuto = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    startAuto();
    track.addEventListener("mouseenter", stopAuto);
    track.addEventListener("mouseleave", startAuto);

    return () => {
      stopAuto();
      track.removeEventListener("mouseenter", stopAuto);
      track.removeEventListener("mouseleave", startAuto);
    };
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
          Client voices
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByCard("prev")}
            className="flex h-9 w-9 items-center justify-center rounded-full border text-[color:var(--muted)] transition hover:text-[color:var(--ink)]"
            style={{
              borderColor: "var(--panel-border)",
              backgroundColor: "var(--panel)",
            }}
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("next")}
            className="flex h-9 w-9 items-center justify-center rounded-full border text-[color:var(--muted)] transition hover:text-[color:var(--ink)]"
            style={{
              borderColor: "var(--panel-border)",
              backgroundColor: "var(--panel)",
            }}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
      </div>
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto pb-2 snap-row scrollbar-hide carousel-fade"
      >
        {testimonials.map((item) => (
          <div
            key={item.quote}
            data-card
            className="panel w-72 flex-none snap-item p-5 hover-halo"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--teal)] text-sm font-semibold text-white">
                {item.name
                  .split(" ")
                  .map((chunk) => chunk[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {item.name}
                </p>
                <p className="text-xs text-slate-500">{item.org}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-700">"{item.quote}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
