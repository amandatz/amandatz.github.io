import { allPosts } from 'contentlayer/generated'

export const getAllPosts = () => {
    return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export const getPostBySlug = (slug: string) => {
    const post = allPosts.find((post) => post.slug === slug)

    if (!post) throw new Error(`No post found for slug: ${slug}`)

    return post
}

export const getPostsSlugs = () => {
    return allPosts.map((post) => ({ slug: post.slug }))
}

