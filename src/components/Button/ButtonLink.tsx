import Link from 'next/link'

type ButtonLinkProps = {
    href: string
    children: React.ReactNode
    className?: string
}

const ButtonLink = ({ href, children, className, ...props }: ButtonLinkProps & React.HTMLAttributes<HTMLAnchorElement>) => {
    return <Link href={href} className={`w-fit gap-2 py-0.5 px-2 transition ease-in-out rounded hover:bg-white/10 ${className || ''}`} {...props}>
        {children}
    </Link>
}

export default ButtonLink


