import { InfoSection } from "@/components/InfoSection";
import { PageHero } from "@/components/PageHero";

export default function PlatformStructurePage() {
  return (
    <main className="container page-main">
      <PageHero
        eyebrow="Platform Structure"
        title="Three Levels Built for Scalable Growth"
        subtitle="Students can start free, level up with advanced opportunities, and reach sponsorship pathways."
      />

      <InfoSection
        title="Level 1 - Foundation"
        items={[
          {
            title: "Free tools",
            description: "Starter AI and productivity tools for every registered student.",
          },
          {
            title: "Basic mentorship",
            description: "Onboarding support and mentor office hours for idea validation.",
          },
          {
            title: "Community access",
            description: "Peer collaboration spaces with project showcases and feedback loops.",
          },
        ]}
      />

      <InfoSection
        title="Level 2 - Advanced"
        items={[
          {
            title: "Premium AI tools",
            description: "Deeper tool access for model experimentation and rapid prototyping.",
          },
          {
            title: "Research opportunities",
            description: "Academic and applied research partnerships across colleges and labs.",
          },
          {
            title: "Project-based access",
            description: "Milestone-driven unlocks tied to progress and review quality.",
          },
        ]}
      />

      <InfoSection
        title="Level 3 - Sponsorship"
        items={[
          {
            title: "Funding",
            description: "Direct support for validated ideas with clear execution plans.",
          },
          {
            title: "Competitions",
            description: "Statewide innovation challenges and demo events.",
          },
          {
            title: "Recognition",
            description: "Public visibility and industry-backed credibility for student teams.",
          },
        ]}
      />
    </main>
  );
}
