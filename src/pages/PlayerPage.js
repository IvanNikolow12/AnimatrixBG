import { NavLink, json, useParams, useRouteLoaderData } from "react-router-dom";
import { useState, useEffect } from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

import './PlayerPage.css'

import HeaderSection from "../components/PlayerPageComponents/HeaderSection";
import PlayerSection from "../components/PlayerPageComponents/PlayerSection";
import InfoSection from '../components/PlayerPageComponents/InfoSection';
import PlayerPageCommentSection from "../components/PlayerPageComponents/PlayerPageCommentSection";
// import SreenShotSection from '../components/DetailsPageComponents/SreenShotSection'
import PlayerPageHelpSection from "../components/PlayerPageComponents/PlayerPageHelpSection";
import SimilarAnime from "../components/PlayerPageComponents/SimilarAnime";
// import NewsAnime from "../components/HomePageComponnets/NewsAnime";

function PlayerPage() {
    const data = useRouteLoaderData('anime-details');
     const {id} = useParams()

     const [ numberEpisode, setNumberEpisode] = useState('')
    //  const [ animeTitle, setAnimeTitle] = useState('')
    
    useEffect(() => {
        const currentEpisode = Array.from(document.getElementsByClassName('checked-item')); 
        if(currentEpisode.length > 0) {
            setNumberEpisode(currentEpisode[0].innerText.split('n\n"')[0].split('Episode')[1].split(' ')[1]);
            // setAnimeTitle(currentEpisode[0].innerText.split('n\n"')[0].split('Episode')[0].split('-')[0]);
        } else {
            return
        }
    }, [data])


    return <>
        <div className="player-page-main-container">
            <div className="player-page-history-path">
                <p>
                    <NavLink to="/">Home</NavLink> <MdOutlineKeyboardArrowRight size={20}/> 
                    <NavLink className="data-title" to={`/${id}`}>{data.title}</NavLink> <MdOutlineKeyboardArrowRight size={20}/>  
                    <NavLink to="/"> {numberEpisode}</NavLink>
                </p>
            </div>
            <HeaderSection anime={data} episodes={data.episodes}/>

            <PlayerSection anime={data} episodes={data.episodes}/>
            
            <InfoSection anime={data}/>

            {/* <SreenShotSection anime={data}/> thissssssssssssssssssssssssssssssssss nooooooooooooooo */}
            <SimilarAnime />

            <PlayerPageCommentSection anime={data}/>

            <PlayerPageHelpSection anime={data} episodes={data.episodes}/>

             
            {/* <NewsAnime />  */}
        </div>
    </>
}

export default PlayerPage;

export async function loader({request, params}) {
    const animeId = request.url.split('/')[3]
    // const id = params.id;
    const url = `https://animeworld-5e1e6-default-rtdb.europe-west1.firebasedatabase.app/collections/${animeId}.json`
    
    const response = await fetch(url);

    if(!response.ok) {
        return json(
            {message: "cloud not fetch the anime", status: 500},
            {status: 500}
        )
    } else {
        return response;
    }
}