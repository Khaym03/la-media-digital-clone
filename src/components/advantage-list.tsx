import { title } from 'process'
import { IconType } from 'react-icons'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card'
import {
  Palette,
  Share2,
  ChartArea,
  Video,
  AppWindow,
  AudioLines,
  LucideIcon
} from 'lucide-react'
import H2 from './ui/h2'

interface ItemProps {
  title: string
  description: string
}

const iconMap: { [key: string]: LucideIcon } = {
  'Diseño Gráfico': Palette,
  'Redes Sociales': Share2,
  Métricas: ChartArea,
  'Video empresarial': Video,
  Ads: AppWindow,
  'Voz en Off': AudioLines
}

const data: ItemProps[] = [
  {
    title: 'Diseño Gráfico',
    description:
      'Ya sea un logo, un folleto, el packaging para un producto o la portada de un libro, diseñamos teniendo siempre presente qué es lo que queremos comunicar.'
  },
  {
    title: 'Redes Sociales',
    description:
      'Creamos estrategias publicitarias en redes sociales para mejorar el engagement, atraer y conviertir a tu público objetivo en clientes potenciales.'
  },
  {
    title: 'Métricas',
    description:
      'Observa el crecimiento de tus redes sociales con un dashboard de métricas, teniendo a tu disposición la generación de reportes de una manera fácil.'
  },
  {
    title: 'Video empresarial',
    description:
      'Observa el crecimiento de tus redes sociales con un dashboard de métricas, teniendo a tu disposición la generación de reportes de una manera fácil.'
  },
  {
    title: 'Ads',
    description:
      'Creamos tus anuncios en Google Adds, Facebook Adds, y muchas otras plataformas con la segmentación perfecta para tu publico objetivo, generando mayor numero de conversiones.'
  },
  {
    title: 'Voz en Off',
    description:
      'Un aspecto esencial en la producción audio visual de piezas publicitarias, como comerciales, jingles, musicales, entre otras muchos otros.'
  }
]

const Item = ({ title, description }: ItemProps) => {
  const Icon = iconMap[title]
  return (
    <Card>
      <CardHeader className="flex flex-col gap-2">
        <Icon size={'2rem'} />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-black/60">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default function AdvantageList() {
  return (
    <section className="flex flex-col justify-center items-center w-full  py-20">
      <div className="container flex flex-col justify-center items-center">
        <H2>¿Lo necesitas? nosotros lo tenemos.</H2>
        <p className="text-center text-balance text-lg text-black/60 max-w-[1000px] mt-4">
          En la agencia de Marketing La Media Digital impulsamos tu marca con
          soluciones creativas y efectivas. Manejo de redes sociales, identidad
          corporativa, jingles comerciales y más. Potencia tu presencia en el
          mundo digital con nosotros.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1200px] mt-12">
          {data.map(item => (
            <Item
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
