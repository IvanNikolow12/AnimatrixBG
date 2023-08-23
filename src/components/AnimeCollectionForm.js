import { Form, redirect, useNavigate, json } from 'react-router-dom';

import './AnimeCollectionForm.css'

function AnimeCollectionForm ({ method, anime}) {
    let title = 'Add New Anime Collection';
    if(method === 'patch') {
        title = 'Edit Anime Collection'
    }

    const navigate = useNavigate()

    function cancelHandler() {
        navigate('..')
    }

    return (
        <>
        <div className='back-ground'>
          <div className="form-container">
            <h2>{title}</h2>
            <Form method={method}>
              <div className="form-field">
                <label htmlFor="anime-title" className="form-label">
                  Title
                </label>
                <input type="text" id="anime-title" name="title" className="form-input" placeholder="Enter anime title" required
                defaultValue={anime ? anime.title : ''}/>
              </div>
              <div className="form-field">
                <label htmlFor="anime-japanese-title" className="form-label">
                  Japanese Title
                </label>
                <input type="text" id="anime-japanese-title" name="japaneseTitle" className="form-input" placeholder="Enter anime japanese-title" required
                defaultValue={anime ? anime.japaneseTitle : ''}/>
              </div>
              <div className="form-field">
                <label htmlFor="anime-runtime" className="form-label">
                  RunTime
                </label>
                <input type="number" id="anime-runtime" name="runTime" className="form-input" placeholder="Enter anime runtime" required
                defaultValue={anime ? anime.runTime : ''}/>
              </div>
              <div className="form-field">
                <label htmlFor="anime-year" className="form-label">
                  Animer Year
                </label>
                <input type="date" id="anime-year" name="animeYear" className="form-input" placeholder="Enter anime year" required
                defaultValue={anime ? anime.animeYear : ''}/>
              </div>
              <div className="form-field">
                <label htmlFor="anime-country" className="form-label">
                  Country
                </label>
                <input type="text" id="anime-country" name="animeCountry" className="form-input" placeholder="Enter anime country" required
                defaultValue={anime ? anime.animeCountry : ''}/>
              </div>
              <div className="form-field">
                <label htmlFor="published-from" className="form-label">
                  Published From
                </label>
                <input type="text" id="published-from" name="publishedFrom" className="form-input" placeholder="Enter published-from" required
                defaultValue={anime ? anime.publishedFrom : ''}/>
              </div>
              <div className="form-field">
                <label htmlFor="anime-post" className="form-label">
                  Post Date
                </label>
                <input type="date" id="anime-post" name="animePost" className="form-input" placeholder="Enter anime post" required
                defaultValue={anime ? anime.animePost : ''}/>
              </div>
              <div className="form-field">
                <label htmlFor="anime-updated" className="form-label">
                  Update Date
                </label>
                <input type="date" id="anime-updated" name="animeUpdated" className="form-input" placeholder="Enter anime updated" required
                defaultValue={anime ? anime.animeUpdated : ''}/>
              </div>
              <div className="form-field">
                <label htmlFor="anime-status" className="form-label">
                  Anime Status
                </label>
                <input type="text" id="anime-status" name="animeStatus" className="form-input" placeholder="Enter anime status" required
                defaultValue={anime ? anime.animeStatus : ''}/>
              </div>
              <div className="form-field">
                <label htmlFor="anime-studio" className="form-label">
                  Anime Studio
                </label>
                <input type="text" id="anime-studio" name="animeStudio" className="form-input" placeholder="Enter anime studio" required
                defaultValue={anime ? anime.animeStudio : ''}/>
              </div>
              <div className="form-field">
                <label htmlFor="anime-season" className="form-label">
                  Anime season "Sping/Summer/Autumn/Winter"
                </label>
                <input type="text" id="anime-season" name="animeSeason" className="form-input" placeholder="Enter anime season" required
                defaultValue={anime ? anime.animeSeason : ''}/>
              </div>
              <div className="form-field">
                <label htmlFor="anime-type" className="form-label">
                  Anime type
                </label>
                <input type="text" id="anime-type" name="animeType" className="form-input" placeholder="Enter anime type" required
                defaultValue={anime ? anime.animeType : ''}/>
              </div>
              <div className="form-field">
                <label htmlFor="anime-more" className="form-label">
                  Any more ?
                </label>
                <input type="text" id="anime-more" name="animeMore" className="form-input" placeholder="Enter anime more"
                defaultValue={anime ? anime.animeMore : ''}/>
              </div>
              <div className="form-field">
                <label htmlFor="anime-description" className="form-label">
                  Description
                </label>
                <textarea id="anime-description" name="animeDescription" className="form-textarea" placeholder="Enter anime description" required
                defaultValue={anime ? anime.animeDescription : ''} ></textarea>
              </div>
              <div className="form-field">
                <label htmlFor="anime-genre" className="form-label">
                  Genre
                </label>
                <input type="text" id="anime-genre" name="animeGenre" className="form-input" placeholder="Enter anime genre"
                  defaultValue={anime ? anime.animeGenre : ''} required />
              </div>
              <div className="form-field">
                <label htmlFor="anime-episodes" className="form-label">
                  Episodes
                </label>
                <input type="number" id="anime-episodes" name="animeEpisodes" className="form-input" 
                defaultValue={anime ? anime.animeEpisodes : ''} placeholder="Enter anime episodes" required />
              </div>
              <div className="form-field">
                <label htmlFor="anime-episodes" className="form-label">
                  Rating
                </label>
                <input type="text" id="anime-rating" name="animeRating" className="form-input" 
                defaultValue={anime ? anime.animeRating : ''} placeholder="Enter anime Rating" required />
              </div>
              <div className="form-field">
                <label htmlFor="anime-image" className="form-label">
                  Image URL POSTER
                </label>
                <input type="url" id="anime-image" name="animeImageUrl" className="form-input" placeholder="Enter image URL"
                  defaultValue={anime ? anime.animeImageUrl : ''} required />
              </div>
              <div className="form-field">
                <label htmlFor="anime-background-image" className="form-label">
                  Image URL BACKGROUND
                </label>
                <input type="url" id="anime-backtroundURL" name="animeBackgroundURL" className="form-input" placeholder="Enter image URL BACKGROUND"
                  defaultValue={anime ? anime.animeBackgroundURL : ''} required />
              </div>
              <div className="form-field">
                <label htmlFor="anime-video" className="form-label">
                  Video Trailer URL
                </label>
                <input type="url" id="anime-video" name="animeTrailerUrl" className="form-input" placeholder="Enter video URL"
                  defaultValue={anime ? anime.animeTrailerUrl : ''} required />
              </div>
              <div className="form-field">
                <label htmlFor="anime-video" className="form-label">
                  ScreenShots URL
                </label>
                <input type="url" id="anime-sreenshots1" name="animeScreenShot1" className="form-input" placeholder="Enter sreenshots URL"
                  defaultValue={anime ? anime.animeScreenShots.animeScreenShot1 : ''} required />
                  <input type="url" id="anime-sreenshots2" name="animeScreenShot2" className="form-input" placeholder="Enter sreenshots URL"
                  defaultValue={anime ? anime.animeScreenShots.animeScreenShot2 : ''} required />
                  <input type="url" id="anime-sreenshots3" name="animeScreenShot3" className="form-input" placeholder="Enter sreenshots URL"
                  defaultValue={anime ? anime.animeScreenShots.animeScreenShot3 : ''} required />
                  <input type="url" id="anime-sreenshots4" name="animeScreenShot4" className="form-input" placeholder="Enter sreenshots URL"
                  defaultValue={anime ? anime.animeScreenShots.animeScreenShot4 : ''} required />
              </div>
              <button type="submit" className="form-submit">
                Save
              </button>
              <button type='button' className="form-submit" onClick={cancelHandler}>Cancel</button>
            </Form>
          </div>
        </div>
        </>
      );
}

