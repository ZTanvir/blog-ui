import { createContext, useContext, useEffect, useState } from "react";
import authServices from "../services/authServices";
import useSWRMutation from "swr/mutation";
import { setStoredAuthToken } from "../utils/authToken";

const UserContext = createContext(undefined);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [token, setToken] = useState(undefined);
  const { trigger } = useSWRMutation(
    "api/auth/refresh",
    authServices.refreshToken,
  );

  useEffect(() => {
    const loadAuth = async () => {
      try {
        const result = await trigger();
        setUser(result?.user);
        setToken(result?.accessToken);
        setStoredAuthToken(result?.accessToken);
      } catch (error) {
        console.error(
          "Error on sending refresh token post request:",
          error?.response?.data,
        );
      }
    };

    loadAuth();
  }, []);

  useEffect(() => {
    setStoredAuthToken(token);
  }, [token]);

  return (
    <UserContext value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext>
  );
};

export const UseUser = () => {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("user not in useContext ");
  }
  return userContext;
};
