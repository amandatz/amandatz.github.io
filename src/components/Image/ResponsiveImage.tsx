'use client'

import Image, { ImageProps } from 'next/image'

const ResponsiveImage = ({ src,
    alt,
    className,
    width,
    height,
    ...rest }: ImageProps) => {
    return <Image
        className={className}
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...rest}
    />
}

export default ResponsiveImage