import { defineDocumentType, makeSource } from "contentlayer/source-files"

import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug";

export const AboutMe = defineDocumentType(() => ({
    name: "AboutMe",
    filePathPattern: `me/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true }
    }
}))

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `posts/*/content.mdx`,
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        description: { type: "string", required: true },
        date: { type: "date", required: true },
        tags: { type: "list", of: { type: "string", } },
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (doc) => doc._raw.flattenedPath.split("/")[1],
        },
    },  
}))

export default makeSource({
    contentDirPath: "./src/data/",
    documentTypes: [Post, AboutMe],
    mdx: {
        rehypePlugins: [
            rehypeSlug,
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["anchor"],
                    },
                },
            ],
        ],
    }
})