import Link from 'next/link'
import type { NextPage } from 'next'

const Home: NextPage = () => {

  return (
      <main className="flex items-center justify-center w-full h-[calc(100vh-64px)] text-white bg-zinc-900">
        <div>
          <h2 className='text-6xl'>
            Star Wars Info
          </h2>
        </div>
      </main>
  )
}

export default Home
