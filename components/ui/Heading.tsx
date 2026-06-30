import { ReactNode } from "react";

interface HeadingProps {
  badge?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export default function Heading({
  badge,
  title,
  description,
  align = "left",
}: HeadingProps) {
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

      <h2 className="mt-4 text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-slate-950 md:text-6xl lg:text-7xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}