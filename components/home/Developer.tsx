import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const features = [
  "REST API",
  "Official SDKs",
  "API Keys",
  "Authentication",
  "Production Ready",
  "Usage Analytics",
];

export default function Developer() {
  return (
    <Section spacing="default" className="bg-white">
      <Container>

        <div className="grid items-center gap-24 lg:grid-cols-2">

          {/* Left */}

          <div>

            <SectionHeading
              badge="FOR DEVELOPERS"
              title={
                <>
                  Build in minutes.
                  <br />
                  Scale for years.
                </>
              }
              description="Everything you need to integrate speech recognition, translation and conversation into your applications."
            />

            <div className="mt-12 grid grid-cols-2 gap-4">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <div className="h-2 w-2 rounded-full bg-[#1747FF]" />

                  <span className="text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}

            </div>

            <div className="mt-12">

              <Button href="https://developer.nativee.in">
                Explore Documentation
              </Button>

            </div>

          </div>

          {/* Right */}

          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 shadow-2xl">

            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                API REQUEST
              </p>

              <div className="flex gap-2">

                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />

              </div>

            </div>

            <div className="p-8">

<pre className="overflow-x-auto text-sm leading-8 text-slate-300">{`curl https://api.nativee.in/v1/conversation \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F source_language=en \\
  -F target_language=hi \\
  -F audio=@voice.mp3`}</pre>

              <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">

                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-slate-500">
                  RESPONSE
                </p>

<pre className="overflow-x-auto text-sm leading-7 text-green-400">{`{
  "success": true,
  "translated": "नमस्ते",
  "latency": 842
}`}</pre>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </Section>
  );
}