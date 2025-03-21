import Post from "./Post"
import classes from "./PostsList.module.css"
import { useLoaderData } from "react-router-dom"

const PostList = ({}) => {
    const posts = useLoaderData()

    return (
        <>
            {posts.length > 0 && (<ul className={classes.post}>
                {posts.map((post, index) => (
                    <Post key={index} author={post.author} body={post.body} />
                ))}
            </ul>)}
            {posts.length === 0 && (<div className={classes.nopost}>
                <h2 >No posts yet</h2>
            </div>)}
        </>
    )
}

export default PostList