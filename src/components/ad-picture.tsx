import Image from 'next/image'
import H2 from './ui/h2'

export default function AdPicture() {
  return (
    <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center container mt-20'>
      <H2 className="sm:max-w-max text-center lg:max-w-[380px] md:max-w-[300px]">
        Manejamos tus plataformas de marketing
      </H2>
      <Image className='max-sm:w-[200px] max-w-[400px] aspect-square' src="/ads.png" alt="ads-image" width={500} height={500} />
    </section>
  )
}
