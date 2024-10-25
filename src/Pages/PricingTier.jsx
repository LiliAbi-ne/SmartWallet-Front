import { Check, X } from 'lucide-react'
import { useState } from 'react'

const PricingTier = ({ name, price, features, recommended }) => (
  <div className={`flex flex-col p-6 bg-white rounded-lg shadow-md ${recommended ? 'border-2 border-green-500' : ''}`}>
    {recommended && (
      <span className="px-3 py-1 text-sm text-white bg-green-500 rounded-full self-start mb-4">
        Recommended
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
      Choose Plan
    </button>
  </div>
)

export default function Component() {
  const [isAnnual, setIsAnnual] = useState(false)

  const pricingData = [
    {
      name: 'Basic',
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
      name: 'Pro',
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
    },
    {
      name: 'Enterprise',
      monthlyPrice: 39.99,
      annualPrice: 399.99,
      features: [
        { text: 'Full-suite financial tracking', included: true },
        { text: 'Unlimited bank accounts', included: true },
        { text: 'Daily reports', included: true },
        { text: '24/7 premium support', included: true },
        { text: 'Advanced investment tracking', included: true },
        { text: 'Tax preparation and filing', included: true },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose the Right Plan for You
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Simple, transparent pricing that grows with you and your finances.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative self-center rounded-full bg-gray-200 p-1">
            <button
              className={`${
                !isAnnual ? 'bg-green-500 text-white' : 'bg-transparent text-gray-500'
              } relative w-1/2 rounded-full py-2 text-sm font-medium transition-all duration-300 focus:outline-none`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`${
                isAnnual ? 'bg-green-500 text-white' : 'bg-transparent text-gray-500'
              } relative w-1/2 rounded-full py-2 text-sm font-medium transition-all duration-300 focus:outline-none`}
              onClick={() => setIsAnnual(true)}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
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
  )
}
