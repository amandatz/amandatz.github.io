import React from 'react';
import { Button } from '@components';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    return <header className={styles.header}>
        <div className={styles.navbar}>
            <div className={styles.leftColumn}>
            </div>
            <h2 className={styles.middleColumn}>
                Amanda Zanette
            </h2>
            <div className={styles.rightColumn}>
                <Button> Blog </Button>
                <Button> About </Button>
            </div>
        </div>
    </header>;
};

export default Header;