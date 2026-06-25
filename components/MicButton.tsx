"use client";

import { Mic } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

type Props = {
  onRecordingComplete: (blob: Blob) => void;
  disabled?: boolean;
};

export default function MicButton({
  onRecordingComplete,
  disabled = false,
}: Props) {
  const [recording, setRecording] = useState(false);
  const [processing, setProcessing] = useState(false);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  async function startRecording() {
    if (disabled || recording) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      chunksRef.current = [];

      const recorder = new MediaRecorder(stream);
      recorderRef.current = recorder;

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      recorder.start();

      setRecording(true);
      setProcessing(false);
    } catch (err) {
      console.error(err);
    }
  }

  function stopRecording() {
    if (!recorderRef.current || !recording) return;

    setRecording(false);
    setProcessing(true);

    recorderRef.current.onstop = () => {
      const blob = new Blob(chunksRef.current, {
        type: "audio/webm",
      });

      onRecordingComplete(blob);

      setTimeout(() => {
        setProcessing(false);
      }, 3000);
    };

    recorderRef.current.stop();

    recorderRef.current.stream
      .getTracks()
      .forEach((track) => track.stop());
  }

  return (
    <div className="flex flex-col items-center justify-center">

      {/* IDLE */}
      {!recording && !processing && (
        <motion.button
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
          whileTap={{ scale: 0.95 }}
          className="
            flex
            h-44
            w-44
            items-center
            justify-center
          "
        >
          <Mic
            size={74}
            strokeWidth={1.8}
            className="text-[#1747FF]"
          />
        </motion.button>
      )}

      {/* LISTENING */}
      {recording && (
        <>
          <div className="flex gap-8">

            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
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
                y: [10, -10, 10],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
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
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className="
              mt-8
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
      {processing && (
        <>
          <div className="flex items-end gap-3">

            {[50, 90, 120, 90, 50].map((h, i) => (
              <motion.div
                key={i}
                animate={{
                  height: [h * 0.5, h, h * 0.5],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
                className="
                  w-3
                  rounded-full
                  bg-[#1747FF]
                "
              />
            ))}

          </div>

          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
            }}
            className="
              mt-8
              text-4xl
              font-light
            "
          >
            <span className="text-[#1747FF]">
              Voice
            </span>

            <span className="ml-2 text-[#8AA2FF]">
              Search
            </span>
          </motion.div>
        </>
      )}

    </div>
  );
}