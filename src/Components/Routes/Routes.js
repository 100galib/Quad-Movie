import { createBrowserRouter } from "react-router-dom";
import AllMovies from "../AllMovies/AllMovies";
import ShowDetailsTotal from "../Home/AllCategories/ShowDetailsTotal";
import MainHomePage from "../Home/MainHomePage/MainHomePage";
import Registration from "../Registration/Registration";
import Main from "../Shared/Main/Main";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <MainHomePage></MainHomePage>
            },
            {
                path: '/singletotal',
                element: <ShowDetailsTotal></ShowDetailsTotal>
            },
            {
                path: '/allMovies',
                element: <AllMovies></AllMovies>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
            
        ]
    }
])