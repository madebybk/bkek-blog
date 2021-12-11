import PostItem from "./PostItem";
import articleStyles from "../styles/Article.module.css"

const PostList = ({ posts }) => {
    return (
        <div className={articleStyles.grid}>
            {posts.map((post: any) => <PostItem post={post} key={post.slug} />)}
        </div>
    )
}

export default PostList
