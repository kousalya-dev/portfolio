import { useEffect, useState } from 'react'
import { prefersReducedMotion } from './hooks.js'

export default function Typewriter({ words }) {
  const [i, setI] = useState(0)
  const [text, setText] = useState(prefersReducedMotion() ? words[0] : '')
  const [del, setDel] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const word = words[i]
    let t
    if (!del && text === word) t = setTimeout(() => setDel(true), 1600)
    else if (del && text === '') {
      setDel(false)
      setI((i + 1) % words.length)
    } else {
      t = setTimeout(
        () => setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        del ? 35 : 70
      )
    }
    return () => clearTimeout(t)
  }, [text, del, i, words])

  return (
    <span className="typed">
      {text}
      <i className="caret" />
    </span>
  )
}
