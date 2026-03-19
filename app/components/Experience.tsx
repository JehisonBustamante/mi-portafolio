export default function Experience() {
  return (
    <section id="projects" className="glass-card col-span-7 responsive-card-padding">
      <h2 className="section-title">Professional Experience</h2>
      
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
          Fullstack Lead <span className="neon-text tech-text" style={{ fontSize: '1rem', marginLeft: '8px' }}>FunerariApp</span>
        </h3>
        <ul className="tech-list" style={{ marginLeft: '12px', marginTop: '16px' }}>
          <li><strong>Frontend Architecture:</strong> Architecting scalable, component-driven Next.js and React interfaces.</li>
          <li><strong>Database Engineering:</strong> Implementing complex NoSQL logic and data models using Firebase.</li>
          <li><strong>UX/UI Optimization:</strong> Digitalizing and streamlining complex user flows for maximum efficiency.</li>
        </ul>
      </div>

      <div>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
          Scrum Master & Backend Developer <span className="neon-text tech-text" style={{ fontSize: '1rem', marginLeft: '8px' }}>Frutos secos mil sabores</span>
        </h3>
        <ul className="tech-list" style={{ marginLeft: '12px', marginTop: '16px' }}>
          <li><strong>Agile Leadership:</strong> Leading core agile ceremonies and ensuring sprint velocity and deliverable quality.</li>
          <li><strong>Backend Systems:</strong> Developing and maintaining backend logic for critical financial inventory systems.</li>
        </ul>
      </div>
    </section>
  );
}
