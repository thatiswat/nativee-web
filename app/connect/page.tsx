"use client";

import { useState } from "react";
import LanguagePicker from "@/components/LanguagePicker";
import MicButton from "@/components/MicButton";
import { sendAudio } from "@/lib/api";

const BACKEND_URL =
  "https://ispeak-backend-production-d877.up.railway.app";

export default function Connect() {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("hi");

  function replayAudio() {
    if (!audioUrl) return;
    const audio = new Audio(audioUrl);
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }

  return (
    <main className="min-h-screen bg-white text-black flex items-center justify-center px-6">

      {/* PHONE FRAME */}
      <div className="w-full max-w-md">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold tracking-tight">
            Connect
          </h1>
          <p className="text-sm text-zinc-500 mt-2">
            Speak naturally. Hear instantly.
          </p>
        </div>

        {/* CARD */}
        <div className="relative bg-white border border-zinc-200 rounded-[40px] shadow-sm px-6 py-10 overflow-hidden">

          {/* SAFE BACKGROUND GLOW (NO BLOCKING) */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-black/5 blur-3xl rounded-full pointer-events-none" />

          {/* LANGUAGE PICKER */}
          <div className="flex items-center justify-center gap-3 relative z-10">
            <LanguagePicker
              sourceLanguage={sourceLanguage}
              targetLanguage={targetLanguage}
              onSourceChange={setSourceLanguage}
              onTargetChange={setTargetLanguage}
            />

            <button
              onClick={() => {
                if (!sourceLanguage || sourceLanguage === "auto") return;

                const temp = sourceLanguage;
                setSourceLanguage(targetLanguage);
                setTargetLanguage(temp);
              }}
              className="h-10 w-10 rounded-full border border-zinc-300 hover:bg-zinc-100 transition flex items-center justify-center"
            >
              ⇄
            </button>
          </div>

          {/* MIC */}
          <div className="mt-20 flex flex-col items-center relative z-10">

            <MicButton
              disabled={isProcessing}
              onRecordingComplete={async (blob) => {
                if (isProcessing) return;

                if (!sourceLanguage) return;

                setIsProcessing(true);

                try {
                  const data = await sendAudio(
                    blob,
                    sourceLanguage,
                    targetLanguage
                  );

                  const url =
                    data.audio_url.startsWith("http")
                      ? data.audio_url
                      : `${BACKEND_URL}${
                          data.audio_url.startsWith("/") ? "" : "/"
                        }${data.audio_url}`;

                  setAudioUrl(url);

                  const audio = new Audio(url);
                  audio.volume = 1;
                  audio.play().catch(() => {});

                } catch (err) {
                  console.error(err);
                } finally {
                  setIsProcessing(false);
                }
              }}
            />

            <p className="mt-8 text-sm text-zinc-500">
              Hold to speak
            </p>

            {/* REPLAY */}
            {audioUrl && (
              <button
                onClick={replayAudio}
                className="mt-6 px-6 py-2 rounded-full border border-zinc-300 hover:bg-zinc-100 transition text-sm"
              >
                ▶ Replay
              </button>
            )}

          </div>

        </div>
      </div>

    </main>
  );
}