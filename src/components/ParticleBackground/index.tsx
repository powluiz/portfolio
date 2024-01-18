import { useCallback, useEffect, useRef, useState } from 'react'
import renderParticle, { IParticleProps } from './parts/particle'

export interface IParticleBackgroundProps {
  className?: string
  particleSize?: number
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
  const gap = particleGap || 20
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
          size: particleSize,
          color: particleColor,
          context: context,
        }

        setParticles(prev => [...prev, newParticle])
      }
    }
  }

  const clearCanvas = (ctx: CanvasRenderingContext2D) => {
    setParticles([])
    ctx.clearRect(0, 0, windowSize.width, windowSize.height)
  }

  const updateCanvas = useCallback(() => {
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
    }

    if (!!canvas) {
      handleResize() // define canvas size on mount
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
    // console.log(mousePosition)
  }, [mousePosition])

  return <canvas ref={canvasRef} className={className} />
}

export default ParticleBackground
