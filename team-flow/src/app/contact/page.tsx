import { JoinForm } from "@/components/JoinForm";
import { PageHero } from "@/components/PageHero";

export default function ContactPage() {
  return (
    <main className="container page-main">
      <PageHero
        eyebrow="Contact and Join"
        title="Let Us Build Odisha's Innovation Future Together"
        subtitle="Register as a student, college, or sponsor and connect with the TEAM FLOW network."
      />

      <JoinForm />

      <section className="section-block fade-up">
        <div className="glass-panel contact-grid">
          <article>
            <h3>Email</h3>
            <p>connect@teamflow.in</p>
          </article>
          <article>
            <h3>Phone</h3>
            <p>+91 70000 00000</p>
          </article>
          <article>
            <h3>Location</h3>
            <p>Bhubaneswar, Odisha, India</p>
          </article>
        </div>
      </section>
    </main>
  );
}
