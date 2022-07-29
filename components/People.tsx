
import Link from 'next/link'

import { Person } from 'typings'

interface PeopleProps {
  data: Person[] | []
}

const People = ({data}: PeopleProps) => {
  return (
    <ul className="w-full p-2">
    {data.map((person, index) => {
      return (
        <li key={index} className="p-4 my-3 text-white rounded bg-zinc-800">
          <h3 className="text-2xl text-yellow-500">
            <Link href={`/planets/${index+1}`}>
              <a className="">{person.name}</a>
            </Link>
          </h3>
          <div className="flex flex-wrap">
            <p className="flex-[400px] min-w-[150px] whitespace-nowrap">Birth year : {person.birth_year}</p>
            <p className="flex-[400px] min-w-[150px] whitespace-nowrap">Gender : {person.gender}</p>
            <p className="flex-[400px] min-w-[150px] whitespace-nowrap">Mass : {person.mass}</p>
            <p className="flex-[400px] min-w-[150px] whitespace-nowrap">Height : {person.height}</p>
          </div>
        </li>
      )
    })}
  </ul>
  )
}

export default People