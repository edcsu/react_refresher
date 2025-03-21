import NewPost from "./NewPost"
import Post from "./Post"
import classes from "./PostsList.module.css"
import Modal from "./Modal"

const PostList = ({isPosting, onStopPosting}) => {
    
    return (
        <>
            {isPosting && (<Modal onClose={onStopPosting}>
                <NewPost onCancel={onStopPosting} />
            </Modal>)}
            <ul className={classes.post}>
                <Post name='Edwin' body='Next.js is awesome' />
            </ul>
        </>
    )
}

export default PostList