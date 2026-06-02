import { useRef } from 'react'
import { usePageEffects } from '../hooks/usePageEffects'

const CERTS = [
  { img: '/certifications/iso-9001.svg', alt: 'ISO 9001', desc: ['Quality', 'Management'] },
  { img: '/certifications/iso-14001.svg', alt: 'ISO 14001', desc: ['Environmental', 'Management'] },
  { img: '/certifications/iso-45001.svg', alt: 'ISO 45001', desc: ['Occupational', 'Health & Safety'] },
  { img: '/certifications/iecre.svg', alt: 'IECRE', desc: ['PV plant', 'certification'] },
  { img: '/certifications/leea.svg', alt: 'LEEA', desc: ['Lifting Equipment', 'Engineers Assoc.'] },
  { img: '/certifications/cdm-2015.svg', alt: 'CDM 2015', desc: ['Construction', 'Compliance'] },
  { img: '/certifications/CHAS.jpeg', alt: 'CHAS', desc: ['CHAS'] },
  { img: '/certifications/CONSTRUCTION%20LINE%20GOLD.jpeg', alt: 'Construction Line Gold', desc: ['Construction', 'Line Gold'] },
  { img: '/certifications/PQS.jpeg', alt: 'PQS', desc: ['PQS'] },
  { img: '/certifications/RICS.jpeg', alt: 'RICS', desc: ['RICS'] },
  { img: '/certifications/what-is-mcs.webp', alt: 'MCS', desc: ['MCS', 'Certified'] },
]

