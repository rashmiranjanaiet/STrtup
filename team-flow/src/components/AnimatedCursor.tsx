"use client";

import { useEffect, useRef } from "react";

export function AnimatedCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isCoarse || reduceMotion) {
      return;
    }

    let pointerX = window.innerWidth * 0.5;
    let pointerY = window.innerHeight * 0.5;
    let ringX = pointerX;
    let ringY = pointerY;
    let active = false;
    let pressed = false;
    let visible = false;

    document.body.classList.add("custom-cursor");

    const updatePosition = (event: MouseEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      visible = true;
    };

    const updateActive = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      active = Boolean(
        target?.closest("a, button, input, textarea, select, label, summary, [role='button']")
      );
      visible = true;
    };

    const onMouseDown = () => {
      pressed = true;
    };

    const onMouseUp = () => {
      pressed = false;
    };

    const onMouseOut = (event: MouseEvent) => {
      if (!event.relatedTarget) {
        visible = false;
      }
    };

    let frameId = 0;

    const animate = () => {
      ringX += (pointerX - ringX) * 0.18;
      ringY += (pointerY - ringY) * 0.18;

      if (dotRef.current) {
        const dotScale = pressed ? 0.74 : 1;
        dotRef.current.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%) scale(${dotScale})`;
        dotRef.current.style.opacity = visible ? "1" : "0";
      }

      if (ringRef.current) {
        const ringScale = active ? 1.5 : 1;
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;
        ringRef.current.style.opacity = visible ? "1" : "0";
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    window.addEventListener("mousemove", updatePosition, { passive: true });
    window.addEventListener("mouseover", updateActive, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    window.addEventListener("mouseout", onMouseOut, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateActive);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseout", onMouseOut);
      document.body.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <>
      <div className="cursor-ring" ref={ringRef} aria-hidden />
      <div className="cursor-dot" ref={dotRef} aria-hidden />
    </>
  );
}
