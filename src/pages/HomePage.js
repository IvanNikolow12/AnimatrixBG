import { useLoaderData, json } from 'react-router-dom';

import "./HomePage.css";

import PopularThisWeekAnime from "../components/HomePageComponnets/PopularThisWeekAnime";
import HelpSection from "../components/HelpSection";
import PopularTodayAnime from "../components/HomePageComponnets/PopularTodayAnime";
import AllAnime from '../components/HomePageComponnets/AllAnime'
import NewsAnime from "../components/HomePageComponnets/NewsAnime";

function HomePage() {
  const data = useLoaderData();

  document.title = 'AnimatrixBG - Anime World!';
  return (
    <>
      <div className="main-container">
        <PopularThisWeekAnime allAnime={data}/>

        <PopularTodayAnime allAnime={data}/>

        <AllAnime allAnime={data}/>

        <HelpSection allAnime={data}/>

        <NewsAnime/>

      </div>
    </>
  );
}

export default HomePage;

export async function loader() {
  const url = `https://animeworld-5e1e6-default-rtdb.europe-west1.firebasedatabase.app/collections.json`

  const response = await fetch(url);

  if(!response.ok) {
    return json(
      {message: 'Cloud not fetch data', staus: 500},
      {status: 500}
    )
  } else {
    return response;
  }
}
