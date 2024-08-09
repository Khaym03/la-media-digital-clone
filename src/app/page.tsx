import AdPicture from '@/components/ad-picture'
import AdvantageList from '@/components/advantage-list'
import Footer from '@/components/footer'
import ShowCaseVideos from '@/components/show-case-videos'
import StatsBanner from '@/components/stats-banner'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section className="h-[calc(100vh-56px)] flex justify-center items-center bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#7653c09e,#ffffff_50%)] w-full">
        <div className="container flex flex-col items-center">
          <div className="flex flex-col">
            <h1 className=" pb-1 text-5xl sm:leading-[1.1] md:text-7xl md:leading-[1.2] font-bold tracking-tighter bg-gradient-to-b from-black to-[#2f1666] text-transparent bg-clip-text">
              Agencia de Marketing La Media Digital
            </h1>
            <p className="text-xl tracking-tight mt-6">
              Lleva tu negocio al siguiente nivel.
            </p>

            <div className="flex gap-4 items-center mt-[30px]">
              <Button>main action</Button>
              <Button variant={'ghost'}>secondary action</Button>
            </div>
          </div>
         
        </div>
        <div className='container hidden md:block lg:block relative max-w-[200px]'>
        <Image className='w-[400px] rounded-xl -left-28 absolute'
          width={500}
          height={500}
          src={'/instagram.png'}
          alt="hero-image"
        />
        <Image className='w-[166px] rounded-xl md:-top-80 md:-left-40  lg:-left-80 lg:-top-80 absolute rotate-12'
          width={500}
          height={500}
          src={'/tiktok.png'}
          alt="hero-image"
        />
        </div>

        
      </section>
      <StatsBanner />
      {/* <ShowCaseVideos /> */}
      <AdPicture />
      <AdvantageList/>

      <Footer/>
    </main>
  )
}
