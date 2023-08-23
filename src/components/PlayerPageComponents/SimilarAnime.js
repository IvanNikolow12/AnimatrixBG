import { json } from 'react-router-dom';
import './SimilarAnime.css'
import { useEffect, useState } from 'react';

function SimilarAnime() {
    const [allAnime, setAllAnime] = useState('')

    useEffect(() => {SimilarLoader().then(data => setAllAnime(data))}, [])
       
    
    const similarAnimeArray = [];

    if(!allAnime == '') {

        const allAnimeArray = Object.entries(allAnime);

        for(let i = 0; i < 8; i++) {
            let index = Math.floor(Math.random() * 5)
            if(index > allAnimeArray.length) {
            index -= 1;
            }
            similarAnimeArray.push(allAnimeArray[index]);
            allAnimeArray.splice(index, index + 1)
            i++
        }
    }

    return <>
    <div className="similar-anime-container">
          <div className="similar-anime-title">
            <p>Similar Anime</p>
          </div>
          <div className="similar-list">
            <ul>
              {similarAnimeArray && similarAnimeArray.map(anime => <a href={`/${anime[0]}`} key={anime[0]}><li className="similar-item" key={anime[0]}>
                <img className="similar-item-image" src={anime[1].animeImageUrl} alt="poster"/>
                <div className="similar-item-info">
                  <p className="similar-item-status">{anime[1].animeStatus}</p>
                  <span className="similar-item-type">{anime[1].animeType}</span>
                </div>
              </li></a>)}
            </ul>
          </div>
        </div>
    </>
}

export default SimilarAnime;

            async function SimilarLoader() {
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