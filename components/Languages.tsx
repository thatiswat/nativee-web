export default function Languages() {
  const languages = [
    {
      native: "हिन्दी",
      english: "Hindi",
    },
    {
      native: "தமிழ்",
      english: "Tamil",
    },
    {
      native: "ಕನ್ನಡ",
      english: "Kannada",
    },
    {
      native: "తెలుగు",
      english: "Telugu",
    },
    {
      native: "മലയാളം",
      english: "Malayalam",
      selected: true,
    },
    {
      native: "English",
      english: "English",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl md:text-6xl font-black tracking-tight">
          आपकी भाषा में · In your language
        </h2>

        <p className="mt-6 text-xl text-zinc-500 max-w-4xl">
          Choose your language. The other person chooses theirs.
          Nativee handles everything in between.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-14">

          {languages.map((language) => (
            <div
              key={language.native}
              className={`
                rounded-[32px]
                border
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]
                ${
                  language.selected
                    ? "border-[#1747FF] bg-blue-50"
                    : "border-zinc-200 bg-white"
                }
              `}
            >
              <div className="text-5xl font-black">
                {language.native}
              </div>

              <div className="mt-3 text-lg text-zinc-500">
                {language.english}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}