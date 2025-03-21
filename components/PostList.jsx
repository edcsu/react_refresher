import NewPost from "./NewPost"
import Post from "./Post"
import classes from "./PostsList.module.css"
import Modal from "./Modal"
import { useState } from "react"

const PostList = ({isPosting, onStopPosting}) => {
    const [postArray, setPostArray] = useState([])

    const addPostHandler = (postData) => {
        setPostArray((previousPosts) => {
          return [ postData, ...previousPosts]
        })
    }
    return (
        <>
            {isPosting && (<Modal onClose={onStopPosting}>
                <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
            </Modal>)}
            <ul className={classes.post}>
                {postArray.map((post, index) => (
                    <Post key={index} author={post.author} body={post.body} />
                ))}
            </ul>
        </>
    )
}

export default PostList