import { useEffect } from 'react'
import { Gradient } from '@/lib/Gradient'
import { cn } from '@/lib/utils'

interface GradientCanvasProps {
  onLoaded: () => void
  className: string
}

export default function GradientCanvas({ onLoaded, className }: GradientCanvasProps) {
  useEffect(() => {
    const gradient = new Gradient()
    // @ts-ignore
    gradient.initGradient('#gradient-canvas')

    onLoaded()
  }, [onLoaded])

  return (
    <canvas
      className={cn('absolute top-0 left-0', className)}
      id="gradient-canvas"
      data-transition-in
    />
  )
}
