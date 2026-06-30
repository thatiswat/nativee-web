import { ReactNode } from "react";

interface HeroHeadingProps {
  badge: string;
  title: ReactNode;
  description: ReactNode;
}

export default function HeroHeading({
  badge,
  title,
  description,
}: HeroHeadingProps) {
  return (
    <div className="mx-auto max-w-5xl text-center">

      <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#1747FF]">
        {badge}
      </p>

      <h1 className="mt-5 text-[58px] font-black leading-[0.92] tracking-[-0.055em] text-slate-950 md:text-[74px] lg:text-[86px]">
        {title}
      </h1>

      <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
        {description}
      </p>

    </div>
  );
}