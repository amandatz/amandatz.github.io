import { formatDate } from '~/lib/dates'
import { getPostBySlug, getPostsSlugs } from '~/lib/posts'
import { MdxComponent, BlogContainer, ButtonLink } from '~/components'

import { HiArrowLongLeft } from "react-icons/hi2";

export const generateStaticParams = async () => getPostsSlugs()

export default async function Page({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug)

    return <BlogContainer>
        <BlogContainer.LeftSidebar>
            <div className='hidden lg:block sticky py-9 top-0'>
                <ButtonLink href='/'><HiArrowLongLeft />See all posts</ButtonLink>
            </div>
        </BlogContainer.LeftSidebar>
        <BlogContainer.Main>
            <div>
                <header>
                    <h1 className='text-5xl lg:text-6xl my-9'>{post.title}</h1>
                    <small>{formatDate(post.date)}</small>
                </header>
                <article className='article-content prose prose-invert max-w-none mt-9'>
                    <MdxComponent code={post.body.code} />
                </article>
            </div>
        </BlogContainer.Main>
        <BlogContainer.RightSidebar>

        </BlogContainer.RightSidebar>
    </BlogContainer>

}