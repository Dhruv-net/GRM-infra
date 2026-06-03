import { useRef } from 'react'
import { usePageEffects } from '../hooks/usePageEffects'
import { useHeroScene } from '../hooks/useHeroScene'

export default function Home() {
  const ref = useRef(null)
  usePageEffects(ref)
  useHeroScene(ref)
  return (
    <div ref={ref} data-hero="3d">
      <header className="nav">
        <a href="index.html" className="nav-logo" aria-label="GRM Infra home">
          <img src="/brand/grm-logo.jpeg" alt="GRM Infra" className="brand-mark"/>
          <span className="wordmark">GRM<span className="infra">INFRA</span></span>
        </a>
        <nav className="nav-links">
          <a href="index.html" className="active">Home</a>
          <a href="about.html">About</a>
          <a href="solutions.html">Solutions</a>
          <a href="projects.html">Projects</a>
          <a href="global-impact.html">Global Impact</a>
        </nav>
        <a href="#contact" className="nav-cta">Start a project <span>→</span></a>
      </header>
      
      
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <canvas id="hero-canvas"></canvas>
        <div className="hero-photo"></div>
        <svg className="hero-illus" viewBox="0 0 600 500" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="ig1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#34d399" stopOpacity=".5"/>
              <stop offset="1" stopColor="#34d399" stopOpacity="0"/>
            </linearGradient>
          </defs>
          
          <path d="M50 350 L300 220 L550 350 L300 480 Z" stroke="#2a2a2a" strokeWidth="1" fill="url(#ig1)" opacity=".4"/>
          
          <g transform="translate(80 240)">
            <path d="M0 60 L80 20 L160 60 L80 100 Z" fill="#131313" stroke="#34d399" strokeWidth="1.2"/>
            <path d="M0 60 L0 90 L80 130 L80 100 Z" fill="#0a0a0a" stroke="#34d399" strokeWidth="1"/>
            <path d="M80 100 L80 130 L160 90 L160 60 Z" fill="#0f0f0f" stroke="#34d399" strokeWidth="1"/>
            <path d="M20 65 L60 85 M40 55 L80 75 M60 45 L100 65" stroke="#34d399" strokeWidth=".8" opacity=".6"/>
          </g>
          
          <g transform="translate(330 130)">
            <path d="M0 80 L120 20 L200 60 L80 120 Z" fill="#1e3a5f" stroke="#2c5282" strokeWidth="1.2"/>
            <path d="M30 90 L130 40 M60 105 L160 55 M0 80 L80 120 M40 60 L120 100 M80 40 L160 80" stroke="#2c5282" strokeWidth=".6"/>
            <path d="M100 110 L100 180 M104 180 L96 180" stroke="#6e6c66" strokeWidth="1.5"/>
          </g>
          
          <g transform="translate(380 200)">
            <path d="M0 200 L0 0 L4 0 L4 200 Z" fill="#1c1c1c" stroke="#fbbf24" strokeWidth=".8"/>
            <path d="M0 0 L160 -40 L160 -36 L4 4 Z" fill="#1c1c1c" stroke="#fbbf24" strokeWidth=".8"/>
            <path d="M2 0 L80 -20 M2 4 L160 -36" stroke="#fbbf24" strokeWidth=".4" opacity=".6"/>
            <line x1="120" y1="-30" x2="120" y2="20" stroke="#fbbf24" strokeWidth=".6"/>
            <rect x="115" y="20" width="10" height="8" fill="#fbbf24" opacity=".5"/>
          </g>
        </svg>
      
        <div className="hero-inner">
          <div>
            <div className="eyebrow reveal" style={{ marginBottom: "36px" }}><span className="dot"></span>Utility-Scale Solar · Energy Storage · EPC</div>
            <h1 className="h-display reveal hero-headline">
              Building the<br/>systems that<br/><em>move energy.</em>
            </h1>
          </div>
          <div className="hero-meta reveal">
            <p className="lede">GRM Infra engineers, builds, and operates the delivery of utility-scale solar and battery storage systems for the next decade of grid expansion.</p>
            <div className="hero-cta-row">
              <a href="solutions.html" className="btn btn-primary">Explore solutions <span className="arrow">→</span></a>
              <a href="projects.html" className="btn btn-ghost">See projects</a>
            </div>
          </div>
        </div>
      
        <div className="hero-strip">
          <div className="hero-strip-stats">
            <div><b>1.4 GW</b>Pipeline capacity</div>
            <div><b>90+</b>Projects engineered</div>
            <div><b>99.97%</b>SCADA uplink</div>
          </div>
        </div>
      </section>
      
      
      <section>
        <div className="caps">
          <div className="cap reveal">
            <div className="cap-num">01 / Solar</div>
            <div className="cap-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="9" stroke="#34d399" strokeWidth="1.4"/>
                <g stroke="#34d399" strokeWidth="1.4" strokeLinecap="round">
                  <line x1="32" y1="6" x2="32" y2="14"/>
                  <line x1="32" y1="50" x2="32" y2="58"/>
                  <line x1="6" y1="32" x2="14" y2="32"/>
                  <line x1="50" y1="32" x2="58" y2="32"/>
                  <line x1="13" y1="13" x2="19" y2="19"/>
                  <line x1="45" y1="45" x2="51" y2="51"/>
                  <line x1="13" y1="51" x2="19" y2="45"/>
                  <line x1="45" y1="19" x2="51" y2="13"/>
                </g>
              </svg>
            </div>
            <h3>Utility-scale Solar</h3>
            <p>Greenfield to grid: design, EPC, and commissioning of single-axis tracker plants from 5 MW to 1 GW.</p>
            <a href="solutions.html#solar" className="cap-link">Capability brief</a>
          </div>
          <div className="cap reveal">
            <div className="cap-num">02 / BESS</div>
            <div className="cap-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <rect x="10" y="18" width="44" height="32" rx="2" stroke="#34d399" strokeWidth="1.4"/>
                <rect x="22" y="14" width="6" height="4" stroke="#34d399" strokeWidth="1.4"/>
                <rect x="36" y="14" width="6" height="4" stroke="#34d399" strokeWidth="1.4"/>
                <line x1="16" y1="26" x2="48" y2="26" stroke="#34d399" strokeWidth="1"/>
                <line x1="16" y1="34" x2="48" y2="34" stroke="#34d399" strokeWidth="1"/>
                <line x1="16" y1="42" x2="48" y2="42" stroke="#34d399" strokeWidth="1"/>
                <path d="M30 30 L34 34 L30 38" stroke="#34d399" strokeWidth="1.4" fill="none"/>
              </svg>
            </div>
            <h3>Battery Energy Storage</h3>
            <p>Containerised BESS integration from 5 MWh to 500 MWh — Li-ion and emerging chemistries, EMS-ready.</p>
            <a href="solutions.html#bess" className="cap-link">Capability brief</a>
          </div>
          <div className="cap reveal">
            <div className="cap-num">03 / Wind Farm</div>
            <div className="cap-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <line x1="32" y1="58" x2="32" y2="34" stroke="#34d399" strokeWidth="1.4"/>
                <line x1="26" y1="58" x2="38" y2="58" stroke="#34d399" strokeWidth="1.4"/>
                <circle cx="32" cy="30" r="3" stroke="#34d399" strokeWidth="1.4"/>
                <line x1="32" y1="27" x2="32" y2="9" stroke="#34d399" strokeWidth="1.4"/>
                <line x1="34.6" y1="31.5" x2="50" y2="40" stroke="#34d399" strokeWidth="1.4"/>
                <line x1="29.4" y1="31.5" x2="14" y2="40" stroke="#34d399" strokeWidth="1.4"/>
              </svg>
            </div>
            <h3>Wind Farm Infrastructure</h3>
            <p>Full wind farm EPC — turbine erection, foundations, collector grid, and grid-ready commissioning.</p>
            <a href="solutions.html#cranes" className="cap-link">Capability brief</a>
          </div>
          <div className="cap reveal">
            <div className="cap-num">04 / EPC</div>
            <div className="cap-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <path d="M16 42 a16 16 0 0 1 32 0" stroke="#34d399" strokeWidth="1.4"/>
                <line x1="8" y1="42" x2="56" y2="42" stroke="#34d399" strokeWidth="1.4"/>
                <line x1="29" y1="14" x2="35" y2="14" stroke="#34d399" strokeWidth="1.4"/>
                <line x1="24" y1="26" x2="24" y2="42" stroke="#34d399" strokeWidth="1" opacity="0.6"/>
                <line x1="32" y1="22" x2="32" y2="42" stroke="#34d399" strokeWidth="1" opacity="0.6"/>
                <line x1="40" y1="26" x2="40" y2="42" stroke="#34d399" strokeWidth="1" opacity="0.6"/>
              </svg>
            </div>
            <h3>EPC &amp; Construction</h3>
            <p>Turnkey engineering, procurement, and construction with stringent QA/QC controls.</p>
            <a href="solutions.html#epc" className="cap-link">Capability brief</a>
          </div>
        </div>
      </section>
      
      
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Engineer<span className="dot">·</span>Procure<span className="dot">·</span>Construct<span className="dot">·</span>Operate<span className="dot">·</span>Engineer<span className="dot">·</span>Procure<span className="dot">·</span>Construct<span className="dot">·</span>Operate<span className="dot">·</span></span>
          <span>Engineer<span className="dot">·</span>Procure<span className="dot">·</span>Construct<span className="dot">·</span>Operate<span className="dot">·</span>Engineer<span className="dot">·</span>Procure<span className="dot">·</span>Construct<span className="dot">·</span>Operate<span className="dot">·</span></span>
        </div>
      </div>
      
      
      <section className="section-pad wrap theme-light">
        <div className="manifesto">
          <div>
            <div className="eyebrow reveal" style={{ marginBottom: "28px" }}>// 01 — Manifesto</div>
            <h2 className="reveal">Engineering the <em>Next Generation</em> of Renewable Power.</h2>
          </div>
          <div className="manifesto-body reveal">
            <p>We believe renewable infrastructure deserves more than delivery — it demands precision, resilience, and engineering depth at every stage.</p>
            <p>Our multidisciplinary teams of electrical, civil, and software engineers work across the entire asset lifecycle: from feasibility and design to EPC, grid connection, SCADA integration, and long-term operations & maintenance.</p>
            <p>We operate where technical rigour meets utility-scale ambition — building renewable power systems designed to perform, endure, and scale for the future.</p>
            <a href="about.html" className="btn btn-ghost" style={{ marginTop: "16px" }}>Read more about us <span className="arrow">→</span></a>
          </div>
        </div>
      </section>
      
      <div className="divider"></div>
      
      
      <section className="section-pad wrap">
        <div className="rail-head reveal">
          <div>
            <div className="eyebrow" style={{ marginBottom: "22px" }}>// 02 — Selected work</div>
            <h2 className="h-1">Recent on the books.</h2>
          </div>
          <a href="projects.html" className="btn btn-ghost">All projects <span className="arrow">→</span></a>
        </div>
        <div className="rail-grid reveal">
          <a className="proj feature" href="projects.html">
            <div className="proj-img"><img src="/projects/norwich.jpg" alt=""/></div>
            <div className="proj-meta">
              <span className="tag"><span className="green">●</span> BESS · 8 MW</span>
              <h3>Norwich storage block</h3>
              <div className="body-sm">United Kingdom — turnkey delivery · 2025</div>
            </div>
          </a>
          <a className="proj" href="projects.html">
            <div className="proj-img"><img src="/projects/yerbeston.jpg" alt=""/></div>
            <div className="proj-meta">
              <span className="tag"><span className="green">●</span> Solar · 6 MW</span>
              <h3>Yerbeston solar farm</h3>
              <div className="body-sm">United Kingdom — UK SOL panels · 2025</div>
            </div>
          </a>
          <a className="proj" href="projects.html">
            <div className="proj-img"><img src="/projects/crossford.jpeg" alt="Crossford wind farm"/></div>
            <div className="proj-meta">
              <span className="tag"><span className="green">●</span> Wind · 3.6 MW</span>
              <h3>Crossford wind farm</h3>
              <div className="body-sm">Operational since 2022 · 5 GWh/yr</div>
            </div>
          </a>
          <a className="proj" href="projects.html">
            <div className="proj-img"><img src="/projects/cesis.jpg" alt=""/></div>
            <div className="proj-meta">
              <span className="tag"><span className="green">●</span> Solar · 3.8 MWp</span>
              <h3>Cēsis solar plant</h3>
              <div className="body-sm">Latvia — CORAB mounting · 2025</div>
            </div>
          </a>
          <a className="proj" href="projects.html">
            <div className="proj-img"><img src="/projects/algeria.jpg" alt=""/></div>
            <div className="proj-meta">
              <span className="tag"><span className="green">●</span> BESS · 5 MW</span>
              <h3>Algeria storage system</h3>
              <div className="body-sm">Algeria — lithium-ion · 2025</div>
            </div>
          </a>
        </div>
      </section>
      
      
      <section className="globe-strip theme-light" id="footprint">
        <div className="globe-grid">
          <div className="reveal">
            <div className="eyebrow" style={{ marginBottom: "22px" }}>// 03 — Global footprint</div>
            <h2 className="h-1" style={{ marginBottom: "22px" }}>Building energy systems <em style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>across continents.</em></h2>
            <p className="lede" style={{ marginBottom: "28px" }}>GRM delivers projects through locally embedded teams — combining engineering, procurement, and field execution across every stage of delivery.</p>
            <a href="global-impact.html" className="btn btn-ghost">See the map <span className="arrow">→</span></a>
            <div className="grid-sync">
              <span className="grid-sync-dot"></span>
              <span>Grid sync · Live</span>
              <span className="grid-sync-val">99.97% uptime</span>
            </div>
          </div>
          <div className="globe-stats reveal">
            <div className="stat"><div className="n"><span data-count="1.4" data-decimals="1">0</span><span className="unit">GW</span></div><div className="l">Renewable projects in pipeline</div></div>
            <div className="stat"><div className="n"><span data-count="620" data-decimals="0">0</span><span className="unit">MWh</span></div><div className="l">Storage commissioned</div></div>
            <div className="stat"><div className="n"><span data-count="7" data-decimals="0">0</span></div><div className="l">Active markets</div></div>
            <div className="stat"><div className="n"><span data-count="2.1" data-decimals="1">0</span><span className="unit">Mt</span></div><div className="l">CO₂ avoided / yr</div></div>
          </div>
        </div>
      </section>
      
      
      <section className="cta" id="contact">
        <h2 className="h-display reveal" style={{ fontSize: "clamp(40px,6vw,96px)" }}>Power your next<br/>project with <em>GRM.</em></h2>
        <p className="lede reveal" style={{ margin: "32px auto" }}>Our origination team replies within two business days. Bring a site, a load, or a problem.</p>
        <div className="cta-row reveal">
          <a href="mailto:info@infragrm.com" className="btn btn-primary">info@infragrm.com <span className="arrow">→</span></a>
          <a href="about.html" className="btn btn-ghost">Meet the team</a>
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
