'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'
import { useReadingList } from '@/contexts/reading-list-context'

interface ReadingListItem {
  title: string
  href: string
}

export function ReadingListDrawer() {
  // const [isOpen, setIsOpen] = useState(false)
  // const [readingList, setReadingList] = useState<ReadingListItem[]>([])
  const { readingList, removeFromReadingList } = useReadingList()
  const [isOpen, setIsOpen] = useState(false)

  // useEffect(() => {
  //   const storedList = localStorage.getItem('readingList')
  //   if (storedList) {
  //     setReadingList(JSON.parse(storedList))
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('readingList', JSON.stringify(readingList))
  // }, [readingList])

  const removeFromList = (href: string) => {
    removeFromReadingList(href)
  }

  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-background border-l border-border transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <Button
        variant='outline'
        size='icon'
        className='absolute -left-10 top-4'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className='h-4 w-4' /> : '📚'}
      </Button>
      <div className='p-4'>
        <h2 className='text-lg font-semibold mb-4'>Reading List</h2>
        <ScrollArea className='h-[calc(100vh-8rem)]'>
          {readingList.length === 0 ? (
            <p className='text-muted-foreground'>Your reading list is empty.</p>
          ) : (
            <ul className='space-y-2'>
              {readingList.map((item, index) => (
                <li key={index} className='flex justify-between items-center'>
                  <Link href={item.href} className='hover:underline'>
                    {item.title}
                  </Link>
                  <Button
                    variant='ghost'
                    size='icon'
                    onClick={() => removeFromList(item.href)}
                  >
                    <X className='h-4 w-4' />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </ScrollArea>
      </div>
    </div>
  )
}
