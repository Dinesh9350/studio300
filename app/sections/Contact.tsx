'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, title: 'Visit Us', lines: ['123 Print Street', 'Design District, NY 10001'] },
  { icon: Phone, title: 'Call Us', lines: ['+1 (555) 123-4567', '+1 (555) 987-6543'] },
  { icon: Mail, title: 'Email Us', lines: ['info@uvstudio300.com', 'orders@uvstudio300.com'] },
  { icon: Clock, title: 'Working Hours', lines: ['Mon - Fri: 9AM - 6PM', 'Sat: 10AM - 4PM'] },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-slate-950">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-uv-blue font-semibold text-sm uppercase tracking-widest mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Create{' '}
              <span className="text-gradient">Something Amazing</span>
            </h2>
            <p className="text-white/60 text-lg mb-12">
              Ready to start your UV printing project? Contact us for a free quote and consultation.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-slate-900 border border-white/5"
                >
                  <info.icon className="text-uv-blue mb-4" size={24} />
                  <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                  {info.lines.map((line) => (
                    <p key={line} className="text-white/50 text-sm">{line}</p>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 rounded-3xl border border-white/5"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white focus:border-uv-blue focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white focus:border-uv-blue focus:outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-2">Project Type</label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white focus:border-uv-blue focus:outline-none transition-colors">
                  <option>Banners & Posters</option>
                  <option>Promotional Products</option>
                  <option>Custom Phone Cases</option>
                  <option>Signage</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white focus:border-uv-blue focus:outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-uv-blue to-uv-purple text-white rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}