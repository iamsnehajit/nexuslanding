"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    if (!cursor) return;

    // ১. মাউসের সাথে কার্সার মুভমেন্ট (Duration 0.12 মানে মাখনের মতো স্মুথ ইনার্শিয়া)
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.12,
        ease: "power2.out",
      });
    };

    // ২. গ্লোবাল হোভার ডিটেকশন (সব লিংক ও বাটনের জন্য অটো কাজ করবে)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a") || target.closest("button");

      if (isInteractive) {
        cursor.classList.add("cursor-grow");
      } else {
        cursor.classList.remove("cursor-grow");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      className="hidden md:block"
      style={{ position: 'fixed', pointerEvents: 'none' }}
    />
  );
}