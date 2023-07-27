import { defineDocumentType, makeSource } from 'contentlayer/source-files'

import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypeMathJax from 'rehype-mathjax'
import remarkMath from 'remark-math'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `posts/*/content.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        date: { type: 'date', required: true },
        tags: { type: 'list', of: { type: 'string', }, required: true },
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: (doc) => doc._raw.flattenedPath.split('/')[1],
        },
    },
}))

export default makeSource({
    contentDirPath: './src/data/',
    documentTypes: [Post],
    mdx: {
        remarkPlugins:[
            remarkMath
        ],
        rehypePlugins: [
            rehypeSlug,
            rehypeMathJax,
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ['anchor'],
                    },
                },
            ],
        ],
    }
})