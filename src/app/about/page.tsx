import { MainContainer, Anchor } from '~/components'

export default function About() {
    return <MainContainer>
        <h1 className='font-serif text-4xl font-bold my-8'>About me</h1>
        <p className='mb-4'> I&apos;m Amanda, a software developer based in Brazil.</p>
        <p className='mb-4'>You can find me on&nbsp;
            <Anchor href='https://www.linkedin.com/in/amanda-zanette/'>Github</Anchor>
            &nbsp;and&nbsp;
            <Anchor href='https://github.com/amandatz'>LinkedIn</Anchor>.
        </p>
        <p className='mb-4'>Feel free to reach out, and let&apos;s have a chat!</p>
    </MainContainer>
}