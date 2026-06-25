type Props = {
  original: string;
  translated: string;
};

export default function ResultCard({
  original,
  translated,
}: Props) {
  if (!original && !translated) {
    return null;
  }

  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-zinc-200
        bg-white
      "
    >
      <div className="p-6">

        <p className="text-xs uppercase text-zinc-400">
          You Said
        </p>

        <p className="mt-3 text-xl">
          {original}
        </p>

      </div>

      <div className="border-t border-zinc-200 p-6">

        <p className="text-xs uppercase text-zinc-400">
          They Heard
        </p>

        <p className="mt-3 text-xl">
          {translated}
        </p>

      </div>

    </div>
  );
}