'use client'

import { Button } from '@/components/ui/button'
import { useReadingList } from '@/contexts/reading-list-context'
import { BookmarkPlus, Check } from 'lucide-react'
import { useState } from 'react'

interface AddToReadingListButtonProps {
  title: string
  href: string
}

export function AddToReadingListButton({
  title,
  href,
}: AddToReadingListButtonProps) {
  const { addToReadingList } = useReadingList()
  const [isAdded, setIsAdded] = useState(false)

  const handleClick = () => {
    addToReadingList({ title, href })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <Button
      variant='outline'
      size='sm'
      onClick={handleClick}
      className='ml-2'
      disabled={isAdded}
    >
      {isAdded ? (
        <>
          <Check className='mr-2 h-4 w-4' />
          Added
        </>
      ) : (
        <>
          <BookmarkPlus className='mr-2 h-4 w-4' />
          Add to Reading List
        </>
      )}
    </Button>
  )
}
