import React from 'react'

type ContainerProps = {
    children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
    return <main className='container flex-1 w-full my-4 mx-auto'>
        <div>{children}</div>
    </main>
}

export default Container