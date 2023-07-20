import { MainContainer, Blog } from '~/components'
import { getAllPosts } from '~/lib/posts'

export default function Home() {
  const posts = getAllPosts()

  return <MainContainer>
    <Blog.Section>
      {posts?.map((post, index) => {
        return <Blog.Card
          key={index}
          Title={post.title}
          Description={post.description}
          Date={post.date}
          Link={`/blog/${post.slug}`}
          Tags={post.tags}
        />;
      })}
    </Blog.Section>;
  </MainContainer>
}
