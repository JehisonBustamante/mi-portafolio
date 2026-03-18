export default function Projects() {
  const placeholders = [
    { title: "Project Alpha", desc: "Complex optimization system focusing on algorithmic efficiency and data structure refinement." },
    { title: "Project Beta", desc: "Fullstack architecture implementation using modern React/Next.js and NoSQL real-time databases." },
    { title: "Project Gamma", desc: "Automated infrastructure pipeline and cloud deployment strategies for scalable applications." },
    { title: "Project Delta", desc: "Metaheuristic-driven scheduling engine designed for high-concurrency resource allocation." },
    { title: "Project Epsilon", desc: "Real-time visualization dashboard for complex data streams using WebSocket and low-latency rendering." },
    { title: "Project Zeta", desc: "Distributed API Gateway with intelligent load balancing and custom authentication middleware." }
  ];

  return (
    <section id="projects-section" style={{ gridColumn: 'span 12', marginTop: '20px' }}>
      <h2 className="section-title">Featured Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {placeholders.map((project, index) => (
          <div key={index} className="glass-card" style={{ padding: '30px', display: 'flex', flexDirection: 'column', minHeight: '200px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <h3 className="tech-text" style={{ fontSize: '1.2rem', color: 'var(--accent-neon-purple)' }}>{project.title}</h3>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-neon-purple)', boxShadow: '0 0 10px var(--accent-neon-purple)' }}></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', flex: 1 }}>
              {project.desc}
            </p>
            <div style={{ marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px', display: 'flex', gap: '12px' }}>
              <span className="skill-tag" style={{ fontSize: '0.75rem', opacity: 0.6 }}>[ Placeholder ]</span>
              <span className="skill-tag" style={{ fontSize: '0.75rem', opacity: 0.6 }}>[ WIP ]</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
