import Link from 'next/link';
import styles from './BlogCard.module.scss';

type BlogCardProps = {
    Link: string;
    Title: string;
    Date: string;
    Description: string;
    Tags: string[];
};

const BlogCard = (props: BlogCardProps) => {
    return <Link href={props.Link}>
        <div className={styles.blogCard}>
            <h1 className={styles.title}>{props.Title}</h1>
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

export default BlogCard;