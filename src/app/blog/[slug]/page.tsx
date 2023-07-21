import { formatDate } from '~/lib/utils'
import { getPostBySlug, getPostsSlugs } from '~/lib/posts'
import { MdxComponent, BlogContainer, ButtonLink } from '~/components'

import { HiArrowLongLeft } from "react-icons/hi2"

export const generateStaticParams = async () => getPostsSlugs()

export const dynamicParams = false

export default async function Page({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug)

    return <BlogContainer>
        <BlogContainer.LeftSidebar>
            <div className='hidden lg:block sticky py-9 top-0'>
                <ButtonLink href='/' className='flex items-center'><HiArrowLongLeft />See all posts</ButtonLink>
            </div>
        </BlogContainer.LeftSidebar>
        <BlogContainer.Main>
            <article className='article-content max-w-none mt-9 prose prose-invert'>
                <header>
                    <h1 className='text-5xl lg:text-6xl my-9'>{post.title}</h1>
                    <small>{formatDate(post.date)}</small>
                </header>
                <MdxComponent code={post.body.code} />
            </article>
        </BlogContainer.Main>
        <BlogContainer.RightSidebar>
            {/* table of contents */}
        </BlogContainer.RightSidebar>
    </BlogContainer>
}