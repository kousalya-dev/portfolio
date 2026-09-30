import { skills } from '../data.js'
import Reveal from './Reveal.jsx'
import { SectionHead } from './About.jsx'
import { spotlight } from './hooks.js'

export default function Skills() {
  const marquee = skills.flatMap((s) => s.items)
  return (
    <section id="skills" className="section container">
      <SectionHead index="03" title="The toolbox" sub="What I reach for, from schema to deployment." />
      <div className="skill-grid">
        {skills.map((s, i) => (
          <Reveal key={s.title} delay={i * 80} className="card glow skill" onPointerMove={spotlight}>
            <div className="skill-icon mono grad">{s.icon}</div>
            <h3>{s.title}</h3>
            <div className="tags">
              {s.items.map((it) => <span key={it} className="chip">{it}</span>)}
            </div>
          </Reveal>
        ))}
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((m, i) => <span key={i}>{m}<b>✦</b></span>)}
        </div>
      </div>
    </section>
  )
}
