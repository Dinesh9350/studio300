// app/sections/WhyChooseUs.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Zap, Clock, HeartHandshake, TrendingUp, Leaf } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Quality Products',
    description: 'Rigorous testing ensures every gasket meets international quality standards. We use only premium materials.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Zap,
    title: 'Always Innovating',
    description: 'Continuous R&D investment keeps us at the forefront of gasket technology and manufacturing processes.',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50'
  },
  {
    icon: Clock,
    title: '5 Decades of Expertise',
    description: 'Over 50 years of experience in gasket manufacturing. Deep industry knowledge and proven track record.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: HeartHandshake,
    title: 'Strong Team',
    description: 'Dedicated professionals committed to excellence. Skilled workforce with specialized training.',
    color: 'from-rose-500 to-red-600',
    bgColor: 'bg-rose-50'
  },
  {
    icon: TrendingUp,
    title: 'Customer Focus',
    description: 'We prioritize customer satisfaction with personalized service and technical support.',
    color: 'from-emerald-500 to-green-600',
    bgColor: 'bg-emerald-50'
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Efficient logistics network ensures timely delivery across domestic and international markets.',
    color: 'from-cyan-500 to-blue-600',
    bgColor: 'bg-cyan-50'
  }
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      <div className="section-padding max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            We Innovate &{' '}
            <span className="text-gradient">Produce</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto italic">
            "We offer the best combination of quality, innovation, and customer service in the industry. 
            We are confident that our products and services will meet and exceed your expectations."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                {reason.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>

              <div className={`absolute top-0 right-0 w-32 h-32 ${reason.bgColor} rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}