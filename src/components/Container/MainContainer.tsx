import React from 'react'

type ContainerProps = {
    children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
    return <main className='container w-full lg:gap-8 my-4 mx-auto'>
        <div></div>
        <div>{children}</div>
        <div></div>
    </main>
}

export default Container