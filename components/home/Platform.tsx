import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const products = [
  {
    status: "Available Today",
    title: "Nativee API",
    description:
      "Speech recognition, translation and conversation APIs for multilingual applications.",
    features: [
      "REST APIs",
      "Speech Recognition",
      "Translation",
      "Conversation",
    ],
    href: "https://api.nativee.in",
    cta: "API Reference",
    featured: true,
  },
  {
    status: "Available Today",
    title: "Developer Platform",
    description:
      "Documentation, SDKs, authentication, API keys and integration guides.",
    features: [
      "Documentation",
      "Quickstarts",
      "SDKs",
      "API Keys",
    ],
    href: "https://developer.nativee.in",
    cta: "Read Docs",
  },
  {
    status: "Enterprise",
    title: "Enterprise",
    description:
      "Private deployments, enterprise support and custom infrastructure for production workloads.",
    features: [
      "Private Cloud",
      "Dedicated Support",
      "Higher Limits",
      "Custom Integrations",
    ],
    href: "#enterprise",
    cta: "Contact Sales",
  },
  {
    status: "Coming Soon",
    title: "Nativee Mobile",
    description:
      "Connect, Converse, Chat and Call across Indian languages.",
    features: [
      "Voice Calls",
      "Messaging",
      "AI Assistant",
      "Conversation",
    ],
    href: "#",
    cta: "Coming Soon",
  },
];

export default function Platform() {
  return (
    <Section spacing="default" className="bg-white">
      <Container>

        <SectionHeading
          align="center"
          badge="PLATFORM"
          title={
            <>
              One platform.
              <br />
              Multiple products.
            </>
          }
          description="Everything you need to build multilingual experiences—from APIs and developer tools to enterprise infrastructure and consumer applications."
        />

        <div className="mt-16 grid gap-8 xl:grid-cols-4">

          {products.map((product) => (
            <article
              key={product.title}
              className={`group flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                product.featured
                  ? "border-blue-200 bg-blue-50/40"
                  : "border-slate-200 bg-white"
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                {product.status}
              </span>

              <h3 className="mt-6 text-3xl font-black text-slate-950">
                {product.title}
              </h3>

              <p className="mt-5 flex-1 text-base leading-8 text-slate-600">
                {product.description}
              </p>

              <div className="my-8 h-px bg-slate-200" />

              <ul className="space-y-4">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <span className="text-blue-600">✓</span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button
                  href={product.href}
                  variant={product.featured ? "primary" : "secondary"}
                >
                  {product.cta}
                </Button>
              </div>

            </article>
          ))}

        </div>

      </Container>
    </Section>
  );
}