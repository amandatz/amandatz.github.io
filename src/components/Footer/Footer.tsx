import { ButtonLink } from '~/components';
import { BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi';

const _iconSize = 28;

const Footer = () => {
    return <footer className='border-t border-white/10 p-4'>
        <div className='flex justify-center gap-2'>
            <ButtonLink href='/'><BiLogoGithub size={_iconSize} /></ButtonLink>
            <ButtonLink href='/'><BiLogoLinkedin size={_iconSize} /></ButtonLink>
        </div>
    </footer>;
};

export default Footer;