"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-32
        pb-32
        text-white
        bg-[linear-gradient(135deg,#1747FF_0%,#2556FF_35%,#1A45F7_70%,#123AF0_100%)]
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-[-250px] right-[-100px] h-[600px] w-[600px] rounded-full bg-[#6F8FFF]/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid min-h-[85vh] items-center gap-20 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left */}
          <div className="max-w-2xl">
            <div className="mb-8 text-sm uppercase tracking-[0.3em] text-white/80">
              Voice • Translate • Indian Languages
            </div>

            <h1
              className="
                font-display
                text-6xl
                leading-[0.9]
                tracking-tight
                md:text-7xl
                xl:text-[7.2rem]
              "
            >
              Language
              <br />
              Shouldn't
              <br />
              Matter.
            </h1>

            <p className="mt-10 max-w-lg text-xl leading-relaxed text-white/75">
              Speak, converse, call and message across India's languages
              instantly.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/home"
                className="
                  rounded-2xl
                  bg-white
                  px-8
                  py-4
                  font-bold
                  text-[#1747FF]
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Try Nativee Free
              </Link>

              <Link
                href="/home"
                className="
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/10
                  px-8
                  py-4
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-white/20
                "
              >
                See Demo
              </Link>
            </div>
          </div>

          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative">
        {/* Glow */}
        <div className="absolute -top-16 -right-16 h-72 w-72 rounded-full bg-white/15 blur-3xl" />

        {/* Phone */}
        <div
          className="
            relative
            h-[650px]
            w-[320px]
            overflow-hidden
            rounded-[50px]
            border-[3px]
            border-black
            bg-white
            shadow-[0_40px_100px_rgba(0,0,0,0.35)]
          "
        >
          {/* Status Bar */}
          <div className="flex justify-between px-5 pt-5 text-sm font-semibold text-black">
            <span>9:33</span>

            <div className="flex items-end gap-1">
              <div className="h-3 w-1 rounded bg-black" />
              <div className="h-4 w-1 rounded bg-black" />
              <div className="h-5 w-1 rounded bg-black" />
            </div>
          </div>

          {/* Header */}
          <div className="mt-8 px-6">
            <h2 className="text-5xl font-black tracking-tight text-black">
              Connect
            </h2>

            <p className="mt-2 text-lg text-zinc-500">
              Talk across languages.
            </p>

            <p className="text-zinc-400">
              Speak. They hear. Instantly.
            </p>
          </div>

          {/* Language Card */}
          <div className="mx-6 mt-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-black">
                  हिन्दी
                </div>

                <div className="text-sm text-zinc-400">
                  You speak
                </div>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-xl text-zinc-500">
                ⇄
              </div>

              <div className="text-right">
                <div className="text-3xl font-bold text-black">
                  Tamil
                </div>

                <div className="text-sm text-zinc-400">
                  They hear
                </div>
              </div>
            </div>
          </div>

          {/* Mic */}
          <div className="mt-12 flex justify-center">
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-[#1747FF] shadow-[0_20px_70px_rgba(23,71,255,.35)]">
              <svg
                className="h-14 w-14 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 14a3 3 0 0 0 3-3V7a3 3 0 1 0-6 0v4a3 3 0 0 0 3 3Z" />
                <path d="M19 11a7 7 0 0 1-14 0" />
                <path d="M12 18v3" />
              </svg>
            </div>
          </div>

          <div className="mt-4 text-center text-sm text-zinc-500">
            Tap to Speak
          </div>

          {/* Speech */}
          <div className="mx-6 mt-10 rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
            <div className="mb-2 text-sm text-zinc-500">
              You Said
            </div>

            <div className="italic text-zinc-400">
              Your speech will appear here
            </div>
          </div>

          {/* Translation */}
          <div className="mx-6 mt-4 rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
            <div className="mb-2 text-sm text-zinc-500">
              They Heard
            </div>

            <div className="italic text-zinc-400">
              Translation will appear here
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bottom-8 w-full text-center text-sm text-zinc-400">
            Built for India's languages
          </div>
        </div>
      </div>
    </div>
  );
}
