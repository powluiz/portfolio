export interface IParticleProps {
  originX: number
  originY: number
  xPos: number
  yPos: number
  size?: number
  color?: string
  context: CanvasRenderingContext2D
}

const renderParticle = ({
  xPos,
  yPos,
  size = 1,
  color,
  context,
}: IParticleProps) => {
  const x = xPos || 0
  const y = yPos || 0
  const particleSize = size

  const render = () => {
    context.fillStyle = color || 'black'
    context.beginPath()
    context.roundRect(x, y, particleSize, particleSize, 9999)
    context.fill()
  }

  return render()
}

export default renderParticle
