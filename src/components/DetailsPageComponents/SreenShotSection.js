import { useState } from 'react';
import './SreenShotSection.css'

function SreenShotSection({anime}) {
    const [visibleGallery, setVisibleGallery] = useState(false);
    const [imageUrl, setImageUrl] = useState(null)

    function ZoomImageHandler(e) {
        setVisibleGallery(true)
        const img = e.target.src;
        setImageUrl(img)
    }

    function ZoomOutHageHandler() {
        setVisibleGallery(false)
    }

    return <>
        <section className="details-page-screenshots-section">
            <p className="details-page-screenshots-header">Screenshots</p>
            <hr/>
            {visibleGallery && <div onClick={ZoomOutHageHandler} className='gallery-container'>
            <img src={imageUrl} alt='sreenshot' className='gallery-image'/>
            </div>}
            <div className="details-page-screenshots-div">
                {anime.animeScreenShots && Object.entries(anime.animeScreenShots)
                .map(image => <img onClick={ZoomImageHandler} className="details-page-screenshots-image" src={image[1]} alt="screenshot" key={image[0]}/>)}
            </div>
        </section>
    </>
}

export default SreenShotSection;