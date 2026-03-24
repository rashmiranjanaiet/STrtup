type SectionProps = {
  title: string;
  subtitle?: string;
  items: Array<{
    title: string;
    description?: string;
    bullets?: string[];
  }>;
};

export function InfoSection({ title, subtitle, items }: SectionProps) {
  return (
    <section className="section-block fade-up">
      <div className="section-head">
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>

      <div className="card-grid">
        {items.map((item) => (
          <article className="glass-panel info-card" key={item.title}>
            <h3>{item.title}</h3>
            {item.description ? <p>{item.description}</p> : null}
            {item.bullets?.length ? (
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
