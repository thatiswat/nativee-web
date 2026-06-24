export default function TrustStrip() {
  const stats = [
    {
      value: "22+",
      label: "Indian languages",
    },
    {
      value: "<1s",
      label: "Translation speed",
    },
    {
      value: "4",
      label: "Ways to communicate",
    },
    {
      value: "Free",
      label: "To get started",
    },
  ];

  return (
    <section className="border-y border-zinc-900 bg-[#050816] text-white">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-2 md:grid-cols-4">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                py-12
                text-center
                ${index !== stats.length - 1 ? "md:border-r md:border-zinc-900" : ""}
              `}
            >
              <div className="text-5xl font-black tracking-tight">
                {stat.value}
              </div>

              <div className="mt-3 text-sm text-zinc-400">
                {stat.label}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
