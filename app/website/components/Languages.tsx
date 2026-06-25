export default function Languages() {
  const languages = [
    {
      native: "हिंदी",
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
    },
    {
      native: "English",
      english: "English",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-5xl font-bold tracking-tight">
          In your language
        </h2>

        <p className="mt-4 max-w-3xl text-xl text-zinc-500">
          Choose your language. The other person chooses theirs.
          Nativee handles everything in between.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {languages.map((language) => (
            <div
              key={language.english}
              className="
                rounded-3xl
                border
                border-zinc-200
                bg-white
                p-8
                transition
                hover:border-[#1747FF]
              "
            >
              <div className="text-5xl font-bold">
                {language.native}
              </div>

              <div className="mt-3 text-xl text-zinc-500">
                {language.english}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}