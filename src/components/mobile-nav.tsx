'use client'
import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import {useRouter} from 'next/navigation'
import { useState } from 'react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import { ScrollArea } from './ui/scroll-area'
import { siteConfig } from '@/config/site-config'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden z-40"
        >
          <Menu />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
          <Image
            className="filter invert"
            width={48}
            height={42}
            src={'/logo_blanco.png'}
            alt="media-digital-logo"
          ></Image>
          {/* <span className='font-bold text-lg'>La Media Digital</span> */}
        </Link>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {siteConfig.mainNav?.map(
              item =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                  >
                    {item.name}
                  </MobileLink>
                )
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
