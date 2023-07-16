import React from 'react';
// import { Button } from '@components';
import { BiLogoGithub } from "react-icons/bi";
import styles from './Header.module.scss';

const Header: React.FC = () => {
    return <header className={styles.header}>
        <nav className={styles.navbar}>
            <div className={styles.leftColumn}>
                {/* <Button.Icon><BiLogoGithub /></Button.Icon> */}
            </div>
            <div className={styles.rightColumn}>
                {/* <Button.Standard> Blog </Button.Standard>
                <Button.Standard> About </Button.Standard> */}
            </div>
        </nav>
    </header>;
};

export default Header;