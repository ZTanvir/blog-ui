import { createContext, useContext, useState } from "react"

// eslint-disable-next-line no-unused-vars
const userContext = createContext(undefined);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(undefined)
    const [token, setToken] = useState(undefined)
    return <userContext value={{ user, setUser, token, setToken }}>{children}</userContext>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
    const userContext = useContext(userContext)
    if (!useContext) {
        throw new Error("user not in useContext ")
    }
    return useContext
}
