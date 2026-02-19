'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-slate-900 border-t border-white/5">
      <div className="section-padding max-w-7xl mx-auto py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-uv-blue to-uv-purple rounded-lg flex items-center justify-center text-white font-bold">
                UV
              </div>
              <span className="text-2xl font-bold text-white">STUDIO 300</span>
            </div>
            <p className="text-white/50 max-w-sm mb-6">
              Professional UV printing services for banners, posters, promotional products, and custom merchandise. Quality that lasts.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-uv-blue hover:text-white transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {['Banners & Posters', 'Phone Cases', 'Promotional Items', 'Signage', 'Custom Gifts'].map((item) => (
                <li key={item}><a href="#" className="text-white/50 hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Our Process', 'Portfolio', 'Contact', 'Get Quote'].map((item) => (
                <li key={item}><a href="#" className="text-white/50 hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© 2024 UV Studio 300. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-uv-blue to-uv-purple text-white rounded-full shadow-lg flex items-center justify-center"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}