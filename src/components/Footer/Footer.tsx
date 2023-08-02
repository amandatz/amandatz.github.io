import { ButtonLink } from '~/components'
import aboutMe from '~/data/about-me.json'

const Footer = () => {
    return <footer className='border-t border-white/10 p-4'>
        <div className='container flex mx-auto justify-end gap-2'>
            <ButtonLink target='_blank' href={aboutMe.github}>Github</ButtonLink>
            <ButtonLink target='_blank' href={aboutMe.linkedin}>LinkedIn</ButtonLink>
        </div>
    </footer>
}

export default Footer