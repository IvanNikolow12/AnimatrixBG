import './ReviewSection.css'

function ReviewSection({anime}) {
    return <>
    <section className="details-page-review-section">
            <p className="details-page-review-title">Review</p>
            <hr/>
            <p className="details-page-review-content">
            {anime.animeDescription}
            </p>
        </section>
    </>
}

export default ReviewSection;