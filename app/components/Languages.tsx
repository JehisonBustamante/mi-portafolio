export default function Languages() {
  const languages = [
    { code: "ES", name: "Spanish", level: "Native", progress: 100, color: "var(--accent-neon-purple)" },
    { code: "EN", name: "English", level: "Advanced", progress: 85, color: "var(--accent-electric-violet)" },
    { code: "FR", name: "French", level: "Basic", progress: 30, color: "rgba(191,0,255,0.4)" },
    { code: "IT", name: "Italian", level: "Basic", progress: 25, color: "rgba(191,0,255,0.4)" },
  ];

  return (
    <section className="glass-card col-span-12 md:col-span-4 responsive-card-padding" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <h2 className="section-title">Global Reach</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1, justifyContent: 'center' }}>
        {languages.map((lang, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: 'bold', 
                  color: 'var(--accent-neon-purple)',
                  padding: '2px 6px',
                  border: '1px solid rgba(191,0,255,0.2)',
                  borderRadius: '4px',
                  background: 'rgba(191,0,255,0.05)'
                }}>{lang.code}</span>
                <span style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: '500' }}>{lang.name}</span>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{lang.level}</span>
            </div>
            
            <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ 
                width: `${lang.progress}%`, 
                height: '100%', 
                background: lang.color,
                boxShadow: lang.progress > 50 ? `0 0 10px ${lang.color}` : 'none',
                transition: 'width 1s ease-out'
              }}></div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px', marginTop: 'auto' }}>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4', fontStyle: 'italic' }}>
          "Seamless communication across diverse technical and cultural landscapes."
        </p>
      </div>
    </section>
  );
}
