import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
                path: "registration",
                element: <Registration></Registration>
            },
        ]
    },
]);


export default router