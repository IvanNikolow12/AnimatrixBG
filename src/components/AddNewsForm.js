import { Form, json, redirect, useNavigate } from "react-router-dom";


function AddNewsForm({method}) {

    const navigate = useNavigate();

    function cancelHandler() {
        navigate('..')
    }

    return <>
    <div className='episode-form-back-ground'>
          <div className="episode-form-container">
            <h2>News</h2>
            <Form method={method}>
              <div className="form-field">
                <label htmlFor="anime-number-episode" className="form-label">
                  Theme
                </label>
                <input type="text" id="news-theme" name="newsTheme" className="form-input" placeholder="Enter news theme" 
                required />
              </div>
              <div className="form-field">
                <label htmlFor="anime-number-episode" className="form-label">
                  Content
                </label>
                <textarea type="text" id="news-content" name="newsContent" className="form-input" placeholder="Enter news content" 
                required ></textarea>
              </div>
              <div className="form-field">
                <label htmlFor="news-date" className="form-label">
                  Date of Upload
                </label>
                <input type="date" id="news-date" name="newsDate" className="form-input" placeholder="Enter date" 
                required />
              </div>
              <div className="form-field">
                <label htmlFor="news-image-url" className="form-label">
                  News Image URL
                </label>
                <input type="url" id="news-image-url" name="newsImageUrl" className="form-input" placeholder="Enter image Url" required
                />
              </div>
              <button type="submit" className="form-submit">
                Save
              </button>
              <button type='button' className="form-submit" onClick={cancelHandler}>Cancel</button>
            </Form>
          </div>
        </div>
    </>
}

export default AddNewsForm;

export async function action({params, request}) {

  const data = await request.formData();

  const newsBody = {
    theme: data.get('newsTheme'),
    content: data.get('newsContent'),
    date: data.get('newsDate'),
    image: data.get('newsImageUrl')
  }


  const url = `https://animeworld-5e1e6-default-rtdb.europe-west1.firebasedatabase.app/news.json`;

  const response = await fetch(url, {
    method: request.method,
    body: JSON.stringify(newsBody),
    headers: {
      'content-type': 'application/json'
    }
  })

  if(!response.ok) {
    return json(
      {message: 'Cloud not fetch the data!', status: 500},
      {status: 500}
    )
  }

  return redirect('..')

}