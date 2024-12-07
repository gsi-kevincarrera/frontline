'use client'

import { BookOpen, Code2, Palette, Puzzle, Search, Users } from 'lucide-react'
import { FeatureCard } from './features-card'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Multi-Framework Support',
    description:
      'Snippets for React, Svelte, Vanilla JS—your favorite tools, one place. (and more to come)',
    icon: BookOpen,
  },
  {
    title: 'Form Handling Made Easy',
    description:
      'From basic inputs to advanced validation with Zod, handle forms like a pro.',
    icon: Code2,
  },
  {
    title: 'Authentication Simplified',
    description:
      'Login flows, token management, and role-based routes—ready to paste and deploy.',
    icon: Search,
  },
  {
    title: 'Performance Utilities',
    description: 'Snippets for debouncing, lazy loading, and API optimization.',
    icon: Palette,
  },
  {
    title: 'Error Handling Utilities',
    description:
      'Snippets for consistent error boundaries and API error management across your app',
    icon: Users,
  },
  {
    title: 'Responsive by Design',
    description:
      'Grid layouts, flexible navbars, and adaptive components for any screen size.',
    icon: Puzzle,
  },
]

export function FeaturesSection() {
  return (
    <section id='features' className='py-24 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            Why FrontLine? Because Your Time is Gold
          </h2>
          <p className='mt-4 text-lg text-muted-foreground max-w-2xl mx-auto'>
            Built to take the repetitive grunt work out of frontend development.
            With our curated, ready-to-use snippets and tools, you can focus on
            the hardest.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
