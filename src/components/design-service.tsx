import { CardDescription, CardTitle } from './ui/card'
import Currency from './ui/currency'
import H2 from './ui/h2'
import { Separator } from './ui/separator'

interface DesignServiceData {
  service: string
  price: number
  details: string | null
}

const designServiceData: DesignServiceData[] = [
  {
    service: 'Creación de branding con manual de marca',
    price: 320,
    details: null
  },
  {
    service: 'Diseño y creación de catálogo',
    price: 300,
    details: 'Máximo 30 páginas'
  },
  {
    service: 'Paquete diseño Básico',
    price: 100,
    details: '6 diseños para redes sociales o impresiones'
  },
  {
    service: 'Paquete diseño Estándar',
    price: 190,
    details: '12 diseños para redes sociales o impresiones'
  },
  {
    service: 'Animación de logo',
    price: 260,
    details: null
  }
]

export default function DesignService() {
  return (
    <section className="container flex flex-col justify-center items-center py-10">
      <H2 className="mb-10 text-center">Servicios de diseño gráfico</H2>

      <ul className="flex flex-col gap-6 max-w-[600px]">
        {designServiceData.map((data, i) => (
          <li key={i} className="flex flex-col gap-4">
            <div className="flex justify-between gap-4">
              <div>
                <CardTitle>{data.service}</CardTitle>
                <CardDescription className="mt-2">
                  {data.details}
                </CardDescription>
              </div>
              <Currency size="text-2xl" contentEnd="mil" className="my-auto">
                {data.price}
              </Currency>
            </div>

            {designServiceData.length !== i + 1 && <Separator />}
          </li>
        ))}
      </ul>
    </section>
  )
}
