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
          <div className="eyebrow reveal" style={{ marginBottom: "36px" }}><span className="dot"></span>Six integrated solutions · One delivery model</div>
          <h1 className="h-display reveal">Integrated renewable power solutions<br/>for the <em>future grid.</em></h1>
          <p className="lede reveal">Utility-scale solar, battery storage, and wind farm development — engineered for grid reliability and a globally scalable energy transition.</p>
        </div>
      </section>
      
      <nav className="toc">
        <a href="#solar"><span><span className="num">01</span>   Utility-Scale Solar</span><span>→</span></a>
        <a href="#bess"><span><span className="num">02</span>   BESS Integration</span><span>→</span></a>
        <a href="#cranes"><span><span className="num">03</span>   Wind Farm Infrastructure</span><span>→</span></a>
        <a href="#epc"><span><span className="num">04</span>   EPC & Construction</span><span>→</span></a>
        <a href="#oandm"><span><span className="num">05</span>   Operations & Maintenance</span><span>→</span></a>
        <a href="#ems"><span><span className="num">06</span>   Advanced EMS & Monitoring</span><span>→</span></a>
      </nav>
      
      
      <section className="sol" id="solar">
        <div className="sol-wrap">
          <div className="sol-head">
            <div>
              <div className="num reveal">01 / Utility Solar</div>
              <h2 className="reveal">Advanced arrays,<br/>designed to <em>deliver.</em></h2>
            </div>
            <p className="reveal">End-to-end EPC for ground-mounted solar — site assessment, single-axis tracker design, balance-of-plant, substation works, and grid synchronisation. Plants from 5 MW to 1 GW, delivered against a fixed schedule with a single accountable team.</p>
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
              <h2 className="reveal">Storage <em>redefined</em><br/>through integration.</h2>
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
              <div className="num reveal" style={{ color: "var(--amber)" }}>03 / Wind Farm</div>
              <h2 className="reveal">Powering the future<br/>through <em>wind.</em></h2>
            </div>
            <p className="reveal">Designed for modern renewable infrastructure, GRM's wind farm delivery model combines engineering oversight, construction capability, and grid-ready execution from ground to generation.</p>
          </div>
      
          <div className="sol-body">
            <div className="sol-features reveal">
              <div className="feat"><div className="id">F.01</div><div><h4>Wind resource & turbine strategy</h4><p>Wind resource assessment, site optimisation, and turbine platform selection across IEC class I–III configurations for utility-scale deployment.</p></div></div>
              <div className="feat"><div className="id">F.02</div><div><h4>Foundation & infrastructure design</h4><p>Gravity-base, monopile, and jacket foundation coordination alongside access roads, hardstands, and cable corridor infrastructure.</p></div></div>
              <div className="feat"><div className="id">F.03</div><div><h4>Electrical systems & grid integration</h4><p>Inter-array and export cable routing, MV/HV infrastructure, SCADA integration, and grid-code compliant connection design.</p></div></div>
              <div className="feat"><div className="id">F.04</div><div><h4>Construction delivery & commissioning</h4><p>Construction supervision, FAT/SAT testing, turbine commissioning, performance validation, and final project handover documentation.</p></div></div>
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
            <div className="spec"><div className="v">50–500<span className="u">MW</span></div><div className="l">Project capacity</div></div>
            <div className="spec"><div className="v">I–III</div><div className="l">IEC turbine class</div></div>
            <div className="spec"><div className="v">160<span className="u">m</span></div><div className="l">Max hub height</div></div>
            <div className="spec"><div className="v">30<span className="u">yr</span></div><div className="l">Asset design life</div></div>
          </div>
        </div>
      </section>
      
      
      <section className="sol alt" id="epc">
        <div className="sol-wrap">
          <div className="sol-head">
            <div>
              <div className="num reveal">04 / EPC &amp; Construction</div>
              <h2 className="reveal">One contract.<br/>One <em>operator.</em></h2>
            </div>
            <p className="reveal">GRM acts as Principal Contractor or Owner's Engineer across EPC projects from 5 MW to 1 GW. Our integrated QA/QC systems, programme controls, and multi-tier supplier network keep delivery on schedule, within budget, and fully compliant with CDM and safety standards. From civils through to grid energisation, every interface is managed by a dedicated engineer accountable to a single integrated programme.</p>
          </div>

          <div className="sol-body">
            <div className="sol-features reveal">
              <div className="feat"><div className="id">F.01</div><div><h4>Engineering &amp; Design Management</h4><p>Detailed design coordination, IFC drawing release, and integrated programme alignment across all disciplines.</p></div></div>
              <div className="feat"><div className="id">F.02</div><div><h4>Procurement &amp; Supply Chain Control</h4><p>Multi-tier procurement management, FAT supervision, logistics coordination, and supplier performance oversight.</p></div></div>
              <div className="feat"><div className="id">F.03</div><div><h4>Construction, HSE &amp; Quality Assurance</h4><p>Civil, mechanical, and electrical site execution supported by CDM 2015 compliance, Principal Designer duties, site-wide QA/QC plans, ITPs, and non-conformance management.</p></div></div>
              <div className="feat"><div className="id">F.04</div><div><h4>Commissioning &amp; Project Handover</h4><p>End-to-end commissioning, grid energisation, performance testing, and final takeover management.</p></div></div>
            </div>

            <div className="sol-diagram reveal">
              <div className="label">DIAGRAM — EPC PROGRAMME (GANTT)</div>
              <svg viewBox="0 0 600 460" preserveAspectRatio="xMidYMid meet">
                <text x="40" y="40" fontFamily="ui-monospace,monospace" fontSize="10" fill="#34d399" letterSpacing="2">EPC PROGRAMME · 14 MO</text>
                <g stroke="#2a2a2a" strokeWidth=".5">
                  <line x1="210" y1="70" x2="210" y2="392"/>
                  <line x1="300" y1="70" x2="300" y2="392"/>
                  <line x1="390" y1="70" x2="390" y2="392"/>
                  <line x1="480" y1="70" x2="480" y2="392"/>
                  <line x1="560" y1="70" x2="560" y2="392"/>
                </g>
                <g fontFamily="ui-monospace,monospace" fontSize="9" fill="#b8b6af" letterSpacing="1">
                  <text x="40" y="104">ENGINEERING</text>
                  <rect x="210" y="92" width="115" height="15" fill="rgba(52,211,153,.18)" stroke="#34d399" strokeWidth="1"/>
                  <text x="40" y="148">PROCUREMENT</text>
                  <rect x="255" y="136" width="160" height="15" fill="rgba(52,211,153,.18)" stroke="#34d399" strokeWidth="1"/>
                  <text x="40" y="192">CIVIL / BoP</text>
                  <rect x="300" y="180" width="180" height="15" fill="rgba(52,211,153,.18)" stroke="#34d399" strokeWidth="1"/>
                  <text x="40" y="236">DC / AC / MV</text>
                  <rect x="390" y="224" width="140" height="15" fill="rgba(52,211,153,.18)" stroke="#34d399" strokeWidth="1"/>
                  <text x="40" y="280">COMMISSIONING</text>
                  <rect x="500" y="268" width="60" height="15" fill="rgba(251,191,36,.22)" stroke="#fbbf24" strokeWidth="1"/>
                </g>
                <line x1="210" y1="392" x2="560" y2="392" stroke="#34d399" strokeWidth=".5"/>
                <g fontFamily="ui-monospace,monospace" fontSize="9" fill="#6e6c66" letterSpacing="1">
                  <text x="205" y="410">M0</text>
                  <text x="385" y="410">M7</text>
                  <text x="540" y="410">M14</text>
                </g>
              </svg>
              <div className="legend"><span><i style={{ background: "#34d399" }}></i>WORKS</span><span><i style={{ background: "#fbbf24" }}></i>COMMISSIONING</span></div>
              <div className="scale">GRID SYNC · M14</div>
            </div>
          </div>

          <div className="specs">
            <div className="spec"><div className="v">9–18<span className="u">mo</span></div><div className="l">Build programme</div></div>
            <div className="spec"><div className="v">1<span className="u">GW</span></div><div className="l">Largest EPC</div></div>
            <div className="spec"><div className="v">100<span className="u">%</span></div><div className="l">In-house engineering</div></div>
            <div className="spec"><div className="v">30+</div><div className="l">Projects delivered</div></div>
          </div>
        </div>
      </section>


      <section className="sol" id="oandm">
        <div className="sol-wrap">
          <div className="sol-head">
            <div>
              <div className="num reveal">05 / Operations &amp; Maintenance</div>
              <h2 className="reveal">Performance,<br/><em>guaranteed.</em></h2>
            </div>
            <p className="reveal">GRM provides integrated O&amp;M services for renewable assets, focused on maximising availability, optimising performance, and protecting long-term asset value through proactive maintenance and real-time operational support.</p>
          </div>

          <div className="sol-body">
            <div className="sol-features reveal">
              <div className="feat"><div className="id">F.01</div><div><h4>Monitoring &amp; Operations</h4><p>24/7 NOC monitoring, alarm triage, remote reset support, and real-time operational oversight.</p></div></div>
              <div className="feat"><div className="id">F.02</div><div><h4>Maintenance &amp; Asset Performance</h4><p>Scheduled, condition-based, and corrective maintenance alongside drone thermography, electroluminescence imaging, and BESS state-of-health tracking.</p></div></div>
              <div className="feat"><div className="id">F.03</div><div><h4>Technical Support &amp; Lifecycle Management</h4><p>Warranty claims management, root-cause analysis, OEM coordination, repowering strategies, and end-of-life planning.</p></div></div>
              <div className="feat"><div className="id">F.04</div><div><h4>Reporting &amp; Asset Assurance</h4><p>Monthly performance reporting, annual asset health assessments, spares and consumables management, and insurance-grade incident reporting.</p></div></div>
            </div>

            <div className="sol-diagram reveal">
              <div className="label">DIAGRAM — AVAILABILITY (12 MO)</div>
              <svg viewBox="0 0 600 460" preserveAspectRatio="xMidYMid meet">
                <text x="40" y="40" fontFamily="ui-monospace,monospace" fontSize="10" fill="#34d399" letterSpacing="2">FLEET AVAILABILITY · 99.6%</text>
                <g stroke="#2a2a2a" strokeWidth=".5">
                  <line x1="90" y1="110" x2="560" y2="110"/>
                  <line x1="90" y1="200" x2="560" y2="200"/>
                  <line x1="90" y1="290" x2="560" y2="290"/>
                </g>
                <g fontFamily="ui-monospace,monospace" fontSize="9" fill="#6e6c66">
                  <text x="48" y="114">100</text>
                  <text x="54" y="204">99</text>
                  <text x="54" y="294">98</text>
                </g>
                <line x1="90" y1="146" x2="560" y2="146" stroke="#34d399" strokeWidth=".5" strokeDasharray="3 4"/>
                <text x="500" y="140" fontFamily="ui-monospace,monospace" fontSize="9" fill="#34d399">TARGET</text>
                <polyline points="110,160 150,150 190,158 230,142 270,150 310,138 350,148 390,140 430,134 470,150 510,142 550,136" fill="none" stroke="#34d399" strokeWidth="1.4"/>
                <g fill="#34d399">
                  <circle cx="110" cy="160" r="2.5"/><circle cx="150" cy="150" r="2.5"/><circle cx="190" cy="158" r="2.5"/>
                  <circle cx="230" cy="142" r="2.5"/><circle cx="270" cy="150" r="2.5"/><circle cx="310" cy="138" r="2.5"/>
                  <circle cx="350" cy="148" r="2.5"/><circle cx="390" cy="140" r="2.5"/><circle cx="430" cy="134" r="2.5"/>
                  <circle cx="470" cy="150" r="2.5"/><circle cx="510" cy="142" r="2.5"/><circle cx="550" cy="136" r="2.5"/>
                </g>
                <line x1="90" y1="350" x2="560" y2="350" stroke="#34d399" strokeWidth=".5"/>
                <g fontFamily="ui-monospace,monospace" fontSize="9" fill="#6e6c66" letterSpacing="1">
                  <text x="104" y="368">JAN</text>
                  <text x="500" y="368">DEC</text>
                </g>
              </svg>
              <div className="legend"><span><i style={{ background: "#34d399" }}></i>AVAILABILITY</span></div>
              <div className="scale">PR &gt; 84%</div>
            </div>
          </div>

          <div className="specs">
            <div className="spec"><div className="v">PR &gt; 84<span className="u">%</span></div><div className="l">Performance guarantee</div></div>
            <div className="spec"><div className="v">99.6<span className="u">%</span></div><div className="l">Availability target</div></div>
            <div className="spec"><div className="v">25<span className="u">yr</span></div><div className="l">Long-term O&amp;M</div></div>
            <div className="spec"><div className="v">24/7</div><div className="l">Remote monitoring</div></div>
          </div>
        </div>
      </section>


      <section className="sol alt" id="ems">
        <div className="sol-wrap">
          <div className="sol-head">
            <div>
              <div className="num reveal">06 / Advanced EMS &amp; Monitoring</div>
              <h2 className="reveal">Every electron,<br/><em>orchestrated.</em></h2>
            </div>
            <p className="reveal">GRM's integrated EMS/SCADA platform combines real-time monitoring, asset control, and commercial dispatch within a single secure system. Advanced forecasting, intelligent optimisation, and sub-second telemetry improve operational performance, maximise market value, and support evolving grid and energy market requirements.</p>
          </div>

          <div className="sol-body">
            <div className="sol-features reveal">
              <div className="feat"><div className="id">F.01</div><div><h4>Energy Trading &amp; Market Optimisation</h4><p>Day-ahead and intraday bidding, balancing mechanism dispatch, frequency response stacking, and route-to-market integration through intelligent forecasting and automated trading logic.</p></div></div>
              <div className="feat"><div className="id">F.02</div><div><h4>Control Systems &amp; Asset Integration</h4><p>Multi-vendor integration of inverters, trackers, BESS, EV fleets, and demand response systems using open protocol architecture and edge gateway controls.</p></div></div>
              <div className="feat"><div className="id">F.03</div><div><h4>Monitoring, Analytics &amp; SCADA Infrastructure</h4><p>Real-time telemetry, historian storage, HMI development, KPI dashboards, alarms, analytics pipelines, and API-enabled reporting with active/standby failover resilience.</p></div></div>
              <div className="feat"><div className="id">F.04</div><div><h4>Cybersecurity &amp; Operational Assurance</h4><p>IEC 62443-aligned OT cybersecurity, NIS2 readiness assessments, audit trails, remediation planning, operator runbooks, and secure long-term system governance.</p></div></div>
            </div>

            <div className="sol-diagram reveal">
              <div className="label">DIAGRAM — EMS CONTROL TOPOLOGY</div>
              <svg viewBox="0 0 600 460" preserveAspectRatio="xMidYMid meet">
                <text x="40" y="40" fontFamily="ui-monospace,monospace" fontSize="10" fill="#34d399" letterSpacing="2">EMS · SINGLE PANE</text>
                <line x1="170" y1="135" x2="270" y2="215" stroke="#34d399" strokeWidth=".8" strokeDasharray="3 3"/>
                <line x1="170" y1="320" x2="270" y2="245" stroke="#34d399" strokeWidth=".8" strokeDasharray="3 3"/>
                <line x1="360" y1="230" x2="450" y2="230" stroke="#fbbf24" strokeWidth=".8" strokeDasharray="3 3"/>
                <rect x="240" y="195" width="120" height="80" fill="#131313" stroke="#34d399" strokeWidth="1.6"/>
                <text x="300" y="230" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="12" fill="#34d399" letterSpacing="2">EMS</text>
                <text x="300" y="248" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8" fill="#6e6c66" letterSpacing="1">CONTROLLER</text>
                <g transform="translate(70 100)">
                  <rect x="0" y="0" width="100" height="56" fill="#1c1c1c" stroke="#34d399" strokeWidth="1"/>
                  <path d="M14 40 L40 16 L86 16 L60 40 Z" fill="rgba(52,211,153,.12)" stroke="#34d399" strokeWidth=".6"/>
                  <text x="50" y="74" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="9" fill="#b8b6af" letterSpacing="1">PV ARRAY</text>
                </g>
                <g transform="translate(70 300)">
                  <rect x="0" y="0" width="100" height="56" fill="#1c1c1c" stroke="#34d399" strokeWidth="1"/>
                  <rect x="16" y="14" width="20" height="28" stroke="#34d399" strokeWidth=".6" fill="none"/>
                  <rect x="42" y="14" width="20" height="28" stroke="#34d399" strokeWidth=".6" fill="none"/>
                  <rect x="68" y="14" width="16" height="28" stroke="#34d399" strokeWidth=".6" fill="none"/>
                  <text x="50" y="74" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="9" fill="#b8b6af" letterSpacing="1">BESS</text>
                </g>
                <g transform="translate(450 195)">
                  <line x1="30" y1="0" x2="30" y2="70" stroke="#fbbf24" strokeWidth="1"/>
                  <line x1="10" y1="14" x2="50" y2="14" stroke="#fbbf24" strokeWidth="1"/>
                  <line x1="10" y1="34" x2="50" y2="34" stroke="#fbbf24" strokeWidth="1"/>
                  <line x1="2" y1="0" x2="58" y2="0" stroke="#fbbf24" strokeWidth="1"/>
                  <text x="30" y="92" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="9" fill="#b8b6af" letterSpacing="1">GRID</text>
                </g>
                <text x="180" y="172" fontFamily="ui-monospace,monospace" fontSize="8" fill="#6e6c66" letterSpacing="1">DISPATCH</text>
                <text x="180" y="300" fontFamily="ui-monospace,monospace" fontSize="8" fill="#6e6c66" letterSpacing="1">SOC</text>
                <text x="372" y="218" fontFamily="ui-monospace,monospace" fontSize="8" fill="#6e6c66" letterSpacing="1">EXPORT</text>
              </svg>
              <div className="legend"><span><i style={{ background: "#34d399" }}></i>CONTROL</span><span><i style={{ background: "#fbbf24" }}></i>EXPORT</span></div>
              <div className="scale">LATENCY &lt; 100 ms</div>
            </div>
          </div>

          <div className="specs">
            <div className="spec"><div className="v">&lt;100<span className="u">ms</span></div><div className="l">Dispatch response</div></div>
            <div className="spec"><div className="v">1<span className="u">s</span></div><div className="l">Telemetry resolution</div></div>
            <div className="spec"><div className="v">100<span className="u">%</span></div><div className="l">Grid-code compliance</div></div>
            <div className="spec"><div className="v">N+1</div><div className="l">Controller redundancy</div></div>
          </div>
        </div>
      </section>
      
      
      <section className="process">
        <div className="wrap">
          <div className="eyebrow reveal" style={{ marginBottom: "24px" }}>// 07 — Delivery model</div>
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
