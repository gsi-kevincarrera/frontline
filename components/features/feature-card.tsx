'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='relative group'
    >
      <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 transform transition-transform group-hover:scale-105' />
      <div className='relative p-6 space-y-4'>
        <div className='inline-block p-3 rounded-lg bg-primary/10'>
          <Icon className='w-6 h-6 text-primary' />
        </div>
        <h3 className='text-xl font-semibold'>{title}</h3>
        <p className='text-muted-foreground'>{description}</p>
      </div>
    </motion.div>
  )
}
