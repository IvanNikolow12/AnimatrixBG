import { useState, useEffect } from "react";
import { json } from "react-router-dom";

import PopularThis from "../HelpSectionComponents/PopularThis";
import CommentsBar from "../HelpSectionComponents/CommentsBar";
import PlayerListItem from './PlayerListItem'

import './PlayerPageHelpSection.css';

function PlayerPageHelpSection({anime, episodes}) {
    // Code for Latest Animes Section(Popular This...)
    const [allAnime, setAllAnime] = useState('')
    useEffect(() => {allAnimes().then(data => setAllAnime(data))}, []);
    
    const [ numberEpisode, setNumberEpisode] = useState('');
    let allEpisodes;
    if(episodes) {
        if(Object.keys(episodes).length < 10) {
            allEpisodes = '0' + Object.keys(episodes).length;
        } else {
            allEpisodes = Object.keys(episodes).length;
        }
    }
    
    useEffect(() => {
        const currentEpisode = Array.from(document.getElementsByClassName('checked-item')); 
        if(currentEpisode.length > 0) {
            setNumberEpisode(currentEpisode[0].innerText.split('n\n"')[0].split('Episode')[1].split(' ')[1]);
        } else {
            return
        }
    }, [episodes])

    return <>
    <section className="player-page-help-section">
                <section className="player-page-playlist-section">
                    <div className="playyer-page-playlist-header">
                        <img className="playlist-header-image" src={anime.animeImageUrl} alt="poster"/>
                        <div className="playlist-header-content">
                            <h4 className="playlist-header-anime-title">{anime.title}</h4>
                            <p className="playlist-header-anime-content">
                                <span className="playlist-header-anime-status">{anime.animeStatus}</span> - {numberEpisode} / {allEpisodes}
                            </p>
                        </div>
                    </div>
                    <hr className="playlist-hr"/>
                    <div className="playlist-content">
                        <ul typeof="check-box" className="playlist-list">
                            <PlayerListItem anime={anime} episodes={episodes}/>
                        </ul>
                    </div>
                </section>
                <PopularThis allAnime={allAnime}/>
                <CommentsBar/>
            </section>
    </>
}

export default PlayerPageHelpSection;

async function allAnimes() {
    const url = `https://animeworld-5e1e6-default-rtdb.europe-west1.firebasedatabase.app/collections.json`

    const response = await fetch(url);
    const animes = await response.json();

    if(!response.ok) {
        return json(
            {message: 'Cloud not fetch data', staus: 500},
            {status: 500}
            )
        } else {
            return animes
    }
}