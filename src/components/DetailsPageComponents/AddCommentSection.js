import AddCommentForm from '../AddCommentForm';
import { emailLoader } from '../../util/auth';

import './AddCommentSection.css'

function AddCommentSection({anime}) {
    return <>
        <section className="details-page-add-comment-section">
        <p className="details-page-add-comment-header"><button className='add-comment-button'>Comment</button></p>
        <hr/>
        {!emailLoader() && <p className='leave-comment'>Please <a className="details-page-add-comment-button" href="/auth?mode=login">Login</a> to leave a comment.</p> }
        {emailLoader() && <AddCommentForm anime={anime}/>}
    </section>
    </>
}

export default AddCommentSection;