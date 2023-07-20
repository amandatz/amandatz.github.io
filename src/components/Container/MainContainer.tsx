import React from 'react'

type ContainerProps = {
    children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
    return <main className='gap-[28px] container w-full p-4 justify-center items-center mx-[auto]'>
        <div></div>
        {children}
        <div></div>
    </main>
}

export default Container