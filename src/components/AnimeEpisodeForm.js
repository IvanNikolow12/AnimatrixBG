import { Form, redirect, useNavigate, json } from 'react-router-dom';

import './AnimeEpisodeForm.css'

function AnimeEpisodeForm ({ method, episode}) {
  const href = window.location.href.split('/');
  const episodeId = href[5];
    let title = 'Add New Anime Episode';
    if(method === 'patch') {
        title = 'Edit Anime Episode'
    }

    const navigate = useNavigate()

    function cancelHandler() {
        navigate('..')
    }

    return (
        <>
        <div className='episode-form-back-ground'>
          <div className="episode-form-container">
            <h2>{title}</h2>
            <Form method={method}>
              {/* <div className="form-field">
                <label htmlFor="anime-title" className="form-label">
                  Anime Title
                </label>
                <input type="text" id="anime-title" name="title" className="form-input" placeholder="Enter anime Title" required
                defaultValue={episode ? episode.episodes[episodeId].animeTitle : ''}/>
              </div> */}
              <div className="form-field">
                <label htmlFor="anime-arc-title" className="form-label">
                  Arc Title
                </label>
                <input type="text" id="anime-arc-title" name="arcTitle" className="form-input" placeholder="Enter Arc Title"
                defaultValue={episode ? episode.episodes[episodeId].arcTitle : ''}/>
              </div>
              <div className="form-field">
                <label htmlFor="anime-number-episode" className="form-label">
                  Number of Episode
                </label>
                <input type="number" id="anime-number-episode" name="numberEpisode" className="form-input" placeholder="Enter the number of Episode" 
                required defaultValue={episode ? episode.episodes[episodeId].numberEpisode : ''}/>
              </div>
              <div className="form-field">
                <label htmlFor="anime-date-episode" className="form-label">
                  Date of Upload
                </label>
                <input type="date" id="anime-episode-date" name="episodeDate" className="form-input" placeholder="Enter the date of Episode" 
                required defaultValue={episode ? episode.episodes[episodeId].episodeDate : ''}/>
              </div>
              {/* <div className="form-field">
                <label htmlFor="anime-anime-image" className="form-label">
                  Anime Image
                </label>
                <input type="url" id="anime-anime-image" name="imageUrl" className="form-input" placeholder="Enter Image Url"
                defaultValue={episode ? episode.episodes[episodeId].imageUrl : ''}/>
              </div> */}
              <div className="form-field">
                <label htmlFor="anime-episode-url" className="form-label">
                  Episode URL
                </label>
                <input type="url" id="anime-episodeUrl" name="episodeUrl" className="form-input" placeholder="Enter episode Url" required
                defaultValue={episode ? episode.episodes[episodeId].episodeUrl : ''}/>
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

export default AnimeEpisodeForm;

export async function action({params, request}) {
  // const id = params.id;
  const data = await request.formData();
  const href = window.location.href;
  const id = href.split('/')[3];
  const episodeId = href.split('/')[5];
  const method = request.method

  const episodeBody = {
    // animeTitle: data.get('title'),
    arcTitle: data.get('arcTitle') || '',
    numberEpisode: data.get('numberEpisode'),
    episodeDate: data.get('episodeDate'),
    episodeUrl: data.get('episodeUrl')
  }

  let url = `https://animeworld-5e1e6-default-rtdb.europe-west1.firebasedatabase.app/collections/${id}/episodes.json`

  if(method === 'PATCH') {
    url = `https://animeworld-5e1e6-default-rtdb.europe-west1.firebasedatabase.app/collections/${id}/episodes/${episodeId}.json`
  }

  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(episodeBody),
    headers: {
      'Content-type': 'application/json'
    }
  })

  if(!response.ok) {
    return json(
      {message: 'Cloud not fetch the data!', status: 500},
      {status: 500}
    )
  }

  if(method === 'POST') {
    	return redirect('..')
  } else {
    return redirect(`http://localhost:3000/${id}/player`);
  }

}