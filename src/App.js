import { useState } from "react";

export default function App() {
  const state = useState();
  console.log(state);
  const [{ name, email, pwd }, setFormState] = useState({
    name: "",
    email: "",
    pwd: ""
  });

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className="App">
      <input
        placeholder="Name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <br />
      <input
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <br />
      <input
        placeholder="Password"
        name="pwd"
        value={pwd}
        onChange={handleChange}
      />
    </form>
  );
}
