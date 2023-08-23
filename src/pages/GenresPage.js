import { useLocation } from "react-router-dom";
import HelpSection from "../components/HelpSection";
import { FaRegPlayCircle } from 'react-icons/fa';
import { BsEmojiSmile } from 'react-icons/bs'

import './GenresPage.css'
import { useEffect, useState } from "react";
import GenresPageSearchByStyle from "../components/GenresPageComponents/GenresPageSearchByStyle";

function GenresPage(props) {
  const [showText, setShowText] = useState(false);

  const location = useLocation();
  const allAnime = location.state;

  useEffect(() => {
    if(Object.entries(allAnime).length < 1 ) {
      setShowText(true);
    } else {
      setShowText(false);
    }
  }, [allAnime])

    return <>
    <div className="genres-page-container">
      <GenresPageSearchByStyle />
    <div className="genres-page-container">
    <ul className="genres-page-anime-list">
            <div className='genres-page-anime-list-header-line'>
            <div className="genres-page-anime-list-header">Sorted List</div>
            </div>
              {!showText ? Object.entries(allAnime).map(anime => 
                <li className="genres-page-anime-item" key={anime[0]}>
                  <a href={`/${anime[0]}`}>
                    <div className="genres-page-card">
                      <FaRegPlayCircle size={50}/>
                      <img className="genres-page-card-anime-img" src={anime[1].animeImageUrl} alt="anime Name"/>
                      <div className="genres-page-card-anime-description">
                        <div className="genres-page-title">{anime[1].title}</div>
                        <p className="genres-page-series">{anime[1].animeType}</p>
                        <p className="genres-page-categoty">Episodes {anime[1].animeEpisodes}</p>
                      </div>
                    </div>
                  </a>
                </li>
              ) : 
              <div>
                <h3 className="there-is-no-anime">There is no such anime. Please search again.</h3>
                <BsEmojiSmile className="there-is-no-anime-icon" size={80}/>
              </div>
                }
          </ul>
    </div>
        {/* <HelpSection/> */}
    </div>
    </>
}

export default GenresPage;