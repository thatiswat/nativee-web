import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
      min-h-[80vh]
      flex
      items-center
      justify-center
      px-8
      "
    >
      <div
        className="
        text-center
        max-w-5xl
        "
      >
        <h1
          className="
          text-7xl
          md:text-8xl
          font-bold
          tracking-tight
          "
        >
          Language
          <br />
          Shouldn't
          <br />
          Matter.
        </h1>

        <p
          className="
          mt-8
          text-xl
          text-zinc-400
          "
        >
          Real-time voice translation
          for conversations.
        </p>

        <Link
          href="/connect"
          className="
          inline-flex
          mt-10
          px-8
          py-4
          rounded-full
          bg-white
          text-black
          font-medium
          hover:opacity-90
          transition
          "
        >
          Open Connect
        </Link>
      </div>
    </section>
  );
}