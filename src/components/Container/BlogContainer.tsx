import React from 'react'

type BlogContainerProps = {
    children: React.ReactNode
}

const BlogContainer = ({ children }: BlogContainerProps) => {
    return <main className='container-grid w-full lg:gap-8 my-4 mx-auto'>
        {children}
    </main>
}

BlogContainer.LeftSidebar = ({ children }: BlogContainerProps) => <div className='justify-self-end'>{children}</div>
BlogContainer.Main = ({ children }: BlogContainerProps) => <div>{children}</div>
BlogContainer.RightSidebar = ({ children }: BlogContainerProps) => <div>{children}</div>

export default BlogContainer