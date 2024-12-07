'use client'

import {
  Book,
  FileCode2,
  ChevronDown,
} from 'lucide-react'
import {
  Globe,
  FileText,
  Zap,
  Code,
  Cpu,
  Plus,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { useState, useEffect } from 'react'

const navigation = [
  {
    title: 'General',
    icon: Book,
    items: [
      { title: 'Quick Start', href: '/docs/general#quick-start' },
      {
        title: 'Copy Your First Snippet',
        href: '/docs/general#copy-first-snippet',
      },
      { title: 'Framework Setup', href: '/docs/general#framework-setup' },
    ],
  },
  {
    title: 'Navigation & URLs',
    icon: Globe,
    items: [
      {
        title: 'Extracting URL Parameters',
        href: '/docs/navigation-and-urls#extracting-url-parameters',
      },
      {
        title: 'Redirects & Routing',
        href: '/docs/navigation-and-urls#redirects-and-routing',
      },
      {
        title: 'Scroll to Sections',
        href: '/docs/navigation-and-urls#scroll-to-sections',
      },
    ],
  },
  // {
  //   title: 'Authentication',
  //   icon: Lock,
  //   items: [
  //     {
  //       title: 'Basic Login System',
  //       href: '/docs/authentication#basic-login-system',
  //     },
  //     {
  //       title: 'Token Management',
  //       href: '/docs/authentication#token-management',
  //     },
  //     {
  //       title: 'Protected Routes',
  //       href: '/docs/authentication#protected-routes',
  //     },
  //     {
  //       title: 'Role-Based Examples',
  //       href: '/docs/authentication#role-based-examples',
  //     },
  //   ],
  // },
  {
    title: 'Forms',
    icon: FileText,
    items: [
      {
        title: 'Simple Form Handling',
        href: '/docs/forms#simple-form-handling',
      },
      { title: 'Validation with Zod', href: '/docs/forms#validation-with-zod' },
      {
        title: 'File Upload and Preview',
        href: '/docs/forms#file-upload-and-preview',
      },
      {
        title: 'Multi Step Forms',
        href: '/docs/forms#multi-step-forms',
      }
    ],
  },
  {
    title: 'Performance Utilities',
    icon: Zap,
    items: [
      {
        title: 'Throttling',
        href: '/docs/performance-utilities#throttling',
      },
      {
        title: 'Memoization',
        href: '/docs/performance-utilities#memoization',
      },
      {
        title: 'Lazy Loading',
        href: '/docs/performance-utilities#lazy-loading',
      },
      {
        title:'Image Optimization',
        href: '/docs/performance-utilities#image-optimization',
      }
    ],
  },
  {
    title: 'Code Utilities',
    icon: Code,
    items: [
      { title: 'Fetch Wrappers', href: '/docs/code-utilities#fetch-wrappers' },
      {
        title: 'Error Handling',
        href: '/docs/code-utilities#error-handling',
      },
      { title: 'Axios Setup', href: '/docs/code-utilities#axios-setup' },
    ],
  },
  {
    title: 'Advanced Snippets',
    icon: Cpu,
    items: [
      {
        title: 'Optimized Fetch with AbortController',
        href: '/docs/advanced-snippets#optimized-fetch-with-abortcontroller',
      },
      {
        title: 'Error Boundary',
        href: '/docs/advanced-snippets#error-boundary',
      },
    ],
  },
  {
    title: 'Extras',
    icon: Plus,
    items: [
      // {
      //   title: 'Offline Documentation',
      //   href: '/docs/extras#offline-documentation',
      // },
      { title: 'Contributing to FrontLine', href: '/docs/extras#contributing' },
    ],
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const [openGroups, setOpenGroups] = useState<string[]>([])

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) =>
      prev.includes(title)
        ? prev.filter((group) => group !== title)
        : [...prev, title]
    )
  }

  const isActive = (href: string) => {
    const [path, hash] = href.split('#')
    if (pathname === path) {
      if (hash && window) {
        // If there's a hash, check if it matches the current hash
        return window.location.hash === `#${hash}`
      }
      // If there's no hash, it's active if the pathname matches
      return true
    }
    return false
  }

  useEffect(() => {
    const handleHashChange = () => {
      // Force a re-render when the hash changes
      setOpenGroups([...openGroups])
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [openGroups])

  return (
    <Sidebar>
      <SidebarHeader className='border-b border-border px-4 py-4'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='flex items-center gap-2 font-semibold'>
            <FileCode2 className='h-6 w-6' />
            <span>Frontline</span>
          </Link>
          <a
            href='https://github.com/gsi-kevincarrera/frontline'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-gray-700'
          >
            <svg viewBox='0 0 24 24' className='h-6 w-6 fill-current'>
              <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
            </svg>
          </a>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {navigation.map((section) => (
          <Collapsible
            key={section.title}
            open={openGroups.includes(section.title)}
            onOpenChange={() => toggleGroup(section.title)}
          >
            <SidebarGroup>
              <CollapsibleTrigger asChild>
                <SidebarGroupLabel className='cursor-pointer'>
                  <section.icon className='mr-2 h-4 w-4' />
                  {section.title}
                  <ChevronDown
                    className={`ml-auto h-4 w-4 transition-transform duration-200 ${
                      openGroups.includes(section.title)
                        ? 'transform rotate-180'
                        : ''
                    }`}
                  />
                </SidebarGroupLabel>
              </CollapsibleTrigger>
              <CollapsibleContent className='transition-all duration-300 ease-in-out'>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items.map((item) => (
                      <SidebarMenuItem key={item.href}>
                        <SidebarMenuButton
                          asChild
                          isActive={isActive(item.href)}
                        >
                          <Link href={item.href}>{item.title}</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
