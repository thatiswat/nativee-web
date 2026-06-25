export default function WhyNativee() {
  const items = [
    "Indian-first",
    "Voice-first",
    "Real-time",
    "Natural conversations",
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold mb-20">
          Built for India.
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item}
              className="border rounded-3xl p-8"
            >
              <div className="w-2 h-2 rounded-full bg-blue-600 mb-6" />

              <h3 className="text-xl font-semibold">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}