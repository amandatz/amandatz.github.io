import { ButtonLink } from '~/components';

const Header = () => {
    return <header className='bg-black border-b border-white/10'>
        <nav className='container w-full lg:gap-8 my-4 mx-auto'>
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