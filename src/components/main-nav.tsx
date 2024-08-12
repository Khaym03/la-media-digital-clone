'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
// import { siteConfig } from "@/config/site"
import { cn } from '@/lib/utils'
import SocialMediaNav from './social-media-nav'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport
} from '@/components/ui/navigation-menu'
import { Button } from './ui/button'

interface ILink  {
  name: string 
  href: string
}

const links: ILink[] = [
  {
    name: 'servicos',
    href: '/servicos'
  },
  {
    name: 'nosotros',
    href: '/nosotros'
  },
  {
    name: 'blog',
    href: '/blog'
  },
  {
    name: 'tienda',
    href: '/tienda'
  },
  

]

export function MainNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/5 backdrop-blur supports-[backdrop-filter]:bg-background/5 border-b">
      <NavigationMenu className="container flex h-14 max-w-screen-2xl items-center">
        <div className="w-full mr-4 hidden md:flex">
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
          <NavigationMenuList className="flex items-center gap-4 text-sm lg:gap-6 absolute top-1/2 -translate-y-1/2">
            {links.map(link => <NavigationMenuItem key={link.href}>
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                'transition-colors hover:text-foreground/80 capitalize',
                pathname === link.href ? 'text-foreground' : 'text-foreground/60'
              )} >
                  {link.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>)}
           
          </NavigationMenuList>
          {/* <SocialMediaNav className="ml-auto" /> */}
          <Button className='ml-auto' asChild>
            <Link href={'/precios'}>Precios</Link>
          </Button>
        </div>
      </NavigationMenu>
    </header>
  )
}
