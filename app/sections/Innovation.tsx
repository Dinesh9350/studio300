// app/sections/Innovation.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cog, Microscope, Truck, CheckCircle } from 'lucide-react'

const processSteps = [
  {
    icon: Microscope,
    title: 'Research & Development',
    description: 'Advanced material research and prototype testing'
  },
  {
    icon: Cog,
    title: 'Precision Manufacturing',
    description: 'CNC machining and quality-controlled production'
  },
  {
    icon: CheckCircle,
    title: 'Quality Testing',
    description: 'Multi-point inspection and performance testing'
  },
  {
    icon: Truck,
    title: 'Global Distribution',
    description: 'Packaging and worldwide logistics network'
  }
]

export default function Innovation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="innovation" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="section-padding max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Engineering Innovation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Committed to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-orange">
                Excellence
              </span>
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              First and foremost, we are committed to producing high-quality products that meet the 
              highest standards of performance and durability. With over 5 decades of experience, 
              our products are rigorously tested to ensure reliability and safety.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We use only the best materials and maintain a complete in-house manufacturing process. 
              From raw material selection to final packaging, every step is monitored for quality assurance.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '100%', label: 'In-House Production' },
                { value: '0', label: 'Defect Tolerance' },
                { value: '24/7', label: 'Quality Monitoring' },
                { value: '100%', label: 'Material Traceability' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="text-2xl font-bold text-primary-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <Cog size={120} className="mx-auto mb-4 opacity-30 animate-spin-slow" />
                  <p className="text-lg">Manufacturing Process</p>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="mt-8 space-y-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-400">
                    <step.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{step.title}</h4>
                    <p className="text-sm text-slate-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}