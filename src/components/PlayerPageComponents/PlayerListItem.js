import { useEffect } from 'react';

import { NavLink, useParams } from 'react-router-dom';

import './PlayerListItem.css';

function PlayerListItem({anime, episodes}) {
  let activeElement = document.getElementsByClassName('playlist_list_item');
  useEffect(() => {
    if(activeElement.length >= 1) {
      activeElement[0].classList.add('checked-item')
    }
}, [activeElement])


  const {id} = useParams();

  // to={`/${id}/player${episode[0]}`}      /////////////////////////////////////////////////////////////// url path for navLink 37 line

  function AddBackGroundHandler(e) {
    let activeElement =  e.target.parentNode.parentNode;
    if(activeElement.classList.contains('playlist_list_item')) {
      activeElement.classList.add('checked-item') 
      
    }
  }

  function RemoveBackGroundHanled(e) {
    let checkedItemsArray = Array.from(document.querySelectorAll('.checked-item'));

    if(checkedItemsArray.length >= 2) {
      checkedItemsArray[0].classList.remove('checked-item')
      checkedItemsArray[1].classList.remove('checked-item')
      checkedItemsArray.shift()
      checkedItemsArray.shift()
    }
  }
  return (
    <>
        {episodes && Object.entries(anime.episodes).map(episode => 
        <NavLink to={`/${id}/player`} id={episode[0]} onClick={RemoveBackGroundHanled} className="playlist-link"  key={episode[0]}>
          <li type="checkbox" id={episode[0]}  onClick={AddBackGroundHandler}  className={`playlist_list_item`} key={episode[0]}>
            <img className="playlist-list-item-anime-image" src={anime.animeImageUrl} alt={episode[1].episodeUrl}/>
            <div className="playlist-list-item-anime-info">
              <h4 className="playlist-list-item-anime-title">{anime.title} {episode[1].arcTitle} - {episode[1].numberEpisode}</h4>
              <p className="playlist-list-item-anime-episode">Episode {episode[1].numberEpisode} - {episode[1].episodeDate}</p>
            </div>
          </li>
        </NavLink>
        )}
        {!episodes && <p className='there-is-no-episodes'>There is no episodes yet.</p>}
    </>
  );
}

export default PlayerListItem;
