import { useRouteLoaderData } from "react-router-dom";
import AnimeCollectionForm from "../components/AnimeCollectionForm";

function EditCollectionPage() {
    const data = useRouteLoaderData('anime-details')
    return <>
        <AnimeCollectionForm method='patch' anime={data} />
    </>
}

export default EditCollectionPage;