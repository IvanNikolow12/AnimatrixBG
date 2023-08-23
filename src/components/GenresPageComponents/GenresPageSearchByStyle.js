
import { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import './GenresPageSearchByStyle.css';
import { useEffect } from 'react';

function SearchByStyleBar() {
    const [allAnime, setAllAnime] = useState('');
    // var [finalAnimes, setFinalAnimes] = useState('');
    const navigate = useNavigate();

    useEffect(() => {AllAnimeLoader().then(data => setAllAnime(data))}, []);

    const filteredAnimes = {};

    function SearchEngineHanler(e) {
         Object.entries(allAnime).map((anime) => {
            if((anime[1].animeGenre).split(', ').includes(searchData.style)) {
                filteredAnimes[anime[0]] = anime[1];
            }
            if(anime[1].animeType === searchData.type) {
                filteredAnimes[anime[0]] = anime[1];
            }
            if(anime[1].animeStatus === searchData.status) {
                filteredAnimes[anime[0]] = anime[1];
            }
            if(anime[1].animeStudio === searchData.studio) {
                filteredAnimes[anime[0]] = anime[1];
            }
        })

        if(!filteredAnimes) {
            return
        } else {
            navigate(`/genres/${(searchData.style)}`, {state:filteredAnimes});        
        }
    }

    const searchData = {};

    const StyleSelectHandler = ({ target: { name, value } }) => {
        if(value !== 'Style') {
            searchData.style = value;
        }
    }

    const TypeSelectHandler = ({ target: { name, value } }) => {
        if(value !== 'Type') {
            searchData.type = value;
        }
    }

    const StatusSelectHandler = ({ target: { name, value } }) => {
        if(value !== 'Status') {
            searchData.status = value;
        }
    }

    const StudioSelectHandler = ({ target: { name, value } }) => {
        if(value !== 'Studio') {
            searchData.studio = value;
        }
    }

    
    return <>
    <div className="genres-page-search-by-bar">
        <p className='search-by-header'>Search anime by...</p>
        <ul className='genres-page-search-by__list'>
            <select className="search-by-style__list" onChange={StyleSelectHandler}>
                <option className="search-by__item" value="Style">Style</option>
                <option className="search-by__item" value="Action">Action</option>
                <option className="search-by__item" value="Fantasy">Fantasy</option>
                <option className="search-by__item" value="SuperPower">Super Power</option>
                <option className="search-by__item" value="Scy-Fi">Scy-Fi</option>
                <option className="search-by__item" value="Horror">Horror</option>
                <option className="search-by__item" value="Adventure">Adventure</option>
                <option className="search-by__item" value="Comedy">Comedy</option>
                <option className="search-by__item" value="Adventure">Adventure</option>
                <option className="search-by__item" value="Romance">Romance</option>
                <option className="search-by__item" value="Mystery">Mystery</option>
            </select>
            <select className="search-by-type__list" onChange={TypeSelectHandler}>
                <option className="search-by__item" value="Type">Type</option>
                <option className="search-by__item" value="TV">TV</option>
                <option className="search-by__item" value="Movie">Movie</option>
            </select>
            <select className="search-by-status__list" onChange={StatusSelectHandler}>
                <option className="search-by__item" value="Status">Status</option>
                <option className="search-by__item" value="Completed">Completed</option>
                <option className="search-by__item" value="OnGoing">On Going</option>
            </select>
            <select className="search-by-studio" onChange={StudioSelectHandler}>
                <option className="search-by__item" value="Studio">Studio</option>
                <option className="search-by__item" value="MAPPA">MAPPA</option>
                <option className="search-by__item" value="ufotable">Ufotable</option>
                <option className="search-by__item" value="Nexus">Nexus</option>
                <option className="search-by__item" value="Prierrot">Prierrot</option>
                <option className="search-by__item" value="TMS">TMS</option>
                <option className="search-by__item" value="Bandai">Bandai</option>
                <option className="search-by__item" value="Ghibli">Ghibli</option>
                
            </select>
        </ul>
        <button onClick={SearchEngineHanler} className="search-by__search-button">Search</button>
    </div>
    </>
}

export default SearchByStyleBar;

async function AllAnimeLoader() {
    let url = `https://animeworld-5e1e6-default-rtdb.europe-west1.firebasedatabase.app/collections.json`

    const response = await fetch(url);

    if(!response.ok) {
        return json({message: 'Cloud not fetch data'}, {status: 500})
    }

    return response.json();
}