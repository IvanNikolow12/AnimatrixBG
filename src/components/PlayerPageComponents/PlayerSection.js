import { useEffect, useState } from 'react';
import './PlayerSection.css'

function PlayerSection({anime, episodes}) {
    const [ episodeUrl, setEpisodeUrl] = useState('')
    
    useEffect(() => {
        const currentEpisode = Array.from(document.getElementsByClassName('checked-item')); 

        if(currentEpisode.length > 0) {
            const episodeKey = currentEpisode[0].outerHTML.split("\"")[3];
            Object.entries(episodes).map(episode => episode[0] === episodeKey ? setEpisodeUrl(episode[1].episodeUrl) : '' )
        } else {
            return
        }
    }, [episodes])

    return <>
        <div className="player-page-player">
            <iframe className='player' src={episodeUrl} 
            frameBorder="none"  allow="autoplay; fullscreen" title="anime-player"></iframe>
        </div>
    </>
}

export default PlayerSection;