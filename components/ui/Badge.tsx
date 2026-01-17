import { cn } from "@/lib/utils";
import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-xs font-semibold text-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
