"use client";

export default function Converse() {
  return (
    <main className="min-h-screen bg-white text-black">

      <div className="max-w-4xl mx-auto px-6 py-12">

        <div className="text-center">

          <h1 className="text-5xl font-bold">
            Converse
          </h1>

          <p className="mt-4 text-zinc-500">
            Continuous multilingual conversations.
          </p>

        </div>

        <div className="mt-12 flex justify-center items-center gap-6">

          <div className="px-6 py-3 border rounded-full">
            English
          </div>

          <div className="text-xl">
            ⇄
          </div>

          <div className="px-6 py-3 border rounded-full">
            Hindi
          </div>

        </div>

        <div className="flex justify-center mt-16">

          <button
            className="
            w-40
            h-40
            rounded-full
            border
            border-zinc-300
            text-5xl
            "
          >
            🎤
          </button>

        </div>

        <p className="text-center mt-6 text-zinc-500">
          Hold To Speak
        </p>

        <div className="mt-20">

          <h2 className="text-2xl font-semibold">
            Conversation
          </h2>

          <div className="mt-8 space-y-6">

            <div className="border rounded-3xl p-6">

              <p className="text-xs uppercase text-zinc-500">
                YOU SAID
              </p>

              <p className="mt-3">
                Hello
              </p>

              <div className="mt-6 border-t pt-6">

                <p className="text-xs uppercase text-zinc-500">
                  THEY HEARD
                </p>

                <p className="mt-3">
                  नमस्ते
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}