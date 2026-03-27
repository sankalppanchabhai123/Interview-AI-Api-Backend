import { createContext, useEffect, useState } from "react";
import { getUser } from "./services/auth.api";


export const AuthContext = createContext();

export const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const checkauth = async () => {
            try {
                setLoading(true);
                const res = await getUser();
                setUser(res);
            } catch (err) {
                throw err;
            } finally {
                setLoading(false);
            }
        }
        checkauth();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

