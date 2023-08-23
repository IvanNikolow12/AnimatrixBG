import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { checkIsAdmin } from '../../util/auth';

import { FiEdit3 } from 'react-icons/fi'
import './HeaderSection.css'

function HeaderSection({anime, episodes}) {
    const [ numberEpisode, setNumberEpisode] = useState('');
    const [ postedDate, setPostedDate] = useState('');
    const [ episodeId, setEpisodeId] = useState('');
   
   useEffect(() => {
       const currentEpisode = Array.from(document.getElementsByClassName('checked-item')); 
       if(currentEpisode.length > 0) {
           setNumberEpisode(currentEpisode[0].innerText.split('n\n"')[0].split('Episode')[1].split(' ')[1]);
           setPostedDate(currentEpisode[0].innerText.split('n\n"')[0].split('Episode')[1].split('- ')[1]);
           setEpisodeId(currentEpisode[0].id)
       } else {
           return
       }
   }, [anime]);

   let arcTitleFiltered;
   if(episodes) {   
    arcTitleFiltered = Object.values(episodes)[0].arcTitle;
   } else {
    arcTitleFiltered = ''
   }
  
   document.title = `${anime.title} - ${arcTitleFiltered} ${numberEpisode || ''} - AnimatrixBG`;
    return <>
        <div className="player-page-header-section">
        {episodes && checkIsAdmin() && <NavLink className='player-page-edit-button' to={`${episodeId}/edit-episode`}><FiEdit3 className='edit-icon' size={30}/></NavLink>}
        {episodes &&  <h3 className="player-page-header-title">{anime.title} - {Object.values(episodes)[0].arcTitle} {numberEpisode}</h3>}
            <div className="player-page-header-half-description">
                <p className="header-subtitle">Sub</p>
                <p className="header-posted">Posted: {postedDate}</p>
                <p className="header-autor">Autor: <span>{anime.publishedFrom}</span></p>
            </div>
        </div>
    </>
}

export default HeaderSection;