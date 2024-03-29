import { getUser } from '@/app/lib/auth.server'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { fetchEventCount } from '@/app/lib/data'
import SignOutButton from '@/app/components/admin/SignOutButton'
import { pageToRange } from '@/app/lib/utils.server'
import Paginator from '@/app/components/events/Paginator'
import Section from '@/app/components/Section'
import { Suspense } from 'react'
import EventGallerySkeleton from '@/app/components/events/EventGallerySkeleton'
import EventGalleryAdmin from '@/app/components/admin/EventGalleryAdmin'

export default async function AdminPage({ searchParams }: { searchParams: { page: number } }) {
  const user = await getUser()
  const limit = 16
  const count = await fetchEventCount()
  const pageCount = Math.ceil(count! / limit)
  const page = Math.min(Math.max(Number(searchParams.page || 1), 1), pageCount)
  const range = pageToRange(page, limit) as [number, number]

  return (
    <>
      <Navbar />

      <main>
        <Section>
          <div>
            <h1 className="text-4xl mb-5 leading-tight">Admin dashboard</h1>
            <p className="text-xl text-text-secondary mb-5 leading-snug">
              Logged in as 
              <span className="text-text-secondary"> {user?.email}</span>
            </p>
            <SignOutButton />
          </div>
        </Section>

        <Section>
          <div className="flex justify-between gap-8">
            <h2 className="text-2xl my-auto">Manage events</h2>
            <Link href="/admin/create" className="py-3 px-6 rounded-full bg-foreground text-lg text-background w-max my-auto">Create new</Link>
          </div>
          <Suspense fallback={<EventGallerySkeleton />} key={page}>
            <EventGalleryAdmin range={range} />
          </Suspense>
          <Paginator page={page} limit={limit} count={count!} />
        </Section>
      </main>

      <Footer />
    </>
  )
}