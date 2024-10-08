import paypal from '@paypal/checkout-server-sdk'
import { NextResponse } from 'next/server'

const clientId = process.env.PAYPAL_CLIENT_ID || ''
  
const clientSecret =process.env.PAYPAL_CLIENT_SECRET || ''

const enviroment = new paypal.core.SandboxEnvironment(clientId, clientSecret)

const client = new paypal.core.PayPalHttpClient(enviroment)

export async function POST() {
  const request = new paypal.orders.OrdersCreateRequest()

  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD',
          value: '100.00',
          breakdown: {
            item_total: {
              currency_code: 'USD',
              value: '100.00'
            },
            discount: {
              currency_code: 'USD',
              value: '0.00'
            },
            handling: {
              currency_code: 'USD',
              value: '0.00'
            },
            insurance: {
              currency_code: 'USD',
              value: '0.00'
            },
            shipping: {
              currency_code: 'USD',
              value: '0.00'
            },
            shipping_discount: {
              currency_code: 'USD',
              value: '0.00'
            },
            tax_total: {
              currency_code: 'USD',
              value: '0.00'
            }
          }
        },

        items: [
          {
            name: 'Plan Emprendedor Básico',
            // description:
            //   'Todos nuestro planes incluyen Optimización de perfil, Diseño gráfico, Plan de contenido, Asesorías en campañas publicitarias, informe mensual de métricas',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'USD',
              value: '100.00'
            }
          }
        ]
      }
    ]
  })

  const response = await client.execute(request)

  console.log(response)

  return NextResponse.json({
    id: response.result.id
  })
}
