import React from "react";
import "./login.css"

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    setPassword("");
    setEmail("");
  };

  return (
    <div className="input-form">
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Enter email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="password"
        name="password"
        value={password}
        placeholder="Enter password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default LoginForm;
