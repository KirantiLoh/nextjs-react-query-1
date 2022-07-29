
import { Person, Planet } from 'typings'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Planets from 'components/Planets'

interface PlanetData {
    count: number
    next: string | null
    previous: string | null
    results: Planet[]
}

const getPlanets = async (): Promise<PlanetData> => {
  const res = await axios.get(`https://swapi.dev/api/planets`)
  return res.data
}
  
const PlanetPage = () => {

  const { data, status } = useQuery(['planets'], () => getPlanets())

  if (status === 'success') {
    return (
      <div className="min-h-screen text-white bg-zinc-900">
        <h2 className="pt-3 pl-3 text-4xl">List of planets</h2>
        <Planets data={data.results} />
      </div>
    )
  }

  if (status === 'loading') {
    return (
        <div className="min-h-screen text-white bg-zinc-900">
            <h2 className="pt-3 pl-3 text-4xl">Loading...</h2>
        </div>
    )
  }
  
}

export default PlanetPage

export const getServerSideProps = async () => {

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['planets'], () => getPlanets())

  return {
      props: {
          dehydratedState: dehydrate(queryClient)
      }
  }
}