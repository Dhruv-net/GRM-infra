import { useRef } from 'react'
import { usePageEffects } from '../hooks/usePageEffects'

/*
 * Shared chrome for the legal pages (Privacy, Cookies, Terms).
 * Renders the standard nav + footer and a long-form readable column.
 * Pass the eyebrow label, page title, effective date and the body sections.
 */
export default function LegalLayout({ eyebrow, title, effectiveDate, children }) {
  const ref = useRef(null)
  usePageEffects(ref)
  return (
    <div ref={ref}>
      <header className="nav">
        <a href="index.html" className="nav-logo" aria-label="GRM Infra home">
          <img src="/brand/grm-logo.jpeg" alt="GRM Infra" className="brand-mark"/>
          <span className="wordmark">GRM<span className="infra">INFRA</span></span>
        </a>
        <nav className="nav-links">
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="solutions.html">Solutions</a>
          <a href="projects.html">Projects</a>
          <a href="global-impact.html">Global Impact</a>
        </nav>
        <a href="index.html#contact" className="nav-cta">Start a project <span>→</span></a>
      </header>

      <section className="legal-hero wrap">
        <div className="eyebrow reveal"><span className="dot"></span>{eyebrow}</div>
        <h1 className="h-1 reveal">{title}</h1>
        {effectiveDate && <div className="legal-meta reveal">{effectiveDate}</div>}
      </section>

      <section className="legal-body wrap">
        <div className="legal-inner reveal">
          {children}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src="/brand/grm-logo.jpeg" alt="GRM Infra" className="brand-mark brand-mark--footer"/>
              <span style={{ fontWeight: "600", letterSpacing: "0.18em" }}>GRM<span style={{ fontWeight: "300", color: "var(--bone-dim)", marginLeft: "4px" }}>INFRA</span></span>
            </div>
            <div className="footer-tag">Steady delivery<br/>for the energy<br/>transition.</div>
            <div className="body-sm" style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.06em" }}>GRM INFRA LTD<br/>HQ- WATFORD UNITED KINGDOM</div>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="solutions.html">Solutions</a></li>
              <li><a href="projects.html">Projects</a></li>
              <li><a href="global-impact.html">Global impact</a></li>
            </ul>
          </div>
          <div>
            <h5>Connect</h5>
            <ul>
              <li><a href="mailto:info@infragrm.com">info@infragrm.com</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 GRM Infra Ltd</div>
          <div className="footer-legal">
            <a href="privacy-policy.html">Privacy policy</a>
            <a href="cookie-policy.html">Cookies</a>
            <a href="terms-conditions.html">Terms &amp; Conditions</a>
          </div>
          <div>ISO 9001 / 14001 / 45001</div>
        </div>
      </footer>
    </div>
  )
}
