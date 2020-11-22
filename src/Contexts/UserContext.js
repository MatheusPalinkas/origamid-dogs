import React from "react";
import { useNavigate } from "react-router-dom";

import { tokenPost, tokenPostValidate } from "../Services/token";
import { userGet } from "../Services/user";

export const UserContext = React.createContext();

export function UserStorage({ children }) {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const navigate = useNavigate();

  const validateToken = React.useCallback((token) => {
    setLoading(true);
    tokenPostValidate(token)
      .then((res) => getUser(token))
      .catch((error) => {
        setError("Token inválido");
        userLoagout();
      })
      .finally((fin) => setLoading(false));
  }, []);

  function getUser(token) {
    userGet(token).then((res) => {
      setData(res);
      setLogin(true);
      navigate("/conta");
    });
  }

  function userLogin(username, password) {
    setError(null);
    setLoading(true);
    tokenPost({
      username,
      password,
    })
      .then((jwt) => {
        if (!jwt.token) throw new Error();
        window.localStorage.setItem("token", jwt.token);
        getUser(jwt.token);
      })
      .catch((error) => {
        setError("Usuario invalido");
        setLogin(false);
      })
      .finally(() => setLoading(false));
  }

  function userLoagout() {
    setData(null);
    setLogin(null);
    setError(null);
    setLoading(null);
    window.localStorage.removeItem("token");
    navigate("/login");
  }

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      validateToken(token);
    } else {
      setLogin(false);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ data, error, loading, login, userLoagout, userLogin }}
    >
      {children}
    </UserContext.Provider>
  );
}
