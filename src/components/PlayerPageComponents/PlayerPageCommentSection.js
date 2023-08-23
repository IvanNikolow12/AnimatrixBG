// import { useEffect, useState } from 'react';
// import { BsPlus } from 'react-icons/bs'

import AddCommentForm from '../AddCommentForm';
import { emailLoader } from '../../util/auth';

import './PlayerPageCommentSection.css';

function PlayerPageCommentSection({anime}) {

    return <>
    <section className="player-page-add-comment-section">
        <p className="player-page-add-comment-header"><button className='add-comment-button'>Comment</button></p>
        <hr/>
        {!emailLoader() && <p className='leave-comment'>Please <a className="player-page-add-comment-button" href="/auth?mode=login">Login</a> to leave a comment.</p> }
        {emailLoader() && <AddCommentForm anime={anime}/>}
    </section>
    </>
}

export default PlayerPageCommentSection;