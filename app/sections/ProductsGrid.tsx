'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Banners & Posters',
    description: 'Large format UV printed banners for indoor and outdoor use. Weather-resistant and vibrant colors.',
    image: 'https://kimi-web-img.moonshot.cn/img/printodelivery.com/77cae58c89fcb886a52a9c9eca3800d51a2205d9.jpg',
    tags: ['Outdoor', 'Indoor', 'Roll-up'],
    price: 'From $25'
  },
  {
    id: 2,
    name: 'Phone Cases',
    description: 'Custom printed phone cases with photo-quality UV printing. Durable and scratch-resistant.',
    image: 'https://kimi-web-img.moonshot.cn/img/www.textek.cn/bf97932dd0339a1d452d6e8dc0e078c6868cc2ad.jpg',
    tags: ['iPhone', 'Samsung', 'Custom'],
    price: 'From $15'
  },
  {
    id: 3,
    name: 'Promotional Pens',
    description: 'Branded pens with your logo UV printed. Perfect for corporate gifts and marketing.',
    image: 'https://kimi-web-img.moonshot.cn/img/lasercoprint.com/6345a17bd9ce5c0d7c34ff5e32a7c0a3aba2a49a.jpg',
    tags: ['Corporate', 'Bulk', 'Custom'],
    price: 'From $2'
  },
  {
    id: 4,
    name: 'Wood & Acrylic',
    description: 'Print on wood, acrylic, and other rigid materials. Perfect for signage and decor.',
    image: 'https://kimi-web-img.moonshot.cn/img/cdn-ildpddp.nitrocdn.com/48cf35bf448d5e7929c0c3dabfd416f5af01cd4d.png',
    tags: ['Decor', 'Signage', 'Art'],
    price: 'From $35'
  },
  {
    id: 5,
    name: 'Bunting & Flags',
    description: 'Custom bunting and flags for events, promotions, and celebrations.',
    image: 'https://kimi-web-img.moonshot.cn/img/3qprint-uploads.s3.ap-southeast-1.amazonaws.com/52ee7ec4f908c9e7d84b9adc65f3241a84a3e33c.webp',
    tags: ['Events', 'Promo', 'Custom'],
    price: 'From $30'
  },
  {
    id: 6,
    name: 'Bottles & Tumblers',
    description: 'UV printed water bottles, tumblers, and drinkware. Dishwasher safe prints.',
    image: 'https://kimi-web-img.moonshot.cn/img/coldesi.com/c7b854297aa2ee82b0a1a320031c0f57e08091b9.jpg',
    tags: ['Drinkware', 'Gifts', 'Corporate'],
    price: 'From $20'
  },
]

export default function ProductsGrid() {
  return (
    <section id="products" className="py-32 bg-slate-950">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-uv-blue font-semibold text-sm uppercase tracking-widest mb-4 block">
            Our Products
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            UV Printed{' '}
            <span className="text-gradient">Perfection</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            From banners to bottles, we print on virtually any material with stunning quality and durability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-uv-blue transition-colors">
                    {product.name}
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowUpRight size={20} className="text-white" />
                  </motion.div>
                </div>
                
                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {product.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/50 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-uv-blue font-semibold">{product.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}