import { createBrowserRouter } from "react-router-dom";
import ShowDetailsTotal from "../Home/AllCategories/ShowDetailsTotal";
import MainHomePage from "../Home/MainHomePage/MainHomePage";
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
            }
        ]
    }
])