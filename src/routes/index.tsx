import {
    createBrowserRouter
} from "react-router-dom";
import { Home } from "../pages/home";
import { User } from "../pages/user";
import { NotFound } from "../pages/NotFound";

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
    },
    {
        path: "*",
        element: (
            <NotFound />
        )
    }
]);