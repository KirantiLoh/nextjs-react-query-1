import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-4 text-yellow-500 bg-zinc-800'>
        <h1 className="text-2xl">
          <Link href="/">
            Star Wars Info
          </Link>
        </h1>
        <ul className='flex items-center justify-center'>
          <li>
            <Link href="/planets">
              <a className='px-4 py-3 m-2 text-yellow-500 transition duration-300 border-2 border-transparent border-solid rounded outline-none hover:border-yellow-500'>Planets</a>
            </Link>
          </li>
          <li>
            <Link href="/people">
              <a className='px-4 py-3 m-2 text-yellow-500 transition duration-300 border-2 border-transparent border-solid rounded outline-none hover:border-yellow-500'>People</a>
            </Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar