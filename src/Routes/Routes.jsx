import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";
import AllToys from "../Pages/Robotics Toy/AllToys/AllToys";
import MyToys from "../Pages/Robotics Toy/MyToys/MyToys";
import MyToyUpdate from "../Pages/Robotics Toy/MyToys/MyToyUpdate";
import AddToys from "../Pages/Robotics Toy/AddToys/AddToys";



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
                path: "registration",
                element: <Registration></Registration>,
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
            {
                path: "update/:id",
                element: <PrivateRoute>
                    <MyToyUpdate></MyToyUpdate>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
            },
        ]
    },
]);


export default router