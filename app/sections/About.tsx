// app/sections/About.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Factory, Globe } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Certified Quality',
    description: 'ISO 9001:2015 certified manufacturing processes ensuring highest standards.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled engineers and technicians with decades of combined experience.'
  },
  {
    icon: Factory,
    title: 'Modern Facility',
    description: 'State-of-the-art manufacturing unit with advanced machinery.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Exporting to over 50 countries worldwide with reliable logistics.'
  }
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent" />
      
      <div className="section-padding max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4 block"
            >
              Who We Are
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Pioneering Gasket Manufacturing{' '}
              <span className="text-gradient">Since 1970</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              SKAS Autotech Pvt. Ltd. is a leading manufacturer of high-quality two-wheeler gaskets, 
              operating under the prestigious brand names <strong>'Siemen'</strong> and <strong>'SKAS'</strong>. 
              With over five decades of experience, we have established ourselves as industry leaders 
              in precision engineering.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our commitment to quality, innovation, and customer satisfaction has made us the preferred 
              choice for OEMs and aftermarket suppliers across the globe. We combine traditional 
              craftsmanship with modern technology to deliver products that exceed expectations.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-xl border border-slate-100"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Award className="text-primary-600" size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">ISO 9001:2015</div>
                  <div className="text-sm text-slate-500">Certified</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <div className="text-slate-400 text-center">
                  <Factory size={64} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Manufacturing Facility</p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Production Active</div>
                    <div className="text-xs text-slate-500">24/7 Operations</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}