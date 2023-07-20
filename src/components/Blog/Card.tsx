import Link from 'next/link';
import { formatDate } from '~/lib/dates';

type CardProps = {
    Link: string;
    Title: string;
    Date: string;
    Description: string;
    Tags: string[];
};

const Card = (props: CardProps) => {
    return <Link href={props.Link}>
        <div className='cursor-pointer grid gap-3 transition hover:ring-white/10 hover:shadow-md group rounded-md py-4 p-5 bg-neutral-950 ring-1 ring-neutral-950 shadow-sm'>
            <h2 className='font-serif transition ease-in-out group-hover:text-royalblue text-2xl'>{props.Title}</h2>
            <small className='font-sans text-neutral-400 text-xs'>{formatDate(props.Date)}</small>
            <p className='text-neutral-400 line-clamp-2'>{props.Description}</p>
            <div className='flex flex-wrap gap-2'>
                {props.Tags?.map((tag, index) => {
                    return <div key={index} className='rounded bg-royalblue py-0 px-2 text-white'>
                        <small>{tag}</small>
                    </div>;
                })}
            </div>
        </div>
    </Link>
};

export default Card;