import Link from 'next/link'

import { Planet } from 'typings'

interface PlanetsProps {
  data: Planet[] | []
}

const Planets = ({data}: PlanetsProps) => {
  return (
    <ul className="w-full p-2">
      {data.map((planet, index) => {
        return (
          <li key={index} className="p-4 my-3 text-white rounded bg-zinc-800">
            <h3 className="text-2xl text-yellow-500">
              <Link href={`/planets/${index+1}`}>
                <a className="">{planet.name}</a>
              </Link>
            </h3>
            <div className="flex flex-wrap">
              <p className="flex-[400px] min-w-[150px] whitespace-nowrap">Population : {planet.population}</p>
              <p className="flex-[400px] min-w-[150px] whitespace-nowrap">Terrain : {planet.terrain}</p>
              <p className="flex-[400px] min-w-[150px] whitespace-nowrap">Diameter : {planet.diameter}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Planets