'use client'

import { motion } from 'framer-motion'
import { Upload, PenTool, Printer, Package } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    number: '01',
    title: 'Upload Design',
    description: 'Send us your design or work with our team to create one.'
  },
  {
    icon: PenTool,
    number: '02',
    title: 'We Prepare',
    description: 'Our experts prepare your files for optimal UV printing.'
  },
  {
    icon: Printer,
    number: '03',
    title: 'UV Printing',
    description: 'Your products are printed on our state-of-the-art UV 300 printer.'
  },
  {
    icon: Package,
    number: '04',
    title: 'Delivery',
    description: 'Quality checked, packaged, and shipped to your door.'
  }
]

export default function Process() {
  return (
    <section className="py-32 bg-slate-950">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-uv-blue font-semibold text-sm uppercase tracking-widest mb-4 block">
            How It Works
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Simple{' '}
            <span className="text-gradient">Process</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-uv-blue via-uv-purple to-uv-pink hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10 bg-slate-950 p-6 rounded-2xl">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center group hover:border-uv-blue/50 transition-colors">
                    <step.icon className="text-uv-blue" size={32} />
                  </div>
                  <div className="text-center">
                    <span className="text-5xl font-bold text-white/10 absolute top-4 left-1/2 -translate-x-1/2">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 relative z-10">{step.title}</h3>
                    <p className="text-white/60 text-sm relative z-10">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}