import { Person } from "typings"
import axios from "axios"
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import Pagination from "components/Pagination"
import People from "components/People"
import { GetServerSidePropsContext } from "next"

interface PeopleData {
    count: number
    previous: string | null
    next: string | null
    results: Person[] | []
}

const getPeople = async (page: string): Promise<PeopleData> => {
    const res = await axios.get(`https://swapi.dev/api/people/?page=${page}`)
    return res.data
}

const PeoplePage = () => {

    const router = useRouter()

    const page = router.query?.page as string || '1'


    const { data, status } = useQuery(['people', page],() => getPeople(page), { keepPreviousData: true })

    if (status === 'success') {
        return (
          <div className="min-h-screen text-white bg-zinc-900">
            <h2 className="pt-3 pl-3 text-4xl">List of people</h2>
            <People data={data?.results || []} />
            <Pagination page={Number(page)} link="/people" />
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

export default PeoplePage

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const page = ctx.query?.page as string || '1'

    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['people', page],() => getPeople(page))

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}