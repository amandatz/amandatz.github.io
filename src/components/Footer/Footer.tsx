import { ButtonLink } from '~/components'

const Footer = () => {
    return <footer className='border-t border-white/10 p-4'>
        <div className='container flex mx-auto justify-end gap-2'>
            <ButtonLink href='https://www.linkedin.com/in/amanda-zanette/'>Github</ButtonLink>
            <ButtonLink href='https://github.com/amandatz'>LinkedIn</ButtonLink>
        </div>
    </footer>
}

export default Footer