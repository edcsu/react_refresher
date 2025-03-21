import { useState } from 'react';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';

function NewPost(props) {
    const [enteredBody, setEnteredBody] = useState('')
    const [enteredAuthor, setEnteredAuthor] = useState('')
    
    const changeBodyHandler = (event) => {
        setEnteredBody(event.target.value)
    }
    const changeAuthorHandler = (event) => {
        setEnteredAuthor(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault() 
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        }
        props.onAddPost(postData)
        props.onCancel()
    }

    return (
        <Modal>
            <form className={classes.form} onSubmit={submitHandler}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} onChange={changeBodyHandler} />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" required onChange={changeAuthorHandler} />
                </p>
                <p className={classes.actions}>
                    <Link to="..">Cancel</Link>
                    <button type="submit">Submit</button>
                </p>
            </form>
        </Modal>
    );
}

export default NewPost;