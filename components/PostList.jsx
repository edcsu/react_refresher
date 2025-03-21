import NewPost from "./NewPost"
import Post from "./Post"
import classes from "./PostsList.module.css"
import Modal from "./Modal"
import { useState } from "react"

const PostList = ({isPosting, onStopPosting}) => {
    const [postArray, setPostArray] = useState([])

    const addPostHandler = (postData) => {
        setPostArray((previousPosts) => {
            [ postData, ...previousPosts]
        })
    }
    return (
        <>
            {isPosting && (<Modal onClose={onStopPosting}>
                <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
            </Modal>)}
            <ul className={classes.post}>
                <Post name='Edwin' body='Next.js is awesome' />
            </ul>
        </>
    )
}

export default PostList