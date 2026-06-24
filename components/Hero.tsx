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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="
          absolute
          top-[-200px]
          left-[-100px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-white/10
          blur-3xl
        "
        />

        <div
          className="
          absolute
          bottom-[-250px]
          right-[-100px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#6F8FFF]/20
          blur-3xl
        "
        />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div
          className="
          min-h-[85vh]
          grid
          items-center
          gap-20
          lg:grid-cols-[1.05fr_0.95fr]
        "
        >

          {/* Left */}
          <div className="max-w-2xl">

            <div className="mb-8 text-sm uppercase tracking-[0.3em] text-white/80">
              Voice • Translate • Indian Languages
            </div>

            <h1
              className="
              font-display
              text-6xl
              md:text-7xl
              xl:text-[7.2rem]
              leading-[0.9]
              tracking-tight
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

              <button
                className="
                px-8
                py-4
                rounded-2xl
                bg-white
                text-[#1747FF]
                font-bold
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
              "
              >
                Try Nativee Free
              </button>

              <button
                className="
                px-8
                py-4
                rounded-2xl
                border
                border-white/20
                bg-white/10
                backdrop-blur-md
                text-white
                transition-all
                duration-300
                hover:bg-white/20
              "
              >
                See Demo
              </button>

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
    <div className="flex justify-center">

      <div className="relative">

        {/* Glow */}
        <div className="absolute -top-16 -right-16 h-60 w-60 rounded-full bg-white/20 blur-3xl" />

        {/* Phone */}
        <div
          className="
          relative
          h-[620px]
          w-[300px]
          rounded-[46px]
          border
          border-white/10
          bg-[#081021]
          p-6
          shadow-[0_40px_100px_rgba(0,0,0,0.35)]
        "
        >

          {/* Status */}
          <div className="flex justify-between text-xs text-zinc-500">
            <span>9:41</span>
            <span>Nativee</span>
          </div>

          {/* Language Selector */}
          <div className="mt-8 flex items-center justify-between rounded-2xl border border-zinc-800 bg-[#0D1222] p-4">

            <span className="font-medium">
              English
            </span>

            <span className="text-lg text-[#1747FF]">
              ⇄
            </span>

            <span className="font-medium">
              हिन्दी
            </span>

          </div>

          {/* You Said */}
          <div className="mt-10">

            <div className="mb-3 text-xs uppercase tracking-[0.25em] text-zinc-500">
              You Said
            </div>

            <div className="rounded-3xl bg-[#1747FF] p-5 text-lg">
              Where is the railway station?
            </div>

          </div>

          {/* Translation */}
          <div className="mt-8">

            <div className="mb-3 text-xs uppercase tracking-[0.25em] text-zinc-500">
              They Heard
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-[#0D1222] p-5 text-lg">
              रेलवे स्टेशन कहाँ है?
            </div>

          </div>

          {/* Voice Wave */}
          <div className="mt-16 flex items-end justify-center gap-2">

            <div className="h-4 w-1 rounded-full bg-zinc-700" />
            <div className="h-8 w-1 rounded-full bg-[#1747FF]" />
            <div className="h-12 w-1 rounded-full bg-[#1747FF]" />
            <div className="h-8 w-1 rounded-full bg-[#1747FF]" />
            <div className="h-4 w-1 rounded-full bg-zinc-700" />

          </div>

          {/* Mic */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2">

            <div
              className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-[#1747FF]
              shadow-[0_20px_60px_rgba(23,71,255,0.5)]
            "
            >

              <span className="text-3xl">
                🎤
              </span>

            </div>

          </div>

          {/* Footer */}
          <div className="absolute bottom-8 left-0 w-full text-center text-sm text-zinc-500">
            Tap to speak
          </div>

        </div>

      </div>

    </div>
  );
}