import Post from "./Post"
import classes from "./PostsList.module.css"

const PostList = () => {
    return (
        <ul className={classes.post}>
            <Post name='Keith' body='React.js is awesome' />
            <Post name='Edwin' body='Next.js is awesome' />
        </ul>
    )
}

export default PostList