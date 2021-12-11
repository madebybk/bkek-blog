import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import articleStyles from "../../styles/Article.module.css"


const { GHOST_CONTENT_API_KEY, GHOST_BLOG_URL } = process.env;

const getPost = async (slug: string) => {
    try {
        const res = await axios.get(`${GHOST_BLOG_URL}ghost/api/v3/content/posts/slug/${slug}?key=${GHOST_CONTENT_API_KEY}&fields=title,slug,html`);
        const posts = res.data.posts;
        return posts[0];
    } catch (err) {
        console.log(err)
    }
}

export const getStaticProps = async ({ params }) => {
    const post = await getPost(params.slug)
    return {
        props: { post },
        revalidate: 60
    }
}

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: true
    }
}

type Post = {
    title: string
    html: string
    slug: string
}

const Post: React.FC<{ post: Post }> = ({ post }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <div className={articleStyles.post}>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            <p>
                <Link href='/'>
                    <a>Go back</a>
                </Link>
            </p>
        </div>
    )
}

export default Post