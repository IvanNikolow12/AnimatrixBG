import { RiStarSFill } from 'react-icons/ri'
import { BsFillSquareFill } from 'react-icons/bs'

import './InfoSection.css';

function InfoSection({anime}) {
    return <>
    <section className="player-page-info-section">
                <div className="player-page-info-section-poster-container">
                    <img className="player-page-info-section-poster" src={anime.animeImageUrl} alt="anime-poster"/>
                    <div className="player-page-info-section-raiting-container">
                        <h6>Rating: {anime.animeRating}</h6>
                        <div className="player-page-info-section-raiting-stars">
                            <span style={{'width': '87.5'}}>
                            <span className="fiStar checked"><RiStarSFill size={15}/></span>
                            <span className="fiStar checked"><RiStarSFill size={15}/></span>
                            <span className="fiStar checked"><RiStarSFill size={15}/></span>
                            <span className="fiStar checked"><RiStarSFill size={15}/></span>
                            <span className="fiStar"><RiStarSFill size={15}/></span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="player-page-info-section-upside-description">
                    <h1 className="player-page-info-section-upside-description-title">{anime.title}</h1>
                    <p className="player-page-info-section-upside-description-japanese-title">{anime.japaneseTitle}</p>
                    <div className="player-page-info-section-upside-description-paragraphs">
                        <p><BsFillSquareFill size={10}/>Status: {anime.animeStatus}</p>
                        <p><BsFillSquareFill size={10}/>Runtime: {anime.runTime}</p>
                        <p><BsFillSquareFill size={10}/>Studio: {anime.animeStudio}</p>
                        <p><BsFillSquareFill size={10}/>Year: {anime.animeYear}</p>
                        <p><BsFillSquareFill size={10}/>Season: {anime.animeSeason}</p>
                        <p><BsFillSquareFill size={10}/>Country: {anime.animeCountry}</p>
                        <p><BsFillSquareFill size={10}/>Type: {anime.animeType}</p>
                        <p><BsFillSquareFill size={10}/>Episodes: {anime.animeEpisodes}</p>
                    </div>
                    <div className="player-page-info-section-upside-description-genres">
                    {anime.animeGenre.split(', ').map(genre => <button key={genre}>{genre}</button>)}
                    </div>
                    <p className="player-page-review-content">
                        {anime.animeDescription}
                    </p>
                </div>
            </section>
    </>
}

export default InfoSection;