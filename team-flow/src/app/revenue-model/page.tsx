import { InfoSection } from "@/components/InfoSection";
import { PageHero } from "@/components/PageHero";

export default function RevenueModelPage() {
  return (
    <main className="container page-main">
      <PageHero
        eyebrow="Revenue Model"
        title="Sustainable Growth Through Multi-Channel Revenue"
        subtitle="A balanced model combining subscriptions, partnerships, and premium offerings."
      />

      <InfoSection
        title="Subscription Plans"
        items={[
          {
            title: "Colleges",
            description: "INR 999 - INR 2999/month based on dashboard depth and engagement scale.",
          },
          {
            title: "Sponsors",
            description: "INR 399 - INR 499/month for candidate access and collaboration visibility.",
          },
        ]}
      />

      <InfoSection
        title="Other Revenue"
        items={[
          {
            title: "CSR funding",
            description: "Program partnerships aligned to education and innovation goals.",
          },
          {
            title: "Events and hackathons",
            description: "Sponsored challenges, showcases, and innovation festivals.",
          },
          {
            title: "Premium tools",
            description: "Advanced AI, analytics, and institutional performance modules.",
          },
        ]}
      />
    </main>
  );
}
