import { useRef } from 'react'
import { usePageEffects } from '../hooks/usePageEffects'

export default function Solutions() {
  const ref = useRef(null)
  usePageEffects(ref)
  return (
    <div ref={ref}>
      <header className="nav">
        <a href="index.html" className="nav-logo">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <rect x="0" y="0" width="32" height="32" rx="6" fill="#34d399"/>
            <rect x="6" y="8"  width="14" height="2" fill="#0a0a0a"/>
            <rect x="6" y="13" width="20" height="2" fill="#0a0a0a"/>
            <rect x="6" y="18" width="10" height="2" fill="#0a0a0a"/>
            <rect x="6" y="23" width="20" height="2" fill="#0a0a0a"/>
          </svg>
          <span className="wordmark">GRM<span className="infra">INFRA</span></span>
        </a>
        <nav className="nav-links">
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="solutions.html" className="active">Solutions</a>
          <a href="projects.html">Projects</a>
          <a href="global-impact.html">Global Impact</a>
        </nav>
        <a href="index.html#contact" className="nav-cta">Start a project <span>→</span></a>
      </header>
      
      <section className="sol-hero">
        <div className="wrap">
          <div className="eyebrow reveal" style={{ marginBottom: "36px" }}><span className="dot"></span>Three integrated practices · One delivery model</div>
          <h1 className="h-display reveal">From the <em>panel</em><br/>to the <em>grid</em>.</h1>
          <p className="lede reveal">GRM operates three engineering practices that, together, can take a site from raw land to grid synchronisation under a single contract — utility-scale solar, battery storage, and the lifting infrastructure that puts both in place.</p>
        </div>
      </section>
      
      <nav className="toc">
        <a href="#solar"><span><span className="num">01</span>  Utility Solar</span><span>→</span></a>
        <a href="#bess"><span><span className="num">02</span>  BESS Integration</span><span>→</span></a>
        <a href="#cranes"><span><span className="num">03</span>  Crane Engineering</span><span>→</span></a>
        <a href="#hybrid"><span><span className="num">04</span>  Hybrid Plants</span><span>→</span></a>
        <a href="#oandm"><span><span className="num">05</span>  O&M Services</span><span>→</span></a>
      </nav>
      
      
      <section className="sol" id="solar">
        <div className="sol-wrap">
          <div className="sol-head">
            <div>
              <div className="num reveal">01 / Utility Solar</div>
              <h2 className="reveal">Tracker plants,<br/>built to <em>operate.</em></h2>
            </div>
            <p className="reveal">End-to-end EPC for ground-mounted solar — site assessment, single-axis tracker design, balance-of-plant, substation works, and grid synchronisation. Plants from 20 MW to 1 GW, delivered against a fixed schedule with a single accountable team.</p>
          </div>
      
          <div className="sol-body">
            <div className="sol-features reveal">
              <div className="feat"><div className="id">F.01</div><div><h4>Bifacial single-axis trackers</h4><p>1P horizontal, ±60° rotation, in-house mounting design with 14 patents on torque tube & bearing assemblies.</p></div></div>
              <div className="feat"><div className="id">F.02</div><div><h4>Modular DC / AC blocks</h4><p>Standardised 5 MW DC / 4.4 MW AC blocks. Faster commissioning, simpler O&M, predictable spares.</p></div></div>
              <div className="feat"><div className="id">F.03</div><div><h4>Substation & grid interconnect</h4><p>33/220 kV step-up, GIS & AIS variants, full SCADA integration, MV cabling and earthing scheme.</p></div></div>
              <div className="feat"><div className="id">F.04</div><div><h4>P50/P90 yield modelling</h4><p>Site-specific irradiance modelling, soiling & degradation curves, tracker backtracking optimisation.</p></div></div>
            </div>
      
            <div className="sol-diagram reveal">
              <div className="label">DIAGRAM — TRACKER ROW (PLAN VIEW)</div>
              <svg viewBox="0 0 600 460" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="solpan" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1e3a5f" stopOpacity=".8"/>
                    <stop offset="100%" stopColor="#2c5282" stopOpacity=".6"/>
                  </linearGradient>
                </defs>
                
                <path d="M40 350 L300 220 L560 350 L300 480 Z" stroke="#2a2a2a" strokeWidth="1" fill="rgba(52,211,153,.04)"/>
                
                <g stroke="#2a2a2a" strokeWidth=".5" fill="none" opacity=".6">
                  <path d="M120 304 L380 174"/>
                  <path d="M200 258 L460 128"/>
                  <path d="M165 220 L425 350"/>
                  <path d="M240 175 L500 305"/>
                </g>
                
                <g>
                  
                  <g transform="translate(140 180)">
                    <path d="M0 60 L120 0 L260 60 L140 120 Z" fill="url(#solpan)" stroke="#34d399" strokeWidth="1"/>
                    <path d="M30 75 L120 30 M60 90 L150 45 M90 105 L180 60 M120 120 L210 75 M150 105 L240 60 M180 90 L270 45" stroke="#0a0a0a" strokeWidth=".5" opacity=".5"/>
                    <line x1="130" y1="58" x2="130" y2="180" stroke="#6e6c66" strokeWidth="1.5" strokeDasharray="4 3"/>
                    <circle cx="130" cy="60" r="3" fill="#34d399"/>
                  </g>
                  
                  <g transform="translate(80 230)">
                    <path d="M0 60 L120 0 L260 60 L140 120 Z" fill="url(#solpan)" stroke="#34d399" strokeWidth="1" opacity=".75"/>
                    <path d="M30 75 L120 30 M60 90 L150 45 M90 105 L180 60 M120 120 L210 75 M150 105 L240 60 M180 90 L270 45" stroke="#0a0a0a" strokeWidth=".5" opacity=".5"/>
                  </g>
                  
                  <g transform="translate(200 130)">
                    <path d="M0 60 L120 0 L260 60 L140 120 Z" fill="url(#solpan)" stroke="#34d399" strokeWidth="1" opacity=".55"/>
                    <path d="M30 75 L120 30 M60 90 L150 45 M90 105 L180 60 M120 120 L210 75 M150 105 L240 60 M180 90 L270 45" stroke="#0a0a0a" strokeWidth=".5" opacity=".5"/>
                  </g>
                </g>
                
                <g fontFamily="ui-monospace,monospace" fontSize="9" fill="#b8b6af" letterSpacing="1">
                  <line x1="270" y1="180" x2="320" y2="140" stroke="#34d399" strokeWidth=".5"/>
                  <text x="324" y="138">A · TORQUE TUBE</text>
                  <line x1="180" y1="270" x2="60" y2="290" stroke="#34d399" strokeWidth=".5"/>
                  <text x="60" y="286" textAnchor="start">B · MV CABLE TRENCH</text>
                  <line x1="430" y1="240" x2="510" y2="220" stroke="#34d399" strokeWidth=".5"/>
                  <text x="510" y="216">C · STRING INVERTER</text>
                  <rect x="500" y="220" width="14" height="10" stroke="#34d399" strokeWidth=".8" fill="none"/>
                </g>
              </svg>
              <div className="legend"><span><i style={{ background: "#34d399" }}></i>PV STRING</span><span><i style={{ background: "#1e3a5f" }}></i>PANEL</span><span><i style={{ background: "#fbbf24" }}></i>TRACKER MOTOR</span></div>
              <div className="scale">SCALE 1:200</div>
            </div>
          </div>
      
          <div className="specs">
            <div className="spec"><div className="v">20–1000<span className="u">MW</span></div><div className="l">Plant capacity range</div></div>
            <div className="spec"><div className="v">±60<span className="u">°</span></div><div className="l">Tracker rotation</div></div>
            <div className="spec"><div className="v">25<span className="u">yrs</span></div><div className="l">Performance warranty</div></div>
            <div className="spec"><div className="v">9–14<span className="u">mo</span></div><div className="l">Typical EPC duration</div></div>
          </div>
        </div>
      </section>
      
      
      <section className="sol alt" id="bess">
        <div className="sol-wrap">
          <div className="sol-head">
            <div>
              <div className="num reveal">02 / BESS Integration</div>
              <h2 className="reveal">Storage <em>integrated,</em><br/>not bolted on.</h2>
            </div>
            <p className="reveal">Full-stack battery energy storage: containerised systems from 5 MWh to 500 MWh, integrated EMS, PCS sizing, thermal management, and grid-forming control modes for renewables firming and ancillary services.</p>
          </div>
      
          <div className="sol-body">
            <div className="sol-features reveal">
              <div className="feat"><div className="id">F.01</div><div><h4>Li-ion containerised systems</h4><p>20-ft & 40-ft DNV-typed containers, LFP chemistry standard, with optional sodium-ion for long-duration applications.</p></div></div>
              <div className="feat"><div className="id">F.02</div><div><h4>Power conversion & transformer</h4><p>String & central PCS topologies, 1500 V DC, integrated MV step-up and grid-forming inverter capability.</p></div></div>
              <div className="feat"><div className="id">F.03</div><div><h4>EMS & SCADA</h4><p>Vendor-agnostic Energy Management System with optimisation for arbitrage, frequency regulation, and PV firming.</p></div></div>
              <div className="feat"><div className="id">F.04</div><div><h4>Augmentation & lifecycle</h4><p>Capacity augmentation modelled into year-1 footprint. Full O&M including capacity testing and warranty management.</p></div></div>
            </div>
      
            <div className="sol-diagram reveal">
              <div className="label">DIAGRAM — BESS BLOCK (ELEVATION)</div>
              <svg viewBox="0 0 600 460" preserveAspectRatio="xMidYMid meet">
                
                <line x1="20" y1="380" x2="580" y2="380" stroke="#34d399" strokeWidth=".5" strokeDasharray="2 4"/>
                
                <g transform="translate(60 240)">
                  <rect x="0" y="0" width="180" height="120" fill="#131313" stroke="#34d399" strokeWidth="1.4"/>
                  <rect x="10" y="14" width="38" height="92" stroke="#34d399" strokeWidth=".6" fill="none"/>
                  <rect x="52" y="14" width="38" height="92" stroke="#34d399" strokeWidth=".6" fill="none"/>
                  <rect x="94" y="14" width="38" height="92" stroke="#34d399" strokeWidth=".6" fill="none"/>
                  <rect x="136" y="14" width="38" height="92" stroke="#34d399" strokeWidth=".6" fill="none"/>
                  
                  <g stroke="#34d399" strokeWidth=".5" opacity=".7">
                    <line x1="20" y1="-8" x2="160" y2="-8"/>
                    <line x1="20" y1="-12" x2="160" y2="-12"/>
                  </g>
                  
                  <line x1="0" y1="120" x2="180" y2="120" stroke="#34d399" strokeWidth="1.6"/>
                  <text x="90" y="138" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="9" fill="#6e6c66" letterSpacing="1.5">CONTAINER 01 · 5 MWh</text>
                </g>
                
                <g transform="translate(260 240)">
                  <rect x="0" y="0" width="180" height="120" fill="#131313" stroke="#34d399" strokeWidth="1.4" opacity=".85"/>
                  <rect x="10" y="14" width="38" height="92" stroke="#34d399" strokeWidth=".6" fill="none"/>
                  <rect x="52" y="14" width="38" height="92" stroke="#34d399" strokeWidth=".6" fill="none"/>
                  <rect x="94" y="14" width="38" height="92" stroke="#34d399" strokeWidth=".6" fill="none"/>
                  <rect x="136" y="14" width="38" height="92" stroke="#34d399" strokeWidth=".6" fill="none"/>
                  <line x1="0" y1="120" x2="180" y2="120" stroke="#34d399" strokeWidth="1.6"/>
                  <text x="90" y="138" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="9" fill="#6e6c66" letterSpacing="1.5">CONTAINER 02 · 5 MWh</text>
                </g>
                
                <g transform="translate(460 280)">
                  <rect x="0" y="0" width="80" height="80" fill="#1c1c1c" stroke="#fbbf24" strokeWidth="1"/>
                  <line x1="0" y1="20" x2="80" y2="20" stroke="#fbbf24" strokeWidth=".4"/>
                  <line x1="0" y1="40" x2="80" y2="40" stroke="#fbbf24" strokeWidth=".4"/>
                  <line x1="0" y1="60" x2="80" y2="60" stroke="#fbbf24" strokeWidth=".4"/>
                  <text x="40" y="98" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="9" fill="#6e6c66" letterSpacing="1.5">PCS / TX</text>
                </g>
                
                <path d="M240 300 L260 300" stroke="#34d399" strokeWidth="1"/>
                <path d="M440 300 L460 300" stroke="#34d399" strokeWidth="1"/>
                
                <g transform="translate(280 80)">
                  <line x1="0" y1="0" x2="0" y2="120" stroke="#fbbf24" strokeWidth="1"/>
                  <line x1="-20" y1="20" x2="20" y2="20" stroke="#fbbf24" strokeWidth="1"/>
                  <line x1="-20" y1="50" x2="20" y2="50" stroke="#fbbf24" strokeWidth="1"/>
                  <line x1="-30" y1="0" x2="30" y2="0" stroke="#fbbf24" strokeWidth="1"/>
                  <text x="40" y="60" fontFamily="ui-monospace,monospace" fontSize="9" fill="#6e6c66" letterSpacing="1.5">GRID 33 kV</text>
                </g>
                <path d="M500 280 Q500 200 320 200 L320 100" stroke="#fbbf24" strokeWidth=".8" fill="none" strokeDasharray="3 3"/>
                
                <text x="40" y="40" fontFamily="ui-monospace,monospace" fontSize="10" fill="#34d399" letterSpacing="2">10 MWh · GRID-TIE BLOCK</text>
                <text x="40" y="56" fontFamily="ui-monospace,monospace" fontSize="9" fill="#6e6c66" letterSpacing="1">2× CONTAINER + PCS + TX</text>
              </svg>
              <div className="legend"><span><i style={{ background: "#34d399" }}></i>BESS</span><span><i style={{ background: "#fbbf24" }}></i>POWER PATH</span></div>
              <div className="scale">SCALE 1:80</div>
            </div>
          </div>
      
          <div className="specs">
            <div className="spec"><div className="v">5–500<span className="u">MWh</span></div><div className="l">Block range</div></div>
            <div className="spec"><div className="v">2C–4C</div><div className="l">Discharge rate</div></div>
            <div className="spec"><div className="v">15<span className="u">yr</span></div><div className="l">Capacity warranty</div></div>
            <div className="spec"><div className="v">&lt;100<span className="u">ms</span></div><div className="l">Response time</div></div>
          </div>
        </div>
      </section>
      
      
      <section className="sol" id="cranes">
        <div className="sol-wrap">
          <div className="sol-head">
            <div>
              <div className="num reveal" style={{ color: "var(--amber)" }}>03 / Crane Engineering</div>
              <h2 className="reveal">Lifting <em>plans</em><br/>that hold up.</h2>
            </div>
            <p className="reveal">The original GRM practice: heavy-lift planning, rigging engineering, crawler & lattice crane operations. We move turbines, BESS containers, transformers, and reactor vessels — and we engineer the lift before we mobilise the steel.</p>
          </div>
      
          <div className="sol-body">
            <div className="sol-features reveal">
              <div className="feat"><div className="id">F.01</div><div><h4>Lift planning & engineering</h4><p>Every lift gets a stamped lift plan: load chart verification, ground-bearing calc, tail/head swing, weather windows.</p></div></div>
              <div className="feat"><div className="id">F.02</div><div><h4>Crawler & lattice fleet</h4><p>Owned fleet of 28 cranes — Liebherr LR series, Manitowoc, Demag CC class. Capacity to 1,200 t.</p></div></div>
              <div className="feat"><div className="id">F.03</div><div><h4>Rigging & spreader bars</h4><p>In-house design and load-test of project-specific rigging, lifting frames, and turbine root inserts.</p></div></div>
              <div className="feat"><div className="id">F.04</div><div><h4>Port & site logistics</h4><p>Component handling at port, SPMT trailer convoys, site access & ground prep, climate windows for lift execution.</p></div></div>
            </div>
      
            <div className="sol-diagram reveal">
              <div className="label">DIAGRAM — TURBINE NACELLE LIFT (240 t)</div>
              <svg viewBox="0 0 600 460" preserveAspectRatio="xMidYMid meet">
                
                <line x1="20" y1="420" x2="580" y2="420" stroke="#fbbf24" strokeWidth=".5" strokeDasharray="2 4"/>
                
                <ellipse cx="180" cy="420" rx="120" ry="6" stroke="#fbbf24" strokeWidth=".4" fill="none" opacity=".6"/>
                
                <g transform="translate(120 400)">
                  <rect x="0" y="0" width="120" height="20" fill="#1c1c1c" stroke="#fbbf24" strokeWidth=".8"/>
                  <g stroke="#fbbf24" strokeWidth=".4">
                    <line x1="10" y1="0" x2="10" y2="20"/>
                    <line x1="20" y1="0" x2="20" y2="20"/>
                    <line x1="30" y1="0" x2="30" y2="20"/>
                    <line x1="40" y1="0" x2="40" y2="20"/>
                    <line x1="50" y1="0" x2="50" y2="20"/>
                    <line x1="60" y1="0" x2="60" y2="20"/>
                    <line x1="70" y1="0" x2="70" y2="20"/>
                    <line x1="80" y1="0" x2="80" y2="20"/>
                    <line x1="90" y1="0" x2="90" y2="20"/>
                    <line x1="100" y1="0" x2="100" y2="20"/>
                    <line x1="110" y1="0" x2="110" y2="20"/>
                  </g>
                </g>
                
                <rect x="160" y="370" width="40" height="32" fill="#1c1c1c" stroke="#fbbf24" strokeWidth=".8"/>
                
                <rect x="120" y="350" width="40" height="40" fill="#1c1c1c" stroke="#fbbf24" strokeWidth=".8"/>
                <line x1="124" y1="358" x2="156" y2="358" stroke="#fbbf24" strokeWidth=".4"/>
                <line x1="124" y1="368" x2="156" y2="368" stroke="#fbbf24" strokeWidth=".4"/>
                <line x1="124" y1="378" x2="156" y2="378" stroke="#fbbf24" strokeWidth=".4"/>
                
                <g stroke="#fbbf24" strokeWidth="1">
                  <line x1="180" y1="370" x2="380" y2="80"/>
                  <line x1="190" y1="370" x2="390" y2="80"/>
                </g>
                
                <g stroke="#fbbf24" strokeWidth=".4" opacity=".7">
                  <line x1="195" y1="350" x2="220" y2="320"/>
                  <line x1="220" y1="320" x2="245" y2="290"/>
                  <line x1="245" y1="290" x2="270" y2="260"/>
                  <line x1="270" y1="260" x2="295" y2="230"/>
                  <line x1="295" y1="230" x2="320" y2="200"/>
                  <line x1="320" y1="200" x2="345" y2="170"/>
                  <line x1="345" y1="170" x2="370" y2="140"/>
                  <line x1="370" y1="140" x2="385" y2="110"/>
                </g>
                
                <circle cx="385" cy="80" r="5" stroke="#fbbf24" strokeWidth="1" fill="none"/>
                
                <line x1="385" y1="80" x2="385" y2="220" stroke="#fbbf24" strokeWidth=".8"/>
                
                <g transform="translate(340 220)">
                  <rect x="0" y="0" width="100" height="40" fill="#131313" stroke="#34d399" strokeWidth="1.2"/>
                  <circle cx="20" cy="20" r="8" stroke="#34d399" strokeWidth=".8" fill="none"/>
                  <line x1="100" y1="20" x2="120" y2="20" stroke="#34d399" strokeWidth="1"/>
                  <text x="50" y="55" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="9" fill="#34d399" letterSpacing="1">NACELLE 240t</text>
                </g>
                
                <g transform="translate(490 100)" stroke="#6e6c66" strokeWidth=".6" fill="none">
                  <line x1="0" y1="0" x2="-20" y2="320"/>
                  <line x1="20" y1="0" x2="40" y2="320"/>
                  <line x1="0" y1="0" x2="20" y2="0"/>
                  <line x1="-5" y1="80" x2="25" y2="80"/>
                  <line x1="-10" y1="160" x2="30" y2="160"/>
                  <line x1="-15" y1="240" x2="35" y2="240"/>
                  <text x="50" y="180" fontFamily="ui-monospace,monospace" fontSize="9" fill="#6e6c66" letterSpacing="1">TOWER · 110m</text>
                </g>
                
                <g fontFamily="ui-monospace,monospace" fontSize="9" fill="#b8b6af" letterSpacing="1">
                  <line x1="180" y1="420" x2="80" y2="440" stroke="#fbbf24" strokeWidth=".4"/>
                  <text x="80" y="452">GBP &lt; 25 t/m²</text>
                  <line x1="385" y1="80" x2="475" y2="60" stroke="#fbbf24" strokeWidth=".4"/>
                  <text x="475" y="56">RADIUS · 38m</text>
                </g>
                <text x="40" y="40" fontFamily="ui-monospace,monospace" fontSize="10" fill="#fbbf24" letterSpacing="2">LIFT-PLAN · LR1750</text>
              </svg>
              <div className="legend"><span><i style={{ background: "#fbbf24" }}></i>CRANE</span><span><i style={{ background: "#34d399" }}></i>LOAD</span><span><i style={{ background: "#6e6c66" }}></i>TARGET</span></div>
              <div className="scale">SCALE 1:400</div>
            </div>
          </div>
      
          <div className="specs">
            <div className="spec"><div className="v">28</div><div className="l">Cranes in fleet</div></div>
            <div className="spec"><div className="v">1,200<span className="u">t</span></div><div className="l">Max capacity</div></div>
            <div className="spec"><div className="v">160<span className="u">m</span></div><div className="l">Max lift height</div></div>
            <div className="spec"><div className="v">2,400+</div><div className="l">Lifts executed</div></div>
          </div>
        </div>
      </section>
      
      
      <section className="sol alt" id="hybrid">
        <div className="sol-wrap">
          <div className="sol-head">
            <div>
              <div className="num reveal">04 / Hybrid Plants & 05 / O&M</div>
              <h2 className="reveal">One contract.<br/>One <em>operator.</em></h2>
            </div>
            <p className="reveal">When solar, storage, and substation work need to deliver as one asset, GRM is the single accountable EPC. After commissioning, our O&M practice runs the plant — performance ratio guarantees, predictive maintenance, and the same engineers on the same asset.</p>
          </div>
      
          <div className="specs">
            <div className="spec"><div className="v">PR &gt; 84<span className="u">%</span></div><div className="l">Performance guarantee</div></div>
            <div className="spec"><div className="v">99.6<span className="u">%</span></div><div className="l">Availability target</div></div>
            <div className="spec"><div className="v">25<span className="u">yr</span></div><div className="l">Long-term O&M</div></div>
            <div className="spec"><div className="v">24/7</div><div className="l">Remote monitoring</div></div>
          </div>
        </div>
      </section>
      
      
      <section className="process">
        <div className="wrap">
          <div className="eyebrow reveal" style={{ marginBottom: "24px" }}>// 06 — Delivery model</div>
          <h2 className="h-1 reveal" style={{ maxWidth: "18ch" }}>From feasibility to handover, in <em style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>five sustained steps.</em></h2>
          <div className="process-steps">
            <div className="step reveal"><div className="id">STEP 01</div><h4>Origination & feasibility</h4><p>Site walk, irradiance / load study, grid availability, financial modelling.</p></div>
            <div className="step reveal"><div className="id">STEP 02</div><h4>Engineering</h4><p>BoM finalisation, single-line diagrams, lift plans, civil & structural design.</p></div>
            <div className="step reveal"><div className="id">STEP 03</div><h4>Procurement</h4><p>Engineer-led BoM, factory inspections, supply chain co-ordination.</p></div>
            <div className="step reveal"><div className="id">STEP 04</div><h4>Construction</h4><p>Piling, structures, DC/AC works, lifting, MV/HV, commissioning.</p></div>
            <div className="step reveal"><div className="id">STEP 05</div><h4>O&M</h4><p>Performance guarantees, predictive maintenance, capacity augmentation.</p></div>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <div className="eyebrow reveal" style={{ marginBottom: "32px" }}><span className="dot"></span>Capacity available · FY26 H2</div>
        <h2 className="h-display reveal" style={{ fontSize: "clamp(40px,6vw,96px)" }}>Bring us a <em>site</em>.<br/>We'll bring a <em>plan.</em></h2>
        <div className="cta-row reveal" style={{ marginTop: "40px" }}>
          <a href="mailto:info@infragrm.com" className="btn btn-primary">Start a conversation <span className="arrow">→</span></a>
          <a href="projects.html" className="btn btn-ghost">See projects</a>
        </div>
      </section>
      
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="0" y="0" width="32" height="32" rx="6" fill="#34d399"/>
                <rect x="6" y="8"  width="14" height="2" fill="#0a0a0a"/>
                <rect x="6" y="13" width="20" height="2" fill="#0a0a0a"/>
                <rect x="6" y="18" width="10" height="2" fill="#0a0a0a"/>
                <rect x="6" y="23" width="20" height="2" fill="#0a0a0a"/>
              </svg>
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
