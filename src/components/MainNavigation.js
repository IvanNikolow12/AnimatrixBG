import { NavLink, useRouteLoaderData, Form, json, useNavigate } from "react-router-dom";
import { FaSearch, FaHome } from "react-icons/fa"; 

import logo from '../img/png-clipart-inori-yuzuriha-shu-ouma-anime-tattoo-anime-leaf-logo.png'

import "./MainNavigation.css";
import { useEffect, useState } from "react";

const MainNavigation = () => {
  const [allAnime, setAllAnime ] = useState('');
  const [fullEmail, setFullEmail] = useState('')
  const navigate = useNavigate();
  const email = useRouteLoaderData('root');
  useEffect(() => {setFullEmail(email)}, [email])

  useEffect(() => {getAllAnime().then(data => setAllAnime(data))}, []);

  const searchedAnimeValue = document.getElementById('input-search');

  function SearchAnimeHandler(e) {
    e.preventDefault()
    Object.entries(allAnime).map(anime => {
      if((anime[1].title).includes(searchedAnimeValue.value)) {
        let id = anime[0];
         navigate(`/${id}`)
        }
      })
       searchedAnimeValue.value = ''
  }

  return (<>
    <nav className="main-navigation">
      <ul>
        {/* <li className="home-button">
          <NavLink to="/">Home</NavLink>
        </li> */}
        <li><NavLink to="/" className="home-button-navigation"><FaHome size={30}/></NavLink></li>
        
        {!fullEmail && <li className="login-button">
          <NavLink className="login-button" to="/auth?mode=login">Login</NavLink>
        </li>}
        {fullEmail && <li className="login-button">
          <Form action="/logout" method="post"><button className="login-button">Logout</button></Form>
        </li>}
      </ul>
          <Form className="search-bar-form">
            <input id="input-search" type="text" placeholder="Search"/>
            <button id="button-search" onClick={SearchAnimeHandler} type="submit"><FaSearch/></button>
          </Form>
    </nav>
    <header className="head-container">
        <img className="logo-icon" src={logo}/>
    </header>
  </>
  );
};

export default MainNavigation;

async function getAllAnime() {
  const url = `https://animeworld-5e1e6-default-rtdb.europe-west1.firebasedatabase.app/collections.json`;

  const response = await fetch(url);
  const allAnime = response.json();

  if(!response.ok) {
    return json({message: 'Cloud not fetch data'}, {status: 500})
  } else {
    return allAnime;
  }
}
