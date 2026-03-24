export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container glass-panel footer-grid">
        <div>
          <p className="footer-title">TEAM FLOW</p>
          <p>Odisha&apos;s largest student innovation network for builders, colleges, sponsors, and policymakers.</p>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <p>Email: connect@teamflow.in</p>
          <p>Phone: +91 70000 00000</p>
          <p>Location: Bhubaneswar, Odisha</p>
        </div>
        <div>
          <p className="footer-title">Copyright</p>
          <p>{year} TEAM FLOW. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
