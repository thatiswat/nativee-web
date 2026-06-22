export default function Features() {
  const items = [
    {
      title: "Real-Time Translation",
      text: "Speak and hear translations instantly."
    },
    {
      title: "Built For India",
      text: "Indian languages first."
    },
    {
      title: "For Everyone",
      text: "Travelers, families and businesses."
    }
  ];

  return (
    <section
      className="
      max-w-6xl
      mx-auto
      px-6
      py-16
      "
    >
      <div
        className="
        grid
        md:grid-cols-3
        gap-6
        "
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="
            rounded-3xl
            border
            border-slate-800
            bg-slate-900/30
            p-8
            "
          >
            <h3
              className="
              text-xl
              font-semibold
              "
            >
              {item.title}
            </h3>

            <p
              className="
              mt-3
              text-slate-400
              "
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}