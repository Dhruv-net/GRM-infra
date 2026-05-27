import { useRef, useState, useEffect } from 'react'
import { usePageEffects } from '../hooks/usePageEffects'

const PROJECTS = [
  {
    id: 'cesis',
    cat: 'solar',
    tag: 'Solar · 3.8 MWp',
    title: 'Cēsis solar plant',
    sub: 'Latvia — CORAB mounting & pile driving · Jan 2025',
    corner: '2025',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80',
    location: 'Cēsis, Latvia',
    completion: 'January 2025',
    scope: 'Full mechanical installation, including DC cable pulling and complete installation of the CORAB mounting system with pile driving using the GAYK HRE 3000.',
    stats: [
      { v: '3.8', u: 'MWp', l: 'Installed capacity' },
      { v: '4', u: 'wk', l: 'Delivery time' },
      { v: '16', u: '', l: 'Engineers' },
      { v: 'Jan', u: '2025', l: 'Completion' },
    ],
    body: [
      'A 3.8 MWp solar power installation was successfully completed in Latvia during Q1 2025. The project was delivered within an efficient 4-week timeframe, with a dedicated team of 16 experienced engineers contributing to the successful execution of the works.',
      'The project included the complete mechanical assembly of the CORAB frame system, alongside precision pile driving operations carried out using the GAYK HRE 3000, ensuring high installation quality and structural reliability throughout the development.',
    ],
  },
  {
    id: 'yerbeston',
    cat: 'solar',
    tag: 'Solar · 6 MW',
    title: 'Yerbeston solar farm',
    sub: 'United Kingdom — UK SOL panels · mechanical & DC · Nov 2025',
    corner: '2025',
    img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1600&q=80',
    location: 'Yerbeston, United Kingdom',
    completion: 'November 2025',
    scope: 'Complete mechanical installation, including DC cable pulling.',
    stats: [
      { v: '6', u: 'MW', l: 'Installed capacity' },
      { v: 'Nov', u: '2025', l: 'Completion' },
      { v: 'UK SOL', u: '', l: 'Panels' },
      { v: 'UK', u: '', l: 'Location' },
    ],
    body: [
      'This 6 MW solar installation was successfully completed using UK SOL panels — an innovative British solar brand recognised for its quality and performance. The project involved the full mechanical installation and DC cabling works, delivered to a high professional standard with a strong focus on efficiency and reliability.',
    ],
  },
  {
    id: 'ajmer',
    cat: 'solar',
    tag: 'Solar · 5 MW',
    title: 'Ajmer solar plant',
    sub: 'Rajasthan, India — Tata Power Solar panels · Dec 2025',
    corner: '2025',
    img: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1600&q=80',
    location: 'Ajmer, Rajasthan, India',
    completion: 'December 2025',
    scope: 'Complete mechanical installation of the mounting structure system and pile driving works, with Tata Power Solar panels.',
    stats: [
      { v: '5', u: 'MW', l: 'Installed capacity' },
      { v: '5', u: 'wk', l: 'Delivery time' },
      { v: '16', u: '', l: 'Engineers' },
      { v: 'Dec', u: '2025', l: 'Completion' },
    ],
    body: [
      'A 5 MW solar power project was successfully completed in Ajmer, Rajasthan during Q4 2025. The installation works were delivered within a 5-week timeframe by a skilled team of 16 experienced engineers.',
      'The project included the complete mechanical installation of the mounting structure system and pile driving works, ensuring high construction quality and long-term structural reliability. High-quality Tata Power Solar panels were installed to provide efficient and dependable solar energy generation.',
    ],
  },
  {
    id: 'algeria',
    cat: 'bess',
    tag: 'BESS · 5 MW',
    title: 'Algeria storage system',
    sub: 'Algeria — lithium-ion · mechanical & electrical · Sept 2025',
    corner: '2025',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80',
    location: 'Algeria',
    completion: 'September 2025',
    scope: 'Complete mechanical and electrical installation of the Battery Energy Storage System (BESS), including battery containers, inverter systems, integration works, and commissioning support.',
    stats: [
      { v: '5', u: 'MW', l: 'System capacity' },
      { v: '10', u: 'wk', l: 'Delivery time' },
      { v: 'Sept', u: '2025', l: 'Completion' },
      { v: 'Li-ion', u: '', l: 'Technology' },
    ],
    body: [
      'A utility-scale 5 MW Battery Energy Storage System was successfully delivered in Algeria to strengthen grid stability and support the integration of renewable energy sources. The project was completed by an experienced engineering team within an efficient 10-week delivery programme.',
      'The installation was designed to provide reliable energy storage, peak demand support, and improved power network flexibility through advanced lithium-ion battery technology. The completed system now plays an important role in enhancing energy efficiency and supporting the transition towards a more sustainable and resilient energy infrastructure.',
    ],
  },
  {
    id: 'norwich',
    cat: 'bess',
    tag: 'BESS · 8 MW',
    title: 'Norwich storage block',
    sub: 'United Kingdom — turnkey delivery · Dec 2025',
    corner: '2025',
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80',
    location: 'Norwich, United Kingdom',
    completion: 'December 2025',
    scope: 'Turnkey delivery including project design, engineering analysis, civil coordination, equipment installation, electrical integration, control system setup, performance testing, and final commissioning support.',
    stats: [
      { v: '8', u: 'MW', l: 'System capacity' },
      { v: 'Dec', u: '2025', l: 'Completion' },
      { v: 'Turnkey', u: '', l: 'Scope of works' },
      { v: 'UK', u: '', l: 'Location' },
    ],
    body: [
      'An 8 MW Battery Energy Storage System was successfully completed in Norwich, United Kingdom, as part of a major energy infrastructure development focused on improving grid performance and supporting renewable energy integration.',
      'The project involved full design and engineering services together with the installation and integration of advanced battery storage technology. Delivered by an experienced team of engineers and technical specialists, the works were completed to high industry standards with a strong focus on safety, efficiency, and long-term system reliability.',
      'The completed BESS installation now provides flexible energy storage capacity, supports peak load management, and enhances overall grid stability, contributing to a smarter and more sustainable energy network across the region.',
    ],
  },
  {
    id: 'crossford',
    cat: 'wind',
    tag: 'Wind · 1.5 MW',
    title: 'Crossford wind farm',
    sub: 'Operational since 2022 · 2.7 GWh annual output',
    corner: '2022',
    img: 'https://images.unsplash.com/photo-1571781565036-d3f759be73e4?auto=format&fit=crop&w=1600&q=80',
    location: 'United Kingdom',
    completion: 'Operational since 2022',
    scope: 'On-site renewable generation with grid export and a community benefit programme.',
    stats: [
      { v: '1.5', u: 'MW', l: 'Site capacity' },
      { v: '2.7', u: 'GWh', l: 'Annual forecast output' },
      { v: '2022', u: '', l: 'Operational since' },
      { v: 'Grid', u: '', l: 'Export & community' },
    ],
    body: [
      'The Crossford Wind Turbine project was developed to provide reliable renewable energy for continuous on-site operations, helping reduce energy costs and improve sustainability. Excess electricity generated by the turbine is exported to the local grid to support wider energy demand.',
      'Through the community benefit programme, funding was also provided to local organisations to improve energy efficiency, supporting upgrades such as LED lighting, insulation, energy-saving systems, and modern energy-efficient windows for community facilities in the area.',
    ],
  },
  {
    id: 'sigurd',
    cat: 'wind',
    tag: 'Wind · 1.3 MW',
    title: 'Sigurd wind turbine',
    sub: 'Orkney, United Kingdom — Class I turbine · 1,159 UK homes equivalent',
    corner: '2017',
    img: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1600&q=80',
    location: 'Burgar Hill, Orkney, United Kingdom',
    completion: 'Operational since 2017',
    scope: 'High-performance Class I turbine with a major blade replacement programme and circular-economy reuse of original blades.',
    stats: [
      { v: '1.3', u: 'MW', l: 'Site capacity' },
      { v: '1,159', u: '', l: 'UK homes equivalent' },
      { v: '2017', u: '', l: 'Operational since' },
      { v: 'Class I', u: '', l: 'Turbine class' },
    ],
    body: [
      'Located at Burgar Hill in Orkney, one of Europe’s most recognised wind generation sites, the Sigurd Wind Turbine was developed to harness the region’s exceptional wind conditions using a high-performance Class I turbine designed for strong and turbulent environments.',
      'The turbine has made a significant contribution to renewable energy generation in the region, supporting sustainable power production and long-term energy reliability. The project also included a major blade replacement programme to support continued operational efficiency and future energy generation.',
      'As part of a circular economy approach, the original turbine blades were repurposed into sustainable community infrastructure products, including bike shelters and EV charging stations, demonstrating a strong commitment to environmental responsibility and innovative renewable energy solutions.',
    ],
  },
]

