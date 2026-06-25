import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-100 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/home">
          <Logo className="text-3xl" />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 text-sm text-zinc-500 md:flex">
          <a
            href="#modes"
            className="transition-colors hover:text-black"
          >
            Modes
          </a>

          <a
            href="#how"
            className="transition-colors hover:text-black"
          >
            How
          </a>

          <a
            href="#why"
            className="transition-colors hover:text-black"
          >
            Why
          </a>
        </nav>

        {/* CTA */}
        <Link
          href="/home"
          className="
            rounded-3xl
            bg-[#1747FF]
            px-8
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-lg
          "
        >
          Try Nativee
        </Link>

      </div>
    </header>
  );
}