'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Cog, Shield, Zap, Award } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: "Uncompromising Quality",
    description: "Every gasket undergoes rigorous testing to ensure perfect seal and durability under extreme conditions.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Pioneering new materials and manufacturing techniques for next-generation engine performance.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: Cog,
    title: "Precision Engineering",
    description: "CNC-machined to micron-level accuracy for perfect fitment every single time.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10"
  },
  {
    icon: Award,
    title: "5 Decades of Trust",
    description: "Over 50 years of excellence, serving OEMs and aftermarket across 50+ countries.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10"
  }
]

export default function FeatureParallax() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section ref={containerRef} className="relative bg-slate-950 py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10 section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Perfection
            </span>
          </h2>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0
            
            return (
              <ParallaxFeature 
                key={feature.title}
                feature={feature}
                index={index}
                isEven={isEven}
                scrollYProgress={scrollYProgress}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ParallaxFeature({ 
  feature, 
  index, 
  isEven, 
  scrollYProgress 
}: { 
  feature: typeof features[0]
  index: number
  isEven: boolean
  scrollYProgress: any
}) {
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0.2 + index * 0.1, 0.4 + index * 0.1], [0, 1])
  const scale = useTransform(scrollYProgress, [0.2 + index * 0.1, 0.4 + index * 0.1], [0.8, 1])
  
  const ySpring = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      style={{ opacity, scale }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
    >
      {/* Content Side */}
      <motion.div 
        className="flex-1 space-y-6"
        style={{ y: ySpring }}
      >
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.bgColor} border border-white/10`}>
          <feature.icon className={`w-8 h-8 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} style={{ stroke: 'url(#gradient)' }} />
          <svg width="0" height="0">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-white">{feature.title}</h3>
        <p className="text-lg text-white/60 leading-relaxed max-w-lg">{feature.description}</p>
        
        <motion.button
          whileHover={{ x: 5 }}
          className="group flex items-center gap-2 text-white font-medium"
        >
          Learn more 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </motion.button>
      </motion.div>

      {/* Visual Side */}
      <motion.div 
        className="flex-1 relative"
        style={{ y: useSpring(useTransform(scrollYProgress, [0, 1], [-50, 50]), { stiffness: 100, damping: 30 }) }}
      >
        <div className="relative aspect-square max-w-md mx-auto">
          {/* Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 blur-3xl rounded-full`} />
          
          {/* Card */}
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative h-full rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 backdrop-blur-sm overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <feature.icon className="w-32 h-32 text-white/10" />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-20 h-20 rounded-xl bg-white/5 border border-white/10"
            />
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-white/5 border border-white/10"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}