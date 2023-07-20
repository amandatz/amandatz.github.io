import Link from 'next/link';

type ButtonLinkProps = {
    href: string;
    children: React.ReactNode;
};

const ButtonLink = ({ href, children }: ButtonLinkProps) => {
    return <Link href={href} className='flex items-center w-fit gap-2 py-0.5 px-2 transition ease-in-out rounded hover:bg-white/10'>
        {children}
    </Link>;
};

export default ButtonLink;


