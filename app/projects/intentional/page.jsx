import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function Project() {
  return (
    <div className="flex flex-col gap-8 items-center mt-14 md:px-10">
      <img src="/Intentional/logo.png" alt="Intentional" className="w-90" />
      <div className="flex flex-col items-center gap-2 mt-2">
        <h1 className="text-3xl">Intentional - Bible Study Journal</h1>
        <div className="flex mt-4">
          <Badge className="mr-2 opacity-50">Web Development</Badge>
          <Badge className="mr-2 opacity-50">Progressive Web App</Badge>
        </div>

        <p className="text-lg md:text-xl mt-8 leading-normal">
          <b>Intentional</b> is a simple tool that makes Bible study more intentional and personal.
          The app is a <b>Progressive Web App</b> built with <b>Next.js</b>, <b>Typescript</b> and{' '}
          <b>Tailwind CSS</b>, with <b>Supabase</b> handling authentication and the database. Being
          a PWA means it can be installed on any device and works seamlessly on mobile - which felt
          right for something people would use daily.
        </p>
        <p className="text-lg md:text-xl mt-8 leading-normal">
          Users can select any passage using a <b>real-time Bible selector</b> powered by the
          GetBible API, write personal notes and reflections, and build a journal feed over time.
          Entries can be <b>tagged and searched. </b> Filtering by one or more tags narrows the feed
          instantly and a live search scans titles and notes in real time, all client-side without
          additional requests. Each entry can also be shared with a <b>unique token</b>, making it
          easy to share a specific reflection without exposing the entire journal.
        </p>
        <img src="/Intentional/api.png" className="mt-8" />
        <img src="/Intentional/search.jpg" className="mt-8 md:w-100" />
        <p className="text-lg md:text-xl mt-8 leading-normal">
          Making it a PWA was an intentional choice from the start. A journaling app is something
          you reach for in quiet moments - on your phone, on your commute, before bed.{' '}
          <b>It needed to feel native</b>, not like a website you have to open in a browser. With
          Next.js, I configured the app to be installable on both Android and iOS, with a proper app
          manifest and custom icons. The result is an experience that loads instantly and{' '}
          <b>sits on your home screen like any other app</b> - without needing the App Store.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <img src="/Intentional/loading.png" className="max-h-100" />
          <img src="/Intentional/login.png" className="max-h-100" />
          <img src="/Intentional/new.png" className="max-h-100" />
          <img src="/Intentional/post.png" className="max-h-100" />
        </div>
        <p className="text-lg md:text-xl mt-14 leading-normal">
          Try it at{' '}
          <Link
            className="text-accent underline"
            href="https://intentional-journal.netlify.app/"
            target="blank"
          >
            intentional-journal.netlify.app
          </Link>
          . On <b>iOS</b>, open the link in Safari, tap the share button, and select{' '}
          <b>Add to Home Screen.</b> On <b>Android</b>, open it in Chrome and tap <b>Install</b>{' '}
          when prompted.
        </p>
        <p className="mt-30 text-center font-bold">davidburaga 2025</p>
      </div>
    </div>
  )
}
