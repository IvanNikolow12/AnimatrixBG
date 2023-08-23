import { Form, json, redirect, useNavigate, useRouteLoaderData } from "react-router-dom";
import './AddCommentForm.css'
import { emailLoader } from "../util/auth";

function AddCommentForm({anime}) {
  const animeData = useRouteLoaderData('anime-details');

    const navigate = useNavigate();

    function cancelHandler() {
        navigate('..')
    }
    return <>
    <Form method="post" className="comment-form">
        <div className="inputBox-email"> 
        <input type="email" name='email' defaultValue={emailLoader()} required/><i>Email</i> 
        </div> 
        <div className="inputBox-theme"> 
        <input type="text" name='theme' defaultValue={anime ? `${anime.title}` : ''} required/><i>Theme</i> 
        </div> 
        <div className="textAreaBox"> 
        <textarea id="commentFormTextArea" type="text" name='content' placeholder="Share what you think..." required/> 
        </div> 
        <input className="image-url" name="imageUrl" defaultValue={animeData.animeImageUrl}></input>
        <button type="submit" className="comment-form-submit-button">Send</button>
        <button type='button' className="comment-form-cancel-button" onClick={cancelHandler}>Cancel</button>
    </Form>
    </>
}

export default AddCommentForm;

export async function action({params, request}) {
    
    const data = await request.formData();

    const date = new Date();

    const commentBody = {
        email: data.get('email'),
        theme: data.get('theme'),
        content: data.get('content'),
        date: date.toUTCString(),
        imageUrl: data.get('imageUrl')
    }

    const url = `https://animeworld-5e1e6-default-rtdb.europe-west1.firebasedatabase.app/comments.json`;

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(commentBody),
        headers: {
            'Content-type': 'application/json'
        }
    });

    if(!response.ok) {
        return json({message: 'Cloud not fetch the comment'}, {status: 500})
    }

    const textArea = document.getElementById('commentFormTextArea');
    textArea.value = ''

    return redirect(`..`);
}