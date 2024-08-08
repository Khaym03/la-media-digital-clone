import { siteConfig } from '@/config/site-config'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface SocialMediaNavProps {
  className: string
}

export default function SocialMediaNav({ className }: SocialMediaNavProps) {
  return (
    <nav className={cn("flex gap-4", className)}>
      {siteConfig.socialMedias &&
        siteConfig.socialMedias.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className="grid place-items-center"
            target="_blank"
          >
            <item.icon size={'1.125rem'} />
          </Link>
        ))}
    </nav>
  )
}
