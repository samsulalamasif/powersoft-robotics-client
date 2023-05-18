import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToys from "../Pages/AddToys/AddToys";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "blog",
                element: <PrivateRoute>
                    <Blog></Blog>
                </PrivateRoute>
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "toys",
                element: <AllToys></AllToys>
            },
            {
                path: "myToys",
                element: <PrivateRoute>
                    <MyToys></MyToys>
                </PrivateRoute>
            },
            {
                path: "addToys",
                element: <PrivateRoute>
                    <AddToys></AddToys>
                </PrivateRoute>
            },
        ]
    },
]);


export default router