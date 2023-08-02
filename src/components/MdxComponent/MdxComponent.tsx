'use client'

import Link from 'next/link'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { ResponsiveImage, Anchor } from '~/components'

const components = {
    ResponsiveImage,
    h1: ({ ...props }) => (
        <h2
            className='font-serif xl:text-4xl text-3xl'
            {...props}
        />
    ),
    h2: ({ ...props }) => (
        <h3
            className='font-sans xl:text-xl uppercase'
            {...props}
        />
    ),
    h4: ({ ...props }) => <h4 className='font-sans font-bold text-lg' {...props} />,
    a: ({ href = '', ...props }) => {
        if (href.startsWith('http'))
            return <Anchor href={href} {...props} />

        return <Link
            href={href}
            className='underline transition ease-in-out underline-offset-4 px-0.5 rounded hover:bg-royalblue'
            {...props}
        />
    }
}

const codePrefix = `
if (typeof process === 'undefined') {
  globalThis.process = { env: {} }
}
`

type MdxComponentProps = {
    code: string
}

const MdxComponent = ({ code, ...props }: MdxComponentProps) => {
    const Component = useMDXComponent(codePrefix + code)
    return <Component {...props} components={components} />
}

export default MdxComponent