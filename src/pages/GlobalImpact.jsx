import { useRef } from 'react'
import { usePageEffects } from '../hooks/usePageEffects'

export default function GlobalImpact() {
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
          <a href="about.html">About</a>
          <a href="solutions.html">Solutions</a>
          <a href="projects.html">Projects</a>
          <a href="global-impact.html" className="active">Global Impact</a>
        </nav>
        <a href="index.html#contact" className="nav-cta">Start a project <span>→</span></a>
      </header>
      
      <section className="gi-hero">
        <div className="wrap">
          <div className="eyebrow reveal" style={{ marginBottom: "36px" }}><span className="dot"></span>Impact report — FY 2025</div>
          <h1 className="h-display reveal">Measured by what's <em>delivered.</em></h1>
          <p className="lede reveal" style={{ marginTop: "32px", maxWidth: "56ch" }}>The energy transition is a numbers exercise. These are ours — capacity built, emissions avoided, and the markets where GRM crews are on shift this week.</p>
        </div>
      </section>
      
      <section>
        <div className="topnumbers">
          <div className="tn reveal">
            <div className="v"><span data-count="2.1" data-decimals="1">0</span><span className="u">Mt</span></div>
            <div className="l">CO₂ avoided / year</div>
            <div className="delta">↑ 38% vs FY24</div>
          </div>
          <div className="tn reveal">
            <div className="v"><span data-count="1.4" data-decimals="1">0</span><span className="u">GW</span></div>
            <div className="l">Solar in pipeline</div>
            <div className="delta">↑ 22% vs FY24</div>
          </div>
          <div className="tn reveal">
            <div className="v"><span data-count="620" data-decimals="0">0</span><span className="u">MWh</span></div>
            <div className="l">Storage commissioned</div>
            <div className="delta">↑ 4×  vs FY24</div>
          </div>
          <div className="tn reveal">
            <div className="v"><span data-count="14" data-decimals="0">0</span></div>
            <div className="l">Active markets</div>
            <div className="delta">+3 in FY25</div>
          </div>
        </div>
      </section>
      
      
      <section className="mapwrap">
        <div className="wrap">
          <div className="map-head">
            <div>
              <div className="eyebrow reveal" style={{ marginBottom: "24px" }}>// 01 — Where we operate</div>
              <h2 className="reveal">Close to the <em>asset.</em></h2>
              <div className="grid-sync reveal">
                <span className="grid-sync-dot"></span>
                <span>Grid sync · Live</span>
                <span className="grid-sync-val">99.97% uptime</span>
              </div>
            </div>
            <p className="reveal">GRM's regional teams operate within a day's travel of every active site. Engineering, supply chain, and field crews on the ground where the project lives — not in a head office a continent away.</p>
          </div>
      
          <div className="mapcontainer reveal">
            <div className="ml-label">MAP — ACTIVE MARKETS · 05.2026</div>
            <div className="ml-legend">
              <span><i style={{ background: "#34d399" }}></i>Solar</span>
              <span><i style={{ background: "#60a5fa" }}></i>BESS</span>
              <span><i style={{ background: "#fbbf24" }}></i>Lifting</span>
            </div>
            <svg viewBox="0 0 1200 540" preserveAspectRatio="xMidYMid meet">
              
              <g fill="#1c1c1c" stroke="#2a2a2a" strokeWidth="0.6">
                
                <path d="M120 110 Q90 130 95 180 Q100 230 130 260 Q160 280 200 270 Q240 240 250 200 L260 160 Q270 130 250 110 Q220 90 180 95 Q145 100 120 110 Z"/>
                
                <path d="M260 280 Q250 320 270 380 Q280 430 305 460 Q325 480 340 460 Q355 420 350 380 Q345 340 335 310 Q320 285 295 280 Q275 278 260 280 Z"/>
                
                <path d="M540 130 Q525 145 530 175 Q540 200 565 210 Q600 215 620 200 Q635 180 630 155 Q615 135 590 128 Q560 124 540 130 Z"/>
                
                <path d="M555 220 Q540 250 555 290 Q570 340 605 365 Q635 380 655 360 Q670 320 660 280 Q650 240 625 220 Q590 210 555 220 Z"/>
                
                <path d="M650 130 Q635 155 645 195 Q665 215 700 220 L755 222 Q800 218 840 215 Q900 218 950 220 Q985 220 1010 200 Q1020 175 1000 145 Q950 125 900 122 Q850 120 800 122 Q740 124 695 128 Q670 128 650 130 Z"/>
                
                <path d="M755 222 Q745 250 755 285 Q770 305 790 295 Q800 270 795 245 Q780 225 755 222 Z"/>
                
                <path d="M945 360 Q925 375 935 405 Q955 425 1000 425 Q1040 420 1050 400 Q1045 375 1010 365 Q975 358 945 360 Z"/>
              </g>
              
              <g stroke="#222" strokeWidth=".4" fill="none" opacity=".6">
                <path d="M0 100 L1200 100 M0 200 L1200 200 M0 300 L1200 300 M0 400 L1200 400"/>
                <path d="M200 0 L200 540 M400 0 L400 540 M600 0 L600 540 M800 0 L800 540 M1000 0 L1000 540"/>
              </g>
      
              
              <g className="pin" transform="translate(782 260)">
                <circle className="pulse" cx="0" cy="0" r="3" fill="none" stroke="#34d399" strokeWidth="1.4"/>
                <circle className="core" cx="0" cy="0" r="6" fill="#34d399"/>
                <text x="14" y="4" fontFamily="ui-monospace,monospace" fontSize="10" fill="#f5f3ee" letterSpacing="1">HYDERABAD · HQ</text>
              </g>
              <g className="pin" transform="translate(770 240)">
                <circle className="pulse" cx="0" cy="0" r="3" fill="none" stroke="#34d399" strokeWidth="1.4"/>
                <circle className="core" cx="0" cy="0" r="4" fill="#34d399"/>
                <text x="-90" y="4" fontFamily="ui-monospace,monospace" fontSize="9" fill="#b8b6af" letterSpacing="1">RAJASTHAN</text>
              </g>
              <g className="pin" transform="translate(760 270)">
                <circle className="pulse" cx="0" cy="0" r="3" fill="none" stroke="#fbbf24" strokeWidth="1.4"/>
                <circle className="core" cx="0" cy="0" r="4" fill="#fbbf24"/>
              </g>
              <g className="pin" transform="translate(795 270)">
                <circle className="core" cx="0" cy="0" r="4" fill="#60a5fa"/>
              </g>
              
              <g className="pin" transform="translate(880 290)">
                <circle className="pulse" cx="0" cy="0" r="3" fill="none" stroke="#34d399" strokeWidth="1.4"/>
                <circle className="core" cx="0" cy="0" r="5" fill="#34d399"/>
                <text x="14" y="4" fontFamily="ui-monospace,monospace" fontSize="9" fill="#b8b6af" letterSpacing="1">VIETNAM</text>
              </g>
              <g className="pin" transform="translate(910 320)">
                <circle className="core" cx="0" cy="0" r="4" fill="#34d399"/>
                <text x="-12" y="-10" fontFamily="ui-monospace,monospace" fontSize="9" fill="#b8b6af" letterSpacing="1">PH</text>
              </g>
              
              <g className="pin" transform="translate(660 220)">
                <circle className="pulse" cx="0" cy="0" r="3" fill="none" stroke="#60a5fa" strokeWidth="1.4"/>
                <circle className="core" cx="0" cy="0" r="5" fill="#60a5fa"/>
                <text x="14" y="4" fontFamily="ui-monospace,monospace" fontSize="9" fill="#b8b6af" letterSpacing="1">UAE</text>
              </g>
              <g className="pin" transform="translate(635 230)">
                <circle className="core" cx="0" cy="0" r="4" fill="#34d399"/>
                <text x="-50" y="4" fontFamily="ui-monospace,monospace" fontSize="9" fill="#b8b6af" letterSpacing="1">SAUDI</text>
              </g>
              
              <g className="pin" transform="translate(605 320)">
                <circle className="pulse" cx="0" cy="0" r="3" fill="none" stroke="#34d399" strokeWidth="1.4"/>
                <circle className="core" cx="0" cy="0" r="4" fill="#34d399"/>
                <text x="14" y="4" fontFamily="ui-monospace,monospace" fontSize="9" fill="#b8b6af" letterSpacing="1">KENYA</text>
              </g>
              <g className="pin" transform="translate(595 365)">
                <circle className="core" cx="0" cy="0" r="4" fill="#34d399"/>
                <text x="-32" y="14" fontFamily="ui-monospace,monospace" fontSize="9" fill="#b8b6af" letterSpacing="1">SA</text>
              </g>
              
              <g className="pin" transform="translate(580 170)">
                <circle className="pulse" cx="0" cy="0" r="3" fill="none" stroke="#60a5fa" strokeWidth="1.4"/>
                <circle className="core" cx="0" cy="0" r="4" fill="#60a5fa"/>
                <text x="14" y="4" fontFamily="ui-monospace,monospace" fontSize="9" fill="#b8b6af" letterSpacing="1">SPAIN</text>
              </g>
              <g className="pin" transform="translate(610 175)">
                <circle className="core" cx="0" cy="0" r="4" fill="#fbbf24"/>
              </g>
              
              <g className="pin" transform="translate(990 395)">
                <circle className="pulse" cx="0" cy="0" r="3" fill="none" stroke="#34d399" strokeWidth="1.4"/>
                <circle className="core" cx="0" cy="0" r="5" fill="#34d399"/>
                <text x="14" y="4" fontFamily="ui-monospace,monospace" fontSize="9" fill="#b8b6af" letterSpacing="1">NEW SOUTH WALES</text>
              </g>
              <g className="pin" transform="translate(960 405)">
                <circle className="core" cx="0" cy="0" r="4" fill="#60a5fa"/>
              </g>
              
              <g className="pin" transform="translate(310 380)">
                <circle className="pulse" cx="0" cy="0" r="3" fill="none" stroke="#34d399" strokeWidth="1.4"/>
                <circle className="core" cx="0" cy="0" r="4" fill="#34d399"/>
                <text x="14" y="4" fontFamily="ui-monospace,monospace" fontSize="9" fill="#b8b6af" letterSpacing="1">CHILE</text>
              </g>
      
              
              <g stroke="#34d399" strokeWidth=".6" strokeDasharray="2 4" fill="none" opacity=".4">
                <path d="M782 260 Q830 240 880 290"/>
                <path d="M782 260 Q720 220 660 220"/>
                <path d="M782 260 Q860 320 990 395"/>
                <path d="M782 260 Q500 320 310 380"/>
              </g>
            </svg>
          </div>
      
          <div className="markets reveal">
            <div className="market"><div className="flag">IN</div><h4>India</h4><div className="stat">Solar <b>880 MW</b></div><div className="stat">BESS <b>320 MWh</b></div><div className="stat">Lifts <b>1,800+</b></div></div>
            <div className="market"><div className="flag">AE</div><h4>UAE</h4><div className="stat">Solar <b>120 MW</b></div><div className="stat">BESS <b>180 MWh</b></div><div className="stat">Lifts <b>140</b></div></div>
            <div className="market"><div className="flag">SA</div><h4>Saudi Arabia</h4><div className="stat">Solar <b>200 MW</b></div><div className="stat">BESS <b>40 MWh</b></div><div className="stat">Lifts <b>90</b></div></div>
            <div className="market"><div className="flag">VN</div><h4>Vietnam</h4><div className="stat">Solar <b>80 MW</b></div><div className="stat">BESS <b>—</b></div><div className="stat">Lifts <b>60</b></div></div>
            <div className="market"><div className="flag">PH</div><h4>Philippines</h4><div className="stat">Solar <b>40 MW</b></div><div className="stat">BESS <b>20 MWh</b></div><div className="stat">Lifts <b>32</b></div></div>
            <div className="market"><div className="flag">KE</div><h4>Kenya</h4><div className="stat">Solar <b>30 MW</b></div><div className="stat">BESS <b>10 MWh</b></div><div className="stat">Lifts <b>18</b></div></div>
            <div className="market"><div className="flag">ZA</div><h4>South Africa</h4><div className="stat">Solar <b>60 MW</b></div><div className="stat">BESS <b>30 MWh</b></div><div className="stat">Lifts <b>40</b></div></div>
            <div className="market"><div className="flag">ES</div><h4>Spain</h4><div className="stat">Solar <b>—</b></div><div className="stat">BESS <b>60 MWh</b></div><div className="stat">Lifts <b>22</b></div></div>
            <div className="market"><div className="flag">AU</div><h4>Australia</h4><div className="stat">Solar <b>50 MW</b></div><div className="stat">BESS <b>120 MWh</b></div><div className="stat">Lifts <b>50</b></div></div>
            <div className="market"><div className="flag">CL</div><h4>Chile</h4><div className="stat">Solar <b>40 MW</b></div><div className="stat">BESS <b>—</b></div><div className="stat">Lifts <b>14</b></div></div>
            <div className="market"><div className="flag">EG</div><h4>Egypt</h4><div className="stat">Solar <b>100 MW</b></div><div className="stat">BESS <b>—</b></div><div className="stat">Lifts <b>34</b></div></div>
            <div className="market"><div className="flag">+3</div><h4>Pre-development</h4><div className="stat">Brazil <b>·</b> Oman <b>·</b> Indonesia</div></div>
          </div>
        </div>
      </section>
      
      
      <section className="chart">
        <div className="wrap">
          <div className="chart-grid">
            <div>
              <div className="eyebrow reveal" style={{ marginBottom: "24px" }}>// 02 — CO₂ avoided</div>
              <h2 className="h-1 reveal" style={{ maxWidth: "16ch" }}>Two-and-a-half million<br/>tonnes — and <em style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>accelerating.</em></h2>
              <p className="lede reveal" style={{ marginTop: "28px" }}>Emissions avoided by GRM-built solar & storage assets in operation, year by year. FY26 figures projected on commissioning schedule.</p>
            </div>
            <div className="chart-bars reveal">
              <div className="bar-row" style={{ "--w": "8%" }}><div className="yr">FY 2020</div><div className="track"><div className="fill"></div></div><div className="v">0.18 Mt</div></div>
              <div className="bar-row" style={{ "--w": "18%" }}><div className="yr">FY 2021</div><div className="track"><div className="fill"></div></div><div className="v">0.42 Mt</div></div>
              <div className="bar-row" style={{ "--w": "32%" }}><div className="yr">FY 2022</div><div className="track"><div className="fill"></div></div><div className="v">0.74 Mt</div></div>
              <div className="bar-row" style={{ "--w": "48%" }}><div className="yr">FY 2023</div><div className="track"><div className="fill"></div></div><div className="v">1.12 Mt</div></div>
              <div className="bar-row" style={{ "--w": "66%" }}><div className="yr">FY 2024</div><div className="track"><div className="fill"></div></div><div className="v">1.52 Mt</div></div>
              <div className="bar-row" style={{ "--w": "86%" }}><div className="yr">FY 2025</div><div className="track"><div className="fill"></div></div><div className="v">2.10 Mt</div></div>
              <div className="bar-row" style={{ "--w": "100%", opacity: ".7" }}><div className="yr">FY 2026<br/><span style={{ fontSize: "9px", opacity: ".6" }}>PROJECTED</span></div><div className="track"><div className="fill" style={{ background: "linear-gradient(90deg, var(--green-dim), #114936)" }}></div></div><div className="v">2.45 Mt</div></div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="divider"></div>
      
      
      <section className="sdg">
        <div className="wrap">
          <div className="sdg-grid">
            <div>
              <div className="eyebrow reveal" style={{ marginBottom: "24px" }}>// 03 — Aligned to</div>
              <h2 className="h-1 reveal" style={{ maxWidth: "14ch" }}>Three goals that <em style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>define the work.</em></h2>
              <p className="lede reveal" style={{ marginTop: "28px" }}>We commit to the UN SDGs that infrastructure work can actually move — affordable energy, decent work, and climate action. The other 14 are someone else's job.</p>
            </div>
            <div className="sdg-cards">
              <div className="sdg-card reveal card-tilt"><div className="num">SDG 07</div><h4>Affordable & Clean Energy</h4><p>1.4 GW of solar in pipeline replaces ~3.2 Mt of coal-fired generation per year.</p></div>
              <div className="sdg-card reveal card-tilt"><div className="num">SDG 08</div><h4>Decent Work & Growth</h4><p>3,200 site jobs across 14 markets; 60% local hire commitment per project.</p></div>
              <div className="sdg-card reveal card-tilt"><div className="num">SDG 13</div><h4>Climate Action</h4><p>2.1 Mt CO₂ avoided / yr — equivalent to taking 460,000 cars off the road.</p></div>
            </div>
          </div>
        </div>
      </section>
      
      
      <section className="community">
        <div className="wrap">
          <div className="eyebrow reveal" style={{ marginBottom: "24px" }}>// 04 — Beyond the asset</div>
          <h2 className="h-1 reveal" style={{ maxWidth: "18ch" }}>Communities <em style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>stay</em> when the<br/>contractors leave.</h2>
          <p className="lede reveal" style={{ marginTop: "28px", maxWidth: "60ch" }}>A solar plant lasts 25 years. The village around it lasts longer. GRM's CSI programme funds skills training, water, and grid access for the communities that host our sites.</p>
      
          <div className="community-grid">
            <div className="csi-card reveal card-tilt">
              <div className="imgslot">SITE PHOTO — TRAINING CENTRE</div>
              <div className="body">
                <div className="meta">SKILLS · ANANTAPUR, IN</div>
                <h4>Solar technician academy</h4>
                <p>2-year apprenticeship in PV operations & maintenance, run with the local ITI. 184 graduates so far, 92% placed in the regional solar sector.</p>
              </div>
            </div>
            <div className="csi-card reveal card-tilt">
              <div className="imgslot">SITE PHOTO — WATER PROJECT</div>
              <div className="body">
                <div className="meta">WATER · KHAVDA, IN</div>
                <h4>Solar-powered water access</h4>
                <p>Eleven solar-pump water points serving 26,000 residents in villages near our Khavda hybrid block. No diesel, no monthly fuel run.</p>
              </div>
            </div>
            <div className="csi-card reveal card-tilt">
              <div className="imgslot">SITE PHOTO — GRID</div>
              <div className="body">
                <div className="meta">GRID · TURKANA, KE</div>
                <h4>Mini-grid for off-grid villages</h4>
                <p>Three 200 kW solar + 600 kWh BESS mini-grids electrifying schools, clinics, and 4,200 households where the national grid hasn't reached.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <div className="eyebrow reveal" style={{ marginBottom: "32px" }}><span className="dot"></span>Annual report · 2026</div>
        <h2 className="h-display reveal" style={{ fontSize: "clamp(40px,6vw,96px)" }}>Read the full <em>impact report.</em></h2>
        <div className="cta-row reveal" style={{ marginTop: "40px" }}>
          <a href="#" className="btn btn-primary">Download FY25 PDF <span className="arrow">→</span></a>
          <a href="projects.html" className="btn btn-ghost">See projects</a>
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
            <div className="body-sm" style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.06em" }}>GRM INFRASTRUCTURE PVT. LTD.<br/>HQ — Hyderabad, India</div>
          </div>
          <div><h5>Company</h5><ul><li><a href="about.html">About us</a></li><li><a href="global-impact.html">Global impact</a></li><li><a href="projects.html">Projects</a></li><li><a href="#">Careers</a></li></ul></div>
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
