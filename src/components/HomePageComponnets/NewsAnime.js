import {FiPlusSquare} from 'react-icons/fi'

import './NewsAnime.css'
import { json } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { checkIsAdmin } from '../../util/auth'

function NewsAnime() {
  const [news, setNews] = useState('');

  useEffect(() => {
  async function loader() {
    const url = `https://animeworld-5e1e6-default-rtdb.europe-west1.firebasedatabase.app/news.json`;
  
    const response = await fetch(url)
    .then(response => response.json()
    .then(data => setNews(data)))
    .catch(err => err.message);
    
      return response;
  }
  loader();
  }, [])

  const newsArray = Object.entries(news);
  const lastThreeNews = [];
  function lastNews() {
    for(let i = 0; i < 3; i++) {
      const currentNew = newsArray.pop();
      lastThreeNews.push(currentNew);
    }
  }
  lastNews();

    return <>
    <div className="news-anime-container">
    <p className="news-anime-header">Last News</p>
    {checkIsAdmin() && <a href='/add-news'><button className='add-news-anime-button'><FiPlusSquare size={20}/></button></a>}
    <div className="news-list">
      <ul>
        {news && lastThreeNews.map(element => <li className="news-list-item" key={element[0]}>
          <img className="news-list-item-image" src={element[1].image} alt="animatrix"/>
          <h3 className="news-list-item-header">{element[1].theme}</h3>
          <p className="news-list-item-content">{element[1].content}</p>
          <span className="news-list-item-date"> Nikolov. {element[1].date}</span>
        </li>)}
      </ul>
    </div>
  </div>
  </>
}

export default NewsAnime;
