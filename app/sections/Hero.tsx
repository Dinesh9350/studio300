'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'

const floatingItems = [
  { id: 1, name: 'Banners', image: 'https://kimi-web-img.moonshot.cn/img/printodelivery.com/77cae58c89fcb886a52a9c9eca3800d51a2205d9.jpg', x: -280, y: -140, rotate: -12, scale: 0.85 },
  { id: 2, name: 'Phone Cases', image: 'https://kimi-web-img.moonshot.cn/img/www.textek.cn/bf97932dd0339a1d452d6e8dc0e078c6868cc2ad.jpg', x: 300, y: -120, rotate: 15, scale: 0.8 },
  { id: 3, name: 'Posters', image: 'https://kimi-web-img.moonshot.cn/img/3qprint-uploads.s3.ap-southeast-1.amazonaws.com/52ee7ec4f908c9e7d84b9adc65f3241a84a3e33c.webp', x: -260, y: 130, rotate: 6, scale: 0.75 },
  { id: 4, name: 'Promo Pens', image: 'https://kimi-web-img.moonshot.cn/img/lasercoprint.com/6345a17bd9ce5c0d7c34ff5e32a7c0a3aba2a49a.jpg', x: 280, y: 110, rotate: -8, scale: 0.7 },
  { id: 5, name: 'Wood Prints', image: 'https://kimi-web-img.moonshot.cn/img/cdn-ildpddp.nitrocdn.com/48cf35bf448d5e7929c0c3dabfd416f5af01cd4d.png', x: -180, y: 30, rotate: 20, scale: 0.65 },
  { id: 6, name: 'Acrylic', image: 'https://kimi-web-img.moonshot.cn/img/image.made-in-china.com/cb65d5e538ec884e03c6e5d1cdd2c696a7c609e5.webp', x: 200, y: -30, rotate: -15, scale: 0.72 },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Use refs for actual position tracking
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  
  // Motion values with initial 0
  const motionX = useMotionValue(0)
  const motionY = useMotionValue(0)
  
  // Smoother spring config
  const springConfig = { stiffness: 25, damping: 15, mass: 0.8 }
  const smoothX = useSpring(motionX, springConfig)
  const smoothY = useSpring(motionY, springConfig)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    
    // Normalize to -1 to 1 range
    const newX = (clientX - innerWidth / 2) / (innerWidth / 2)
    const newY = (clientY - innerHeight / 2) / (innerHeight / 2)
    
    mouseX.current = newX
    mouseY.current = newY
    
    motionX.set(newX)
    motionY.set(newY)
  }

  return (
    <section 
      ref={containerRef} 
      id="home" 
      className="relative min-h-screen bg-slate-950 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[900px] h-[900px] bg-uv-blue/15 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-1/3 right-1/4 w-[700px] h-[700px] bg-uv-purple/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:120px_120px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col section-padding z-10 pt-24 pb-8">
        
        {/* Floating Products - Fixed positioning */}
        <div className="absolute inset-0 hidden lg:block pointer-events-none overflow-hidden">
          {floatingItems.map((item, index) => (
            <FloatingProduct 
              key={item.id} 
              item={item} 
              index={index} 
              mouseX={smoothX}
              mouseY={smoothY}
              isLoaded={isLoaded}
            />
          ))}
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto relative z-20 py-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6 border border-white/10"
          >
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-400"
            />
            <span className="text-white/70 text-sm font-medium tracking-wide">UV 300 Printer Technology</span>
          </motion.div>

          {/* Main Title */}
          <div className="mb-6">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1] tracking-tight mb-2"
            >
              Print On
            </motion.h1>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1] tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-uv-blue via-uv-purple to-uv-pink">
                Anything
              </span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg md:text-xl text-white/50 mb-8 max-w-xl mx-auto leading-relaxed"
          >
            Professional UV printing services for banners, posters, promotional products, 
            and custom merchandise.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(0, 102, 255, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-gradient-to-r from-uv-blue to-uv-purple text-white rounded-full font-semibold text-base flex items-center gap-2 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Products
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-uv-purple to-uv-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 glass-effect text-white rounded-full font-semibold text-base flex items-center gap-2 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Play size={16} className="fill-current ml-0.5" />
              </div>
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="w-full"
          >
            <div className="flex justify-center gap-12 md:gap-20">
              {[
                { value: '300', label: 'DPI Resolution' },
                { value: '50+', label: 'Materials' },
                { value: '24h', label: 'Turnaround' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.6 + index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="text-center group cursor-default"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-uv-blue transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/50 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ delay: 2, duration: 1 }}
          className="flex justify-center mt-auto pt-4"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/30 hover:text-white/50 transition-colors cursor-pointer"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-medium">Scroll</span>
            <ChevronDown size={24} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Floating Product Component - Fixed parallax
function FloatingProduct({ item, index, mouseX, mouseY, isLoaded }: { 
  item: typeof floatingItems[0]
  index: number
  mouseX: any
  mouseY: any
  isLoaded: boolean
}) {
  const intensity = 15 + (index * 3)
  
  // Calculate parallax offset - this adds to the base position
  const parallaxX = useTransform(mouseX, [-1, 1], [-intensity, intensity])
  const parallaxY = useTransform(mouseY, [-1, 1], [-intensity, intensity])
  
  // Combine base position with parallax
  const finalX = useTransform(parallaxX, (v) => item.x + v)
  const finalY = useTransform(parallaxY, (v) => item.y + v)
  
  const floatDuration = 6 + index
  const floatDelay = index * 0.5

  return (
    <motion.div
      className="absolute"
      initial={{ 
        x: item.x, 
        y: item.y, 
        opacity: 0, 
        scale: 0.8,
        rotate: item.rotate 
      }}
      animate={isLoaded ? { 
        opacity: 1, 
        scale: item.scale,
      } : {}}
      transition={{ 
        delay: 0.5 + index * 0.1,
        duration: 1.2,
        type: "spring",
        stiffness: 40,
        damping: 15
      }}
      style={{ 
        left: '50%', 
        top: '40%', 
        marginLeft: '-90px', 
        marginTop: '-65px',
        x: finalX,
        y: finalY,
        rotate: item.rotate,
      }}
    >
      <motion.div
        animate={{ 
          y: [0, -12, 0],
          rotate: [0, 2, 0, -2, 0],
        }}
        transition={{ 
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay
        }}
        whileHover={{ scale: 1.08, rotate: 0, zIndex: 100 }}
        className="pointer-events-auto"
      >
        <div className="w-[180px] h-[130px] rounded-xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer backdrop-blur-md bg-slate-900/40 hover:border-uv-blue/50 transition-all duration-500">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <p className="text-white font-semibold text-sm">{item.name}</p>
            <p className="text-white/60 text-xs mt-0.5">UV Printed</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}