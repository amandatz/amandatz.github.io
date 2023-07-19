import { defineDocumentType, makeSource } from "contentlayer/source-files"

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `posts/*/content.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
        },
        date: {
            type: "string",
            required: true,
        },
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (doc) => `/${doc._raw.flattenedPath}`,
        },
        slugAsParams: {
            type: "string",
            resolve: (doc) => doc._raw.flattenedPath.split("/")[1],
        },
    },  
}))

export default makeSource({
    contentDirPath: "./src/data/",
    documentTypes: [Post],
})