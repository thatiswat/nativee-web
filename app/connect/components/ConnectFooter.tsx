"use client";

import MicButton from "@/components/MicButton";

type Props = {
  audioUrl: string | null;
  processing: boolean;
  onRecord: (blob: Blob) => void;
};

export default function ConnectFooter({
  audioUrl,
  processing,
  onRecord,
}: Props) {
  return (
    <div className="mt-8 border-t border-zinc-200 pt-8">

      <div className="flex flex-col items-center">

        {audioUrl && (
          <button
            onClick={() => {
              const audio = new Audio(audioUrl);
              audio.play();
            }}
            className="
              mb-6
              rounded-full
              border
              border-zinc-200
              bg-white
              px-5
              py-2
              text-sm
            "
          >
            🔊 Play Again
          </button>
        )}

        <MicButton
          disabled={processing}
          onRecordingComplete={onRecord}
        />

        <p className="mt-4 text-sm text-zinc-500">
          {processing
            ? "Translating..."
            : "Hold to speak"}
        </p>

      </div>

    </div>
  );
}