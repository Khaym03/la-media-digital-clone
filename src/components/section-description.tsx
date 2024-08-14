import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionDescriptionProps {
    children: ReactNode
    className?: string
  }

export default function SectionDescription({children, className}:SectionDescriptionProps) {
    return <p className={cn('text-center text-balance text-lg text-black/60', className)}>{children}</p>
}