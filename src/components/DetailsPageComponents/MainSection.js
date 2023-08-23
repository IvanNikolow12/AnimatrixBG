import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { checkIsAdmin } from '../../util/auth';
import { json } from 'react-router-dom';

import './MainSection.css'

import { FaRegPlayCircle, FaYoutube } from 'react-icons/fa'
import { FiEdit3 } from 'react-icons/fi'
import { RiStarSFill } from 'react-icons/ri'
import { BsFillSquareFill, BsHeartFill } from 'react-icons/bs'
import { CgCloseR } from 'react-icons/cg'

function DetailsPageMainSection({anime}) {
    const likes = Number(Math.random() * 300)
    let [likeAnime, setLikeAnime] = useState(Math.floor(likes));
    const [visibleVideo, setVisibleVideo] = useState(false);

    function ShowTrailerVideo() {
        setVisibleVideo(true)
    }

    function HideTrailerVideo() {
        setVisibleVideo(false)
    }

    function LikeAnimeHandler() {
        setLikeAnime(likeAnime += 1)
    }
    
    return <>
    <section className="details-page-main-section">
            <NavLink to="player"><button className="details-page-main-section-play-button"><FaRegPlayCircle size={70}/></button></NavLink>
            <div className="details-page-main-section-poster-container">
            <img className="details-page-collection-background-image" src={anime.animeBackgroundURL} alt="collection-view"/>
            <div className='details-page-left-side-info'>
                <img className="details-page-collection-anime-poster" src={anime.animeImageUrl} alt="anime-poster"/>
                <div className="details-page-collection-raiting-container">
                    <h3>Rating: {anime.animeRating}</h3>
                    <div className="details-page-collection-raiting-stars">
                        <span style={{'width': '87.5'}}>
                        <span className="fiStar checked"><RiStarSFill size={25}/></span>
                        <span className="fiStar checked"><RiStarSFill size={25}/></span>
                        <span className="fiStar checked"><RiStarSFill size={25}/></span>
                        <span className="fiStar checked"><RiStarSFill size={25}/></span>
                        <span className="fiStar"><RiStarSFill size={25}/></span>
                        </span>
                    </div>
                </div>
                {visibleVideo && <div className='trailer-container'>
                    <button onClick={HideTrailerVideo} className='trailer-cancel-button'><CgCloseR size={35}/></button>
                <iframe className='trailer-video' width="960" height="615" src={anime.animeTrailerUrl} title="YouTube video player" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen></iframe>
                </div>}
                <button onClick={ShowTrailerVideo} className="details-page-collection-trailer-button"><FaYoutube size={22}/> Trailer</button>
                <button onClick={LikeAnimeHandler} className="details-page-collection-like-button"><BsHeartFill size={30}/></button>
                <span className="details-page-collection-like-counter">{likeAnime}</span>
            </div>
            </div>
            <div className="details-page-main-section-upside-description">
                {checkIsAdmin() && <NavLink className='details-page-edit-button' to="edit"><FiEdit3 size={30}/></NavLink>}
                <h1 className="upside-description-title">{anime.title}</h1>
                <p className="upside-description-japanese-title">{anime.japaneseTitle}</p>
                <div className="upside-description-paragraphs">
                    <p><BsFillSquareFill size={10}/>Title: {anime.title}</p>
                    <p><BsFillSquareFill size={10}/>Status: {anime.animeStatus}</p>
                    <p><BsFillSquareFill size={10}/>Runtime: {anime.runTime}</p>
                    <p><BsFillSquareFill size={10}/>Studio: {anime.animeStudio}</p>
                    <p><BsFillSquareFill size={10}/>Year: {anime.animeYear}</p>
                    <p><BsFillSquareFill size={10}/>Season: {anime.animeSeason}</p>
                    <p><BsFillSquareFill size={10}/>Country: {anime.animeCountry}</p>
                    <p><BsFillSquareFill size={10}/>Type: {anime.animeType}</p>
                    <p><BsFillSquareFill size={10}/>Episodes: {anime.animeEpisodes}</p>
                    <p><BsFillSquareFill size={10}/>Post: {anime.animePost}</p>
                    <p><BsFillSquareFill size={10}/>More: {anime.animeMore}</p>
                    <p><BsFillSquareFill size={10}/>Updated: {anime.animeUpdated}</p>
                    <p><BsFillSquareFill size={10}/>Published from: {anime.publishedFrom}</p>
                </div>
                <div className="upside-description-genres">
                    {anime.animeGenre.split(', ').map(genre => <button key={genre}>{genre}</button>)}
                </div>
            </div>
        </section>
    </>
}

export default DetailsPageMainSection;

export async function loader ({params, request}) {
    const id = params.id
    const url = `https://animeworld-5e1e6-default-rtdb.europe-west1.firebasedatabase.app/collections/${id}/likes.json`

    const response = fetch(url);

    if (!response.ok) {
      throw json(
        { message: "Cloud not fetch details for selected anime." },
        { status: 500 }
      );
    } else {
      return response
    }
}