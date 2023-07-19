import Card from "./Card";
import Section from "./Section";

// import { getAllPostsMeta } from '~/lib/posts';

const Blog = async () => {
    // var posts = await getAllPostsMeta();
    return <Section>
        {/* {posts?.map((post, index) => {
            return <Card
                key={index}
                Title={post.title}
                Description={post.description}
                Date={post.date}
                Link={`/blog/${post.slug}`}
                Tags={post.tags}
            />;
        })} */}
    </Section>;
};

export default Blog;