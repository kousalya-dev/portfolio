import { useEffect, useRef } from 'react'

// Soft glowing cursor follower (fine pointers only).
export default function Cursor() {
  const ring = useRef(null)
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const el = ring.current
    let x = 0, y = 0, tx = 0, ty = 0, raf
    const move = (e) => {
      tx = e.clientX
      ty = e.clientY
      el.style.opacity = 1
      const hot = e.target.closest?.('a, button, input, .chip, .card')
      el.classList.toggle('hot', !!hot)
    }
    const loop = () => {
      x += (tx - x) * 0.16
      y += (ty - y) * 0.16
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('pointermove', move)
    loop()
    return () => {
      window.removeEventListener('pointermove', move)
      cancelAnimationFrame(raf)
    }
  }, [])
  return <div ref={ring} className="cursor" aria-hidden="true" />
}
