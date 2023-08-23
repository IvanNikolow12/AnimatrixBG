import { NavLink, useRouteLoaderData, json } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import {FiPlusSquare} from 'react-icons/fi';


import './DetailsPage.css'

import MainSection from "../components/DetailsPageComponents/MainSection";
import ReviewSection from "../components/DetailsPageComponents/ReviewSection";
import SreenShotSection from "../components/DetailsPageComponents/SreenShotSection";
import AddCommentSection from "../components/DetailsPageComponents/AddCommentSection";
import HelpSection from "../components/HelpSection";
import { useEffect, useState } from "react";
import { checkIsAdmin } from '../util/auth';
// import NewsAnime from "../components/HomePageComponnets/NewsAnime";

function AnimeDetailsPage() {
    const data = useRouteLoaderData('anime-details');
    const [allAnime, setAllAnime] =useState('');

    useEffect(() => {
      async function loader() {
        const url = `https://animeworld-5e1e6-default-rtdb.europe-west1.firebasedatabase.app/collections.json`;
      
        const response = await fetch(url)
        .then(response => response.json()
        .then(data => setAllAnime(data)))
        .catch(err => err.message);
        
          return response;
      }
      loader();
      }, [data])



  document.title = `${data.title} - AnimatrixBG`;
    return <>
    <div className="details-page-main-container">
        <div className="details-page-history-path">
            <p><NavLink to="/">Home</NavLink> <MdOutlineKeyboardArrowRight size={20}/>{data.title}</p>
            {checkIsAdmin() && <NavLink to="new-episode"><button className='add-new-episode-button'><FiPlusSquare size={30}/></button></NavLink>}
        </div>
        <MainSection anime={data}/>

        <ReviewSection anime={data}/>

        <SreenShotSection anime={data}/>

        <AddCommentSection anime={data}/>

        <HelpSection allAnime={allAnime}/>

        {/* <NewsAnime /> */}
    </div>
    </>
}

export default AnimeDetailsPage;

export async function loader({request, params}) {
    const id = params.id
    const url = `https://animeworld-5e1e6-default-rtdb.europe-west1.firebasedatabase.app/collections/${id}.json`

    const response = await fetch(url);

    if (!response.ok) {
      throw json(
        { message: "Cloud not fetch details for selected anime." },
        { status: 500 }
      );
    } else {
      return response
    }

}