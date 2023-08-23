import { checkIsAdmin } from '../../util/auth'

import {FiPlusSquare} from 'react-icons/fi';
import { FaRegPlayCircle } from 'react-icons/fa';

import './AllAnime.css'

function AllAnime({allAnime}) {


    return <>
        <div className="all-anime-container">
          <div className='anime-list-content'>
          <ul typeof="check-box" className="anime-list">
            <div className='anime-list-header-line'>
            <div className="anime-list-header">All Anime</div>
          {checkIsAdmin() && <a href="/new-anime"><button className='add-new-anime-button'><FiPlusSquare size={20}/></button></a>}
            </div>
              {Object.entries(allAnime).map(anime => 
                <li className="anime-item" key={anime[0]}>
                  <a href={anime[0]}>
                    <div className="card">
                      <FaRegPlayCircle size={50}/>
                      <img className="card-anime-img" src={anime[1].animeImageUrl} alt="anime Name"/>
                      <div className="card-anime-description">
                        <div className="title">{anime[1].title}</div>
                        <p className="series">{anime[1].animeType}</p>
                        <p className="categoty">Episodes {anime[1].animeEpisodes}</p>
                      </div>
                    </div>
                  </a>
                </li>
              )}
          </ul>
          </div>
        </div>
      </>   
          
}

export default AllAnime;