import Link from "next/link";

export default function ConnectHeader() {
  return (
    <div className="text-center">

      <Link
        href="/launcher"
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-zinc-200
          px-4
          py-2
          text-sm
        "
      >
        ← Home
      </Link>

      <h1 className="mt-8 text-5xl font-bold">
        Connect
      </h1>

      <p className="mt-3 text-xl text-zinc-500">
        Speak once. Hear instantly.
      </p>

    </div>
  );
}