import { useState } from "react"
import NewPost from "./NewPost"
import Post from "./Post"
import classes from "./PostsList.module.css"
import Modal from "./Modal"

const PostList = ({isPosting, onStopPosting}) => {
    const [enteredBody, setEnteredBody] = useState('')
    const [enteredAuthor, setEnteredAuthor] = useState('')
    
    const changeBodyHandler = (event) => {
        setEnteredBody(event.target.value)
    }
    const changeAuthorHandler = (event) => {
        setEnteredAuthor(event.target.value)
    }

    return (
        <>
            {isPosting && <Modal onClose={onStopPosting}>
                <NewPost 
                    onBodyChange={changeBodyHandler} 
                    onAuthorChange={changeAuthorHandler}
                    onCancel={onStopPosting}
                />
            </Modal>}
            <ul className={classes.post}>
                <Post name={enteredAuthor} body={enteredBody} />
                <Post name='Edwin' body='Next.js is awesome' />
            </ul>
        </>
    )
}

export default PostList