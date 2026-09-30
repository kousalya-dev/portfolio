import { stats, education, profile } from '../data.js'
import Reveal from './Reveal.jsx'
import CountUp from './CountUp.jsx'

export function SectionHead({ index, title, sub }) {
  return (
    <Reveal className="section-head">
      <span className="mono idx">{index}</span>
      <h2>{title}</h2>
      {sub && <p className="muted">{sub}</p>}
    </Reveal>
  )
}

export default function About() {
  return (
    <section id="about" className="section container">
      <SectionHead index="01" title="Impact, in numbers" sub="Results from real production work — not just line items on a résumé." />
      <div className="stats">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="stat card">
            <div className="stat-num grad">
              <CountUp to={s.value} decimals={s.decimals} suffix={s.suffix} />
            </div>
            <div className="muted">{s.label}</div>
          </Reveal>
        ))}
      </div>

      <div className="about-grid">
        <Reveal className="about-text">
          <h3>How I work</h3>
          <p>
            I’m a full-stack developer who’s happiest owning a feature end to end: designing the data model in MongoDB,
            exposing it through clean REST APIs in Node.js, and shaping it into a React interface people enjoy using.
          </p>
          <p>
            At Unifo I led the Audit Report, Warehouse Master and E-Waybill modules, moved heavy processing onto worker
            threads, and shipped with Jest and GitHub Actions so releases stayed calm. I’m based in {profile.location} and
            available to join immediately.
          </p>
        </Reveal>
        <Reveal delay={120} className="edu card">
          <span className="mono muted">education</span>
          <h3>{education.degree}</h3>
          <p>{education.school}, {education.place}</p>
          <div className="edu-meta">
            <span className="chip">{education.period}</span>
            <span className="chip accent">{education.grade}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
