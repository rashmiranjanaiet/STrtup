import { InfoSection } from "@/components/InfoSection";
import { PageHero } from "@/components/PageHero";

export default function FeaturesPage() {
  return (
    <main className="container page-main">
      <PageHero
        eyebrow="Features"
        title="Core Platform + Advanced Institutional Tools"
        subtitle="Built for collaborative execution from idea discovery to hiring outcomes."
      />

      <InfoSection
        title="Core Features"
        items={[
          {
            title: "AI Tools Integration",
            description: "Centralized AI tool access for ideation, coding, research, and presentation support.",
          },
          {
            title: "Collaboration Network",
            description: "Cross-college team formation with mentors and domain experts.",
          },
          {
            title: "Project Submission System",
            description: "Structured project uploads with milestones, review status, and outcome tracking.",
          },
          {
            title: "Sponsor Matching System",
            description: "Connects eligible teams to funding and opportunity partners.",
          },
        ]}
      />

      <InfoSection
        title="Advanced Features"
        items={[
          {
            title: "Dashboard for students",
            description: "Progress tracking, tool usage, and sponsor status in one view.",
          },
          {
            title: "College admin panel",
            description: "Institutional insights for participation, outcomes, and performance.",
          },
          {
            title: "Industry hiring portal",
            description: "Talent discovery based on verified projects, skills, and impact metrics.",
          },
        ]}
      />
    </main>
  );
}
