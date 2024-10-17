'use client'

import { useState } from 'react'
import { Check, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import Navbar from '@/components/landing-page/Navbar'
import Footer from '@/components/landing-page/Footer'

export default function Component() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 39,
      annualPrice: 390,
      features: [
        '30 AI-generated posts per month',
        'Basic content customization',
        '3 social media platforms',
        'Weekly content calendar',
        'Email support'
      ],
      notIncluded: [
        'Advanced AI fine-tuning',
        'Priority support',
        'Custom branding',
        'Analytics dashboard'
      ]
    },
    {
      name: 'Pro',
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        '100 AI-generated posts per month',
        'Advanced content customization',
        '5 social media platforms',
        'Daily content calendar',
        'Priority email & chat support',
        'Basic Analytics dashboard'
      ],
      notIncluded: [
        'Custom AI model training',
        'White-label solution'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Unlimited AI-generated posts',
        'Full content customization suite',
        'All social media platforms',
        'Real-time content planner',
        '24/7 dedicated support',
        'Advanced Analytics & Reporting',
        'Custom AI model training',
        'White-label solution'
      ],
      notIncluded: []
    }
  ]

  return (
    <>
    <Navbar />
    <div className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Choose Your Plan</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Get a month's worth of content in just 5 minutes. Select the plan that best fits your needs.
            </p>
          </div>
          <div className="flex items-center space-x-2 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-purple-600' : 'text-gray-500'}`}>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span className={`text-sm font-medium ${isAnnual ? 'text-purple-600' : 'text-gray-500'}`}>
              Annually <span className="text-green-500 font-bold">(Save 17%)</span>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {plans.map((plan) => (
            <div key={plan.name} className="flex flex-col p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-4 text-purple-600 font-bold">
                {plan.price ? (
                  <span className="text-4xl">{plan.price}</span>
                ) : (
                  <>
                    <span className="text-4xl">${isAnnual && plan.annualPrice ? plan.annualPrice / 12 : plan.monthlyPrice}</span>
                    <span className="text-lg text-gray-500">/month</span>
                    {isAnnual && <span className="block text-sm text-gray-500">Billed annually (${plan.annualPrice}/year)</span>}
                  </>
                )}
              </div>
              <Button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
              <ul className="mt-6 space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-400">
                    <X className="h-5 w-5 text-red-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            All plans come with a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}