import Link from 'next/link';
import styles from './ButtonLink.module.scss';

type ButtonLinkProps = {
    href: string;
    children: React.ReactNode;
};

const ButtonLink = ({ href, children }: ButtonLinkProps) => {
    return <Link href={href} className={styles.buttonLink}>
        {children}
    </Link>;
};

export default ButtonLink;


