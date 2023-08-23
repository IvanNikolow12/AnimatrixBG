import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import HomePage, { loader as AllAnimeLoader } from './pages/HomePage';
import HomeRoot from './pages/HomeRoot';
import ErrorPage from './pages/ErrorPage';
import NewAnimeCollectionPage from './pages/NewAnimeCollectionPage';
import DetailsPage, { loader as animeDetailsLoader} from './pages/DetailsPage';
import PlayerPage, { loader as PlayerPageLoader} from './pages/PlayerPage';
import { action as AddOrEditNewAnimeAction } from './components/AnimeCollectionForm';
import { action as AddOrEditNewEpisodeAction } from './components/AnimeEpisodeForm';
import NewEpisodePage from './pages/NewEpisodePage';
import EditCollectionPage from './pages/EditColectionPage';
import EditEpisodePage from './pages/EditEpisodePage';
import AddNewsPage from './pages/AddNewsPage';
import { action as AddNewsAction} from './components/AddNewsForm'
import LoginPage, { action as AuthAction } from './pages/LoginPage';
import { emailLoader } from './util/auth';
import { action as LogoutAction } from './pages/Logout';
import { action as AddCommentAction } from './components/AddCommentForm';
import GenresPage from './pages/GenresPage';
// import EpisodePage, {loader as EpisodeDetailsLoader} from './pages/EpisodePage';


const router = createBrowserRouter([
  {
    path: '/',
    id: 'root',
    element: <HomeRoot/>,
    errorElement: <ErrorPage />,
    loader: emailLoader,
    children: [
      {
        path: ':id',
        id: 'anime-details',
        loader: animeDetailsLoader,
        children: [
          
          {
            index: true,
            element: <DetailsPage />,
            action: AddCommentAction,
          },
          {
            path: 'player',
            loader: PlayerPageLoader,
            children: [
              {
                index: true,
                element: <PlayerPage />,
                action: AddCommentAction,
              },
              {
                path: ':id',
                id: 'episode-details',
                element: <EditEpisodePage/>,
                loader: PlayerPageLoader,
                action: AddOrEditNewEpisodeAction,
                children: [
                  {
                    path: 'edit-episode',
                    element: <NewEpisodePage/>,
                  }
                ]
              },
            ]
          },
          {
            path: 'new-episode',
            element: <NewEpisodePage/>,
            action: AddOrEditNewEpisodeAction,
          },
          {
            path: 'edit',
            action: AddOrEditNewEpisodeAction,
            element: <EditCollectionPage/>,
          }
        ]
      },
      {
        index: true,
        element: <HomePage />,
        loader: AllAnimeLoader
      },
      {
        path: 'new-anime',
        element: <NewAnimeCollectionPage/>,
        action: AddOrEditNewAnimeAction
      },
      {
        path: 'add-news',
        id: 'news',
        element: <AddNewsPage />,
        action: AddNewsAction
      },
      {
        path: 'auth',
        element: <LoginPage/>,
        action: AuthAction
      },
      {
        path: 'logout',
        action: LogoutAction
      },
      {
        path: 'genres',
        children: [
          {
            path: ':id',
            element: <GenresPage/>,
          }
        ]
      }
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
