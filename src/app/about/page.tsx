import { MainContainer, Anchor } from '~/components'
import aboutMe from '~/data/about-me.json' 

export default function About() {
    return <MainContainer>
        <h1 className='font-serif text-4xl font-bold my-8'>About me</h1>
        <p className='mb-4'> I&apos;m Amanda, a software developer based in Brazil.</p>
        <p className='mb-4'>You can find me on&nbsp;
            <Anchor href={aboutMe.github}>Github</Anchor>
            &nbsp;and&nbsp;
            <Anchor href={aboutMe.linkedin}>LinkedIn</Anchor>.
        </p>
        <p className='mb-4'>Feel free to reach out, and let&apos;s have a chat!</p>
    </MainContainer>
}