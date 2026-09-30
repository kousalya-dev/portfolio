import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const links = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach(([id]) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  return (
    <header className="nav">
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="nav-inner">
        <a href="#top" className="logo" aria-label="Home">
          <span className="logo-mark">K</span>
          <span className="logo-text">{profile.name.split(' ')[0]}<b>.dev</b></span>
        </a>
        <nav className={`links ${open ? 'open' : ''}`}>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="btn btn-sm" href={profile.resume} target="_blank" rel="noreferrer">Résumé ↗</a>
        </nav>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
    </header>
  )
}
