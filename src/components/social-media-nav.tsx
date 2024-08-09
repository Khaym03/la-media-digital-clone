import { siteConfig } from '@/config/site-config'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface SocialMediaNavProps {
  className?: string
  iconSize?: string
}

export default function SocialMediaNav({ className, iconSize }: SocialMediaNavProps) {
  return (
    <nav className={cn("flex gap-4 w-max", className)}>
      {siteConfig.socialMedias &&
        siteConfig.socialMedias.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className="grid place-items-center"
            target="_blank"
          >
            <item.icon size={iconSize ? iconSize : '1.125rem'} />
          </Link>
        ))}
    </nav>
  )
}
