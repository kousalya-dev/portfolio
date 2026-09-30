import { projects, profile } from '../data.js'
import Reveal from './Reveal.jsx'
import { SectionHead } from './About.jsx'
import { spotlight } from './hooks.js'

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <SectionHead index="04" title="Selected projects" sub="Side projects and experiments — the code is public." />
      <div className="project-grid">
        {projects.map((p, i) => (
          <Reveal
            as="a"
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            delay={i * 100}
            className={`card glow project ${p.accent}`}
            onPointerMove={spotlight}
          >
            <div className="project-top">
              <span className="mono muted">0{i + 1}</span>
              <span className="arrow">↗</span>
            </div>
            <h3>{p.title}</h3>
            <p className="muted">{p.blurb}</p>
            <div className="tags">
              {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="more">
        <a className="btn" href={profile.github} target="_blank" rel="noreferrer">More on GitHub →</a>
      </Reveal>
    </section>
  )
}
