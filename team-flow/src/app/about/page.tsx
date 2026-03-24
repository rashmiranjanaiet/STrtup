import { InfoSection } from "@/components/InfoSection";
import { PageHero } from "@/components/PageHero";

export default function AboutPage() {
  return (
    <main className="container page-main">
      <PageHero
        eyebrow="About TEAM FLOW"
        title="A Student-Driven Innovation Ecosystem"
        subtitle="Started from Aryan Institute with a strong focus on collaboration, growth, and outcomes."
      />

      <InfoSection
        title="About TEAM FLOW"
        items={[
          {
            title: "Student-driven innovation ecosystem",
            description: "Designed to help student builders move from idea stage to execution with support.",
          },
          {
            title: "Started from Aryan Institute",
            description: "Built from grassroots campus momentum and now prepared for statewide scale.",
          },
          {
            title: "Collaboration and growth",
            description: "Encourages interdisciplinary teams, mentors, and institutional partnerships.",
          },
        ]}
      />

      <InfoSection
        title="Vision"
        items={[
          {
            title: "Build Odisha's largest innovation pipeline",
            description: "Create one trusted pathway for ideation, guidance, and real execution.",
          },
          {
            title: "Convert ideas into real-world solutions",
            description: "Prioritize applied innovation with measurable social and economic impact.",
          },
        ]}
      />

      <InfoSection
        title="Mission"
        items={[
          {
            title: "Provide tools, mentorship, and funding",
            description: "Ensure every learner gets practical access to resources needed to build.",
          },
          {
            title: "Connect all stakeholders",
            description: "Bring together students, colleges, industry leaders, and government programs.",
          },
        ]}
      />
    </main>
  );
}
