import Post from "./Post"
import classes from "./PostsList.module.css"
import { API_URL } from "../utils/constants"
import { useLoaderData } from "react-router-dom"

const PostList = ({}) => {
    const posts = useLoaderData()

    const addPostHandler = (postData) => {
        fetch(`${API_URL}/posts`, {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
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