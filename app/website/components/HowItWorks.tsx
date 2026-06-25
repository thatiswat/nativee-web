export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Languages",
      desc: "Pick what you speak and what they speak.",
    },
    {
      number: "02",
      title: "Hold To Speak",
      desc: "Speak naturally. Nativee listens instantly.",
    },
    {
      number: "03",
      title: "Hear Translation",
      desc: "Translation plays back immediately.",
    },
  ];

  return (
    <section className="bg-black text-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold mb-20">
          Three steps.
          <br />
          Zero friction.
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="text-blue-500 text-6xl font-bold mb-6">
                {step.number}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-zinc-400">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}