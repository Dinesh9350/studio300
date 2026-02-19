'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const floatingProducts = [
  { id: 1, name: 'Engine Gasket', delay: 0, x: -200, y: -100, rotate: -15, scale: 0.8 },
  { id: 2, name: 'Head Gasket', delay: 0.1, x: 250, y: -150, rotate: 20, scale: 0.9 },
  { id: 3, name: 'Exhaust Gasket', delay: 0.2, x: -150, y: 100, rotate: 10, scale: 0.7 },
  { id: 4, name: 'Transmission Kit', delay: 0.3, x: 200, y: 50, rotate: -10, scale: 0.85 },
  { id: 5, name: 'Valve Cover', delay: 0.4, x: -250, y: 0, rotate: 25, scale: 0.75 },
  { id: 6, name: 'Base Gasket', delay: 0.5, x: 150, y: -50, rotate: -20, scale: 0.8 },
]

export default function ParallaxProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 500])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const ySpring = useSpring(y, springConfig)

  useEffect(() => {
    const ctx = gsap.context(() => {
      floatingProducts.forEach((product, index) => {
        gsap.to(`.floating-item-${index}`, {
          y: `${Math.sin(index) * 50}`,
          x: `${Math.cos(index) * 30}`,
          rotation: product.rotate + 10,
          duration: 4 + index * 0.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative h-[150vh] bg-slate-950 overflow-hidden">
      {/* Dramatic Lighting Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      {/* Spotlight Effect */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-radial from-white/5 via-transparent to-transparent" />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ y: ySpring, opacity, scale }}
        className="sticky top-0 h-screen flex items-center justify-center"
      >
        <div className="relative w-full max-w-7xl mx-auto px-4">
          
          {/* Floating Products */}
          {floatingProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className={`floating-item-${index} absolute hidden lg:block`}
              initial={{ 
                x: product.x, 
                y: product.y, 
                rotate: product.rotate,
                scale: 0,
                opacity: 0 
              }}
              animate={{ 
                x: product.x, 
                y: product.y, 
                rotate: product.rotate,
                scale: product.scale,
                opacity: 1 
              }}
              transition={{ 
                delay: product.delay,
                duration: 1.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: product.scale * 1.1, 
                rotate: 0,
                zIndex: 50,
                transition: { duration: 0.3 }
              }}
              style={{
                left: '50%',
                top: '50%',
                marginLeft: '-75px',
                marginTop: '-75px',
              }}
            >
              <div className="w-[150px] h-[150px] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 shadow-2xl backdrop-blur-sm flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-xs text-slate-400 font-medium">
                  {product.name}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Central Product */}
          <motion.div 
            className="relative z-10 mx-auto w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl animate-pulse" />
            <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 border border-slate-700/50 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-orange-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <svg className="w-16 h-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div className="text-slate-500 text-sm font-medium tracking-widest uppercase">Premium Quality</div>
                </div>
              </div>
              {/* Glow Effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gradient-to-t from-blue-500/20 to-transparent blur-2xl" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="absolute bottom-20 left-0 right-0 text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-white/60 text-sm">Setting New Standards Since 1970</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}