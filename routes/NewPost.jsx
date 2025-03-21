import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Link, Form, redirect } from 'react-router-dom';
import { API_URL } from '../utils/constants';

function NewPost(props) {
    return (
        <Modal>
            <Form className={classes.form} method='POST' >
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} name='body' />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" required name='author' />
                </p>
                <p className={classes.actions}>
                    <Link to="..">Cancel</Link>
                    <button type="submit">Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export const action = async (data) => {
    const formData = await data.request.formData()
    const postData = Object.fromEntries(formData)

    const response = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return redirect('/')
}