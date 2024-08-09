import { AspectRatio } from './ui/aspect-ratio'

export default function ShowCaseVideos() {
  return (
    <section className="h-[calc(100vh-56px)] w-full flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:leading-[1.1] mb-12">
        Potenciamos tu marca
      </h2>
      <div className="grid grid-cols-3 gap-8 w-[800px]">
        <video
          className=" aspect-[9/16] rounded-md"
          width="320"
          height="240"
          controls
        >
          <source src="/Vzla-Divisas-3-1.mp4" type="video/mp4" />
         
        </video>

        <video
          className=" aspect-[9/16] rounded-md"
          width="320"
          height="240"
          controls
          preload='none'
        >
          <source src="/Stomp-02-Vertical_3_1.mp4" type="video/mp4" />
         
        </video>

        <video
          className=" aspect-[9/16] rounded-md"
          width="320"
          height="240"
          controls
        >
          <source src="/Vzla-Divisas-3-1.mp4" type="video/mp4" />
         
        </video>
      </div>
    </section>
  )
}
