'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  { 
    icon: MapPin, 
    title: 'Visit Us', 
    lines: [
      'Khewat No.575/482, Khatoni No.606',
      'Sankhol, Metro Pillar No.912',
      'Bahadurgarh, Jhajjar, Haryana-124507'
    ] 
  },
  { 
    icon: Phone, 
    title: 'Call Us', 
    lines: ['+91 9891473572', '+91 7838853971', '+91 9667539815', '+91 7678102320', '+91 7206782320'] 
  },
  { 
    icon: Mail, 
    title: 'Email Us', 
    lines: ['rvgraphics8@gmail.com'] 
  },
  { 
    icon: Clock, 
    title: 'Working Hours', 
    lines: ['Mon - Sat: 9AM - 7PM', 'Sunday: Closed'] 
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Helmet Decals',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const subject = `Quote Request from ${formData.name} - ${formData.product}`
    const body = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Product Interest: ${formData.product}

Message:
${formData.message}
    `.trim()
    
    const mailtoLink = `mailto:rvgraphics8@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
              Ready to start your printing project? Contact us for a free quote and consultation. 
              We serve clients across India with premium labeling and packaging solutions.
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white focus:border-uv-blue focus:outline-none transition-colors" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white focus:border-uv-blue focus:outline-none transition-colors" 
                    placeholder="+91 98765 43210" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white focus:border-uv-blue focus:outline-none transition-colors" 
                  placeholder="your@email.com" 
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-2">Product Interest</label>
                <select 
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white focus:border-uv-blue focus:outline-none transition-colors"
                >
                  <option>Helmet Decals</option>
                  <option>Vinyl Stickers & Labels</option>
                  <option>Packaging Boxes</option>
                  <option>Carry Bags</option>
                  <option>Golden Foil / UV</option>
                  <option>Stationery Printing</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white focus:border-uv-blue focus:outline-none transition-colors resize-none" 
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-uv-blue to-uv-purple text-white rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                Send Message
                <ExternalLink size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
