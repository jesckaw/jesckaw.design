"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const isHovering = useRef(false);
  const scale = useSpring(1, { damping: 20, stiffness: 400 });
  const opacity = useSpring(1, { damping: 20, stiffness: 400 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
    };

    const handleMouseEnterLink = () => {
      scale.set(1.8);
      opacity.set(0.6);
      isHovering.current = true;
    };

    const handleMouseLeaveLink = () => {
      scale.set(1);
      opacity.set(1);
      isHovering.current = false;
    };

    window.addEventListener("mousemove", moveCursor);

    const addListeners = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnterLink);
        el.addEventListener("mouseleave", handleMouseLeaveLink);
      });
    };

    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, [cursorX, cursorY, dotX, dotY, scale, opacity]);

  return (
    <>
      {/* Ring cursor */}
      <motion.div
        className="custom-cursor w-8 h-8 rounded-full border border-accent"
        style={{
          x: smoothX,
          y: smoothY,
          scale,
          opacity,
        }}
      />
      {/* Dot cursor */}
      <motion.div
        className="custom-cursor w-1.5 h-1.5 rounded-full bg-accent"
        style={{
          x: dotX,
          y: dotY,
        }}
      />
    </>
  );
}
