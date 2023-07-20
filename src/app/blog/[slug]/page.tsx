import { getPostBySlug, getPostsSlugs } from '~/lib/posts'

import { MdxComponent } from '~/components'

export const generateStaticParams = async () => getPostsSlugs()

export default async function Page({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug)

    return <div>
        <header>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <time>{post.date}</time>
        </header>
        <article className='article-content prose prose-invert max-w-none'>
            <MdxComponent code={post.body.code} />
        </article>
    </div>
}