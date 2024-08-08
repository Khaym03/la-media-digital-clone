import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa'

export const siteConfig = {
  name: 'La media digital',
  description:
    'La media digital es la agencia de marketing que te ofrece servicios de diseño grafico, manejo de redes sociales y campañas online.',
  socialMedias: [
    {
      name: 'instangram',
      href: 'https://www.instagram.com/lamediadigitalco/',
      icon: FaInstagram
    },
    {
      name: 'facebook',
      href: 'https://www.facebook.com/Lamediadigitalco',
      icon: FaFacebook
    },
    {
      name: 'tiktok',
      href: 'https://www.tiktok.com/@lamediadigital?_t=8eLhrOGrFRe&_r=1',
      icon: FaTiktok
    },
    {
      name: 'youtube',
      href: 'https://www.youtube.com/@lamediadigitalco',
      icon: FaYoutube
    }
  ]
}

export type SiteConfig = typeof siteConfig
