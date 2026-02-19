'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Check, Maximize2, Zap, Palette } from 'lucide-react'

const features = [
  { icon: Maximize2, text: 'Large Format up to 3.2m width' },
  { icon: Zap, text: 'Instant UV Curing' },
  { icon: Palette, text: 'Vibrant CMYK + White Ink' },
  { icon: Check, text: 'Print on Any Material' },
]

export default function UVPrinterShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Smooth spring config
  const smoothConfig = { stiffness: 40, damping: 20 }
  
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, -50]), smoothConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]), smoothConfig)
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.3], [0.9, 1]), smoothConfig)

  return (
    <section ref={containerRef} id="printer" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Smooth gradient transition from hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none" />
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-uv-blue/10 rounded-full blur-[150px]" />
      </div>

      <motion.div 
        style={{ opacity }}
        className="section-padding max-w-7xl mx-auto relative"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-uv-blue font-semibold text-sm uppercase tracking-widest mb-4 block">
              Our Technology
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              UV 300{' '}
              <span className="text-gradient">Flatbed Printer</span>
            </h2>
            <p className="text-lg text-white/50 mb-8 leading-relaxed">
              Our state-of-the-art UV 300 printer delivers exceptional print quality on virtually any surface. 
              From banners and posters to phone cases and promotional items.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5"
                >
                  <feature.icon className="text-uv-blue" size={20} />
                  <span className="text-white/70 text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-uv-blue to-uv-purple text-white rounded-full font-semibold"
            >
              View Specifications
            </motion.button>
          </motion.div>

          {/* Right - 3D Printer Showcase */}
          <motion.div
            style={{ y, scale }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-uv-blue/20 to-uv-purple/20 rounded-3xl blur-3xl transform scale-110" />
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900"
              >
                <img 
                  src="https://kimi-web-img.moonshot.cn/img/imgcdn.wer-china.com/0f22c3271451caeef1c208e7b0202be4afb2c6b1.jpg"
                  alt="UV 300 Printer"
                  className="w-full h-auto"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-lg">UV 300 Series</div>
                      <div className="text-white/50 text-sm">Industrial Grade Flatbed</div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-green-400 text-sm font-medium">Active</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-effect p-4 rounded-xl"
              >
                <div className="text-2xl font-bold text-white">300 DPI</div>
                <div className="text-xs text-white/50">Resolution</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-effect p-4 rounded-xl"
              >
                <div className="text-2xl font-bold text-white">3.2m</div>
                <div className="text-xs text-white/50">Max Width</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}