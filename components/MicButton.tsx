"use client";

import { Mic } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

type Props = {
  onRecordingComplete: (blob: Blob) => void;
  disabled?: boolean;
};

export default function MicButton({
  onRecordingComplete,
  disabled = false
}: Props) {
  const [recording, setRecording] = useState(false);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  async function startRecording() {
    if (disabled || recording) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true
      });

      chunksRef.current = [];

      const recorder = new MediaRecorder(stream);
      recorderRef.current = recorder;

      recorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      recorder.start();
      setRecording(true);
    } catch (error) {
      console.error("Microphone access failed:", error);
    }
  }

  function stopRecording() {
    if (!recorderRef.current || !recording) return;

    recorderRef.current.onstop = () => {
      const blob = new Blob(chunksRef.current, {
        type: "audio/webm"
      });

      onRecordingComplete(blob);
    };

    recorderRef.current.stop();

    recorderRef.current.stream
      .getTracks()
      .forEach((track) => track.stop());

    setRecording(false);
  }

  return (
    <div className="flex justify-center">
      <motion.button
        disabled={disabled}
        onMouseDown={startRecording}
        onMouseUp={stopRecording}
        onMouseLeave={stopRecording}
        onTouchStart={(e) => {
          e.preventDefault();
          startRecording();
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          stopRecording();
        }}
        animate={{
          scale: recording ? 1.05 : 1,
          boxShadow: recording
            ? "0 0 0px rgba(0,0,0,0.1)"
            : "0 10px 40px rgba(0,0,0,0.08)"
        }}
        transition={{
          duration: 0.2
        }}
        whileTap={{ scale: 0.95 }}
        className={`
          h-44 w-44 md:h-52 md:w-52
          rounded-full
          flex items-center justify-center
          transition-all
          border
          ${
            disabled
              ? "bg-zinc-200 border-zinc-300 opacity-60 cursor-not-allowed"
              : recording
              ? "bg-black text-white border-black"
              : "bg-white text-black border-zinc-300 hover:border-black"
          }
        `}
      >
        <Mic size={64} strokeWidth={1.5} />
      </motion.button>
    </div>
  );
}