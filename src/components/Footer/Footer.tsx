import styles from './Footer.module.scss';

import { ButtonLink } from '@components';
import { BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi';

const _iconSize = 28;

const Footer = () => {
    return <footer className={styles.footer}>
        <div className={styles.container}>
            <ButtonLink href='/'><BiLogoGithub size={_iconSize} /></ButtonLink>
            <ButtonLink href='/'><BiLogoLinkedin size={_iconSize} /></ButtonLink>
        </div>
    </footer>;
};

export default Footer;