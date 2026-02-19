// app/sections/Products.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, Package, Check } from 'lucide-react'

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'engine', name: 'Engine Gaskets' },
  { id: 'head', name: 'Head Gaskets' },
  { id: 'exhaust', name: 'Exhaust Gaskets' },
  { id: 'transmission', name: 'Transmission' },
]

const products = [
  {
    id: 1,
    name: 'Complete Engine Gasket Kit',
    category: 'engine',
    description: 'Full set of gaskets for complete engine overhaul',
    specs: ['High-temperature resistant', 'OEM Quality', 'Asbestos-free'],
    image: 'engine-kit'
  },
  {
    id: 2,
    name: 'Cylinder Head Gasket',
    category: 'head',
    description: 'Premium multi-layer steel construction',
    specs: ['MLS Technology', 'Perfect Seal', 'Durable'],
    image: 'head-gasket'
  },
  {
    id: 3,
    name: 'Exhaust Manifold Gasket',
    category: 'exhaust',
    description: 'Heat-resistant composite material',
    specs: ['Heat resistant', 'Long lasting', 'Perfect fit'],
    image: 'exhaust'
  },
  {
    id: 4,
    name: 'Transmission Gasket Set',
    category: 'transmission',
    description: 'Complete transmission sealing solution',
    specs: ['Oil resistant', 'Precision cut', 'Reliable'],
    image: 'transmission'
  },
  {
    id: 5,
    name: 'Valve Cover Gasket',
    category: 'engine',
    description: 'Rubber-coated metal construction',
    specs: ['Leak-proof', 'Easy install', 'Quality rubber'],
    image: 'valve-cover'
  },
  {
    id: 6,
    name: 'Base Gasket',
    category: 'engine',
    description: 'Critical sealing for engine base',
    specs: ['High compression', 'Durable', 'OEM Spec'],
    image: 'base'
  },
]

export default function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Complete Range of{' '}
            <span className="text-gradient">Engine Gaskets</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We design and manufacture a comprehensive range of high-quality gaskets 
            for two-wheeler engines, ensuring perfect fit and superior performance.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Package size={64} className="text-slate-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-4 right-4"
                >
                  <button className="w-full py-3 bg-white text-slate-900 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary-50 transition-colors">
                    View Details <ArrowRight size={16} />
                  </button>
                </motion.div>
              </div>
              
              <div className="p-6">
                <div className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2">
                  {categories.find(c => c.id === product.category)?.name}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-600 mb-4 text-sm">{product.description}</p>
                
                <div className="space-y-2">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <Check size={14} className="text-green-500" />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors"
          >
            View All Products
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}