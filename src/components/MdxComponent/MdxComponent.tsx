import { useMDXComponent } from 'next-contentlayer/hooks'

type MdxComponentProps = {
    code: string
}

const MdxComponent = ({ code, ...props }: MdxComponentProps) => {
    const Component = useMDXComponent(code)
    return <Component {...props} />
}

export default MdxComponent