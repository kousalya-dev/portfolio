import { profile } from '../data.js'
import Typewriter from './Typewriter.jsx'
import Terminal from './Terminal.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero container">
      <div className="hero-copy">
        <span className="status"><i className="pulse" />{profile.status}</span>
        <p className="hello">Hi, I’m</p>
        <h1 className="name">
          <span className="grad">Kousalya</span>
          <br />
          Sathyamoorthy
        </h1>
        <p className="role">
          <span className="mono muted">&gt; </span>
          <Typewriter words={profile.roles} />
        </p>
        <p className="lead">{profile.summary}</p>
        <div className="cta">
          <a href="#projects" className="btn btn-primary">See my work</a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="btn">Download résumé ↓</a>
          <a href="#contact" className="btn btn-ghost">Let’s talk →</a>
        </div>
      </div>
      <div className="hero-term">
        <Terminal />
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll down"><span /></a>
    </section>
  )
}
