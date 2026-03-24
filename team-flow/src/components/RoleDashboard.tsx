import Link from "next/link";

type RoleDashboardProps = {
  role: "student" | "college" | "sponsor";
  title: string;
  subtitle: string;
  cards: Array<{
    title: string;
    value: string;
    details: string;
  }>;
};

const roleLinks = [
  { href: "/dashboard/student", label: "Student" },
  { href: "/dashboard/college", label: "College" },
  { href: "/dashboard/sponsor", label: "Sponsor" },
];

const studentBoard = [
  { stage: "Idea Validation", count: "08 Projects", note: "Mentor-reviewed concept stage" },
  { stage: "Build Sprint", count: "04 Projects", note: "Weekly demo-ready iterations" },
  { stage: "Launch Track", count: "02 Projects", note: "Funding and presentation prep" },
];

const collegeDepartments = [
  { name: "Computer Science", score: 92 },
  { name: "Electrical", score: 78 },
  { name: "Mechanical", score: 70 },
  { name: "Civil", score: 64 },
];

const sponsorFunnel = [
  { label: "Profiles Viewed", value: 5200 },
  { label: "Shortlisted", value: 1480 },
  { label: "Interviewed", value: 410 },
  { label: "Offers Extended", value: 96 },
];

const roleMeta: Record<RoleDashboardProps["role"], { badge: string; panelTitle: string; panelText: string }> = {
  student: {
    badge: "Builder Workspace",
    panelTitle: "Sprint Board",
    panelText: "Track projects from idea stage to launch-ready outcomes.",
  },
  college: {
    badge: "Campus Command",
    panelTitle: "Department Performance Matrix",
    panelText: "Measure innovation participation across departments and cohorts.",
  },
  sponsor: {
    badge: "Talent Intelligence",
    panelTitle: "Hiring Funnel",
    panelText: "Monitor talent discovery and conversion from access to hiring.",
  },
};

export function RoleDashboard({ role, title, subtitle, cards }: RoleDashboardProps) {
  const meta = roleMeta[role];
  const maxFunnel = Math.max(...sponsorFunnel.map((item) => item.value));

  return (
    <main className={`container page-main role-dashboard role-${role}`}>
      <section className="section-block fade-up">
        <div className="glass-panel dashboard-hero">
          <p className="eyebrow">Dashboard</p>
          <h1>{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>

          <div className="dashboard-meta-row">
            <span className="role-pill">{meta.badge}</span>
          </div>

          <div className="dashboard-switcher">
            {roleLinks.map((item) => (
              <Link key={item.href} href={item.href} className={item.href.endsWith(role) ? "active" : ""}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block fade-up">
        <div className="card-grid">
          {cards.map((card) => (
            <article className="glass-panel metric-card" key={card.title}>
              <p>{card.title}</p>
              <h3>{card.value}</h3>
              <small>{card.details}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block fade-up">
        <div className="glass-panel dashboard-workbench">
          <div className="workbench-head">
            <h2>{meta.panelTitle}</h2>
            <p>{meta.panelText}</p>
          </div>

          {role === "student" ? (
            <div className="student-kanban">
              {studentBoard.map((item) => (
                <article key={item.stage}>
                  <h3>{item.stage}</h3>
                  <strong>{item.count}</strong>
                  <p>{item.note}</p>
                </article>
              ))}
            </div>
          ) : null}

          {role === "college" ? (
            <div className="college-matrix">
              {collegeDepartments.map((item) => (
                <article key={item.name}>
                  <div className="department-head">
                    <h3>{item.name}</h3>
                    <strong>{item.score}%</strong>
                  </div>
                  <div className="meter-track" role="presentation">
                    <span style={{ width: `${item.score}%` }} />
                  </div>
                </article>
              ))}
            </div>
          ) : null}

          {role === "sponsor" ? (
            <div className="sponsor-funnel">
              {sponsorFunnel.map((item) => (
                <article key={item.label}>
                  <div className="department-head">
                    <h3>{item.label}</h3>
                    <strong>{item.value.toLocaleString()}</strong>
                  </div>
                  <div className="meter-track" role="presentation">
                    <span style={{ width: `${Math.max(18, (item.value / maxFunnel) * 100)}%` }} />
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
