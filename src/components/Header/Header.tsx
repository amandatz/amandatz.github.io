import Link from 'next/link';
// import { Button } from '@components';
import styles from './Header.module.scss';

const Header = () => {
    return <header className={styles.header}>
        <nav className={styles.navbar}>
            <div>
                {/* <Button.Icon><BiLogoGithub /></Button.Icon> */}
            </div>
            <div>
                <Link href="/about">About</Link>
                <Link href="/blog">Blog</Link>
            </div>
        </nav>
    </header>;
};

export default Header;