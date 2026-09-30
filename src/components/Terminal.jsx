import { useEffect, useRef, useState } from 'react'
import { profile, experience, skills, projects } from '../data.js'

const COMMANDS = {
  help: () => [
    'Available commands:',
    '  whoami       who is this?',
    '  experience   where I have worked',
    '  skills       what I build with',
    '  projects     things I have made',
    '  contact      get in touch',
    '  resume       open my résumé',
    '  clear        clean the screen',
    '  sudo hire kousalya',
  ],
  whoami: () => [
    `${profile.name} — ${profile.title}`,
    `${profile.yoe} years · ${profile.location}`,
    profile.summary,
  ],
  experience: () => experience.map((e) => `▸ ${e.role} @ ${e.company}  (${e.period})`),
  skills: () => skills.map((s) => `${s.title.padEnd(20, ' ')} ${s.items.join(', ')}`),
  projects: () => projects.map((p) => `▸ ${p.title} — ${p.tags.join(' / ')}`),
  contact: () => [`email   ${profile.email}`, `github  ${profile.github}`, ...(profile.linkedin ? [`linkedin ${profile.linkedin}`] : [])],
  resume: () => {
    window.open(profile.resume, '_blank')
    return ['Opening résumé in a new tab…']
  },
  'sudo hire kousalya': () => [
    '[sudo] verifying skills……… ✔',
    '[sudo] checking availability… immediate joiner ✔',
    '🎉 Permission granted. Say hi → ' + profile.email,
  ],
}

const CHIPS = ['whoami', 'skills', 'experience', 'projects', 'contact', 'sudo hire kousalya']

export default function Terminal() {
  const [lines, setLines] = useState([
    { type: 'cmd', text: 'whoami' },
    { type: 'out', text: `${profile.name} — ${profile.title}` },
    { type: 'out', text: 'Type a command below, or tap one ↓' },
  ])
  const [input, setInput] = useState('')
  const body = useRef(null)

  useEffect(() => {
    body.current?.scrollTo({ top: body.current.scrollHeight })
  }, [lines])

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return
    if (cmd === 'clear') return setLines([])
    const fn = COMMANDS[cmd]
    const out = fn ? fn() : [`command not found: ${cmd} — try "help"`]
    setLines((l) => [...l, { type: 'cmd', text: raw }, ...out.map((text) => ({ type: 'out', text }))])
  }

  const submit = (e) => {
    e.preventDefault()
    run(input)
    setInput('')
  }

  return (
    <div className="terminal" onClick={(e) => e.currentTarget.querySelector('input')?.focus({ preventScroll: true })}>
      <div className="term-bar">
        <span className="dot r" /><span className="dot y" /><span className="dot g" />
        <span className="term-title">kousalya@portfolio: ~</span>
      </div>
      <div className="term-body" ref={body}>
        {lines.map((l, i) => (
          <div key={i} className={`tl ${l.type}`}>
            {l.type === 'cmd' && <span className="prompt">❯ </span>}
            {l.text}
          </div>
        ))}
        <form onSubmit={submit} className="tl cmd input-row">
          <span className="prompt">❯ </span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck="false"
            autoComplete="off"
            autoCapitalize="off"
            aria-label="Terminal command"
            placeholder="help"
          />
        </form>
      </div>
      <div className="term-chips">
        {CHIPS.map((c) => (
          <button key={c} type="button" onClick={() => run(c)}>{c}</button>
        ))}
      </div>
    </div>
  )
}
