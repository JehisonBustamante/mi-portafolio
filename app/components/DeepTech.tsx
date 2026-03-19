export default function DeepTech() {
  return (
    <section className="glass-card col-span-12 md:col-span-4 responsive-card-padding">
      <h2 className="section-title">Deep Tech & Research</h2>
      
      <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(191,0,255,0.1)' }}>
        <h3 style={{ fontSize: '1.4rem', color: 'var(--accent-electric-violet)', marginBottom: '12px' }}>Algorithm Generation for VRPTW</h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
          Research and development of routing algorithms focusing on Vehicle Routing Problem with Time Windows (VRPTW).
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '8px', borderLeft: '2px solid var(--accent-neon-purple)' }}>
            <h4 className="tech-text" style={{ color: 'var(--text-primary)', marginBottom: '8px', fontSize: '1rem' }}>ILS Optimization</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Iterated Local Search applied for high-efficiency search spaces.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '8px', borderLeft: '2px solid var(--accent-neon-purple)' }}>
            <h4 className="tech-text" style={{ color: 'var(--text-primary)', marginBottom: '8px', fontSize: '1rem' }}>AST Integration</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Abstract Syntax Trees utilized for structural algorithm generation.</p>
          </div>
        </div>

        {/* GAA Section */}
        <div style={{ marginTop: '24px', padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid var(--accent-electric-violet)' }}>
          <h4 className="tech-text" style={{ color: 'var(--text-primary)', marginBottom: '12px', fontSize: '1.1rem' }}>Automatic Algorithm Generation (AAG)</h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Applying computational heuristics to autonomously architect, refine, and optimize algorithmic structures for deeply complex optimization challenges, resulting in highly-efficient execution models.
          </p>
        </div>
      </div>
    </section>
  );
}
