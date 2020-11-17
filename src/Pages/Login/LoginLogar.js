import React from "react";
import { Link } from "react-router-dom";
import FormLogar from "../../Components/Login/FormLogar";

export default function LoginLogar() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleLogin(e) {
    e.preventDefault();
    fetch(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((res) => {
      console.log(res);
      return res.json();
    });
  }

  return (
    <section>
      <h1>Login</h1>
      <FormLogar handleSubmit={handleLogin} />
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}
