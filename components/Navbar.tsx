import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="
      max-w-7xl
      mx-auto
      px-8
      py-8
      flex
      items-center
      justify-between
      "
    >
      <Link
        href="/"
        className="
        text-2xl
        font-semibold
        tracking-tight
        "
      >
        1Speak
      </Link>

      <Link
        href="/connect"
        className="
        px-5
        py-2.5
        rounded-full
        border
        border-zinc-800
        hover:bg-zinc-900
        transition
        "
      >
        Open Connect
      </Link>
    </nav>
  );
}