import { useState } from 'react'
import { experience } from '../data.js'
import Reveal from './Reveal.jsx'
import { SectionHead } from './About.jsx'
import { spotlight } from './hooks.js'

function Job({ job, i }) {
  const [open, setOpen] = useState(false)
  return (
    <Reveal className="job" delay={i * 80}>
      <span className="job-dot" />
      <article className="card glow" onPointerMove={spotlight}>
        <header>
          <div>
            <h3>{job.role}</h3>
            <p className="company">{job.company} <span className="muted">· {job.place}</span></p>
          </div>
          <span className="chip mono">{job.period}</span>
        </header>
        <ul>
          {job.points.map((p) => <li key={p}>{p}</li>)}
        </ul>
        {job.highlights && (
          <>
            <button className="toggle" onClick={() => setOpen(!open)} aria-expanded={open}>
              {open ? '− Hide' : '+ Show'} key achievements
            </button>
            <div className={`collapse ${open ? 'open' : ''}`}>
              <ul className="wins">
                {job.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </div>
          </>
        )}
        <div className="tags">
          {job.tags.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>
      </article>
    </Reveal>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <SectionHead index="02" title="Where I’ve built things" sub="Two product teams and an internship, 4.4 years and counting." />
      <div className="timeline">
        {experience.map((job, i) => <Job key={job.company} job={job} i={i} />)}
      </div>
    </section>
  )
}
