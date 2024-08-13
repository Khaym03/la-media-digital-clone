'use client'
import Image from 'next/image'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import { floatAnimation } from '@/lib/animations'

const BigImageSection = () => {
  const { animate, transition } = floatAnimation(2,15)

  return (
    <section className="relative hidden md:block rotate-6">
      <motion.div
        animate={animate}
        transition={transition}
        className="max-w-[550px] border border-white/30 bg-[linear-gradient(to_bottom,_hsla(0,_0%,_100%,_0.4),_hsla(0,_0%,_100%,_0.3)_25%,_rgba(246,_249,_252,_0.3)_50%,_#f6f9fc_60%)] shadow-lg rounded-lg p-4"
      >
        <Image
          className="rounded-lg"
          src={'/fondo_galeria_la_media_digital.jpg'}
          alt="hero-image"
          width={1000}
          height={600}
        />
      </motion.div>

      {/* <div className='max-w-[333px] rotate-[8deg] absolute top-1/2 border border-white/30 bg-[linear-gradient(to_bottom,_hsla(0,_0%,_100%,_0.4),_hsla(0,_0%,_100%,_0.3)_25%,_rgba(246,_249,_252,_0.3)_50%,_#f6f9fc_50%)] shadow-lg rounded-lg p-4'>
    <div className='bg-white rounded-lg'><Image className='' src={'/manejamos-tu-redes.png'} alt='hero-image' width={1000} height={600}/></div>
  </div> */}
    </section>
  )
}

export default function HeroSection() {
  const tiktok = floatAnimation(4)
  const instagram = floatAnimation(6)

  const cssGradient =
    'bg-[radial-gradient(ellipse_200%_100%_at_bottom,#7653c09e,#ffffff_100%)]'

  return (
    <section className="h-[calc(100vh-46px)] flex justify-center items-center w-full relative container gap-12">
      <div className="flex flex-col justify-center items-center h-min">
        <div className="flex flex-col text-left max-w-[600px]">
          <h1 className="text-balance pb-1 text-5xl sm:leading-[1.1] md:text-7xl md:leading-[1.2] font-bold tracking-tight bg-gradient-to-b from-black to-[#2f1666] text-transparent bg-clip-text">
            Potencia tu marca con soluciones digitales a tu medida
          </h1>
          <p className="text-base font-medium text-black/80 tracking-tight text-left text-balance max-w-[730px] mt-4">
            Descubre cómo podemos transformar tu marca y llevarla al siguiente
            nivel. Contáctanos hoy mismo para una consulta gratuita y una
            propuesta personalizada. ¡Juntos haremos que tu marca destaque en el
            mundo digital!
          </p>

          <div className="flex gap-4 items-center mt-[30px]">
            <Button>main action</Button>
            <Button variant={'ghost'}>secondary action</Button>
          </div>
        </div>
      </div>

      <BigImageSection />
      {/* <div className="hidden md:block lg:block relative max-w-[200px]">
        
      </div> */}

      {/* <motion.img
        className="w-[400px] rounded-xl absolute right-4 bottom-40"
        width={500}
        height={500}
        src={'/instagram.png'}
        alt="hero-image"
        animate={instagram.animate}
        transition={instagram.transition}
      />
      <motion.img
        className="w-[166px] rounded-xl left-20 top-40 absolute rotate-12"
        width={500}
        height={500}
        src={'/tiktok.png'}
        alt="hero-image"
        animate={tiktok.animate}
        transition={tiktok.transition}
      /> */}

      {/* <div className="h-[46px] w-full"></div> */}
    </section>
  )
}
