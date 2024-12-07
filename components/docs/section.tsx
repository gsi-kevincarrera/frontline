import { AddToReadingListButton } from "./add-to-reading-list-button"

export default function Section({title, sectionId, groupId, children}: {
  title: string
  sectionId: string
  groupId: string
  children: React.ReactNode
}) {
  return (
    <section id={sectionId}>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-semibold mb-4'>{title}</h2>
        <AddToReadingListButton
          title={title}
          href={`/docs/${groupId}#${sectionId}`}
        />
      </div>
      {children}
    </section>
  )
}