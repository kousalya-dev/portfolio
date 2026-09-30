import { useState } from 'react'
import { profile } from '../data.js'
import Reveal from './Reveal.jsx'
import { SectionHead } from './About.jsx'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }
  return (
    <section id="contact" className="section container">
      <SectionHead index="05" title="Let’s build something" />
      <Reveal className="contact card">
        <h3 className="contact-big">
          Have a role, a project, or a hard problem?<br />
          <span className="grad">I’m ready to start right away.</span>
        </h3>
        <div className="cta center">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>Email me</a>
          <button className="btn" onClick={copy}>{copied ? 'Copied ✓' : profile.email}</button>
        </div>
        <div className="socials">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>}
          <a href={profile.resume} target="_blank" rel="noreferrer">Résumé ↗</a>
        </div>
      </Reveal>
      <footer className="footer mono muted">
        © {new Date().getFullYear()} {profile.name} · Built with React + Vite
      </footer>
    </section>
  )
}
