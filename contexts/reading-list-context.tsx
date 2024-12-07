'use client'

import React, { createContext, useState, useContext, useEffect } from 'react'

interface ReadingListItem {
  title: string
  href: string
}

interface ReadingListContextType {
  readingList: ReadingListItem[]
  addToReadingList: (item: ReadingListItem) => void
  removeFromReadingList: (href: string) => void
}

const ReadingListContext = createContext<ReadingListContextType | undefined>(
  undefined
)

export function ReadingListProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [readingList, setReadingList] = useState<ReadingListItem[]>([])

  useEffect(() => {
    const storedList = localStorage.getItem('readingList')
    if (storedList) {
      setReadingList(JSON.parse(storedList))
    }
  }, [])

  const addToReadingList = (item: ReadingListItem) => {
    setReadingList((prev) => {
      if (!prev.some((existingItem) => existingItem.href === item.href)) {
        const newList = [...prev, item]
        localStorage.setItem('readingList', JSON.stringify(newList))
        return newList
      }
      return prev
    })
  }

  const removeFromReadingList = (href: string) => {
    setReadingList((prev) => {
      const newList = prev.filter((item) => item.href !== href)
      localStorage.setItem('readingList', JSON.stringify(newList))
      return newList
    })
  }

  return (
    <ReadingListContext.Provider
      value={{ readingList, addToReadingList, removeFromReadingList }}
    >
      {children}
    </ReadingListContext.Provider>
  )
}

export function useReadingList() {
  const context = useContext(ReadingListContext)
  if (context === undefined) {
    throw new Error('useReadingList must be used within a ReadingListProvider')
  }
  return context
}
