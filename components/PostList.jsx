import NewPost from "./NewPost"
import Post from "./Post"
import classes from "./PostsList.module.css"
import Modal from "./Modal"
import { useEffect, useState } from "react"
import { API_URL } from "../utils/constants"

const PostList = ({isPosting, onStopPosting}) => {
    const [postArray, setPostArray] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
      const fetchPosts = async () => {
        setIsFetching(true)
        const response = await fetch(`${API_URL}/posts`)
        const resData = await response.json()

        setPostArray(resData.posts)
        setIsFetching(false)
      }

      fetchPosts()
    }, [])
    
    const addPostHandler = (postData) => {
        fetch(`${API_URL}/posts`, {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setPostArray((previousPosts) => {
          return [ postData, ...previousPosts]
        })
    }
    return (
        <>
            {isPosting && (<Modal onClose={onStopPosting}>
                <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
            </Modal>)}
            {!isFetching && postArray.length > 0 && (<ul className={classes.post}>
                {postArray.map((post, index) => (
                    <Post key={index} author={post.author} body={post.body} />
                ))}
            </ul>)}
            {!isFetching && postArray.length === 0 && (<div className={classes.nopost}>
                <h2 >No posts yet</h2>
            </div>)}
            {isFetching && (<div className={classes.nopost}>
                <h2>Loading....</h2>
            </div>)}
        </>
    )
}

export default PostList