export default function ProductModes() {
  const modes = [
    {
      number: "01",
      title: "Connect",
      description:
        "Speak once. Hear translation instantly in another language.",
    },
    {
      number: "02",
      title: "Converse",
      description:
        "Two people speaking different languages in one conversation.",
    },
    {
      number: "03",
      title: "Call",
      description:
        "Real-time translated calling. Coming soon.",
    },
    {
      number: "04",
      title: "Chat",
      description:
        "Messages automatically translated across languages.",
    },
  ];

  return (
    <section className="bg-white px-6 py-32">
      <div className="mx-auto max-w-6xl">

        {/* Label */}
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#1747FF]">
          Four Modes
        </span>

        {/* Heading */}
        <h2 className="mt-4 text-5xl md:text-7xl font-bold leading-none tracking-tight">
          Four ways
          <br />
          to use Nativee.
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-xl text-zinc-500 leading-relaxed">
          Choose the mode that fits your conversation.
        </p>

        {/* Cards */}
        <div className="mt-16 grid overflow-hidden rounded-[32px] border border-zinc-200 md:grid-cols-2">

          {modes.map((mode) => (
            <div
              key={mode.number}
              className="
                group
                min-h-[260px]
                border
                border-zinc-200
                p-12
                transition-all
                duration-300
                hover:bg-black
                hover:text-white
              "
            >
              {/* Number */}
              <p className="mb-8 text-sm tracking-wide text-zinc-400">
                {mode.number}
              </p>

              {/* Title */}
              <h3 className="mb-5 text-4xl md:text-5xl font-bold leading-tight">
                {mode.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-lg
                  leading-relaxed
                  text-zinc-500
                  transition-colors
                  duration-300
                  group-hover:text-zinc-300
                "
              >
                {mode.description}
              </p>

              {/* Arrow */}
              <div
                className="
                  mt-10
                  text-3xl
                  text-[#1747FF]
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                "
              >
                →
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}