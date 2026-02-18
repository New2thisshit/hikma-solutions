"use client";

import { useEffect, useRef, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  focus: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Our dispatch dashboard replaced five spreadsheets. Route decisions now happen in minutes.",
    name: "Sibusiso Ndlovu",
    role: "Operations Manager",
    company: "Durban Freight Group",
    focus: "Internal dashboard",
  },
  {
    quote:
      "The internal approval tool removed bottlenecks across sales and finance in the first month.",
    name: "Aisha Naidoo",
    role: "Director",
    company: "Umhlanga Retail Co",
    focus: "Workflow automation",
  },
  {
    quote:
      "We launched a patient reporting dashboard with clear role permissions and clean audit tracking.",
    name: "Themba Khumalo",
    role: "Program Lead",
    company: "KZN Health Network",
    focus: "Reporting platform",
  },
  {
    quote:
      "The service desk portal and KPI dashboard gave our exec team real-time visibility for the first time.",
    name: "Lerato Mokoena",
    role: "COO",
    company: "eThekwini Facilities Services",
    focus: "Operations portal",
  },
  {
    quote:
      "Our quoting and booking process is now one flow. The team closes requests much faster.",
    name: "Ryan Pillay",
    role: "Founder",
    company: "Harbourline Engineering",
    focus: "Internal tools",
  },
  {
    quote:
      "The stock movement dashboard reduced reporting errors and improved branch coordination.",
    name: "Zanele Dlamini",
    role: "Head of Supply",
    company: "Mzansi Build Supply",
    focus: "Data dashboard",
  },
  {
    quote:
      "They delivered a secure admin console for our field teams with clear status tracking.",
    name: "Yusuf Khan",
    role: "Technical Manager",
    company: "Coastline Utilities SA",
    focus: "Admin console",
  },
  {
    quote:
      "Our leadership dashboard now brings sales, support, and delivery data into one view.",
    name: "Naledi Maseko",
    role: "Managing Director",
    company: "Gateway Commerce SA",
    focus: "Executive dashboard",
  },
];

export default function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pauseRef = useRef(false);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const cards = () =>
    trackRef.current
      ? Array.from(trackRef.current.querySelectorAll<HTMLElement>("[data-card]"))
      : [];

  const scrollToIndex = (index: number, behavior: ScrollBehavior = "smooth") => {
    const track = trackRef.current;
    if (!track) return;
    const nodes = cards();
    if (nodes.length === 0) return;

    const bounded = (index + nodes.length) % nodes.length;
    track.scrollTo({ left: nodes[bounded].offsetLeft, behavior });
    setActiveIndex(bounded);
  };

  const move = (direction: "next" | "prev") => {
    const delta = direction === "next" ? 1 : -1;
    scrollToIndex(activeIndexRef.current + delta);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const syncFromScroll = () => {
      const nodes = cards();
      if (nodes.length === 0) return;

      const left = track.scrollLeft;
      let bestIndex = 0;
      let bestDistance = Number.MAX_VALUE;

      nodes.forEach((node, index) => {
        const distance = Math.abs(node.offsetLeft - left);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });

      setActiveIndex(bestIndex);
    };

    const startAuto = () => {
      if (intervalRef.current) return;
      intervalRef.current = setInterval(() => {
        if (!pauseRef.current) {
          move("next");
        }
      }, 5000);
    };

    const stopAuto = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const onEnter = () => {
      pauseRef.current = true;
    };

    const onLeave = () => {
      pauseRef.current = false;
    };

    scrollToIndex(0, "auto");
    startAuto();

    track.addEventListener("scroll", syncFromScroll, { passive: true });
    track.addEventListener("mouseenter", onEnter);
    track.addEventListener("mouseleave", onLeave);

    return () => {
      stopAuto();
      track.removeEventListener("scroll", syncFromScroll);
      track.removeEventListener("mouseenter", onEnter);
      track.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="space-y-5">
      <div
        className="h-1.5 w-full overflow-hidden rounded-full"
        style={{ backgroundColor: "color-mix(in srgb, var(--panel), transparent 10%)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
            background:
              "linear-gradient(90deg, var(--teal), color-mix(in srgb, var(--aqua), var(--sky) 35%))",
          }}
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
          Client voices
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => move("prev")}
            className="flex h-9 w-9 items-center justify-center rounded-full border text-[color:var(--muted)] transition hover:text-[color:var(--ink)]"
            style={{
              borderColor: "var(--panel-border)",
              backgroundColor: "var(--panel)",
            }}
            aria-label="Previous testimonial"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 6.5L9 12l5.5 5.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => move("next")}
            className="flex h-9 w-9 items-center justify-center rounded-full border text-[color:var(--muted)] transition hover:text-[color:var(--ink)]"
            style={{
              borderColor: "var(--panel-border)",
              backgroundColor: "var(--panel)",
            }}
            aria-label="Next testimonial"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 6.5L15 12l-5.5 5.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto pb-2 snap-row scrollbar-hide carousel-fade"
      >
        {testimonials.map((item, index) => (
          <div
            key={`${item.name}-${item.company}`}
            data-card
            className={`panel w-[min(24rem,88vw)] flex-none snap-item p-5 hover-halo transition-all duration-500 ${
              index === activeIndex
                ? "scale-[1.01] shadow-[0_22px_60px_rgba(30,166,163,0.22)]"
                : "opacity-80"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--teal)] text-sm font-semibold text-white">
                {item.name
                  .split(" ")
                  .map((chunk) => chunk[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                <p className="text-xs text-slate-500">
                  {item.role} - {item.company}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-700">"{item.quote}"</p>
            <p
              className="mt-4 inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]"
              style={{ borderColor: "var(--panel-border)" }}
            >
              {item.focus}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2">
        {testimonials.map((item, index) => (
          <button
            key={`dot-${item.name}`}
            type="button"
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className="h-2.5 rounded-full transition-all duration-300"
            style={{
              width: index === activeIndex ? 26 : 10,
              backgroundColor:
                index === activeIndex ? "var(--teal)" : "var(--panel-border)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
