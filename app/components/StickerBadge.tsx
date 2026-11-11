import React from "react";
import { motion } from "framer-motion";
import { BoxIcon } from "lucide-react";
interface StickerBadgeProps {
  icon: typeof BoxIcon;
  label: string;
  href: string;
  color: "pink" | "lavender" | "sage";
  rotation?: number;
  delay?: number;
}
export function StickerBadge({
  icon: Icon,
  label,
  href,
  color,
  rotation = 0,
  delay = 0,
}: StickerBadgeProps) {
  const colors = {
    pink: "bg-dusty-pink border-dusty-pink-dark text-ink",
    lavender: "bg-lavender border-[#c4b5d2] text-ink",
    sage: "bg-sage border-[#b8c4b8] text-ink",
  };
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{
        opacity: 0,
        scale: 0.8,
        rotate: rotation,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay,
        duration: 0.5,
        type: "spring",
      }}
      whileHover={{
        scale: 1.1,
        rotate: rotation + (Math.random() > 0.5 ? 5 : -5),
        transition: {
          type: "spring",
          stiffness: 300,
        },
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={`
        relative flex flex-col items-center justify-center p-4 
        rounded-full border-2 shadow-md cursor-pointer
        w-24 h-24 md:w-32 md:h-32
        ${colors[color]}
      `}
      style={{
        rotate: rotation,
      }}
    >
      <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-sm transform -translate-y-1 -translate-x-1" />
      <Icon className="w-8 h-8 md:w-10 md:h-10 mb-1 z-10" strokeWidth={1.5} />
      <span className="font-hand text-lg md:text-xl font-bold z-10">
        {label}
      </span>
    </motion.a>
  );
}
