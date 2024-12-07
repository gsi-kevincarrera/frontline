import { Code2 } from 'lucide-react'
import { FooterLinks } from './footer-links'

const productLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Documentation', href: 'docs/general' },
  { label: 'Pricing', href: '#pricing' },
]

const resourceLinks = [
  { label: 'Getting Started', href: '#getting-started' },
  { label: 'Examples', href: '#examples' },
  { label: 'Blog', href: '#blog' },
  { label: 'Community', href: '#community' },
]

const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Terms', href: '#terms' },
]

export function Footer() {
  return (
    <footer className='bg-background border-t'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <div className='flex items-center space-x-2'>
              <Code2 className='h-6 w-6 text-primary' />
              <span className='font-bold text-xl'>FrontLine</span>
            </div>
            <p className='mt-4 text-sm text-muted-foreground'>
              Improve your productivity, don&apos;t waste your time.
            </p>
          </div>
          <FooterLinks title='Product' links={productLinks} />
        </div>
      </div>
    </footer>
  )
}
