import React, { useState } from "react";
import "./Signup.css";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayname] = useState("");
  //const [thumbnail, setThunbnail] = useState(null);
  //const [thumbmailError, setThumbnailError] = useState(null);
  const { signup, isPending, error } = useSignup()



const handleSubmit = (e) => {
  e.preventDefault()
  signup(email, password, displayName)
}

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2> Sign Up</h2>
      <label>
        <span>Email:</span>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Name:</span>
        <input
          required
          type="text"
          onChange={(e) => setDisplayname(e.target.value)}
          value={displayName}
        />
      </label>
     
      { !isPending && <button className="btn">Signup</button>}
      { isPending && <button className="btn" disabled>Loading</button>}
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
