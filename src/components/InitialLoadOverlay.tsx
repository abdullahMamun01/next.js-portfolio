'use client'

import { motion } from 'framer-motion'

export default function InitialLoadOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gray-700"
      initial={{ x: '0%' }}
      animate={{ x: '100%' }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
      onAnimationComplete={() => document.body.style.overflow = 'visible'}
    />
  )
}

