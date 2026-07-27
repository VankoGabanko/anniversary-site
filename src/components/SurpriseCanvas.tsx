import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  rotation: number
  rotationSpeed: number
  kind: 'heart' | 'confetti'
  color: string
}

const colors = ['#c9a75d', '#f5f0e8', '#7f1522', '#b5303d', '#e0c98f']

export function SurpriseCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    let animationFrame = 0
    let particles: Particle[] = []

    const resize = () => {
      const density = Math.min(window.devicePixelRatio, 2)
      canvas.width = window.innerWidth * density
      canvas.height = window.innerHeight * density
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      context.setTransform(density, 0, 0, density, 0, 0)
      particles = Array.from({ length: Math.min(1200, Math.floor(window.innerWidth * 1.3)) }, (_, index) => ({
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + Math.random() * window.innerHeight * 1.7,
        vx: (Math.random() - 0.5) * 0.45,
        vy: -(0.35 + Math.random() * 1.15),
        size: 2 + Math.random() * (index % 8 === 0 ? 8 : 4),
        alpha: 0.2 + Math.random() * 0.65,
        rotation: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 0.04,
        kind: index % 5 === 0 ? 'confetti' : 'heart',
        color: colors[index % colors.length],
      }))
    }

    const heartPath = (particle: Particle) => {
      const size = particle.size
      context.beginPath()
      context.moveTo(0, size * 0.35)
      context.bezierCurveTo(-size, -size * 0.35, -size * 0.8, size, 0, size * 1.4)
      context.bezierCurveTo(size * 0.8, size, size, -size * 0.35, 0, size * 0.35)
      context.fill()
    }

    const render = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (const particle of particles) {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.rotation += particle.rotationSpeed
        if (particle.y < -30) {
          particle.y = window.innerHeight + Math.random() * 250
          particle.x = Math.random() * window.innerWidth
        }

        context.save()
        context.translate(particle.x, particle.y)
        context.rotate(particle.rotation)
        context.globalAlpha = particle.alpha
        context.fillStyle = particle.color
        if (particle.kind === 'heart') {
          heartPath(particle)
        } else {
          context.fillRect(-particle.size / 2, -particle.size, particle.size, particle.size * 2.2)
        }
        context.restore()
      }
      animationFrame = window.requestAnimationFrame(render)
    }

    resize()
    render()
    window.addEventListener('resize', resize)
    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" aria-hidden="true" />
}
