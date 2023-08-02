import {createBrowserRouter, Navigate} from "react-router-dom";
import {CarsPage} from "./pages/CarsPage";
import {UserPage} from "./pages/UserPage";
import {CommentPage} from "./pages/CommentPage";
import {MainLayout} from "./layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'cars'}/>
            },
            {
                path: 'cars',
                element: <CarsPage/>
            },
            {
                path: 'users',
                element: <UserPage/>
            },
            {
                path: 'comments',
                element: <CommentPage/>
            }
        ]
    }
]);

export {router};