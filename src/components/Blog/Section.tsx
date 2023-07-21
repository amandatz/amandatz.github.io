type SectionProps = {
    children: React.ReactNode
}

const Section = ({ children }: SectionProps) => {
    return <section className='w-full'>
        <div className='grid gap-8 w-full'>{children}</div>
    </section>
}

export default Section