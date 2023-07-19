import { allPosts } from 'contentlayer/generated'

import { MdxComponent } from '~/components'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post.slugAsParams }))

export default async function Page({ params }: { params: { slug: string } }) {
    const post = allPosts.find((post) => post.slugAsParams === params.slug)

    if (!post) throw new Error(`No post found for slug: ${params.slug}`)

    return <article>
        <header>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <time>{post.date}</time> 
        </header>
        <main>
            <MdxComponent code={post.body.code} />
        </main>
    </article>
}