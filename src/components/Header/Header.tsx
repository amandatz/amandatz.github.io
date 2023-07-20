import { ButtonLink } from '~/components';

const Header = () => {
    return <header className='bg-black top-0 flex flex-col items-center border-b border-white/10 bg-blog'>
        <nav className='container p-4'>
            <div></div>
            <div className='flex w-full justify-between items-center'>
                <div>
                    {/* <Button.Icon><BiLogoGithub /></Button.Icon> */}
                </div>
                <div className='flex gap-2'>
                    <ButtonLink href="/about">About</ButtonLink>
                    <ButtonLink href="/">Blog</ButtonLink>
                </div>
            </div>
            <div></div>
        </nav>
    </header>;
};

export default Header;