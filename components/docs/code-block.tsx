'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface CodeBlockProps {
  snippets: {
    [key: string]: string
  }
}

export function CodeBlock({ snippets }: CodeBlockProps) {
  const [activeTab, setActiveTab] = useState(Object.keys(snippets)[0])
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(snippets[activeTab]).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    })
  }

  const getLanguage = (tab: string) => {
    switch (tab.toLowerCase()) {
      case 'js':
        return 'javascript'
      case 'ts':
        return 'typescript'
      case 'react':
        return 'jsx'
      case 'svelte':
        return 'jsx'
      default:
        return tab.toLowerCase()
    }
  }

  return (
    <div className='relative'>
      <button
        onClick={copyToClipboard}
        className='absolute right-2 top-2 p-2 rounded bg-gray-800 text-gray-300 hover:bg-gray-700 z-10'
      >
        {isCopied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          {Object.keys(snippets).map((lang) => (
            <TabsTrigger key={lang} value={lang}>
              {lang}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(snippets).map(([lang, code]) => (
          <TabsContent key={lang} value={lang}>
            <SyntaxHighlighter
              language={'tsx'}
              style={vscDarkPlus}
              customStyle={{
                padding: '1rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
              }}
            >
              {code.trim()}
            </SyntaxHighlighter>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
