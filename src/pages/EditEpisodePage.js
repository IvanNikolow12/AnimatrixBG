import { useRouteLoaderData } from "react-router-dom";
import AnimeEpisodeForm from "../components/AnimeEpisodeForm"

function EditEpisodePage() {
    const data = useRouteLoaderData('episode-details');

    return <>
    <AnimeEpisodeForm episode={data} method="patch"/>
    </>
}

export default EditEpisodePage;