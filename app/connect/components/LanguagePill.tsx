type Props = {
  sourceLanguage: string;
  targetLanguage: string;
  onSourceChange: (v: string) => void;
  onTargetChange: (v: string) => void;
  onSwap: () => void;
};

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "ta", label: "Tamil" },
  { code: "kn", label: "Kannada" },
  { code: "te", label: "Telugu" },
];

export default function LanguagePill({
  sourceLanguage,
  targetLanguage,
  onSourceChange,
  onTargetChange,
  onSwap,
}: Props) {
  return (
    <div
      className="
        mt-10
        rounded-3xl
        border
        border-zinc-200
        bg-white
        p-4
      "
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">

        <select
          value={sourceLanguage}
          onChange={(e) =>
            onSourceChange(e.target.value)
          }
          className="
            rounded-2xl
            border
            border-zinc-200
            px-4
            py-4
            text-lg
          "
        >
          <option value="">
            Select
          </option>

          {languages.map((language) => (
            <option
              key={language.code}
              value={language.code}
            >
              {language.label}
            </option>
          ))}
        </select>

        <button
          onClick={onSwap}
          className="
            h-12
            w-12
            rounded-full
            border
            border-zinc-200
          "
        >
          ⇄
        </button>

        <select
          value={targetLanguage}
          onChange={(e) =>
            onTargetChange(e.target.value)
          }
          className="
            rounded-2xl
            border
            border-zinc-200
            px-4
            py-4
            text-lg
          "
        >
          {languages.map((language) => (
            <option
              key={language.code}
              value={language.code}
            >
              {language.label}
            </option>
          ))}
        </select>

      </div>
    </div>
  );
}