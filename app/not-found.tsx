'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { FileQuestion } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className='min-h-screen bg-background flex items-center justify-center relative overflow-hidden'>
      <div className='absolute inset-0 bg-grid-pattern opacity-5' />
      <div className='absolute inset-0 bg-gradient-to-b from-background/80 to-background' />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NotFoundAnimation />
          <h1 className='text-4xl font-bold mt-8 mb-4'>Page Not Found</h1>
          <p className='text-xl text-muted-foreground mb-8 max-w-md mx-auto'>
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              onClick={() => router.push('/')}
              className='group'
            >
              Return Home
            </Button>
            <Button size='lg' variant='outline' onClick={() => router.back()}>
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function NotFoundAnimation() {
  return (
    <div className='relative w-24 h-24 mx-auto'>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 1,
        }}
        className='absolute inset-0 bg-primary/10 rounded-full'
      />
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.2,
        }}
        className='absolute inset-0 flex items-center justify-center'
      >
        <FileQuestion className='w-12 h-12 text-primary' />
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className='absolute inset-0 bg-primary/5 rounded-full'
      />
    </div>
  )
}