export default function Projects() {
  const ref = useRef(null)
  const [selected, setSelected] = useState(null)
  usePageEffects(ref)

  useEffect(() => {
    if (!selected) return
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected])
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
          <a href="solutions.html">Solutions</a>
          <a href="projects.html" className="active">Projects</a>
          <a href="global-impact.html">Global Impact</a>
        </nav>
        <a href="index.html#contact" className="nav-cta">Start a project <span>→</span></a>
      </header>
      
      <section className="proj-hero">
        <div className="wrap">
          <div>
            <div className="eyebrow reveal" style={{ marginBottom: "32px" }}><span className="dot"></span>2022 — present</div>
            <h1 className="h-display reveal">A record of <em>what's<br/>been built.</em></h1>
          </div>
          <div className="reveal">
            <p className="lede">Selected solar, battery storage, and wind projects delivered across Europe, the UK, and India. Capacity figures are installed MW/MWp; completion dates are from commissioning records.</p>
          </div>
        </div>
      </section>
      
      <div className="filterbar">
        <div className="wrap">
          <div className="filters">
            <button className="chip active" data-filter="all">All projects</button>
            <button className="chip" data-filter="solar">Solar</button>
            <button className="chip" data-filter="bess">BESS</button>
            <button className="chip" data-filter="wind">Wind</button>
          </div>
          <div className="filter-count"><span id="visibleCount">7</span> / 7 shown</div>
        </div>
      </div>
      
      <section className="featured">
        <div className="wrap">
          <div
            className="feat-card reveal"
            style={{ cursor: "pointer" }}
            onClick={() => setSelected(PROJECTS.find((p) => p.id === 'norwich'))}
          >
            <div className="bg"></div>
            <div className="inner">
              <div className="feat-meta">
                <span className="tag" style={{ background: "rgba(10,10,10,.6)", backdropFilter: "blur(8px)", borderColor: "rgba(52,211,153,.4)", color: "var(--green)" }}>● COMPLETED · CASE STUDY</span>
                <span className="tag" style={{ background: "rgba(10,10,10,.6)", backdropFilter: "blur(8px)", borderColor: "rgba(255,255,255,.15)", color: "var(--bone)" }}>BESS · 8 MW</span>
              </div>
              <div>
                <h2>Norwich storage<br/><em>block.</em></h2>
                <p className="lede">An 8 MW Battery Energy Storage System delivered turnkey in Norwich, United Kingdom — design, engineering, civil coordination, equipment installation, electrical integration, control-system setup, performance testing, and commissioning under a single contract.</p>
                <div className="feat-stats">
                  <div><div className="v">8<span className="u">MW</span></div><div className="l">System capacity</div></div>
                  <div><div className="v">Dec<span className="u">2025</span></div><div className="l">Completion</div></div>
                  <div><div className="v">Turnkey</div><div className="l">Scope of works</div></div>
                  <div><div className="v">UK</div><div className="l">Location</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="projgrid">
        <div className="wrap">
          <div className="pg">
            {PROJECTS.map((p) => (
              <a
                key={p.id}
                className="pcard w-half"
                data-cat={p.cat}
                href="#"
                onClick={(e) => { e.preventDefault(); setSelected(p) }}
              >
                <div className="bg"><img src={p.img} alt=""/></div>
                <div className="corner">{p.corner}</div>
                <div className="meta">
                  <span className="tag"><span className="green">●</span> {p.tag}</span>
                  <h3>{p.title}</h3>
                  <div className="body-sm">{p.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      
      <section className="case">
        <div className="wrap">
          <div className="case-grid">
            <div className="case-image reveal">
              <img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1600&q=80" alt=""/>
            </div>
            <div className="case-body reveal">
              <div className="eyebrow" style={{ marginBottom: "22px" }}>CASE STUDY · 01</div>
              <h2>Crossford:<br/>community <em>wind.</em></h2>
              <p>The Crossford Wind Turbine project was developed to provide reliable renewable energy for continuous on-site operations, helping reduce energy costs and improve sustainability. Excess electricity generated by the turbine is exported to the local grid to support wider energy demand.</p>
              <p>Through the community benefit programme, funding was also provided to local organisations to improve energy efficiency — supporting upgrades such as LED lighting, insulation, energy-saving systems, and modern energy-efficient windows for community facilities in the area.</p>
              <a href="#" className="btn btn-ghost" style={{ marginTop: "18px" }}>Enquire about this project <span className="arrow">→</span></a>
              <div className="case-stats">
                <div><div className="v">1.5<span className="u">MW</span></div><div className="l">Site capacity</div></div>
                <div><div className="v">2.7<span className="u">GWh</span></div><div className="l">Annual forecast output</div></div>
                <div><div className="v">2022</div><div className="l">Operational since</div></div>
                <div><div className="v">Grid</div><div className="l">Export & community</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <div className="eyebrow reveal" style={{ marginBottom: "32px" }}><span className="dot"></span>Capacity available · FY26 H2</div>
        <h2 className="h-display reveal" style={{ fontSize: "clamp(40px,6vw,96px)" }}>The next one's <em>yours.</em></h2>
        <div className="cta-row reveal" style={{ marginTop: "40px" }}>
          <a href="mailto:info@infragrm.com" className="btn btn-primary">Start a conversation <span className="arrow">→</span></a>
          <a href="solutions.html" className="btn btn-ghost">Browse solutions</a>
        </div>
      </section>
      
      {selected && (
        <div className="proj-modal" onClick={() => setSelected(null)}>
          <div className="proj-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="proj-modal-close" aria-label="Close" onClick={() => setSelected(null)}>×</button>
            <div className="proj-modal-img"><img src={selected.img} alt=""/></div>
            <div className="proj-modal-body">
              <span className="tag"><span className="green">●</span> {selected.tag}</span>
              <h2>{selected.title}</h2>
              <div className="proj-modal-loc">{selected.location} · {selected.completion}</div>
              {selected.scope && (
                <p className="proj-modal-scope"><strong>Scope of services:</strong> {selected.scope}</p>
              )}
              <div className="proj-modal-stats">
                {selected.stats.map((s, i) => (
                  <div key={i}>
                    <div className="v">{s.v}{s.u && <span className="u">{s.u}</span>}</div>
                    <div className="l">{s.l}</div>
                  </div>
                ))}
              </div>
              {selected.body.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </div>
        </div>
      )}

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
