import { InfoSection } from "@/components/InfoSection";
import { PageHero } from "@/components/PageHero";

export default function GovernmentAlignmentPage() {
  return (
    <main className="container page-main">
      <PageHero
        eyebrow="Government Alignment"
        title="Aligned with Odisha's Innovation and AI Priorities"
        subtitle="Designed to complement public missions with measurable student innovation outcomes."
      />

      <InfoSection
        title="Alignment Pillars"
        subtitle="Show credibility and trust by mapping platform outcomes to mission objectives."
        items={[
          {
            title: "Odisha AI Mission",
            description: "Supports AI talent development through practical exposure and project execution.",
          },
          {
            title: "Youth Innovation Fund",
            description: "Creates a transparent pipeline for identifying and supporting high-potential student ideas.",
          },
          {
            title: "Science City Initiative",
            description: "Expands scientific culture with collaborative programs and ecosystem participation.",
          },
        ]}
      />
    </main>
  );
}
