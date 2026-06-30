import Button from "../ui/Button";
import Container from "../ui/Container";
import HeroHeading from "../ui/HeroHeading";
import Section from "../ui/Section";

export default function Hero() {
  return (
    <Section className="bg-white border-b border-slate-200">
      <Container>

        <HeroHeading
          badge="AI LANGUAGE PLATFORM"
          title={
            <>
              Build for every
              <br />
              language in India.
            </>
          }
          description="Speech recognition, translation and conversation APIs for developers and enterprises building multilingual products across India's languages."
        />

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Button href="https://app.nativee.in">
            Get API Key
          </Button>

          <Button
            href="https://developer.nativee.in"
            variant="secondary"
          >
            Read Documentation
          </Button>

        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-medium text-slate-500">

          <span>22+ Indian Languages</span>

          <span>REST APIs</span>

          <span>Official SDKs</span>

          <span>Enterprise Ready</span>

        </div>

      </Container>
    </Section>
  );
}