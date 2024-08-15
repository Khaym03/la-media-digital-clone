import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CurrencyProps {
  currency?: string
  children: ReactNode
  contentEnd?: string
  className?: string
  size?: string
}

export default function Currency({
  currency,
  children,
  contentEnd,
  className,
  size
}: CurrencyProps) {
  return (
    <div className={cn("flex items-baseline gap-1", className)}>
      <span className="flex flex-col justify-start text-sm mb-auto font-medium">
        {currency || 'cop'}
      </span>
      <span className={cn("font-bold tracking-tighter leading-none", size || 'text-4xl')}>
        {children}
      </span>
      {contentEnd && (
        <span className="tracking-tight font-bold text-black/50">{contentEnd}</span>
      )}
    </div>
  )
}
