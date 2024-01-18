import { useCallback, useEffect, useRef, useState } from 'react'
import renderParticle, { IParticleProps } from './parts/particle'

export interface IParticleBackgroundProps {
  className?: string
  particleSize?: number | 'random'
  particleColor?: string
  particleGap?: number
  backgroundColor?: string
}

const ParticleBackground = ({
  className,
  particleSize,
  particleColor,
  particleGap,
  backgroundColor,
}: IParticleBackgroundProps) => {
  const gap = particleGap || 24
  const mouseRadius = 12000
  const friction = 0.96
  const ease = 0.2
  const randomLimiter = 0.5
  const randomsizeMultiplier = 3.6

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<IParticleProps[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
  })

  const initParticles = (context: CanvasRenderingContext2D) => {
    for (let i = 0; i < windowSize.width; i += gap) {
      for (let j = 0; j < windowSize.height; j += gap) {
        const newParticle: IParticleProps = {
          originX: i,
          originY: j,
          xPos: i,
          yPos: j,
          size:
            particleSize === 'random'
              ? Math.floor(
                  (randomLimiter + randomLimiter * Math.random()) *
                    randomsizeMultiplier,
                )
              : particleSize,
          color: particleColor,
          context: context,
        }

        setParticles(prev => [...prev, newParticle])
      }
    }
  }

  const interactWithParticles = () => {
    const newParticles = particles.map(particle => {
      const dx = particle.xPos - mousePosition.x
      const dy = particle.yPos - mousePosition.y
      const squareDistance = dx * dx + dy * dy
      const force = mouseRadius / squareDistance
      let velocityX = 0
      let velocityY = 0

      if (squareDistance < mouseRadius) {
        const angle = Math.atan2(dy, dx)
        velocityX = force * Math.cos(angle)
        velocityY = force * Math.sin(angle)
      }

      particle.xPos +=
        velocityX * friction + (particle.originX - particle.xPos) * ease
      particle.yPos +=
        velocityY * friction + (particle.originY - particle.yPos) * ease

      return particle
    })

    setParticles(newParticles)
  }

  const clearCanvas = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, windowSize.width, windowSize.height)
  }

  const updateCanvas = useCallback(() => {
    clearCanvas(canvasRef.current?.getContext('2d') as CanvasRenderingContext2D)
    particles?.forEach(particle => {
      renderParticle(particle)
    })
  }, [particles])

  useEffect(() => {
    updateCanvas()
  }, [particles])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')

    const handleMouseMovement = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX * window.devicePixelRatio,
        y: event.pageY * window.devicePixelRatio,
      })
    }

    const handleResize = () => {
      const newWidth = window.innerWidth * window.devicePixelRatio
      const newHeight = window.innerHeight * window.devicePixelRatio

      if (!!canvas) {
        canvas.width = newWidth
        canvas.height = newHeight
        canvas.style.width = `${window.innerWidth}px`
        canvas.style.height = `${window.innerHeight}px`
      }

      setWindowSize({
        width: newWidth,
        height: newHeight,
      })
      setParticles([])
    }

    if (!!canvas) {
      handleResize() // resizes on mount
      canvas.style.backgroundColor = backgroundColor || 'black'
    }

    window.addEventListener('mousemove', handleMouseMovement)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMovement)
      window.removeEventListener('resize', handleResize)
      !!ctx && clearCanvas(ctx)
    }
  }, [])

  useEffect(() => {
    const context = canvasRef.current?.getContext('2d')
    clearCanvas(context as CanvasRenderingContext2D)
    initParticles(context as CanvasRenderingContext2D)
  }, [windowSize])

  useEffect(() => {
    interactWithParticles()
  }, [mousePosition])

  return <canvas ref={canvasRef} className={className} />
}

export default ParticleBackground
