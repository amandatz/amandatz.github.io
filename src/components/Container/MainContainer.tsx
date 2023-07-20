import React from 'react'

type ContainerProps = {
    children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
    return <main className='container w-full lg:gap-8 py-2'>
        <div></div>
        {children}
        <div></div>
    </main>
}

export default Container