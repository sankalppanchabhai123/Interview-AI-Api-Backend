import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import { UserAuth } from "./features/auth/components/protected";
import Home from "./features/interview/pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <UserAuth>
                <Home />
            </UserAuth>
        )
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
])