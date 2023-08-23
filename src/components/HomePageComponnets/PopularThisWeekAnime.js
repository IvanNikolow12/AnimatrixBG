import { RiStarSFill } from "react-icons/ri"; 
import { FaCrown } from "react-icons/fa"; 
import './PopularThisWeekAnime.css'

function PopularThisWeekAnime ({allAnime}) {

  const animeArray = [];
  Object.values(allAnime).map(anime => animeArray.push(anime));
  const index = Math.floor(Math.random() * 10) || Math.floor(Math.random() * 10)
  const popularThisWeek = animeArray[index];

    return <>
        <div className="popular-this-week-anime-container">
          <div className="left-side-info">
            <span className="left-side-info-star"><RiStarSFill size={90}/></span>
            <span className="left-side-info-rating">{popularThisWeek.animeRating}</span>
            <div>
              <h1 className="left-side-info-title">{popularThisWeek.title}</h1>
              <h3 className="left-side-info-date">{popularThisWeek.animeYear}</h3>
              <h4 className="left-side-info-genre">{popularThisWeek.animeGenre}</h4>
              <h3 className="left-side-info-review">Review:</h3>
              <p className="left-side-info-review-content">{(popularThisWeek.animeDescription).substring(0, 200)}...</p>
            </div>
          </div>
          <div className="right-side-info">
            <span className="crown-icon"><FaCrown size={45}/></span>
            <img className="popular-this-week-anime-img" src={popularThisWeek.animeImageUrl} alt="anime-img"/>
          </div>
        </div>
    </>
}

export default PopularThisWeekAnime;