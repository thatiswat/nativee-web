import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const useCases = [
  {
    title: "Customer Support",
    description:
      "Deliver multilingual support across voice and chat using Nativee APIs.",
  },
  {
    title: "Healthcare",
    description:
      "Help patients and healthcare professionals communicate in their preferred language.",
  },
  {
    title: "Education",
    description:
      "Make learning accessible across India's regional languages.",
  },
  {
    title: "Government",
    description:
      "Improve citizen services with multilingual communication.",
  },
];

export default function Enterprise() {
  return (
    <Section spacing="default" className="bg-slate-50">
      <Container>

        <SectionHeading
          align="center"
          badge="ENTERPRISE"
          title={
            <>
              Built for organizations
              <br />
              across every industry.
            </>
          }
          description="Nativee helps enterprises communicate across India's languages through one unified platform for speech recognition, translation and conversational AI."
        />

        <div className="mt-20 overflow-hidden rounded-3xl border border-slate-200 bg-white">

          <div className="grid grid-cols-1 divide-y divide-slate-200 lg:grid-cols-4 lg:divide-x lg:divide-y-0">

            {useCases.map((item, index) => (
              <article
                key={item.title}
                className="group flex flex-col p-10 transition-all duration-300 hover:bg-slate-50"
              >
                {/* Number */}

                <span className="text-xs font-semibold tracking-[0.35em] text-[#1747FF]">
                  0{index + 1}
                </span>

                {/* Title */}

                <h3 className="mt-6 text-2xl font-bold leading-tight text-slate-950 transition-colors duration-300 group-hover:text-[#1747FF]">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-5 flex-1 text-base leading-7 text-slate-600">
                  {item.description}
                </p>

                {/* Footer */}

                <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">

                  <span className="text-sm font-medium text-slate-500">
                    Enterprise
                  </span>

                  <span className="text-xl text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#1747FF]">
                    →
                  </span>

                </div>

              </article>
            ))}

          </div>

        </div>

      </Container>
    </Section>
  );
}