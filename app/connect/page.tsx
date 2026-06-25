"use client";

import { useState } from "react";

import ConnectHeader from "@/app/connect/components/ConnectHeader";
import LanguagePill from "@/app/connect/components/LanguagePill";
import VoiceStage from "@/app/connect/components/VoiceStage";
import ResultCard from "@/app/connect/components/ResultCard";
import ActionBar from "@/app/connect/components/ActionBar";

import { sendAudio } from "@/lib/api";

const BACKEND_URL =
  "https://ispeak-backend-production-d877.up.railway.app";

const languageMap: Record<string, string> = {
  English: "en",
  Hindi: "hi",
  Tamil: "ta",
  Kannada: "kn",
  Telugu: "te",
};

type VoiceState =
  | "idle"
  | "listening"
  | "processing";

export default function Connect() {
  const [voiceState, setVoiceState] =
    useState<VoiceState>("idle");

  const [sourceLanguage, setSourceLanguage] =
    useState("English");

  const [targetLanguage, setTargetLanguage] =
    useState("Hindi");

  const [original, setOriginal] =
    useState("");

  const [translated, setTranslated] =
    useState("");

  const [audioUrl, setAudioUrl] =
    useState<string | null>(null);

  async function handleRecording(blob: Blob) {
    setVoiceState("processing");

    try {
      const data = await sendAudio(
        blob,
        languageMap[sourceLanguage],
        languageMap[targetLanguage]
      );

      setOriginal(data.original || "");
      setTranslated(data.translated || "");

      const url =
        data.audio_url.startsWith("http")
          ? data.audio_url
          : `${BACKEND_URL}${
              data.audio_url.startsWith("/")
                ? ""
                : "/"
            }${data.audio_url}`;

      setAudioUrl(url);

      const audio = new Audio(url);

      audio.volume = 1;

      audio.play().catch(() => {});
    } catch (error) {
      console.error(error);
    } finally {
      setVoiceState("idle");
    }
  }

  function replayAudio() {
    if (!audioUrl) return;

    const audio = new Audio(audioUrl);

    audio.currentTime = 0;

    audio.play().catch(() => {});
  }

  function clear() {
    setOriginal("");
    setTranslated("");
    setAudioUrl(null);
  }

  return (
    <main className="min-h-screen bg-[#F8F9FC]">
      <div className="mx-auto max-w-2xl px-6 py-12">

        <ConnectHeader />

        <LanguagePill
          sourceLanguage={sourceLanguage}
          targetLanguage={targetLanguage}
          onSourceChange={setSourceLanguage}
          onTargetChange={setTargetLanguage}
          onSwap={() => {
            const temp = sourceLanguage;

            setSourceLanguage(targetLanguage);
            setTargetLanguage(temp);
          }}
        />

        <VoiceStage
          state={voiceState}
          setState={setVoiceState}
          onRecordingComplete={handleRecording}
        />

        <ResultCard
          original={original}
          translated={translated}
        />

        <ActionBar
          replayAudio={replayAudio}
          clear={clear}
          audioUrl={audioUrl}
        />

      </div>
    </main>
  );
}