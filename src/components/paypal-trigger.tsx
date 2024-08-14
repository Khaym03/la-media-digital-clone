'use client'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

const initialOption = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '',
  currency: 'USD',
  intent: 'capture'
}

export default function PaypalTrigger() {
  return (
    <div className="mt-6">
      <PayPalScriptProvider options={initialOption}>
        <PayPalButtons
          createOrder={async () => {
            const res = await fetch('/api/checkout', {
              method: 'POST'
            })

            const data = await res.json()

            console.log(data)
            return data.id
          }}
          onApprove={async (data, action) => {
            console.log(data)
            action.order?.capture()
          }}
        />
      </PayPalScriptProvider>
    </div>
  )
}
