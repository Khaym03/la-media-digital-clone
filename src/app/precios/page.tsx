import PaypalTrigger from '@/components/paypal-trigger'
import SectionDescription from '@/components/section-description'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import H2 from '@/components/ui/h2'
import { Check } from 'lucide-react'

const pricingTiers = [
  {
    title: 'Plan Emprendedor Básico',
    monthlyPrice: 600,
    buttonText: 'Empezar',
    popular: false,
    features: [
      '1 historia / Día',
      '4 Reels / Mes',
      '8 Publicaciones Feed / Mes',
      'Diseño ó modificación de historias destacadas'
    ]
  },
  {
    title: 'Plan Emprendedor Premium',
    monthlyPrice: 750,
    buttonText: 'Empezar',
    popular: true,
    features: [
      '2 historia / Día',
      '8 Reels / Mes',
      '8 Publicaciones Feed / Mes',
      'Diseño ó modificación de historias destacadas'
    ]
  },
  {
    title: 'Plan Community Manager',
    monthlyPrice: 950,
    buttonText: 'Empezar',
    popular: false,
    features: [
      '3 historia / Día',
      '12 Reels / Mes',
      '12 Publicaciones Feed / Mes',
      'Diseño ó modificación de historias destacadas',
      '1 pauta publicitaria / Mes'
    ]
  }
]

export default function Precios() {
  return (
    <div className="min-h-screen">
      <section className="container justify-center flex flex-col items-center py-10">
        <H2 className="text-center">Planes de manejo de redes sociales</H2>
        <SectionDescription className='mt-8'>
        Bienvenido a La Media Digital. Aquí encontrarás nuestros servicios y paquetes de marketing y publicidad, diseñados para ayudarte a alcanzar tus objetivos empresariales. Ofrecemos estrategias personalizadas y precios competitivos. Explora nuestras opciones y descubre cómo podemos impulsar el éxito de tu negocio. ¡Da el siguiente paso hacia el crecimiento!
        </SectionDescription>

        <div className="flex justify-center flex-col lg:flex-row gap-6 items-center lg:items-end mt-10">
          {pricingTiers.map((tier, i) => (
            <PlanCard key={i} tier={tier} />
          ))}
        </div>
      </section>
    </div>
  )
}

interface PricingTier {
  title: string
  monthlyPrice: number
  buttonText: string
  popular: boolean
  features: string[]
}

interface PlanCardProps {
  tier: PricingTier
}

function PlanCard({ tier }: PlanCardProps) {
  return (
    <Card className="p-10 border-none">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-black/50">{tier.title}</h3>
        {tier.popular && (
          <span className="inline-flex font-medium text-sm">Popular</span>
        )}
      </div>
      <div className="flex items-baseline gap-1 mt-[30px]">
        <span className="text-4xl font-bold tracking-tighter leading-none">
          {tier.monthlyPrice}
        </span>
        <span className="tracking-tight font-bold text-black/50">/mes</span>
      </div>
      <Button className="w-full mt-[30px]">{tier.buttonText}</Button>

      <ul className="flex flex-col gap-5 mt-8">
        {tier.features.map((f, i) => (
          <li className="flex items-center gap-4" key={i}>
            <Check className="w-6 h-6" size={24} />
            <span className="text-sm text-balance w-[160px]">{f}</span>
          </li>
        ))}
      </ul>
      <PaypalTrigger/>
    </Card>
  )
}
