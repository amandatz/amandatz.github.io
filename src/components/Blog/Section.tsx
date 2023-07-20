type SectionProps = {
    children: React.ReactNode
}

const Section = ({ children }: SectionProps) => {
    return <section className='w-full'>
        <h1 className=''>Blog</h1>
        <div className='grid gap-3 w-full'>{children}</div>
    </section>
}

export default Section