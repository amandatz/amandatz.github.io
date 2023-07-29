import { MainContainer } from '~/components'

export default function About() {
    return <MainContainer>
        <h1 className='font-serif text-4xl my-9'>About me</h1>
        <p className='mb-4'> I&apos;m Amanda, a software developer based in Brazil.</p>
        <p className='mb-4'>You can find me on&nbsp;
            <a className='underline hover:text-royalblue transform ease-in-out' href='https://www.linkedin.com/in/amanda-zanette/' target="_blank">Github</a>
            &nbsp;and&nbsp;
            <a className='underline hover:text-royalblue transform ease-in-out' href='https://github.com/amandatz' target="_blank">LinkedIn</a>.
        </p>
        <p className='mb-4'>Feel free to reach out, and let&apos;s have a chat!</p>
    </MainContainer>
}