import { AppSidebar } from '@/components/docs/app-sidebar'
import { ReadingListDrawer } from '@/components/docs/reading-list-drawer'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { ReadingListProvider } from '@/contexts/reading-list-context'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReadingListProvider>
      <SidebarProvider defaultOpen={true}>
        <div className='flex min-h-screen bg-background'>
          <AppSidebar />
          <SidebarInset className='flex-1 relative'>
            <div className='container max-w-7xl py-6 md:py-8 lg:py-10 px-4 md:px-6 lg:px-8'>
              {children}
            </div>
            <ReadingListDrawer />
          </SidebarInset>
        </div>
      </SidebarProvider>
    </ReadingListProvider>
  )
}
