import {
    createBrowserRouter
} from "react-router-dom";
import { Home } from "../pages/home";
import { User } from "../pages/user";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Home />
        ),
    },
    {
        path: "/home",
        element: (
            <Home />
        ),
    },
    {
        path: "/perfil/:name",
        element: (
            <User />
        )
    }
]);