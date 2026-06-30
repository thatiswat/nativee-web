import Link from "next/link";

const productLinks = [
  {
    name: "Translation API",
    href: "https://api.nativee.in/docs#/Translation",
  },
  {
    name: "Speech API",
    href: "https://api.nativee.in/docs#/Speech",
  },
  {
    name: "Conversation API",
    href: "https://api.nativee.in/docs#/Speech/conversation_v1_conversation_post",
  },
];

const developerLinks = [
  {
    name: "Documentation",
    href: "https://developer.nativee.in",
  },
  {
    name: "API Reference",
    href: "https://api.nativee.in/docs",
  },
  {
    name: "Status",
    href: "https://status.nativee.in",
  },
];

const companyLinks = [
  {
    name: "About",
    href: "#",
  },
  {
    name: "Enterprise",
    href: "#enterprise",
  },
  {
    name: "Contact",
    href: "mailto:support@nativee.in",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070B17] text-white">
      <div className="mx-auto max-w-7xl px-8 py-24">

        {/* Top */}

        <div className="grid gap-20 lg:grid-cols-12">

          {/* Brand */}

          <div className="lg:col-span-5">

            <Link
              href="/"
              className="inline-block"
            >
              <h2 className="text-4xl font-black tracking-tight">
                Native
                <span className="text-[#2563EB]">e</span>
              </h2>
            </Link>

            <p className="mt-8 max-w-md text-lg leading-8 text-slate-400">
              AI Language Platform for Indian languages.
              Build multilingual applications with speech,
              translation and conversation APIs designed for
              developers and enterprises.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
                REST APIs
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
                Speech
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
                Translation
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
                Enterprise
              </span>

            </div>

          </div>

          {/* Navigation */}

          <div className="lg:col-span-7 grid gap-12 sm:grid-cols-3">

            <FooterColumn
              title="Products"
              links={productLinks}
            />

            <FooterColumn
              title="Developers"
              links={developerLinks}
            />

            <FooterColumn
              title="Company"
              links={companyLinks}
            />

          </div>

        </div>

        {/* Divider */}

        <div className="my-16 h-px bg-white/10" />

        {/* Bottom */}

        <div className="flex flex-col gap-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 Nativee Technologies. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-8">

            <Link
              href="#"
              className="transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="transition hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="https://status.nativee.in"
              className="transition hover:text-white"
            >
              Status
            </Link>

            <span className="text-slate-700">
              |
            </span>

            <span className="text-slate-400">
              Made in India 🇮🇳
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}) {
  return (
    <div>

      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
        {title}
      </h3>

      <ul className="mt-8 space-y-5">

        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-slate-300 transition hover:text-white"
            >
              {link.name}
            </Link>
          </li>
        ))}

      </ul>

    </div>
  );
}