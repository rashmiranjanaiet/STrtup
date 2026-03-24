import { InfoSection } from "@/components/InfoSection";
import { PageHero } from "@/components/PageHero";

export default function ExecutionPlanPage() {
  return (
    <main className="container page-main">
      <PageHero
        eyebrow="Execution Plan"
        title="From Odisha Launch to India-Scale Expansion"
        subtitle="A phased rollout model that validates early and scales responsibly."
      />

      <InfoSection
        title="Roadmap"
        items={[
          {
            title: "Phase 1",
            description: "Government and college onboarding with district-wise institution mapping.",
          },
          {
            title: "Phase 2",
            description: "Platform launch with student activation, mentorship tracks, and project cycles.",
          },
          {
            title: "Phase 3",
            description: "Odisha-to-India expansion through partnerships, chapter launches, and sponsor scale-up.",
          },
        ]}
      />
    </main>
  );
}
