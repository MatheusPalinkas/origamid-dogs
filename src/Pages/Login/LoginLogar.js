import React from "react";
import { Link } from "react-router-dom";
import FormLogar from "../../Components/Login/FormLogar";

import useForm from "../../Hooks/useForm";
import { email } from "../../utils/validacao";
import { tokenPost } from "../../Services/token";
import { userGet } from "../../Services/user";

export default function LoginLogar() {
  const username = useForm("", email);
  const password = useForm("");

  function getUser(token) {
    userGet(token).then((res) => {
      console.log(res);
    });
  }

  function handleLogin(e) {
    e.preventDefault();
    tokenPost({
      username: username.value,
      password: password.value,
    }).then((jwt) => {
      window.localStorage.setItem("token", jwt.token);
      getUser(jwt.token);
    });
  }

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) getUser(token);
  }, []);

  return (
    <section>
      <h1>Login</h1>
      <FormLogar
        handleSubmit={handleLogin}
        username={username}
        password={password}
      />
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}
