import { ButtonLink } from '~/components';
import { BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi';

const ICON_SIZE = 28;

const Footer = () => {
    return <footer className='border-t border-white/10 p-4'>
        <div className='flex justify-center gap-2'>
            {/* <ButtonLink href='/'><BiLogoGithub size={ICON_SIZE} /></ButtonLink>
            <ButtonLink href='/'><BiLogoLinkedin size={ICON_SIZE} /></ButtonLink> */}
        </div>
    </footer>;
};

export default Footer;