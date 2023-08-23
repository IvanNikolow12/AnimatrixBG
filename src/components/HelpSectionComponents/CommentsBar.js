import { json } from "react-router-dom";

import './CommentsBar.css';
import { useEffect, useState } from "react";
import Avatar from '../../img/user.png'

function CommentsBar() {
  const [allComments, setAllComments] = useState('');

  useEffect(() => {CommentsLoader().then(data => setAllComments(data))}, []);
  const allCommentsArray = Object.entries(allComments);

  const lastComments = [];
  for(let i = 0; i <= 4; i++) {
    let currentComment = allCommentsArray.pop();
    lastComments.push(currentComment);
    i++;
  }

    return <>
    <div className="comments-bar">
              <p className="comments-bar-icons-header">Last comments</p>
            <div className="comments-bar-comments-section">
            <hr className="delim"/>

              <ul>
                {allComments && lastComments.map(comment => <li className="comments-bar-comment-item" key={comment[0]}>
                      <div className="wpdiscuz-widget-popular-comment-author">
                            <div className="comment-avatar-box">
                              <img className="comment-avatar-box-image" src={Avatar} alt="avatar"/>
                            </div>
                          <div className="popular-comment-author-body">
                            <a href={`/`}>{comment[1].theme}</a>
                            <p className="wpdwd-recent-comment-date">
                              {comment[1].date} from {comment[1].email.split('@')[0]}
                            </p>
                            <div className="wpdwd-recent-comment-content">
                              <p>{comment[1].content}</p>
                            </div>
                          </div>
                      </div>
                      <hr className="delim"/>
                </li>) }
              </ul>
            </div>     
          </div>
    </>
}

export default CommentsBar;

async function CommentsLoader() {

  const url = `https://animeworld-5e1e6-default-rtdb.europe-west1.firebasedatabase.app/comments.json`;

  const response = await fetch(url);

  if(!response) {
    return json({message: 'Cloud not fetch data'}, {status: 500})
  } else return response.json();

}
