export default function CTA() {
  return (
    <section className="bg-[#1747FF] py-40 text-center text-white">
      <div className="mx-auto max-w-4xl px-6">

        <h2 className="font-display text-7xl md:text-8xl font-bold leading-none tracking-tight">
          Ready to talk
          <br />
          to everyone?
        </h2>

        <p className="mt-8 text-xl text-blue-100">
          Start your first conversation in under 30 seconds.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          {/* Primary Button */}
          <button
            className="
            px-8
            py-4
            rounded-2xl
            bg-white
            text-[#1747FF]
            font-bold
            shadow-lg
            transition
            duration-300
            hover:scale-105
          "
          >
            Try Nativee Free
          </button>

          {/* Secondary Button */}
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
            transition
            duration-300
            hover:bg-white/20
          "
          >
            Watch Demo
          </button>

        </div>

      </div>
    </section>
  );
}
