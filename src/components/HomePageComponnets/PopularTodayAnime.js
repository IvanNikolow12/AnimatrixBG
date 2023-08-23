import { NavLink } from 'react-router-dom';
import './PopularTodayAnime.css'

function PopularTodayAnime({allAnime}) {

  const popularTodayArray = [];

  const allAnimeArray = Object.entries(allAnime);
  
  for(let i = 0; i < 8; i++) {
    let index = Number(Math.floor(Math.random() * 5))
    if(index > allAnimeArray.length) {
      index -= 1;
    }
    popularTodayArray.push(allAnimeArray[index]);
    allAnimeArray.splice(index, index + 1)
    i++
  }

    return <>
    <div className="popular-today-anime-container">
          <div className="popular-today-anime-title">
            <p>Popular today</p>
          </div>
          <div className="popular-today-list">
            <ul>
              {popularTodayArray.map(anime => <NavLink to={`/${anime[0]}`} key={anime[0]}><li className="popular-today-item" key={anime[0]}>
                <img className="popular-today-item-image" src={anime[1].animeImageUrl} alt="poster"/>
                <div className="popular-today-item-info">
                  <h4 className="popular-today-item-title">{anime[1].title}</h4>
                  <hr/>
                  <p className="popular-today-item-status">{anime[1].animeStatus}</p>
                  <span className="popular-today-item-episodes">{anime[1].animeEpisodes}</span>
                </div>
              </li></NavLink>)}
            </ul>
          </div>
        </div>
    </>
}

export default PopularTodayAnime;