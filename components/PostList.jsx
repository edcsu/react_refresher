import { useState } from "react"
import NewPost from "./NewPost"
import Post from "./Post"
import classes from "./PostsList.module.css"

const PostList = () => {
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
            <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler}/>
            <ul className={classes.post}>
                <Post name={enteredAuthor} body={enteredBody} />
                <Post name='Edwin' body='Next.js is awesome' />
            </ul>
        </>
    )
}

export default PostList