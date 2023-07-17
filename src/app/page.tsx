import { Blog } from '@components';
import HelloWord from './hello.mdx';

const placeholderList = [
  {
    Link: '#',
    Title: 'The Wonders of Quantum Mechanics',
    Date: '2023-07-01',
    Description: 'Exploring the fascinating world of quantum mechanics and its implications in modern physics.',
    Tags: ['Quantum Physics', 'Science', 'Physics'],
  },
  {
    Link: '#',
    Title: 'The Marvels of Astronomy: Exploring the Cosmos',
    Date: '2023-07-02',
    Description: 'Unraveling the mysteries of the universe, from black holes to distant galaxies.',
    Tags: ['Astronomy', 'Space', 'Cosmology'],
  },
  {
    Link: '#',
    Title: 'Advancements in Genetic Engineering',
    Date: '2023-07-03',
    Description: 'Examining the latest breakthroughs in genetic engineering and their potential applications. Examining the latest breakthroughs in genetic engineering and their potential applications. Examining the latest breakthroughs in genetic engineering and their potential applications.',
    Tags: ['Genetics', 'Biotechnology', 'Science'],
  },
  {
    Link: '#',
    Title: 'The Future of Artificial Intelligence',
    Date: 'July 4, 2023',
    Description: 'A glimpse into the exciting possibilities and ethical considerations of AI technology.',
    Tags: ['Artificial Intelligence', 'Technology', 'Ethics'],
  },
];


export default function Home() {
  return (
    <Blog.Section>
      <HelloWord />
      {placeholderList.map(posts =>
        <Blog.Card
          Link={posts.Link}
          Title={posts.Title}
          Date={posts.Date}
          Description={posts.Description}
          Tags={posts.Tags}
        />
      )}
    </Blog.Section>
  )
}
