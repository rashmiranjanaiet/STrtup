import Link from "next/link";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actions?: HeroAction[];
};

export function PageHero({ eyebrow, title, subtitle, actions = [] }: PageHeroProps) {
  return (
    <section className="hero-block section-block fade-up">
      <div className="hero-glow one" />
      <div className="hero-glow two" />
      <div className="hero-orbit" aria-hidden>
        <span className="orbit-node one" />
        <span className="orbit-node two" />
        <span className="orbit-node three" />
      </div>
      <div className="glass-panel hero-inner">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {subtitle ? <p className="hero-subtitle">{subtitle}</p> : null}

        {actions.length > 0 ? (
          <div className="action-row">
            {actions.map((action) => (
              <Link
                key={action.href + action.label}
                href={action.href}
                className={action.variant === "secondary" ? "btn btn-secondary" : "btn btn-primary"}
              >
                {action.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
