import { useRef, useMemo } from 'react'
import { geoMercator, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import worldGeo from 'world-atlas/countries-110m.json'
import { usePageEffects } from '../hooks/usePageEffects'

// Brand colours by practice
const SOLAR = '#60a5fa'
const BESS = '#fbbf24'
const WIND = '#ffffff'

// Map frame (matches the svg viewBox)
const MAP_W = 1200
const MAP_H = 540

// Real project sites — [longitude, latitude]. dx/dy = label offset from the dot,
// ddx/ddy = small nudge of the dot itself to keep tight clusters legible.
const SITES = [
  // United Kingdom
  { name: 'ORKNEY', coords: [-2.96, 58.98], color: WIND, dx: 9, dy: 3, anchor: 'start' },
  { name: 'CROSSFORD', coords: [-3.74, 55.62], color: WIND, dx: -9, dy: 3, anchor: 'end' },
  { name: 'NORWICH', coords: [1.30, 52.63], color: BESS, dx: 9, dy: 3, anchor: 'start', ddx: 2, ddy: -13 },
  { name: 'HEREFORD', coords: [-2.72, 52.06], color: SOLAR, dx: -9, dy: 3, anchor: 'end', ddy: -8 },
  { name: 'NEWPORT', coords: [-3.00, 51.59], color: BESS, dx: -9, dy: 3, anchor: 'end', ddy: 6 },
  { name: 'YERBESTON', coords: [-4.79, 51.73], color: SOLAR, dx: -9, dy: 3, anchor: 'end', ddx: -2, ddy: 20 },
  // Latvia
  { name: 'CĒSIS', coords: [25.27, 57.31], color: SOLAR, dx: 9, dy: 3, anchor: 'start', ddy: 8 },
  { name: 'VALMIERA', coords: [25.42, 57.54], color: SOLAR, dx: 9, dy: 3, anchor: 'start', ddy: -9 },
  // Algeria
  { name: 'ALGIERS', coords: [3.06, 36.75], color: BESS, dx: 9, dy: 2, anchor: 'start' },
  { name: 'ORAN', coords: [-0.64, 35.70], color: BESS, dx: -9, dy: 13, anchor: 'end' },
  // India
  { name: 'AJMER', coords: [74.64, 26.45], color: SOLAR, dx: -9, dy: 2, anchor: 'end' },
  { name: 'GWALIOR', coords: [78.18, 26.22], color: SOLAR, dx: 9, dy: 0, anchor: 'start' },
  { name: 'BHOPAL', coords: [77.41, 23.26], color: SOLAR, dx: 9, dy: 4, anchor: 'start' },
]

export default function GlobalImpact() {
  const ref = useRef(null)
  usePageEffects(ref)

  // Real world map, fitted so all sites (UK → India) sit inside the frame.
  const { countryPaths, project } = useMemo(() => {
    const proj = geoMercator().center([36.7, 44.87]).scale(347).translate([MAP_W / 2, MAP_H / 2])
    const pathGen = geoPath(proj)
    const land = feature(worldGeo, worldGeo.objects.countries).features
    return { countryPaths: land.map((f) => pathGen(f)), project: proj }
  }, [])

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
      
      <section className="theme-light">
        <div className="topnumbers">
          <div className="tn reveal">
            <div className="v"><span data-count="2.1" data-decimals="1">0</span><span className="u">Mt</span></div>
            <div className="l">CO₂ avoided / year</div>
            <div className="delta">↑ 38% vs FY24</div>
          </div>
          <div className="tn reveal">
            <div className="v"><span data-count="1.4" data-decimals="1">0</span><span className="u">GW</span></div>
            <div className="l">Renewable projects in pipeline</div>
            <div className="delta">↑ 22% vs FY24</div>
          </div>
          <div className="tn reveal">
            <div className="v"><span data-count="620" data-decimals="0">0</span><span className="u">MWh</span></div>
            <div className="l">Storage commissioned</div>
            <div className="delta">↑ 4×  vs FY24</div>
          </div>
          <div className="tn reveal">
            <div className="v"><span data-count="7" data-decimals="0">0</span></div>
            <div className="l">Active markets</div>
            <div className="delta">+3 in FY25</div>
          </div>
        </div>
      </section>
      
      
      <section className="sysarch">
        <div className="wrap">
          <div className="sysarch-head">
            <div className="eyebrow reveal" style={{ marginBottom: "24px" }}>// 01 — System architecture</div>
            <h2 className="reveal">Capture energy. Optimise storage.<br/><em>Power the grid.</em></h2>
            <p className="reveal">A reference architecture engineered for resilience: hybrid generation, intelligent storage, and dispatchable export to the transmission network.</p>
            <div className="sysarch-flow reveal">
              <span className="sa-step">Capture energy</span>
              <span className="sa-arrow">→</span>
              <span className="sa-step">Optimise storage</span>
              <span className="sa-arrow">→</span>
              <span className="sa-step">Power the grid</span>
            </div>
          </div>

          <div className="sysarch-video reveal">
            <span className="sa-badge"><span className="sa-dot"></span>Live system</span>
            <video
              src="/system-architecture.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </section>

      <section className="mapwrap">
        <div className="wrap">
          <div className="map-head">
            <div>
              <div className="eyebrow reveal" style={{ marginBottom: "24px" }}>// 02 — Where we operate</div>
              <h2 className="reveal">Close to the <em>asset.</em></h2>
              <div className="grid-sync reveal">
                <span className="grid-sync-dot"></span>
                <span>Grid sync · Live</span>
                <span className="grid-sync-val">99.97% uptime</span>
              </div>
            </div>
            <p className="reveal">Deep regional expertise, local execution, and operational oversight embedded across every stage of the asset lifecycle</p>
          </div>
      
          <div className="mapcontainer reveal">
            <div className="ml-label">MAP — ACTIVE MARKETS · 05.2026</div>
            <div className="ml-legend">
              <span><i style={{ background: "#60a5fa" }}></i>Solar</span>
              <span><i style={{ background: "#fbbf24" }}></i>BESS</span>
              <span><i style={{ background: "#ffffff" }}></i>Wind</span>
            </div>
            <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} preserveAspectRatio="xMidYMid meet">
              {/* Real-world land masses */}
              <g fill="#1c1c1c" stroke="#2a2a2a" strokeWidth="0.5">
                {countryPaths.map((d, i) => <path key={i} d={d} />)}
              </g>

              {/* Project sites — dot + its own label */}
              {SITES.map((s) => {
                const [px, py] = project(s.coords)
                const x = px + (s.ddx || 0)
                const y = py + (s.ddy || 0)
                return (
                  <g key={s.name} className="pin">
                    <circle className="pulse" cx={x} cy={y} r="3" fill={s.color} />
                    <circle className="core" cx={x} cy={y} r="4" fill={s.color} stroke="#0a0a0a" strokeWidth="0.8" />
                    <text x={x + s.dx} y={y + s.dy} textAnchor={s.anchor} fontFamily="ui-monospace,monospace" fontSize="11" fill="#e6e4dd" letterSpacing=".5">{s.name}</text>
                  </g>
                )
              })}
            </svg>
          </div>
      

        </div>
      </section>
      
      
      <section className="chart theme-light">
        <div className="wrap">
          <div className="chart-grid">
            <div>
              <div className="eyebrow reveal" style={{ marginBottom: "24px" }}>// 03 — CO₂ avoided</div>
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
            <div className="sdg-head">
              <div className="eyebrow reveal" style={{ marginBottom: "24px" }}>// 04 — Aligned to</div>
              <h2 className="h-1 reveal" style={{ maxWidth: "16ch" }}>Three goals that <em style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>define the work.</em></h2>
              <p className="lede reveal" style={{ marginTop: "28px", maxWidth: "40ch" }}>Our commitment to the UN Sustainable Development Goals is reflected in every project we develop, from clean energy generation to job creation and climate action.</p>
            </div>
            <div className="sdg-cards">
              <div className="sdg-card reveal card-tilt"><div className="num">SDG 07</div><h4>Affordable & Clean Energy</h4><p>1.4 GW of renewable energy projects in the pipeline, supporting the transition to a lower-carbon energy system.</p></div>
              <div className="sdg-card reveal card-tilt"><div className="num">SDG 08</div><h4>Decent Work & Growth</h4><p>90+ site jobs across 7 markets, supporting local employment and economic development.</p></div>
              <div className="sdg-card reveal card-tilt"><div className="num">SDG 13</div><h4>Climate Action</h4><p>2.1 Mt CO₂ avoided / yr — equivalent to taking 460,000 cars off the road.</p></div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* <section className="community theme-light">
        <div className="wrap">
          <div className="eyebrow reveal" style={{ marginBottom: "24px" }}>// 05 — Beyond the asset</div>
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
      </section> */}
      
      {/* <section className="cta">
        <div className="eyebrow reveal" style={{ marginBottom: "32px" }}><span className="dot"></span>Annual report · 2026</div>
        <h2 className="h-display reveal" style={{ fontSize: "clamp(40px,6vw,96px)" }}>Read the full <em>impact report.</em></h2>
        <div className="cta-row reveal" style={{ marginTop: "40px" }}>
          <a href="#" className="btn btn-primary">Download FY25 PDF <span className="arrow">→</span></a>
          <a href="projects.html" className="btn btn-ghost">See projects</a>
        </div>
      </section> */}
      
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
          <div><h5>Company</h5><ul><li><a href="index.html">Home</a></li><li><a href="about.html">About</a></li><li><a href="solutions.html">Solutions</a></li><li><a href="projects.html">Projects</a></li><li><a href="global-impact.html">Global impact</a></li><li><a href="#"></a></li></ul></div>
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
