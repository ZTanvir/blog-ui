import { createContext, useContext, useState } from "react"

const UserContext = createContext(undefined);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(undefined)
    const [token, setToken] = useState(undefined)

    return <UserContext value={{ user, setUser, token, setToken }}>{children}</UserContext>
}

export const UseUser = () => {
    const userContext = useContext(UserContext)
    if (!userContext) {
        throw new Error("user not in useContext ")
    }
    return userContext
}
