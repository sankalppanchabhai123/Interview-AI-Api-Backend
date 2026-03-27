import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export const UserAuth = ({ children }) => {
    const { user, getuser, loading } = useAuth();
    const [checkingAuth, setCheckingAuth] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await getuser();
            } finally {
                setCheckingAuth(false);
            }
        };

        checkAuth();
    }, []);

    if (loading || checkingAuth) {
        return null;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};