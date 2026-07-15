'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Helmet Decals',
    description: 'Premium water transfer and polycarbonate decals for motorcycle helmets. Scratch-resistant and UV protected.',
    image: 'https://alwaysriding.in/cdn/shop/files/MtThunder3ProBlazeGlossWhite1.webp?v=1719582021',
    tags: ['Water Transfer', 'Polycarbonate', 'UV Protected'],
    price: 'Custom Quote'
  },
  {
    id: 2,
    name: 'Vinyl Stickers & Labels',
    description: 'Self-adhesive vinyl stickers and roll labels for products. Weather-resistant with custom shapes.',
    image: 'https://kimi-web-img.moonshot.cn/img/www.textek.cn/bf97932dd0339a1d452d6e8dc0e078c6868cc2ad.jpg',
    tags: ['Self Adhesive', 'Weather Proof', 'Custom Cut'],
    price: 'From ₹500'
  },
  {
    id: 3,
    name: 'Packaging Boxes',
    description: 'Corrugated boxes, rigid boxes, monocarton and kappa boxes with custom printing.',
    image: 'https://kimi-web-img.moonshot.cn/img/3qprint-uploads.s3.ap-southeast-1.amazonaws.com/52ee7ec4f908c9e7d84b9adc65f3241a84a3e33c.webp',
    tags: ['Corrugated', 'Rigid', 'Mono Carton'],
    price: 'Custom Quote'
  },
  {
    id: 4,
    name: 'Carry Bags & Laptop Bags',
    description: 'Custom printed carry bags, paper bags and laptop bags with your logo and branding.',
    image: 'https://kimi-web-img.moonshot.cn/img/lasercoprint.com/6345a17bd9ce5c0d7c34ff5e32a7c0a3aba2a49a.jpg',
    tags: ['Paper Bags', 'Laptop Bags', 'Logo Print'],
    price: 'From ₹25'
  },
  {
    id: 5,
    name: 'Golden Foil & UV Labels',
    description: 'Premium golden foil stamping and UV spot printing for luxury packaging and labels.',
    image: 'https://kimi-web-img.moonshot.cn/img/cdn-ildpddp.nitrocdn.com/48cf35bf448d5e7929c0c3dabfd416f5af01cd4d.png',
    tags: ['Gold Foil', 'UV Spot', 'Premium'],
    price: 'Custom Quote'
  },
  {
    id: 6,
    name: 'Folders, Flyers & Brochures',
    description: 'Corporate stationery including folders, flyers, brochures, visiting cards and letterheads.',
    image: 'https://kimi-web-img.moonshot.cn/img/image.made-in-china.com/cb65d5e538ec884e03c6e5d1cdd2c696a7c609e5.webp',
    tags: ['Offset Print', 'Digital', 'Corporate'],
    price: 'From ₹2'
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
            Printing{' '}
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            From helmet decals to packaging boxes, we deliver high-quality printing 
            for automotive, medical, and consumer durable industries.
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
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Dark overlay on hover - stronger gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content that slides up on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-uv-blue transition-colors">
                      {product.name}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm"
                    >
                      <ArrowUpRight size={20} className="text-white" />
                    </motion.div>
                  </div>
                  
                  <p className="text-white/80 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {product.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/90 border border-white/20 backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-uv-blue font-semibold text-sm bg-slate-950/50 px-2 py-1 rounded">{product.price}</span>
                  </div>
                </div>
              </div>

              {/* Always visible content (shown when not hovering) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-white/50 text-sm">{product.tags[0]}</span>
                  <span className="text-uv-blue font-semibold text-sm">{product.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
