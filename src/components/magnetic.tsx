"use client";

import { useEffect } from "react";

export default function MagneticController() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-magnet]")
    );

    const handleMove = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const relX = event.clientX - rect.left - rect.width / 2;
      const relY = event.clientY - rect.top - rect.height / 2;
      target.style.transform = `translate(${relX * 0.12}px, ${relY * 0.12}px)`;
    };

    const handleLeave = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      target.style.transform = "translate(0px, 0px)";
    };

    elements.forEach((el) => {
      el.style.transition = "transform 200ms ease";
      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return null;
}
