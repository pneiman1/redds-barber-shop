import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  glowOnHover?: boolean;
}

export function Card({
  children,
  className,
  hoverable = true,
  glowOnHover = false,
}: CardProps) {
  return (
    <motion.div
      className={cn(
        "bg-background-secondary rounded-lg p-6 border border-foreground/10",
        hoverable && "transition-all duration-300",
        className
      )}
      whileHover={
        hoverable
          ? {
              y: -5,
              scale: 1.03,
              boxShadow: glowOnHover
                ? "0 0 20px rgba(220, 38, 38, 0.5)"
                : "0 10px 30px rgba(0, 0, 0, 0.3)",
            }
          : {}
      }
    >
      {children}
    </motion.div>
  );
}
