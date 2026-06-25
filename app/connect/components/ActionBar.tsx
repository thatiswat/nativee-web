type Props = {
  replayAudio: () => void;
  clear: () => void;
  audioUrl: string | null;
};

export default function ActionBar({
  replayAudio,
  clear,
  audioUrl,
}: Props) {
  if (!audioUrl) return null;

  return (
    <div className="mt-5 grid grid-cols-2 gap-3">

      <button
        onClick={replayAudio}
        className="
          rounded-2xl
          border
          border-zinc-200
          py-3
        "
      >
        Replay
      </button>

      <button
        onClick={clear}
        className="
          rounded-2xl
          border
          border-zinc-200
          py-3
        "
      >
        Clear
      </button>

    </div>
  );
}