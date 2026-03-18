export default function SkillMatrix() {
  const skills = [
    { category: "Languages", items: ["Python", "Java", "C++", "TypeScript", "Assembler MIPS", "R", "Matlab", "Julia"] },
    { category: "Frontend Core", items: ["Next.js", "React", "Vanilla CSS", "HTML5"] },
    { category: "Backend & Data", items: ["Node.js", "Firebase", "NoSQL", "SQL"] },
    { category: "Tools & Design", items: ["v0", "Figma", "Overleaf", "Lucidchart", "Bizagi"] },
  ];

  return (
    <section className="glass-card" style={{ gridColumn: 'span 5', padding: '40px' }}>
      <h2 className="section-title">Technical Matrix</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '24px' }}>
        {skills.map((skillGroup, index) => (
          <div key={index}>
            <h4 className="tech-text" style={{ color: 'var(--accent-electric-violet)', marginBottom: '16px', fontSize: '1rem', borderBottom: '1px solid rgba(191,0,255,0.1)', paddingBottom: '8px' }}>
              {skillGroup.category}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {skillGroup.items.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
