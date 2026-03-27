import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import { UserAuth } from "./features/auth/components/protected";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <UserAuth>
                <h1>Home page</h1>
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