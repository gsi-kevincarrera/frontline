'use client'
import { toast } from 'sonner'
import { Button } from '../ui/button'

interface FooterLinksProps {
  title: string
  links: Array<{
    label: string
    href: string
  }>
}

export function FooterLinks({ title, links }: FooterLinksProps) {
  const onClickPricing = () => {
    toast.message('Completely free.')
  }
  return (
    <div>
      <h3 className='font-semibold mb-4'>{title}</h3>
      <ul className='space-y-2'>
        {links.map((link) => (
          <li key={link.label}>
            {link.label === 'Pricing' ? (
              <Button variant={'link'} style={{padding: 0}} onClick={onClickPricing}>Pricing</Button>
            ) : (
              <a
                href={link.href}
                className='text-muted-foreground hover:text-primary transition-colors'
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
