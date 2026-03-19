export default function Projects() {
  const projects = [
    // ... (mismos datos de antes)
    {
      title: "NanoLedger API",
      desc: "A robust transactional engine based on the double-entry bookkeeping principle. Built to ensure financial integrity and full asset traceability.",
      tech: ["Spring Boot", "PostgreSQL", "Java", "Docker"],
      link: "https://nanoledgerapi-service-399040611256.us-central1.run.app/swagger-ui/index.html",
      repo: "https://github.com/JehisonBustamante/nanoledger-api"
    },
    {
      title: "Cryptowatch",
      desc: "High-availability cryptocurrency dashboard for real-time market monitoring, integrating Binance's WebSocket API for live data streams.",
      tech: ["Next.js", "WebSockets", "Binance API"],
      link: "https://cryptowatch-lake.vercel.app",
      repo: "https://github.com/JehisonBustamante/cryptowatch"
    },
    {
      title: "EventHub Ecosystem",
      desc: "Scalable event management platform featuring a decoupled architecture. High-performance backend paired with a minimalist, high-speed frontend.",
      tech: ["Nest.js", "Next.js", "TypeORM", "Docker"],
      link: "https://eventhub-frontend-sigma.vercel.app",
      repo: "https://github.com/JehisonBustamante/eventhub-frontend"
    },
    {
      title: "DevOps IaC Hub",
      desc: "Infrastructure as Code (IaC) repository for automated microservices deployment on Google Cloud Run utilizing Terraform pipelines.",
      tech: ["Terraform", "Docker", "GCP"],
      link: null,
      repo: "https://github.com/JehisonBustamante/devops-iac"
    },
    {
      title: "Gateway Aggregator",
      desc: "Intelligent dashboard centralizing weather, finance, and news microservices under a simplified UX and high-level digital design.",
      tech: ["FastAPI", "Python", "SvelteKit", "Docker"],
      link: "https://api-gateway-aggregator-frontend.vercel.app",
      repo: "https://github.com/JehisonBustamante/api-gateway-aggregator-frontend"
    },
    {
      title: "Digital Showroom",
      desc: "Personal command center and technical portfolio designed to showcase the integration of distributed architectures and cloud deployments.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      link: null,
      repo: "https://github.com/JehisonBustamante/mi-portafolio"
    }
  ];

  return (
    <section id="projects-section" className="col-span-12 responsive-section-margin">
      <h2 className="section-title">Featured Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '20px' }}>
        {projects.map((project, index) => (
          <div key={index} className="glass-card responsive-card-padding" style={{ display: 'flex', flexDirection: 'column', minHeight: '320px', transition: 'transform 0.3s ease' }}>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <h3 className="tech-text" style={{ fontSize: '1.3rem', color: 'var(--accent-neon-purple)', fontWeight: 'bold' }}>{project.title}</h3>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-neon-purple)', boxShadow: '0 0 15px var(--accent-neon-purple)' }}></div>
            </div>

            {/* Description */}
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', flex: 1, marginBottom: '20px' }}>
              {project.desc}
            </p>

            {/* Tech Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {project.tech.map((t, i) => (
                <span key={i} className="skill-tag" style={{ fontSize: '0.7rem', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: 'rgba(255,255,255,0.7)' }}>
                  {t}
                </span>
              ))}
            </div>

            {/* BOTONES MEJORADOS */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', display: 'flex', gap: '12px' }}>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    fontSize: '0.75rem',
                    padding: '10px 0',
                    background: 'rgba(168, 85, 247, 0.15)', // Fondo sutil púrpura
                    color: 'var(--accent-neon-purple)',
                    border: '1px solid var(--accent-neon-purple)',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '900',
                    letterSpacing: '1px',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 0 10px rgba(168, 85, 247, 0.1)'
                  }}
                  className="hover-bright" // Asumiendo que tienes una clase de hover o puedes agregarla
                >
                  LIVE DEMO
                </a>
              )}
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  textAlign: 'center',
                  fontSize: '0.75rem',
                  padding: '10px 0',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'rgba(255,255,255,0.6)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
              >
                GITHUB
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}