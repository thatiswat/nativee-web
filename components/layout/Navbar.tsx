"use client";

import Link from "next/link";

const links = [
  {
    name: "Products",
    href: "#products",
  },
  {
    name: "Developers",
    href: "https://developer.nativee.in",
  },
  {
    name: "Enterprise",
    href: "#enterprise",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <Link
          href="/"
          className="text-[34px] font-black tracking-[-0.04em] text-slate-950"
        >
          Native
          <span className="text-[#1747FF]">e</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[15px] font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden items-center gap-8 lg:flex">

          <Link
            href="/login"
            className="text-[15px] font-medium text-slate-700 transition-colors hover:text-slate-950"
          >
            Log in
          </Link>

          <Link
            href="https://app.nativee.in"
            className="rounded-2xl bg-[#1747FF] px-7 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#0f3ff5]"
          >
            Get API Key
          </Link>

        </div>

      </div>
    </header>
  );
}