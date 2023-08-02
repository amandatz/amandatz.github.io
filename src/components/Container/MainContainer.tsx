import React from 'react'

type ContainerProps = {
    children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
    return <main className='container w-full my-4 mx-auto'>
        <div className=''>{children}</div>
    </main>
}

export default Container