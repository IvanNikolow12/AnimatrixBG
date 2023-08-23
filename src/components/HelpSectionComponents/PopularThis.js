
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// REUSED FROM *POPULAR THIS* TO *LAST ADDED ANIME* //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { RiStarSFill, } from "react-icons/ri"; 
import { json } from "react-router-dom";

import './PopularThis.css';
import { useEffect, useState } from "react";

function PopularThis() {
  const [counter, setCounter] = useState(0);
  const [allAnime, setAllAnime] = useState('')
    useEffect(() => {allAnimes().then(data => setAllAnime(data))}, [])


  let animesArray;
  if(allAnime !== undefined) {
    animesArray = Object.entries(allAnime);
  } else {
    animesArray = []
  }
  const latestAnimesArray = [];
  
  function latestAnimesFun() {
    for(let i = 1; i <= 4; i++) {
      const currentAnime = animesArray.pop();
      latestAnimesArray.push(currentAnime);
    }
  }
  latestAnimesFun();

  useEffect(() => setCounter(counter + 1),[])

    return <>
    <div className="popular-this-bar">
              <p className="popular-this-header">Latest animes</p>
              <div className="popular-this-list">
		            <ul>
                  {allAnime && latestAnimesArray.map(anime => <li className="popular-this-list-item" key={anime[0]}>
                    <div className="ctr">{latestAnimesArray.indexOf(anime) + 1}</div>
                    <div className="imgseries">
                      <a className="series" href={`/${anime[0]}`}>
                        <img src={anime[1].animeImageUrl} className="popular-this-img" alt="anime-img"/>
                      </a>
                    </div>
                    <div className="leftseries">
                        <h1 className="series">{anime[1].title}</h1>
                      <span><b>Genre</b>: {anime[1].animeGenre}</span>
                      <div className="rt">
                        <div className="rating">
                          <div className="rating-prc">
                            <div className="rtp">
                              <div className="rtb">
                                <span style={{'width': '87.5'}}>
                                  <span className="fiStar checked"><RiStarSFill/></span>
                                  <span className="fiStar checked"><RiStarSFill/></span>
                                  <span className="fiStar checked"><RiStarSFill/></span>
                                  <span className="fiStar checked"><RiStarSFill/></span>
                                  <span className="fiStar"><RiStarSFill/></span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="numscore">{anime[1].animeRating}</div>
                        </div>
                      </div>
                      </div>
                      <hr className="popular-this-lines"/>
                  </li>)}
					      </ul>
              </div>
          </div>
          </>
}

export default PopularThis;

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