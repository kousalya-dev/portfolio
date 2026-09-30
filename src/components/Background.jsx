import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from './hooks.js'

// Interactive particle network: dots drift, link up when close, and get pulled toward the cursor.
export default function Background() {
  const canvas = useRef(null)

  useEffect(() => {
    const c = canvas.current
    const ctx = c.getContext('2d')
    const reduce = prefersReducedMotion()
    const mouse = { x: -9999, y: -9999 }
    let w, h, dpr, dots, raf

    const init = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      c.width = w * dpr
      c.height = h * dpr
      c.style.width = w + 'px'
      c.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(Math.floor((w * h) / 16000), 110)
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.6,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const d of dots) {
        const dx = mouse.x - d.x
        const dy = mouse.y - d.y
        const dist = Math.hypot(dx, dy)
        if (dist < 160 && dist > 0) {
          d.x += (dx / dist) * 0.35
          d.y += (dy / dist) * 0.35
        }
        d.x += d.vx
        d.y += d.vy
        if (d.x < 0 || d.x > w) d.vx *= -1
        if (d.y < 0 || d.y > h) d.vy *= -1
      }
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i]
        ctx.beginPath()
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(180,170,255,.7)'
        ctx.fill()
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 130) {
            ctx.strokeStyle = `rgba(124,92,255,${0.22 * (1 - dist / 130)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      if (!reduce) raf = requestAnimationFrame(draw)
    }

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const onLeave = () => {
      mouse.x = mouse.y = -9999
    }

    init()
    draw()
    window.addEventListener('resize', init)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', init)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <>
      <div className="bg-orbs" aria-hidden="true">
        <span className="orb o1" />
        <span className="orb o2" />
        <span className="orb o3" />
      </div>
      <canvas ref={canvas} className="bg-canvas" aria-hidden="true" />
      <div className="bg-grain" aria-hidden="true" />
    </>
  )
}
