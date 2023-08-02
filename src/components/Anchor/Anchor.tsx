type AnchorProps = {
    href: string
}

const Anchor = ({ href, ...props }: AnchorProps & React.HTMLAttributes<HTMLAnchorElement>) => {
    return <a href={href} target='_blank' className='underline transition ease-in-out underline-offset-4 px-0.5 rounded hover:bg-royalblue' {...props} />
}

export default Anchor


