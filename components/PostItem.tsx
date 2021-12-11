import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const PostItem = ({ post }) => {
    return (
        <Link href='/post/[slug]' as={`/post/${post.slug}`}>
            <a className={articleStyles.card}>
                <h3>{post.title}</h3>
                <p>{post.custom_excerpt}</p>
            </a>
        </Link>
    )
}

export default PostItem
