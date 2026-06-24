import Link from "next/link";
import Logo from "@/components/Logo";

export default function NativeeHome() {
  return (
    <main className="min-h-screen bg-[#F8F9FC]">
      <div className="max-w-5xl mx-auto px-6 py-16">

        <Logo />

        <div className="mt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1747FF]">
            Nativee
          </p>

          <h1 className="mt-4 text-5xl md:text-7xl font-black tracking-tight">
            Choose how you
            <br />
            want to communicate.
          </h1>

          <p className="mt-6 text-xl text-zinc-500 max-w-2xl">
            One platform for speaking across languages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">

          <Link
            href="/connect"
            className="
              bg-white
              border
              rounded-[32px]
              p-10
              hover:shadow-xl
              transition
            "
          >
            <div className="text-5xl">🎤</div>

            <h2 className="mt-6 text-4xl font-bold">
              Connect
            </h2>

            <p className="mt-4 text-zinc-500 text-lg">
              Speak once. Hear translation instantly.
            </p>
          </Link>

          <Link
            href="/converse"
            className="
              bg-white
              border
              rounded-[32px]
              p-10
              hover:shadow-xl
              transition
            "
          >
            <div className="text-5xl">💬</div>

            <h2 className="mt-6 text-4xl font-bold">
              Converse
            </h2>

            <p className="mt-4 text-zinc-500 text-lg">
              Live two-way conversation.
            </p>
          </Link>

          <div
            className="
              bg-white
              border
              rounded-[32px]
              p-10
              opacity-50
            "
          >
            <div className="text-5xl">📞</div>

            <h2 className="mt-6 text-4xl font-bold">
              Call
            </h2>

            <p className="mt-4 text-zinc-500 text-lg">
              Coming soon.
            </p>
          </div>

          <div
            className="
              bg-white
              border
              rounded-[32px]
              p-10
              opacity-50
            "
          >
            <div className="text-5xl">✉️</div>

            <h2 className="mt-6 text-4xl font-bold">
              Chat
            </h2>

            <p className="mt-4 text-zinc-500 text-lg">
              Coming soon.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}