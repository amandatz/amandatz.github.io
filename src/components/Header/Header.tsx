import Link from 'next/link';
import { ButtonLink } from '@components';
import styles from './Header.module.scss';

const Header = () => {
    return <header className={styles.header}>
        <nav className={styles.navbar}>
            <div>
                {/* <Button.Icon><BiLogoGithub /></Button.Icon> */}
            </div>
            <div>
                <ButtonLink href="/about">About</ButtonLink>
                <ButtonLink href="/blog">Blog</ButtonLink>
            </div>
        </nav>
    </header>;
};

export default Header;