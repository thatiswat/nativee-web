export default function Languages() {
  const langs = [
    "English",
    "Hindi",
    "Kannada",
    "Tamil",
    "Telugu",
    "Malayalam"
  ];

  return (
    <section
      className="
      max-w-6xl
      mx-auto
      px-8
      py-32
      "
    >
      <h2
        className="
        text-5xl
        font-bold
        text-center
        "
      >
        Built For
        <br />
        Indian Languages
      </h2>

      <div
        className="
        mt-16
        flex
        flex-wrap
        justify-center
        gap-4
        "
      >
        {langs.map((lang) => (
          <div
            key={lang}
            className="
            px-6
            py-3
            rounded-full
            border
            border-zinc-800
            text-zinc-300
            "
          >
            {lang}
          </div>
        ))}
      </div>
    </section>
  );
}