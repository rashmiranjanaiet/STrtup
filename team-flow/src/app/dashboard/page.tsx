import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { dashboardMetrics } from "@/lib/content";

export default function DashboardPage() {
  return (
    <main className="container page-main">
      <PageHero
        eyebrow="Dashboard"
        title="Advanced Dashboard Suite"
        subtitle="Separate workspaces for students, colleges, and sponsors with role-based insights."
      />

      <section className="section-block fade-up">
        <div className="card-grid">
          {dashboardMetrics.map((metric) => (
            <article className="glass-panel metric-card" key={metric.label}>
              <p>{metric.label}</p>
              <h3>{metric.value}</h3>
              <small>Live network growth metric</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block fade-up">
        <div className="dashboard-links glass-panel">
          <h2>Explore Dashboards</h2>
          <p>Open a dedicated role dashboard:</p>
          <div className="action-row">
            <Link href="/dashboard/student" className="btn btn-primary">
              Student Dashboard
            </Link>
            <Link href="/dashboard/college" className="btn btn-secondary">
              College Dashboard
            </Link>
            <Link href="/dashboard/sponsor" className="btn btn-secondary">
              Sponsor Dashboard
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
