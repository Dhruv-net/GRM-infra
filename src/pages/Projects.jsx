import { useRef } from 'react'
import { usePageEffects } from '../hooks/usePageEffects'

export default function Projects() {
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
          <a href="solutions.html">Solutions</a>
          <a href="projects.html" className="active">Projects</a>
          <a href="global-impact.html">Global Impact</a>
        </nav>
        <a href="index.html#contact" className="nav-cta">Start a project <span>→</span></a>
      </header>
      
      <section className="proj-hero">
        <div className="wrap">
          <div>
            <div className="eyebrow reveal" style={{ marginBottom: "32px" }}><span className="dot"></span>2014 — present</div>
            <h1 className="h-display reveal">A record of <em>what's<br/>been built.</em></h1>
          </div>
          <div className="reveal">
            <p className="lede">Selected projects across our three practices. Capacity figures are commissioned MW/MWh; lift counts are from internal lift logs.</p>
          </div>
        </div>
      </section>
      
      <div className="filterbar">
        <div className="wrap">
          <div className="filters">
            <button className="chip active" data-filter="all">All projects</button>
            <button className="chip" data-filter="solar">Solar</button>
            <button className="chip" data-filter="bess">BESS</button>
            <button className="chip" data-filter="cranes">Cranes</button>
            <button className="chip" data-filter="hybrid">Hybrid</button>
          </div>
          <div className="filter-count"><span id="visibleCount">12</span> / 12 shown</div>
        </div>
      </div>
      
      <section className="featured">
        <div className="wrap">
          <div className="feat-card reveal">
            <div className="bg"></div>
            <div className="inner">
              <div className="feat-meta">
                <span className="tag" style={{ background: "rgba(10,10,10,.6)", backdropFilter: "blur(8px)", borderColor: "rgba(52,211,153,.4)", color: "var(--green)" }}>● LIVE · CASE STUDY</span>
                <span className="tag" style={{ background: "rgba(10,10,10,.6)", backdropFilter: "blur(8px)", borderColor: "rgba(255,255,255,.15)", color: "var(--bone)" }}>Solar EPC · 480 MW</span>
              </div>
              <div>
                <h2>Anantapur-II<br/><em>tracker plant.</em></h2>
                <p className="lede">A 480 MW single-axis tracker plant on 1,820 acres in southern Andhra Pradesh — engineered, procured, lifted, and commissioned by GRM in 11 months. The largest single contract on our books.</p>
                <div className="feat-stats">
                  <div><div className="v">480<span className="u">MW</span></div><div className="l">DC capacity</div></div>
                  <div><div className="v">1,820<span className="u">ac</span></div><div className="l">Site footprint</div></div>
                  <div><div className="v">11<span className="u">mo</span></div><div className="l">EPC duration</div></div>
                  <div><div className="v">PR 86<span className="u">%</span></div><div className="l">Year-1 perf.</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="projgrid">
        <div className="wrap">
          <div className="pg">
      
            <a className="pcard h-tall w-3" data-cat="bess" href="#">
              <div className="bg"><img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80" alt=""/></div>
              <div className="corner live">● LIVE</div>
              <div className="meta">
                <span className="tag"><span className="green">●</span> BESS · 200 MWh</span>
                <h3>Mundra grid-tie storage</h3>
                <div className="body-sm">Gujarat, IN — comm. 2026 · 4-hr discharge</div>
              </div>
            </a>
      
            <a className="pcard w-4" data-cat="cranes" href="#">
              <div className="bg"><img src="https://images.unsplash.com/photo-1571781565036-d3f759be73e4?auto=format&fit=crop&w=900&q=80" alt=""/></div>
              <div className="corner">2025</div>
              <div className="meta">
                <span className="tag"><span className="amber">●</span> Heavy lift</span>
                <h3>Bhuj turbine erection</h3>
                <div className="body-sm">42 nacelles · 240 t lifts</div>
              </div>
            </a>
      
            <a className="pcard w-4" data-cat="hybrid" href="#">
              <div className="bg"><img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=900&q=80" alt=""/></div>
              <div className="corner live">● LIVE</div>
              <div className="meta">
                <span className="tag"><span className="green">●</span> Hybrid · 120 MW + 60 MWh</span>
                <h3>Khavda hybrid block</h3>
                <div className="body-sm">Solar & storage co-located</div>
              </div>
            </a>
      
            <a className="pcard w-half" data-cat="solar" href="#">
              <div className="bg"><img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80" alt=""/></div>
              <div className="corner">2024</div>
              <div className="meta">
                <span className="tag"><span className="green">●</span> Solar EPC · 220 MW</span>
                <h3>Pavagada extension</h3>
                <div className="body-sm">Karnataka, IN — single-axis tracker plant</div>
              </div>
            </a>
      
            <a className="pcard w-half" data-cat="solar" href="#">
              <div className="bg"><img src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80" alt=""/></div>
              <div className="corner">2024</div>
              <div className="meta">
                <span className="tag"><span className="green">●</span> Solar EPC · 100 MW</span>
                <h3>Al Dhafra block-3</h3>
                <div className="body-sm">UAE — desert-rated bifacial array</div>
              </div>
            </a>
      
            <a className="pcard w-4" data-cat="cranes" href="#">
              <div className="bg"><img src="https://images.unsplash.com/photo-1571781565036-d3f759be73e4?auto=format&fit=crop&w=900&q=80" alt=""/></div>
              <div className="corner">2024</div>
              <div className="meta">
                <span className="tag"><span className="amber">●</span> Port logistics</span>
                <h3>Krishnapatnam handling</h3>
                <div className="body-sm">Component import & rigging</div>
              </div>
            </a>
      
            <a className="pcard w-4" data-cat="bess" href="#">
              <div className="bg"><img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80" alt=""/></div>
              <div className="corner">2025</div>
              <div className="meta">
                <span className="tag"><span className="green">●</span> BESS · 60 MWh</span>
                <h3>Maharashtra grid-firm</h3>
                <div className="body-sm">Frequency regulation block</div>
              </div>
            </a>
      
            <a className="pcard w-4" data-cat="solar" href="#">
              <div className="bg"><img src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=80" alt=""/></div>
              <div className="corner live">● LIVE</div>
              <div className="meta">
                <span className="tag"><span className="green">●</span> Solar EPC · 150 MW</span>
                <h3>Turkana solar farm</h3>
                <div className="body-sm">Kenya — community grid tie</div>
              </div>
            </a>
      
            <a className="pcard w-half" data-cat="hybrid" href="#">
              <div className="bg"><img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1200&q=80" alt=""/></div>
              <div className="corner">2026</div>
              <div className="meta">
                <span className="tag"><span className="green">●</span> Hybrid · 200 MW + 100 MWh</span>
                <h3>Tabuk hybrid plant</h3>
                <div className="body-sm">Saudi Arabia — desert hybrid w/ thermal mgmt</div>
              </div>
            </a>
      
            <a className="pcard w-half" data-cat="cranes" href="#">
              <div className="bg"><img src="https://images.unsplash.com/photo-1562016600-ece13e8ba570?auto=format&fit=crop&w=1200&q=80" alt=""/></div>
              <div className="corner">2023</div>
              <div className="meta">
                <span className="tag"><span className="amber">●</span> Heavy lift · 1,200 t</span>
                <h3>Reactor vessel placement</h3>
                <div className="body-sm">Vizag refinery — single-lift install</div>
              </div>
            </a>
      
            <a className="pcard w-4" data-cat="solar" href="#">
              <div className="bg"><img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80" alt=""/></div>
              <div className="corner">2023</div>
              <div className="meta">
                <span className="tag"><span className="green">●</span> Solar EPC · 80 MW</span>
                <h3>Mekong delta plant</h3>
                <div className="body-sm">Vietnam — flood-elevated structures</div>
              </div>
            </a>
      
            <a className="pcard w-4" data-cat="bess" href="#">
              <div className="bg"><img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80" alt=""/></div>
              <div className="corner">2025</div>
              <div className="meta">
                <span className="tag"><span className="green">●</span> BESS · 80 MWh</span>
                <h3>NSW grid-forming block</h3>
                <div className="body-sm">Australia — virtual inertia services</div>
              </div>
            </a>
      
            <a className="pcard w-4" data-cat="solar" href="#">
              <div className="bg"><img src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=80" alt=""/></div>
              <div className="corner">2022</div>
              <div className="meta">
                <span className="tag"><span className="green">●</span> Solar EPC · 60 MW</span>
                <h3>Atacama field-2</h3>
                <div className="body-sm">Chile — high-altitude bifacial</div>
              </div>
            </a>
      
          </div>
        </div>
      </section>
      
      
      <section className="case">
        <div className="wrap">
          <div className="case-grid">
            <div className="case-image reveal">
              <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80" alt=""/>
            </div>
            <div className="case-body reveal">
              <div className="eyebrow" style={{ marginBottom: "22px" }}>CASE STUDY · 01</div>
              <h2>Anantapur-II:<br/>11 months, <em>steady.</em></h2>
              <p>The site was 1,820 acres of saline scrub. The grid sub-station was 42 km away. The schedule was 11 months from financial close to grid synchronisation — three months under industry standard for the capacity.</p>
              <p>GRM delivered the design, the trackers, the substation, and the 42 km MV connection under a single contract. Every panel was lifted by GRM cranes. Every drawing was stamped by an engineer who'd be on the asset for the next five years of O&M.</p>
              <p>The plant came online in May 2025, ten days early. PR for year-1 measured at 86%. We've added 60 MWh of storage to the same site in FY26.</p>
              <a href="#" className="btn btn-ghost" style={{ marginTop: "18px" }}>Download technical brief <span className="arrow">→</span></a>
              <div className="case-stats">
                <div><div className="v">480<span className="u">MW</span></div><div className="l">Commissioned</div></div>
                <div><div className="v">11<span className="u">mo</span></div><div className="l">Schedule</div></div>
                <div><div className="v">42<span className="u">km</span></div><div className="l">MV connection</div></div>
                <div><div className="v">PR 86<span className="u">%</span></div><div className="l">Year-1</div></div>
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