function CertCard({ c }) {
  return (
    <div className="cert">
      {c.img
        ? <img src={c.img} alt={c.alt} />
        : <div className="id">{c.id}</div>}
      <div className="desc">{c.desc.map((line, i) => <span key={i}>{i > 0 && <br/>}{line}</span>)}</div>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  usePageEffects(ref)
  return (
    <div ref={ref}>
      <header className="nav">
        <a href="index.html" className="nav-logo">
          <img src="/brand/grm-logo.jpeg" alt="GRM Infra" className="brand-mark"/>
          <span className="wordmark">GRM<span className="infra">INFRA</span></span>
        </a>
        <nav className="nav-links">
          <a href="index.html">Home</a>
          <a href="about.html" className="active">About</a>
          <a href="solutions.html">Solutions</a>
          <a href="projects.html">Projects</a>
          <a href="global-impact.html">Global Impact</a>
        </nav>
        <a href="index.html#contact" className="nav-cta">Start a project <span>→</span></a>
      </header>
      
      <section className="about-hero">
        <div className="wrap">
          <div>
            <div className="eyebrow reveal" style={{ marginBottom: "32px" }}><span className="dot"></span>About GRM Infra</div>
            <h1 className="h-display reveal">A practice<br/>built around <em>delivery.</em></h1>
          </div>
          <div className="reveal">
            <p className="lede">GRM Infra is an energy infrastructure company focused on the engineering and delivery of utility-scale solar and battery storage projects. We work across complex energy developments, supporting the infrastructure required to power a more reliable and sustainable grid.</p>
          </div>
        </div>
      </section>
      
      <section>
        <div className="principles">
          <div className="principle reveal">
            <div className="num">P/01</div>
            <h3>Engineer-led procurement.</h3>
            <p>The team specifying the BoM is the team operating the asset. We don't outsource intent.</p>
          </div>
          <div className="principle reveal">
            <div className="num">P/02</div>
            <h3>Single accountability.</h3>
            <p>One project director from kick-off to handover. The site never has to chase a head office.</p>
          </div>
          <div className="principle reveal">
            <div className="num">P/03</div>
            <h3>Built to be operated.</h3>
            <p>Twenty-five years of O&M sit downstream of every drawing we sign. Design choices reflect that.</p>
          </div>
        </div>
      </section>
      
      <section className="section-pad wrap">
        <div className="story-grid">
          <div>
            <div className="eyebrow reveal" style={{ marginBottom: "24px" }}>// 01 — Story</div>
            <h2 className="reveal">Started as a rigging crew. Grew into the EPC.</h2>
          </div>
          <div className="story-body reveal">
            <p><strong>GRM began in 2014 as a heavy-lift rigging contractor</strong> on wind sites in Tamil Nadu, working with crews who had spent twenty years putting steel in the air. The job was unglamorous — it taught us what good engineering looked like from the receiving end.</p>
            <p>By 2017 we were running our own crane fleet. By 2019, lifting solar trackers we'd specified ourselves. By 2022, the engineering practice had grown past the lifting business — and we were closing utility-scale solar EPC contracts of our own.</p>
            <p>BESS came in 2023, when our first solar customers asked us to add storage. Today GRM is structured around three integrated practices — solar, BESS, and lifting — but the operating philosophy hasn't changed since 2014: <strong>show up, do the work, hand over an asset that runs.</strong></p>
          </div>
        </div>
      </section>
      
      <div className="divider"></div>
      
      <section className="section-pad wrap">
        <div className="eyebrow reveal" style={{ marginBottom: "36px" }}>// 02 — Milestones</div>
        <h2 className="h-2 reveal" style={{ marginBottom: "56px", maxWidth: "18ch" }}>Twelve years, plotted as deliverables.</h2>
      
        <div className="timeline reveal">
          <div className="yr">2014</div>
          <div className="ev"><h4>Founded as GRM Heavy Lift</h4><p>Three founding engineers, two crawler cranes, one site office in Coimbatore.</p></div>
        </div>
        <div className="timeline reveal">
          <div className="yr">2017</div>
          <div className="ev"><h4>Owned crane fleet — 12 units</h4><p>First major contract: 80 turbine erections in Karnataka.</p></div>
        </div>
        <div className="timeline reveal">
          <div className="yr">2019</div>
          <div className="ev"><h4>Solar EPC practice spun up</h4><p>30 MW pilot in Telangana — first asset built and lifted by the same firm.</p></div>
        </div>
        <div className="timeline reveal">
          <div className="yr">2022</div>
          <div className="ev"><h4>Crossed 500 MW solar in delivery</h4><p>Hyderabad HQ established. Engineering staff passes 400.</p></div>
        </div>
        <div className="timeline reveal">
          <div className="yr">2023</div>
          <div className="ev"><h4>BESS practice launched</h4><p>First grid-tied 60 MWh installation, Maharashtra.</p></div>
        </div>
        <div className="timeline reveal">
          <div className="yr">2025</div>
          <div className="ev"><h4>1.4 GW pipeline · 14 markets</h4><p>Expansion into MENA and SE Asia. ISO 45001 certified across operations.</p></div>
        </div>
        <div className="timeline reveal">
          <div className="yr">2026</div>
          <div className="ev"><h4>620 MWh storage commissioned</h4><p>Mundra grid-tie comes online — largest single BESS in GRM portfolio to date.</p></div>
        </div>
      </section>
      
      {/* <div className="quote-block">
        <blockquote className="reveal">We don't sell the energy transition. We pour the foundations for it, lift the steel, and hand someone the keys.</blockquote>
        <div className="attr reveal">— R. Mehta, Founder & Managing Director</div>
      </div> */}
      
      {/* <section className="section-pad wrap">
        <div className="eyebrow reveal" style={{ marginBottom: "24px" }}>// 03 — Leadership</div>
        <h2 className="h-2 reveal" style={{ marginBottom: "56px", maxWidth: "22ch" }}>A working leadership. Nobody runs the firm from a desk.</h2>
      
        <div className="leaders">
          <div className="leader reveal card-tilt">
            <div className="photo"><div className="imgslot">PORTRAIT — RM</div></div>
            <div className="body">
              <h4>Rakesh Mehta</h4>
              <div className="role">Founder · MD</div>
              <div className="bio">25 years in heavy lift & civil EPC. Spends two weeks a month on active sites.</div>
            </div>
          </div>
          <div className="leader reveal card-tilt">
            <div className="photo"><div className="imgslot">PORTRAIT — KV</div></div>
            <div className="body">
              <h4>Kavitha Viswanathan</h4>
              <div className="role">CEO · Solar & BESS</div>
              <div className="bio">Ex-Tata Power. Led the firm's transition into utility-scale solar from 2019.</div>
            </div>
          </div>
          <div className="leader reveal card-tilt">
            <div className="photo"><div className="imgslot">PORTRAIT — AS</div></div>
            <div className="body">
              <h4>Arjun Sandhu</h4>
              <div className="role">CTO · Engineering</div>
              <div className="bio">Tracker & substation specialist. 14 patents in PV mounting systems.</div>
            </div>
          </div>
          <div className="leader reveal card-tilt">
            <div className="photo"><div className="imgslot">PORTRAIT — PN</div></div>
            <div className="body">
              <h4>Priya Nair</h4>
              <div className="role">COO · Construction</div>
              <div className="bio">Runs all field operations across 14 markets. Carries a notebook, not a tablet.</div>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* <section className="section-pad wrap">
        <div className="eyebrow reveal" style={{ marginBottom: "56px" }}>// 03 — The team, in numbers</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
          <div style={{ padding: "56px 32px", borderRight: "1px solid var(--line-soft)" }} className="reveal">
            <div style={{ fontSize: "clamp(48px, 5vw, 76px)", fontWeight: "300", letterSpacing: "-0.04em", lineHeight: "1" }}><span data-count="780">0</span></div>
            <div style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--bone-mute)", marginTop: "12px" }}>Engineers on staff</div>
          </div>
          <div style={{ padding: "56px 32px", borderRight: "1px solid var(--line-soft)" }} className="reveal">
            <div style={{ fontSize: "clamp(48px, 5vw, 76px)", fontWeight: "300", letterSpacing: "-0.04em", lineHeight: "1" }}><span data-count="3200">0</span></div>
            <div style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--bone-mute)", marginTop: "12px" }}>Site crew (avg.)</div>
          </div>
          <div style={{ padding: "56px 32px", borderRight: "1px solid var(--line-soft)" }} className="reveal">
            <div style={{ fontSize: "clamp(48px, 5vw, 76px)", fontWeight: "300", letterSpacing: "-0.04em", lineHeight: "1" }}><span data-count="34">0</span><span style={{ fontSize: "0.4em", color: "var(--green)", marginLeft: "4px" }}>%</span></div>
            <div style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--bone-mute)", marginTop: "12px" }}>Women in engineering</div>
          </div>
          <div style={{ padding: "56px 32px" }} className="reveal">
            <div style={{ fontSize: "clamp(48px, 5vw, 76px)", fontWeight: "300", letterSpacing: "-0.04em", lineHeight: "1" }}><span data-count="0">0</span></div>
            <div style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--bone-mute)", marginTop: "12px" }}>LTIs in 2025</div>
          </div>
        </div>
      </section> */}
      
      <section>
        <div className="wrap" style={{ marginBottom: "32px" }}>
          <div className="eyebrow">// 03 — Certifications</div>
        </div>
        <div className="cert-slider">
          <div className="cert-track">
            {CERTS.map((c, i) => <CertCard key={i} c={c} />)}
            {CERTS.map((c, i) => <CertCard key={`dup-${i}`} c={c} />)}
          </div>
        </div>
      </section>
      
      <section className="cta">
        <div className="eyebrow reveal" style={{ marginBottom: "32px" }}><span className="dot"></span>Hiring across all practices</div>
        <h2 className="h-display reveal" style={{ fontSize: "clamp(40px,6vw,96px)" }}>Want to <em>build</em> with us?</h2>
        <p className="lede reveal" style={{ margin: "32px auto" }}>We hire engineers who'd rather be on the site than on the slide.</p>
        <div className="cta-row reveal">
          <a href="#" className="btn btn-primary">Open roles <span className="arrow">→</span></a>
          <a href="mailto:info@infragrm.com" className="btn btn-ghost">info@infragrm.com</a>
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
          <div><h5>Company</h5><ul><li><a href="index.html">Home</a></li><li><a href="about.html">About</a></li><li><a href="solutions.html">Solutions</a></li><li><a href="projects.html">Projects</a></li><li><a href="global-impact.html">Global impact</a></li><li><a href="#">Careers</a></li></ul></div>
          <div><h5>Connect</h5><ul><li><a href="mailto:info@infragrm.com">info@infragrm.com</a></li><li><a href="#">LinkedIn</a></li><li><a href="#">Newsletter</a></li></ul></div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 GRM Infra Ltd</div>
          <div className="footer-legal">
            <a href="#">Privacy policy</a>
            <a href="#">Cookies</a>
            <a href="#">Terms & Conditions</a>
          </div>
          <div>ISO 9001 / 14001 / 45001</div>
        </div>
      </footer>
    </div>
  )
}
