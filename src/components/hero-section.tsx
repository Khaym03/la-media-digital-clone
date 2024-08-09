import Image from 'next/image'
import { Button } from './ui/button'

export default function HeroSection() {
  return (
    <section className="h-[calc(100vh-56px)] flex justify-center items-center bg-[radial-gradient(ellipse_200%_100%_at_bottom,#7653c09e,#ffffff_80%)] w-full relative">
      <div className="container flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className=" pb-1 text-5xl sm:leading-[1.1] md:text-7xl md:leading-[1.2] font-bold tracking-tighter bg-gradient-to-b from-black to-[#2f1666] text-transparent bg-clip-text">
            La Media Digital
          </h1>
          <p className="text-xl text-black/80 tracking-tight text-balance max-w-[730px] mt-4">
            En la agencia de Marketing La Media Digital impulsamos tu marca con
            soluciones creativas y efectivas. Manejo de redes sociales,
            identidad corporativa, jingles comerciales y más. Potencia tu
            presencia en el mundo digital con nosotros.
          </p>

          <div className="flex gap-4 items-center mt-[30px]">
            <Button>main action</Button>
            {/* <Button variant={'ghost'}>secondary action</Button> */}
          </div>
        </div>
      </div>
      {/* <div className="hidden md:block lg:block relative max-w-[200px]">
        
      </div> */}

      <Image
        className="w-[400px] rounded-xl absolute right-10 bottom-20"
        width={500}
        height={500}
        src={'/instagram.png'}
        alt="hero-image"
        priority
      />
      <Image
        className="w-[166px] rounded-xl left-20 top-40 absolute rotate-12"
        width={500}
        height={500}
        src={'/tiktok.png'}
        alt="hero-image"
        priority
      />
    </section>
  )
}
