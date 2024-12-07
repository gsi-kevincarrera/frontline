"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <div className='relative min-h-screen flex items-center'>
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-background' />
      <div className='absolute inset-0'>
        <div
          className='h-full w-full'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center'
        >
          <h1 className='text-4xl sm:text-6xl font-bold tracking-tight'>
            Frontline
            <span className='block text-primary'>The Copy Paste Heaven</span>
          </h1>
          <p className='mt-6 text-xl text-muted-foreground max-w-3xl mx-auto'>
            A curated collection of essential frontend utilities, ready to copy,
            paste, and boost your productivity across frameworks.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link href='/docs/general'>
              <Button size='lg' asChild className='group'>
                <div>
                  Start Developing
                  <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                </div>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}