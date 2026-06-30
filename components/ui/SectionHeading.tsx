import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-4xl text-center"
          : "max-w-4xl"
      }
    >
      {badge && (
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1747FF]">
          {badge}
        </p>
      )}

      <h2 className="mt-4 text-4xl font-bold tracking-tight leading-tight text-slate-950 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}