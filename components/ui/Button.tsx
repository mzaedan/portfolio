import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "lucide-react"; // Import a dummy link just in case used, but Button is usually button or a tag.

// We will make this polymorphic if needed, but for now simple Button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-foreground text-white hover:opacity-90",
    outline: "border border-foreground/10 hover:bg-foreground/5",
    ghost: "hover:bg-black/5",
    link: "text-foreground hover:underline p-0 h-auto",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
