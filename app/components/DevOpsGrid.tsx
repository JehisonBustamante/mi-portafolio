export default function DevOpsGrid() {
  const tools = [
    { name: "Docker", category: "Containerization" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "Terraform", category: "IaC" },
    { name: "AWS", category: "Cloud" },
    { name: "Jenkins", category: "CI/CD" },
    { name: "NGINX", category: "Web Server" },
    { name: "Jira", category: "Mgmt" },
    { name: "GitHub Desktop", category: "VCS" },
    { name: "DBeaver", category: "DB Client" },
    { name: "Cloud Run", category: "Cloud" },
    { name: "Vercel", category: "Cloud" },
    { name: "GCP", category: "Cloud" },
  ];

  return (
    <section className="glass-card col-span-12 md:col-span-4 responsive-card-padding">
      <h2 className="section-title">Infrastructure & DevOps</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '12px', marginTop: '24px' }}>
        {tools.map((tool, idx) => (
          <div key={idx} className="devops-card">
            <span className="tech-text" style={{ color: 'var(--text-primary)', fontWeight: '600', marginBottom: '4px', fontSize: '0.95rem' }}>{tool.name}</span>
            <span style={{ fontSize: '0.7rem', color: 'var(--accent-electric-violet)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{tool.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
