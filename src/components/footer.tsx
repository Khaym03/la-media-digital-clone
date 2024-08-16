import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
import { PhoneCall, Mailbox, MapPin } from 'lucide-react'
import SocialMediaNav from './social-media-nav'

interface MenuLink {
  name: string
  href: string
}

const data = {
  enterprice: [
    {
      name: 'mision y vision',
      href: '/'
    },
    {
      name: 'nuestra cultura',
      href: '/'
    },
    {
      name: 'nuestra cultura',
      href: '/'
    },
    {
      name: 'conocenos',
      href: '/'
    },

    {
      name: 'trabaja con nosotros',
      href: '/'
    }
  ],
  info: [
    {
      name: 'precios',
      href: '/'
    },
    {
      name: 'reels y videos',
      href: '/'
    },
    {
      name: 'galeria de diseños',
      href: '/'
    },
    {
      name: 'aprende mas',
      href: '/'
    }
  ],

  legal: [
    {
      name: 'Políticas',
      href: '/'
    }
  ]
}

interface ColProps {
  title: string
  menuLinks: MenuLink[]
}

const Col = ({ title, menuLinks }: ColProps) => {
  return (
    <div className="flex flex-col capitalize w-max">
      <h4 className="font-medium mb-6">{title}</h4>
      <div className="flex flex-col text-left flex-start gap-4">
        {menuLinks &&
          menuLinks.map(item => (
            <Button
              className="p-0 block h-min text-black/60"
              asChild
              key={item.href}
              variant={'link'}
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
      </div>
    </div>
  )
}

const BrandSection = () => {
  return (
    <div className="w-max">
      <Image
        className="max-w-[120px] filter invert "
        src={'/logo_blanco.png'}
        alt="brand-logo"
        width={551}
        height={483}
      />

      <div className="grid gap-4 mt-8 text-sm font-semibold leading-none tracking-tight">
        <div className="flex gap-4 items-center">
          <PhoneCall />
          <span className="text-black/80">+57 314 2051035</span>
        </div>

        <div className="flex gap-4 items-center">
          <Mailbox />
          <span className="text-black/80">contacto@lamediadigital.com.co</span>
        </div>

        <div className="flex gap-4 items-center">
          <MapPin />
          <span className="text-black/80">Bogotá-Fontibón-Colombia</span>
        </div>
      </div>
    </div>
  )
}

export default function Footer() {
  const titles = Object.keys(data)
  const menuLink = Object.values(data)

  return (
    <>
      <footer className="flex justify-center items-center pt-20 pb-10 w-full bg-zinc-100 overflow-hidden">
        <div className="max-w-5xl">
          <div className="container grid max-sm:grid-cols-1  md:flex gap-10">
            <BrandSection />
            <div className="grid w-full max-w-[440px] max-sm:grid-cols-2 sm:grid-cols-2 md:grid-flow-col gap-8 md:ml-12">
              {titles.map((t, i) => (
                <Col key={i} title={t} menuLinks={menuLink[i]} />
              ))}
            </div>
          </div>
          <div className="container w-full flex flex-col gap-2 justify-center items-center mt-8 md:flex-row-reverse md:justify-between">
            <SocialMediaNav className="flex-row   gap-6" iconSize="2rem" />
            <span className="text-black/60 text-sm whitespace-nowrap">
              © 2024 La media digital, Inc. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
