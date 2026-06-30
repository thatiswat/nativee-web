import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  spacing?: "hero" | "default" | "compact";
}

export default function Section({
  children,
  className = "",
  spacing = "default",
}: SectionProps) {
  const spacingClass = {
    hero: "py-16 lg:py-20",
    default: "py-20 lg:py-24",
    compact: "py-16 lg:py-20",
  };

  return (
    <section
      className={`${spacingClass[spacing]} ${className}`}
    >
      {children}
    </section>
  );
}