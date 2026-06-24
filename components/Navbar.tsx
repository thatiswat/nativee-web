import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-zinc-100">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Logo className="text-3xl" />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-zinc-500">
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
        <button
          className="
            rounded-2xl
            bg-[#1747FF]
            px-6
            py-3
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-lg
          "
        >
          Try Nativee
        </button>

      </div>
    </header>
  );
}
