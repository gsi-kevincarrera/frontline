import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation - Frontline',
  description:
    'Essential frontend utilities and documentation for modern web development.',
}

export default function DocsPage() {
  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <h1 className='text-3xl font-bold tracking-tight'>
          Welcome to Frontline
        </h1>
        <p className='text-muted-foreground'>
          A comprehensive guide to using our frontend utilities and components.
        </p>
      </div>
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Getting Started</h2>
        <p>
          Frontline is a curated collection of essential frontend utilities,
          ready to copy, paste, and boost your productivity across frameworks.
          This documentation will help you get started with using our components
          and utilities in your projects.
        </p>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='rounded-lg border p-4'>
            <h3 className='font-semibold'>Quick Installation</h3>
            <p className='mt-1 text-sm text-muted-foreground'>
              Get started quickly by installing our package using npm or yarn.
            </p>
          </div>
          <div className='rounded-lg border p-4'>
            <h3 className='font-semibold'>Components</h3>
            <p className='mt-1 text-sm text-muted-foreground'>
              Explore our collection of reusable components and utilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
