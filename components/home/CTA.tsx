import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#1747FF] py-32">
      <div className="mx-auto max-w-5xl px-8 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-100">
          START BUILDING TODAY
        </p>

        <h2 className="mt-6 text-6xl font-black leading-tight text-white">
          Ready to build
          <br />
          without language barriers?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-blue-100">
          Integrate speech recognition, translation and
          multilingual communication into your product in minutes.
        </p>

        <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">

          <Link
            href="https://console.nativee.in"
            className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-[#1747FF] transition hover:scale-[1.02]"
          >
            Get API Key
          </Link>

          <Link
            href="https://developer.nativee.in"
            className="rounded-2xl border border-blue-200 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
          >
            Read Documentation
          </Link>

        </div>

      </div>
    </section>
  );
}