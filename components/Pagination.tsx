import Link from "next/link"

interface PaginationProps {
    page: number
    link: string
}

const Pagination = ({page, link}: PaginationProps) => {
  return (
    <ul className="flex items-center justify-center">
        <li className="p-1 m-1 transition duration-300 hover:text-yellow-500">
            <Link href={`${link}?page=${page - 1}`}>
                <a >Prev</a>
            </Link>
        </li>
        <li className="p-1 m-1">{page}</li>
        <li className="p-1 m-1 transition duration-300 hover:text-yellow-500">
            <Link href={`${link}?page=${page + 1}`}>
                <a >Next</a>
            </Link>
        </li>
    </ul>
  )
}

export default Pagination