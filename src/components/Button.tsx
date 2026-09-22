import React from "react";
import { motion } from "motion/react";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd" | "style"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  // Styles aligned with our custom brand-500 (emerald/mint) and neutral-warm palette.
  const baseStyle = "inline-flex items-center justify-center font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none text-nowrap select-none cursor-pointer";
  
  const variants = {
    primary: "bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white shadow-sm shadow-brand-500/10",
    secondary: "bg-brand-50 text-brand-700 hover:bg-brand-100 active:bg-brand-200",
    outline: "border border-neutral-warm-200 hover:border-neutral-warm-300 text-neutral-warm-700 hover:bg-neutral-warm-50 active:bg-neutral-warm-100",
    ghost: "text-neutral-warm-600 hover:text-neutral-warm-900 hover:bg-neutral-warm-100/55 active:bg-neutral-warm-100",
    danger: "bg-red-500 hover:bg-red-600 active:bg-red-700 text-white shadow-sm"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg"
  };

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