export default AnimeCollectionForm;

export async function action({request, params}) {
  const method = request.method;
  const data = await request.formData();

  const animeBody = {
    title: data.get('title'),
    japaneseTitle: data.get('japaneseTitle'),
    runTime: data.get('runTime'),
    animeYear: data.get('animeYear'),
    animeCountry: data.get('animeCountry'),
    publishedFrom: data.get('publishedFrom'),
    animePost: data.get('animePost'),
    animeUpdated: data.get('animeUpdated'),
    animeStatus: data.get('animeStatus'),
    animeStudio: data.get('animeStudio'),
    animeSeason: data.get('animeSeason'),
    animeType: data.get('animeType'),
    animeMore: data.get('animeMore') || '',
    animeDescription: data.get('animeDescription'),
    animeGenre: data.get('animeGenre'),
    animeEpisodes: data.get('animeEpisodes'),
    animeRating: data.get('animeRating'),
    animeImageUrl: data.get('animeImageUrl'),
    animeBackgroundURL: data.get('animeBackgroundURL'),
    animeTrailerUrl: data.get('animeTrailerUrl'),
    animeScreenShots: {
      animeScreenShot1: data.get('animeScreenShot1'),
      animeScreenShot2: data.get('animeScreenShot2'),
      animeScreenShot3: data.get('animeScreenShot3'),
      animeScreenShot4: data.get('animeScreenShot4'),
    },
  }

  let url = `https://animeworld-5e1e6-default-rtdb.europe-west1.firebasedatabase.app/collections.json`

  if(method === 'PATCH') {
    let id = params.id;
    url = `https://animeworld-5e1e6-default-rtdb.europe-west1.firebasedatabase.app/collections/${id}.json`
  }

  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(animeBody),
    headers: {
      "content-type": "application/json",
    },
  })

  if(!response.ok) {
    console.log(response.status)
    throw json(
      { message: "Cloud not fetch anime", status: 500 },
      { status: 500 }
    );
  }

  return redirect('..');

}