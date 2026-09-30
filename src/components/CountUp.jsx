import { useEffect, useState } from 'react'
import { useInView, prefersReducedMotion } from './hooks.js'

export default function CountUp({ to, decimals = 0, suffix = '', duration = 1600 }) {
  const [ref, seen] = useInView({ threshold: 0.4 })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!seen) return
    if (prefersReducedMotion()) return setVal(to)
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      setVal(to * (1 - Math.pow(1 - p, 4))) // ease-out quart
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, to, duration])

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  )
}
