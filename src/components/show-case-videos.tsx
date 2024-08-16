'use client'
import { useRef, useState } from 'react'
import { CirclePlay, CirclePause } from 'lucide-react'
import H2 from './ui/h2'
import { motion } from 'framer-motion'

interface VideoData {
  poster: string
  src: string
}

const data: VideoData[] = [
  {
    poster:
      'https://lamediadigital.com.co/wp-content/uploads/2023/08/Captura-de-pantalla-2023-08-19-194409.png',
    src: 'https://lamediadigital.com.co/wp-content/uploads/2023/08/WhatsApp-Video-2023-08-19-at-7.33.22-PM-1.mp4'
  },
  {
    poster:
      'https://lamediadigital.com.co/wp-content/uploads/2023/07/portada_intro_rossana_reducida.webp',
    src: 'https://lamediadigital.com.co/wp-content/uploads/2022/09/Stomp-02-Vertical_3_1.mp4'
  },
  {
    poster:
      'https://lamediadigital.com.co/wp-content/uploads/2023/08/Captura-de-pantalla-2023-08-19-195845.png"',
    src: 'https://lamediadigital.com.co/wp-content/uploads/2023/08/7e90da8f-b5b8-42f9-9451-51ae80e07128.mp4'
  }
]

interface VideoPlayerProps extends VideoData {
  index: number
}

const VideoPlayer = ({ poster, src, index }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayPause = () => {
    if (!videoRef.current) return

    isPlaying ? videoRef.current.pause() : videoRef.current.play()

    setIsPlaying(!isPlaying)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }} 
      viewport={{ once: true, amount: 0.2 }}
    >
      <video
        onClick={togglePlayPause}
        ref={videoRef}
        className=" aspect-[9/16]  cursor-pointer rounded-xl shadow-xl"
        width="320"
        height="240"
        controls
        preload="none"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
    </motion.div>
  )
}

export default function ShowCaseVideos() {
  return (
    <section className=" w-full flex flex-col justify-center items-center mt-10">
      <H2 className="mb-6">Potenciamos tu marca</H2>
      <p className="text-center text-balance text-lg text-black/60 mb-16">
        Con videos comerciales
      </p>
      <div className="grid grid-cols-1 max-sm:w-[60%] md:grid-cols-3 lg:grid-cols-3 gap-8 md:w-[600px] lg:w-[800px]">
        {data.map((v,i) => (
          <VideoPlayer key={v.src} index={i} poster={v.poster} src={v.src} />
        ))}
      </div>
    </section>
  )
}
