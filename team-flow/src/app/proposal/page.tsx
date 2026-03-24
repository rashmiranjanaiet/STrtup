import { InfoSection } from "@/components/InfoSection";
import { PageHero } from "@/components/PageHero";
import { proposalSections } from "@/lib/content";

export default function ProposalPage() {
  return (
    <main className="container page-main">
      <PageHero
        eyebrow="Proposal"
        title="TEAM FLOW Strategic Proposal"
        subtitle="A high-level concept document for statewide innovation collaboration."
      />

      {proposalSections.map((section) => (
        <InfoSection
          key={section.title}
          title={section.title}
          items={section.points.map((point) => ({
            title: point,
            description: "Structured for measurable outcomes and long-term ecosystem value.",
          }))}
        />
      ))}
    </main>
  );
}
