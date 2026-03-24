import { InfoSection } from "@/components/InfoSection";
import { PageHero } from "@/components/PageHero";

export default function BenefitsPage() {
  return (
    <main className="container page-main">
      <PageHero
        eyebrow="Benefits"
        title="Value Across Students, Colleges, and Industry"
        subtitle="TEAM FLOW creates measurable wins for every stakeholder in the innovation cycle."
      />

      <InfoSection
        title="For Students"
        items={[
          {
            title: "AI tools access",
            description: "Get practical access to productivity and project acceleration tools.",
          },
          {
            title: "Funding opportunities",
            description: "Access grants, sponsorships, and competition rewards for validated projects.",
          },
          {
            title: "Real-world exposure",
            description: "Work on market-relevant use cases with mentor and industry feedback.",
          },
        ]}
      />

      <InfoSection
        title="For Colleges"
        items={[
          {
            title: "Innovation ecosystem",
            description: "Enable continuous project activity and stronger campus innovation culture.",
          },
          {
            title: "Better ranking",
            description: "Improve institutional outcomes through visible innovation achievements.",
          },
          {
            title: "Student growth",
            description: "Support stronger placements, leadership, and practical skills.",
          },
        ]}
      />

      <InfoSection
        title="For Industry"
        items={[
          {
            title: "Talent hiring",
            description: "Access verified talent through project evidence instead of resumes alone.",
          },
          {
            title: "Brand promotion",
            description: "Build credibility with youth-focused innovation partnerships.",
          },
          {
            title: "ROI growth",
            description: "Drive meaningful outcomes through targeted sponsorship and hiring programs.",
          },
        ]}
      />
    </main>
  );
}
