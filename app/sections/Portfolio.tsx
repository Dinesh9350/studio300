'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

// Portfolio items from PDF pages
const portfolioItems = [
  {
    id: 1,
    category: 'helmets',
    title: 'Custom Helmet Decals',
    image: 'https://alwaysriding.in/cdn/shop/files/MtThunder3ProBlazeGlossWhite1.webp?v=1719582021'
  },
  {
    id: 2,
    category: 'packaging',
    title: 'Rigid Gift Boxes',
    image: 'https://kimi-web-img.moonshot.cn/img/neixo.com/4eca204d8bab263bc3acd7742bf62068838972d2.jpg'
  },
  {
    id: 3,
    category: 'labels',
    title: 'Product Labels',
    image: 'https://kimi-web-img.moonshot.cn/img/lasercoprint.com/da0a7324bb97461aeefa9e0d4c33809796c0c699.jpg'
  },
  {
    id: 4,
    category: 'bags',
    title: 'Laptop Bags',
    image: 'https://kimi-web-img.moonshot.cn/img/image.made-in-china.com/cb65d5e538ec884e03c6e5d1cdd2c696a7c609e5.webp'
  },
  {
    id: 5,
    category: 'stationery',
    title: 'Corporate Folders',
    image: 'https://kimi-web-img.moonshot.cn/img/cdn.shopify.com/94666185083a87cc05e68a5029c249aaad8b289d.jpg'
  },
  {
    id: 6,
    category: 'foil',
    title: 'Golden Foil Work',
    image: 'https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/8320ae9e8b1aadc31c3b0af95f99f4c8b04755be.jpg'
  }
]

const categories = [
  { id: 'all', name: 'All Work' },
  { id: 'helmets', name: 'Helmet Decals' },
  { id: 'packaging', name: 'Packaging' },
  { id: 'labels', name: 'Labels' },
  { id: 'bags', name: 'Bags' },
  { id: 'stationery', name: 'Stationery' },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-32 bg-slate-900">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-uv-blue font-semibold text-sm uppercase tracking-widest mb-4 block">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Recent{' '}
            <span className="text-gradient">Projects</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-uv-blue to-uv-purple text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-white/60 capitalize">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
