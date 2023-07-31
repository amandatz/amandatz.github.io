import { MainContainer } from '~/components'

export default function About() {
    return <MainContainer>
        <h1 className='font-serif text-4xl font-bold my-8'>About me</h1>
        <p className='mb-4'> I&apos;m Amanda, a software developer based in Brazil.</p>
        <p className='mb-4'>You can find me on&nbsp;
            <a className='underline transition ease-in-out underline-offset-4 px-0.5 rounded hover:bg-royalblue' href='https://www.linkedin.com/in/amanda-zanette/' target="_blank">Github</a>
            &nbsp;and&nbsp;
            <a className='underline transition ease-in-out underline-offset-4 px-0.5 rounded hover:bg-royalblue' href='https://github.com/amandatz' target="_blank">LinkedIn</a>.
        </p>
        <p className='mb-4'>Feel free to reach out, and let&apos;s have a chat!</p>
    </MainContainer>
}