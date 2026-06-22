import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <h1 className="text-3xl font-semibold tracking-tight">
            1Speak
          </h1>

          <Link
            href="/connect"
            className="px-6 py-3 rounded-full bg-black text-white hover:opacity-90 transition"
          >
            Open Connect
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="h-[85vh] flex flex-col items-center justify-center px-8 text-center">
        <h1 className="text-5xl md:text-[7rem] leading-[0.9] font-bold tracking-tight">
          Language
          <br />
          Shouldn't
          <br />
          Matter.
        </h1>

        <p className="mt-8 text-lg text-zinc-500 max-w-2xl">
          Real-time voice translation for conversations across India.
        </p>

        <Link
          href="/connect"
          className="mt-12 px-10 py-5 rounded-full bg-black text-white text-lg hover:scale-105 transition"
        >
          Open Connect
        </Link>
      </section>

      {/* SEE IT IN ACTION */}
      <section className="py-32 px-8 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            See it in action
          </h2>

          <div className="mt-16 space-y-10 text-lg">

            <div>
              <p className="font-semibold">You</p>
              <p className="mt-2">Hello</p>
            </div>

            <div className="text-zinc-400">↓</div>

            <div>
              <p className="font-semibold">Hindi</p>
              <p className="mt-2">नमस्ते</p>
            </div>

            <div className="text-zinc-400">↓</div>

            <div>
              <p className="font-semibold">Tamil</p>
              <p className="mt-2">வணக்கம்</p>
            </div>

          </div>

        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto border border-zinc-200 rounded-[40px] p-10">

          <div className="flex justify-center items-center gap-6 text-lg">
            <span>English</span>
            <span>⇄</span>
            <span>Hindi</span>
          </div>

          <div className="w-28 h-28 rounded-full bg-black mx-auto mt-10" />

          <p className="text-center text-zinc-500 mt-4">
            Hold to Speak
          </p>

          <div className="mt-12">
            <p className="font-semibold">You</p>
            <p className="mt-2">Hello</p>

            <div className="mt-8">
              <p className="font-semibold">Hindi</p>
              <p className="mt-2">नमस्ते</p>
            </div>
          </div>

        </div>
      </section>

      {/* LANGUAGES */}
      <section className="py-32 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-8 text-center">

          <h2 className="text-5xl md:text-6xl font-bold">
            Built For
            <br />
            Indian Languages
          </h2>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {[
              "English",
              "Hindi",
              "Kannada",
              "Tamil",
              "Telugu",
              "Malayalam"
            ].map((lang) => (
              <div
                key={lang}
                className="px-6 py-3 rounded-full border border-zinc-200"
              >
                {lang}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY SECTION */}
      <section className="py-32 px-8 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

          <div>
            <h3 className="text-3xl font-bold">Instant</h3>
            <p className="mt-4 text-zinc-500">
              No typing. No waiting.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Natural</h3>
            <p className="mt-4 text-zinc-500">
              Speak exactly as you normally do.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Indian</h3>
            <p className="mt-4 text-zinc-500">
              Built around Indian languages first.
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-32 px-8 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-center">
            How It Works
          </h2>

          <div className="mt-20 grid md:grid-cols-3 gap-12 text-center">

            <div>
              <p className="text-zinc-400">01</p>
              <h3 className="mt-3 text-2xl font-semibold">
                Choose Languages
              </h3>
            </div>

            <div>
              <p className="text-zinc-400">02</p>
              <h3 className="mt-3 text-2xl font-semibold">
                Hold To Speak
              </h3>
            </div>

            <div>
              <p className="text-zinc-400">03</p>
              <h3 className="mt-3 text-2xl font-semibold">
                Hear Translation
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-40 text-center border-t border-zinc-100">
        <h2 className="text-6xl font-bold">
          Ready to Talk?
        </h2>

        <Link
          href="/connect"
          className="inline-block mt-10 px-10 py-5 rounded-full bg-black text-white hover:scale-105 transition"
        >
          Open Connect
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">

          <div className="font-semibold">
            1Speak
          </div>

          <div className="text-zinc-500">
            Built in India.
          </div>

        </div>
      </footer>

    </main>
  );
}