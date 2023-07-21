import Link from 'next/link'
import { formatDate } from '~/lib/utils'

type CardProps = {
    Link: string
    Title: string
    Date: string
    Description: string
}

const Card = (props: CardProps) => {
    return <Link href={props.Link}>
        <div className='transition shadow-sm group'>
            <small className='font-sans text-neutral-400 text-xs'>{formatDate(props.Date)}</small>
            <h2 className='mt-2 mb-1 font-serif transition ease-in-out group-hover:text-royalblue text-3xl'>{props.Title}</h2>
            <p className='text-neutral-400 line-clamp-2'>{props.Description}</p>
        </div>
    </Link>
}

export default Card