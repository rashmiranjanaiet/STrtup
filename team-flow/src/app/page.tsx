import Link from "next/link";
import { InfoSection } from "@/components/InfoSection";
import { PageHero } from "@/components/PageHero";
import { flowSteps, heroHighlights } from "@/lib/content";

export default function HomePage() {
  return (
    <main className="container page-main">
      <PageHero
        eyebrow="Odisha Student Innovation Ecosystem"
        title="TEAM FLOW - Odisha's Largest Student Innovation Network"
        subtitle="Connecting Students, Colleges, Industries and Government"
        actions={[
          { href: "/contact", label: "Join Now", variant: "primary" },
          { href: "/proposal", label: "View Proposal", variant: "secondary" },
        ]}
      />

      <InfoSection
        title="Key Highlights"
        items={heroHighlights.map((item) => ({
          title: item,
          description: "Built to unlock faster innovation and meaningful career outcomes.",
        }))}
      />

      <section className="section-block fade-up">
        <div className="section-head">
          <h2>How It Works</h2>
          <p>A clear path from idea to impact.</p>
        </div>

        <div className="flow-grid">
          {flowSteps.map((step, index) => (
            <article className="glass-panel flow-step" key={step}>
              <p>Step {index + 1}</p>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block fade-up">
        <div className="glass-panel cta-banner">
          <h2>Start Your Innovation Journey Today</h2>
          <p>Join a statewide community that turns student ideas into real-world outcomes.</p>
          <Link href="/contact" className="btn btn-primary">
            Join TEAM FLOW
          </Link>
        </div>
      </section>
    </main>
  );
}
