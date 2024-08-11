import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface H2Props {
  children: ReactNode
  className?: string
}

export default function H2({ children, className }: H2Props) {
  return (
    <h2
      className={cn(
        'pb-1 text-3xl sm:leading-[1.1] md:text-3xl lg:text-5xl md:leading-[1.2] font-bold tracking-tight bg-gradient-to-b from-black to-[#2f1666] text-transparent bg-clip-text',
        className
      )}
    >
      {children}
    </h2>
  )
}
