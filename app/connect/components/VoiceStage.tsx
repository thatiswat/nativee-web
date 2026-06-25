"use client";

import { Mic } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

type VoiceState =
  | "idle"
  | "listening"
  | "processing";

type Props = {
  state: VoiceState;
  setState: (state: VoiceState) => void;
  onRecordingComplete: (
    blob: Blob
  ) => void;
};

export default function VoiceStage({
  state,
  setState,
  onRecordingComplete,
}: Props) {
  const recorderRef =
    useRef<MediaRecorder | null>(null);

  const chunksRef =
    useRef<Blob[]>([]);

  async function startRecording() {
    if (state !== "idle") return;

    try {
      const stream =
        await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

      chunksRef.current = [];

      const recorder =
        new MediaRecorder(stream);

      recorderRef.current = recorder;

      recorder.ondataavailable = (
        event
      ) => {
        if (event.data.size > 0) {
          chunksRef.current.push(
            event.data
          );
        }
      };

      recorder.start();

      setState("listening");
    } catch (error) {
      console.error(error);
    }
  }

  function stopRecording() {
    if (
      !recorderRef.current ||
      state !== "listening"
    )
      return;

    setState("processing");

    recorderRef.current.onstop =
      () => {
        const blob = new Blob(
          chunksRef.current,
          {
            type: "audio/webm",
          }
        );

        onRecordingComplete(blob);
      };

    recorderRef.current.stop();

    recorderRef.current.stream
      .getTracks()
      .forEach((track) =>
        track.stop()
      );
  }

  return (
    <section className="mt-20">

      <div className="flex min-h-[420px] flex-col items-center justify-center">

        {/* IDLE */}

        {state === "idle" && (
          <>
            <motion.button
              onMouseDown={
                startRecording
              }
              onMouseUp={
                stopRecording
              }
              onMouseLeave={
                stopRecording
              }
              onTouchStart={(e) => {
                e.preventDefault();
                startRecording();
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                stopRecording();
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                relative
                flex
                h-44
                w-44
                items-center
                justify-center
                rounded-full
                bg-[#1747FF]
                shadow-[0_0_80px_rgba(23,71,255,0.35)]
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-white/20
                "
              />

              <Mic
                size={78}
                strokeWidth={1.8}
                className="text-white"
              />
            </motion.button>

            <p className="mt-8 text-lg text-zinc-500">
              Hold to speak
            </p>
          </>
        )}

        {/* LISTENING */}

        {state === "listening" && (
          <>
            <div className="flex gap-10">

              <motion.div
                animate={{
                  y: [
                    -12,
                    12,
                    -12,
                  ],
                }}
                transition={{
                  repeat:
                    Infinity,
                  duration: 0.8,
                }}
                className="
                  h-5
                  w-5
                  rounded-full
                  bg-[#1747FF]
                "
              />

              <motion.div
                animate={{
                  y: [
                    12,
                    -12,
                    12,
                  ],
                }}
                transition={{
                  repeat:
                    Infinity,
                  duration: 0.8,
                }}
                className="
                  h-5
                  w-5
                  rounded-full
                  bg-[#1747FF]
                "
              />
            </div>

            <motion.p
              animate={{
                opacity: [
                  0.4,
                  1,
                  0.4,
                ],
              }}
              transition={{
                repeat:
                  Infinity,
                duration: 1,
              }}
              className="
                mt-10
                text-4xl
                font-light
                text-[#1747FF]
              "
            >
              Listening...
            </motion.p>
          </>
        )}

        {/* PROCESSING */}

        {state ===
          "processing" && (
          <>
            <div className="flex items-end gap-3">

              {[50, 90, 120, 90, 50].map(
                (
                  height,
                  index
                ) => (
                  <motion.div
                    key={index}
                    animate={{
                      height: [
                        height *
                          0.5,
                        height,
                        height *
                          0.5,
                      ],
                    }}
                    transition={{
                      repeat:
                        Infinity,
                      duration:
                        0.8,
                      delay:
                        index *
                        0.1,
                    }}
                    className="
                      w-3
                      rounded-full
                      bg-[#1747FF]
                    "
                  />
                )
              )}

            </div>

            <div className="mt-10 text-4xl font-light">

              <span className="text-[#1747FF]">
                Voice
              </span>

              <motion.span
                animate={{
                  opacity: [
                    0.3,
                    1,
                    0.3,
                  ],
                }}
                transition={{
                  repeat:
                    Infinity,
                  duration: 1.2,
                }}
                className="
                  ml-3
                  text-[#8AA2FF]
                "
              >
                Search
              </motion.span>

            </div>
          </>
        )}

      </div>

    </section>
  );
}