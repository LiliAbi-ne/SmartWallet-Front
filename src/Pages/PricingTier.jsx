import { Check, X } from 'lucide-react'
import { useState } from 'react'
import PropTypes from 'prop-types'  // Importa PropTypes
import Navbar from '../components/ui/Componentes/Navbar'

const PricingTier = ({ name, price, features, recommended }) => (
  <div className={`flex flex-col p-2 bg-white rounded-lg shadow-md ${recommended ? 'border-2 border-green-500' : ''}`}>
    {recommended && (
      <span className="px-3 py-1 text-sm text-white bg-green-500 rounded-full self-start mb-4">
        Recomendados
      </span>
    )}
    <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
    <div className="mt-4 text-green-600 text-5xl font-bold">${price}<span className="text-xl text-gray-500">/mo</span></div>
    <ul className="mt-6 space-y-4 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          {feature.included ? (
            <Check className="h-5 w-5 text-green-500 mr-2" />
          ) : (
            <X className="h-5 w-5 text-red-500 mr-2" />
          )}
          <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>{feature.text}</span>
        </li>
      ))}
    </ul>
    <button className="mt-8 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
      Escoge tu plan
    </button>
  </div>
)

// Definir PropTypes
PricingTier.propTypes = {
  name: PropTypes.string.isRequired,  // name es obligatorio y debe ser string
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,  // price puede ser número o string, y es obligatorio
  features: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,  // Cada feature debe tener un 'text' string
      included: PropTypes.bool.isRequired,  // Cada feature debe tener 'included' booleano
    })
  ).isRequired,  // features es un array de objetos y es obligatorio
  recommended: PropTypes.bool  // recommended es booleano y opcional
}

// COMPONENTE QUE CARGA LOS DATOS DE LOS PAQUETES
export default function Component() {
  const [isAnnual, setIsAnnual] = useState(false)

  const pricingData = [
    {
      name: 'Gratis',
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      features: [
        { text: 'Basic financial tracking', included: true },
        { text: 'Up to 2 bank accounts', included: true },
        { text: 'Monthly reports', included: true },
        { text: 'Customer support', included: true },
        { text: 'Investment tracking', included: false },
        { text: 'Tax preparation', included: false },
      ],
    },
    {
      name: 'Premium',
      monthlyPrice: 19.99,
      annualPrice: 199.99,
      features: [
        { text: 'Advanced financial tracking', included: true },
        { text: 'Unlimited bank accounts', included: true },
        { text: 'Weekly reports', included: true },
        { text: 'Priority customer support', included: true },
        { text: 'Investment tracking', included: true },
        { text: 'Tax preparation', included: false },
      ],
      recommended: true,
    }
  ]

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Escoge el plan adecuado para ti
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Simple, transparente y justo para que tus ahorros crezcan.
            </p>
          </div>

          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
            {pricingData.map((tier, index) => (
              <PricingTier
                key={index}
                name={tier.name}
                price={isAnnual ? tier.annualPrice.toFixed(2) : tier.monthlyPrice.toFixed(2)}
                features={tier.features}
                recommended={tier.recommended}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
