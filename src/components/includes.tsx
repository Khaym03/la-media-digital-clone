import { Gauge, Palette, BookCheck, Map } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from './ui/card'

const PlansIncludes = [
  {
    Icon: Map,
    title: 'Plan de contenido',
    description:
      'La creación, publicación y gestión de contenido relevante y atractivo'
  },
  {
    Icon: Gauge,
    title: 'Optimización de perfil',
    description:
      'Mejorar la presencia y la efectividad de una marca en plataformas digitales.'
  },
  {
    Icon: Palette,
    title: 'Diseño Gráfico',
    description:
      'Diseñamos teniendo siempre presente qué es lo que queremos comunicar.'
  },
  {
    Icon: BookCheck,
    title: 'Asesorías en campañas publicitarias',
    description:
      'Diseñado para ayudar a las marcas a maximizar el impacto de sus esfuerzos publicitarios.'
  }
]

interface IncludesProps {}

export default function Includes() {
  return (
    <section className="container flex flex-col p-10 ">
      <div className="container flex flex-col bg-purple-100 rounded-xl py-6 max-w-7xl">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          Todos nuestro planes incluyen:
        </h3>

        <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 lg:flex lg:flex-row">
          {PlansIncludes.map((item, i) => (
            <Card key={i} className="bg-transparent border-none shadow-none ">
              <CardHeader className="flex flex-col gap-2 ">
                <item.Icon size={'1.5rem'} />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-black/60">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
