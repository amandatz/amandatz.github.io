import React from 'react'
import Link from 'next/link'
import { useMDXComponent } from 'next-contentlayer/hooks'

const components = {
    a: ({ href = '', ...props }) => (
        <Link
            href={href}
            className="clickable font-medium underline underline-offset-4"
            {...props}
        />
    ),
}

type MdxComponentProps = {
    code: string
}

const MdxComponent = ({ code, ...props }: MdxComponentProps) => {
    const Component = useMDXComponent(code)
    return <Component {...props} components={components}/>
}

export default MdxComponent