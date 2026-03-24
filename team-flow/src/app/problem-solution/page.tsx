import { InfoSection } from "@/components/InfoSection";
import { PageHero } from "@/components/PageHero";

export default function ProblemSolutionPage() {
  return (
    <main className="container page-main">
      <PageHero
        eyebrow="Problem and Solution"
        title="From Fragmented Efforts to One Unified Innovation Engine"
        subtitle="TEAM FLOW removes barriers and creates structured growth for every student innovator."
      />

      <InfoSection
        title="Problem"
        items={[
          {
            title: "No centralized innovation system",
            description: "Students work in silos without a unified platform for discovery and collaboration.",
          },
          {
            title: "Lack of resources and mentorship",
            description: "Many ideas stop early due to missing guidance, tools, and execution support.",
          },
          {
            title: "Limited industry exposure",
            description: "Students rarely get project opportunities that align with real market needs.",
          },
        ]}
      />

      <InfoSection
        title="Solution"
        items={[
          {
            title: "One unified platform",
            description: "A single network for students, institutions, sponsors, and mentors.",
          },
          {
            title: "AI tools plus sponsorship and mentorship",
            description: "Practical support stack to accelerate project development and quality.",
          },
          {
            title: "Real-world project opportunities",
            description: "Industry and social-impact challenges to build meaningful portfolios.",
          },
        ]}
      />
    </main>
  );
}
