'use client'
import { Suspense, useState, lazy } from 'react'
import Image from 'next/image'

const GradientCanvas = lazy(() => import('./gradient-canvas'))

export default function GradientComponent() {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoaded = () => {
    setIsLoaded(true)
  }

  return (
    <div className="canvas-wrapper w-full h-[500px] absolute top-0 left-0 overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-[url('/gradient-fallback.webp')] transition-opacity  ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <Suspense>
        <GradientCanvas
          className={`transition-opacity  ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoaded={handleLoaded}
        />
      </Suspense>
    </div>
  )
}
