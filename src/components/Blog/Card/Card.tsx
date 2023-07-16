import Link from 'next/link';
import styles from './Card.module.scss';

type CardProps = {
    Link: string;
    Title: string;
    Date: string;
    Description: string;
    Tags: string[];
};

const Card = (props: CardProps) => {
    return <Link href={props.Link}>
        <div className={styles.card}>
            <h2 className={styles.title}>{props.Title}</h2>
            <time className={styles.date}>{props.Date}</time>
            <p className={styles.description}>{props.Description}</p>
            <div className={styles.tagContainer}>
                {props.Tags.map((tag) => {
                    return <div><small>{tag}</small></div>;
                })}
            </div>
        </div>
    </Link>
};

export default Card;