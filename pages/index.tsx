import PostList from '../components/PostList';
import axios from 'axios';

const { GHOST_CONTENT_API_KEY, GHOST_BLOG_URL } = process.env;

type Post = {
  title: string
  slug: string
  custom_excerpt: string
}

const getPosts = async () => {
  try {
    const res = await axios.get(`${GHOST_BLOG_URL}ghost/api/v3/content/posts/?key=${GHOST_CONTENT_API_KEY}&fields=title,slug,custom_excerpt`);
    return res.data.posts;
  } catch (err) {
    console.log(err);
  }
}

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    props: {
      posts: posts || null
    },
    revalidate: 60
  }
}

const Home: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props;
  return (
    <div>
      <PostList posts={posts} />
    </div>
  )
}

export default Home;