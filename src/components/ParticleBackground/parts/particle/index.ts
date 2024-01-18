export interface IParticleProps {
  originX?: number
  originY?: number
  xPos?: number
  yPos?: number
  size?: number
  color?: string
  context: CanvasRenderingContext2D
}

const renderParticle = ({
  xPos,
  yPos,
  size,
  color,
  context,
}: IParticleProps) => {
  const x = xPos || 0
  const y = yPos || 0
  const particleSize = size || 1

  const render = () => {
    context.fillStyle = color || 'black'
    context.beginPath()
    context.fillRect(x, y, particleSize, particleSize)
  }

  return render()
}

export default renderParticle
